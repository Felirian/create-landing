#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Название директории для нового проекта
const projectName = process.argv[2] || 'my-landing-page';

// Создаем новый проект с помощью create-react-app
console.log(`Creating a new React app in ${path.resolve(projectName)}...`);
execSync(`npx create-react-app ${projectName}`, { stdio: 'inherit' });

// Переходим в директорию проекта
process.chdir(projectName);

// Устанавливаем необходимые библиотеки
console.log('Installing additional libraries...');
execSync('npm install axios styled-components', { stdio: 'inherit' });

// Создаем дополнительные файлы
const additionalFiles = [
  {
    filename: 'src/components/Header.js',
    content: `import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <HeaderWrapper>
    <h1>Welcome to My Landing Page</h1>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header\`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
\`;

export default Header;`
  },
  {
    filename: 'src/components/Footer.js',
    content: `import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <p>&copy; 2023 My Landing Page. All rights reserved.</p>
  </FooterWrapper>
);

const FooterWrapper = styled.footer\`
  background: #282c34;
  padding: 10px;
  color: white;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
\`;


export default Footer;`
  },
  {
    filename: 'src/App.js',
    content: `import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>About Us</h2>
        <p>This is an example landing page created with React.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;`
  }
];

// Создаем директории и файлы
additionalFiles.forEach(file => {
  const dir = path.dirname(file.filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(file.filename, file.content, 'utf8');
});

console.log('Project setup complete!');