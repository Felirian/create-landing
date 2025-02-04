const {execSync} = require("child_process");
const path = require('path');
const fs = require('fs');

const setVite = (projectPath) => {
  console.log(`⚙ Start creating a new landing ${path.resolve(projectPath)}...`);

  execSync(`npm create vite@latest ${projectPath} -- --template react`, { stdio: 'inherit' });

  process.chdir(projectPath);
}

module.exports = setVite;