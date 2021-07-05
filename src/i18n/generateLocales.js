const des = 'locales';
const src = 'localests';
const npmScript = 'locales';

const desPath = `./${des}`;
const srcPath = `./${src}`;

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

  // Create folder
  await fs.mkdir(desPath);
  console.log(`2. Create ${des} folder`);

  // Copy folder
  await copyDir(srcPath, desPath);
  console.log(`3. Copy folder`);

  // Remove @types folder
  await fs.rmdir(`${desPath}/@types`, { recursive: true }, (err) => {
    if (err) return console.error(err);
  });
  console.log(`4. Remove @types folder if exist`);

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

        const fileContent = fileBuffer.toString().replace(/\s/g, '');

        const contentWeWant = fileContent.match(/=(\{.*\:.*\})/);
        const replaceStarWithSpace = contentWeWant[1]?.replace(/\*/g, ' ');

        if (replaceStarWithSpace) {
          // Rewrite the file with content we want
          writeFile(jsonFilePath, replaceStarWithSpace, (err) => {
            if (err) {
              return console.log(err);
            } else {
              const oldPath = jsonFilePath;
              const newPath = jsonFilePath.replace(/\.[^.]+$/, '.json');

              // Rename file from whatever to .json
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
  console.log('5. Rewrite/Rename file from whatever to .json');

  exec(`npm run ${npmScript}`);
  console.log('6. Format json');
})();

const path = require('path');

const copyDir = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    entry.isDirectory()
      ? await copyDir(srcPath, destPath)
      : await fs.copyFile(srcPath, destPath);
  }
};
