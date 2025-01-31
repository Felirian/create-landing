const fs = require('fs');
const path = require('path');

const cratePathStructure = (projectDir) => {
  const templateDir = path.join(__dirname, 'templates', 'styles');
  const targetDir = path.join(projectDir, 'src', 'styles');

  copyFolderRecursive(templateDir, targetDir);
  console.log('✅  Header.js created in src/components/');
};

module.exports = cratePathStructure;

const copyFolderRecursive = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);

  for (const file of files) {
    const srcPath = path.join(source, file);
    const destPath = path.join(target, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolderRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}