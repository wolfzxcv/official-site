/** These 3 lines are used to show up an array with all folder names in "src\i18n\locales" folder */
const fs = require('fs');

const localesName = [...fs.readdirSync('./locales')];

console.log(localesName);
