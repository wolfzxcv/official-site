const des = 'locales';
const src = 'localests';
const outputFormat = '.json';
const desPath = `./${des}`;
const srcPath = `./${src}`;
const npmScript = 'locales';

const {
  promises: fs,
  readdirSync,
  rename,
  readFile,
  writeFile
} = require('fs-extra');

const { exec } = require('child_process');

/* eslint-disable */
(async () => {
  // Remove old folder if exist
  await fs.rmdir(desPath, { recursive: true }, (err) => {
    if (err) return console.error(err);
  });
  console.log(`1. Remove ${des} folder if exist`);

  // Copy folder exclude '@types'
  await copyDir(srcPath, desPath, '@types');
  console.log(`2. Copy folder`);

  let filenames = readdirSync(desPath);

  for (const file of filenames) {
    const path = `${desPath}/${file}`;
    let jsonFiles = readdirSync(path);

    for (const jsonFile of jsonFiles) {
      const jsonFilePath = `${path}/${jsonFile}`;
      // Read file
      readFile(jsonFilePath, (err, fileBuffer) => {
        if (err) {
          console.error(err.message);
        }

        const fileContent = fileBuffer.toString();

        const contentWeWant = fileContent.match(/(?<= = {)(.*)[^}]*/);

        const outputContent = `{${contentWeWant[0]}}`;

        if (contentWeWant[0]) {
          // Rewrite the file with content we want
          writeFile(jsonFilePath, outputContent, (err) => {
            if (err) {
              return console.log(err);
            } else {
              const oldPath = jsonFilePath;
              const newPath = jsonFilePath.replace(/\.[^.]+$/, outputFormat);

              // Rename file from whatever to "outputFormat"
              rename(oldPath, newPath, (err) => {
                if (err) {
                  return console.log(err);
                }
              });
            }
          });
        }
      });
    }
  }
  console.log('3. Rewrite/Rename file from whatever to .json');

  exec(`npm run ${npmScript}`);
  console.log('4. Format json');
})();

const path = require('path');

const copyDir = async (src, dest, escapeFolder = undefined) => {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (!entry.name.includes(escapeFolder)) {
      entry.isDirectory()
        ? await copyDir(srcPath, destPath)
        : await fs.copyFile(srcPath, destPath);
    }
  }
};
