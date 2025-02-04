const {execSync} = require("child_process");
const path = require('path');
const fs = require('fs');

const setDependencies = () => {
  console.log("📦 Installing dependencies...");
  execSync("npm install", {stdio: "inherit"});
  execSync("npm install styled-components react-router-dom @emailjs/browser axios", {
    stdio: "inherit",
  });
  execSync("npm install --save-dev husky lint-staged prettier", {stdio: "inherit"});

  const packageJsonPath = path.join('package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

  packageJson['lint-staged'] = {
    '**/*.{js,jsx,ts,tsx,json,css,scss,md}': ['prettier --write']
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // execSync('npx husky init', {stdio: 'inherit'});
  const huskyDir = path.join('.husky');
  fs.mkdirSync(huskyDir, { recursive: true });
  const preCommitHook = path.join('.husky', 'pre-commit');
  if (!fs.existsSync(preCommitHook)) {
    console.log('gg')
    fs.writeFileSync(preCommitHook,
      `#!/bin/sh
FILES=$(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\\\ |g')
[ -z "$FILES" ] && exit 0

# Prettify all selected files
echo "$FILES" | xargs ./node_modules/.bin/prettier --ignore-unknown --write

# Add back the modified/prettified files to staging
echo "$FILES" | xargs git add

exit 0
`,
      'utf-8'
    );
  } else {
    console.log('ff')
  }

  console.log('✅  Husky & lint-staged was done');
}

module.exports = setDependencies;