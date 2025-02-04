#!/usr/bin/env node

const {execSync} = require("child_process");
const path = require("path");
const createFileStructure = require("./functions/setFiles");
const setPrettier = require("./functions/setPrettier");
const setDependencies = require("./functions/setDependencies");
const setVite = require("./functions/setVite");

const projectPath = process.argv[2] || 'landing-page';

setVite(projectPath);
createFileStructure();
setDependencies();
setPrettier();

console.log("✅  The project has been successfully created.");
