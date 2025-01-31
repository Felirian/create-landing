#!/usr/bin/env node

const {execSync} = require("child_process");
//const fs = require("fs");
const path = require("path");
const crateFileStructure = require("./functions/setFiles");
const setPrettier = require("./functions/setPrettier");

const projectPath = process.argv[2] || 'landing-page';

console.log(`⚙ Start creating a new landing ${path.resolve(projectPath)}...`);

crateFileStructure(projectPath);
console.time()

// execSync(`npx create-react-app ${projectPath}`, { stdio: 'inherit' });

//process.chdir(projectPath);

// console.log("📦 Устанавливаю зависимости...");
// execSync("npm install", { stdio: "inherit" });
// execSync("npm install styled-components react-router-dom @emailjs/browser axios", {
//   stdio: "inherit",
// });
// execSync("npm install --save-dev prettier", { stdio: "inherit" });

setPrettier();

console.log("✅  The project has been successfully created.");
