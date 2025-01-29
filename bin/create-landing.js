#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectPath = process.argv[2] || 'landing-page';

console.log(`⚙ Creating a new landing ${path.resolve(projectPath)}...`);
// execSync(`npx create-react-app ${projectPath}`, { stdio: 'inherit' });

process.chdir(projectPath);

console.log("📦 Устанавливаю зависимости...");
execSync("npm install", { stdio: "inherit" });
execSync("npm install styled-components react-router-dom @emailjs/browser axios", {
  stdio: "inherit",
});
execSync("npm install --save-dev prettier", { stdio: "inherit" });

console.log("🎨 Настраиваю Prettier...");
fs.mkdirSync(projectPath + ".prettierrc", { recursive: true });
fs.writeFileSync(
  path.join(projectPath, ".prettierrc"),
  JSON.stringify(
    {
      semi: true,
      singleQuote: true,
      trailingComma: "all",
    },
    null,
    2
  )
);

console.log("✅ Проект успешно создан! Запустите:");
console.log(`
  cd ${projectPath}
  npm run dev
`);