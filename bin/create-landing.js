#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const {additionalFiles} = require("./additionalFiles");

// Название директории для нового проекта
const projectName = process.argv[2] || 'landing-page';

// Создаем новый проект с помощью create-react-app
console.log(`💫 Creating a new React app in ${path.resolve(projectName)}...`);
execSync(`npx cre     ate-react-app ${projectName}`, { stdio: 'inherit' });

// Переходим в директорию проекта
console.log(`💩 We remove all garbage`);
process.chdir(projectName);

// Удаление файлов
const filesToDelete = [
  'src/App.test.js',
  'src/setupTests.js',
  'src/reportWebVitals.js',

  'src/App.js',
  'src/App.css',

  'src/index.js',
  'src/index.css',

  'src/logo.svg'
];

// Удаляем файлы из массива
filesToDelete.forEach(file => {
  const filePath = path.join(file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed ${file}`);
  }
});

// Устанавливаем необходимые библиотеки
console.log('📚 Installing libraries...');
execSync('npm install axios styled-components react-router-dom', { stdio: 'inherit' });
execSync('npm install --save @emailjs/browser', { stdio: 'inherit' });


// Создаем директории и файлы
additionalFiles.forEach(file => {
  const dir = path.dirname(file.filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(file.filename, file.content, 'utf8');
});

console.log('✨✨✨Project setup complete!✨✨✨');