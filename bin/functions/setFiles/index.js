const fs = require('fs');
const path = require('path');

const createPathStructure = () => {
  const templateDir = path.join(__dirname, 'templates');
  const targetDir = path.join('src');

  fs.rmSync(targetDir, {recursive: true})
  fs.mkdirSync(targetDir, {recursive: true})

  copyFolderRecursive(templateDir, targetDir);
  console.log('✅  Structure created');
};

module.exports = createPathStructure;

const copyFolderRecursive = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, {recursive: true});
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