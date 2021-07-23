/** These 3 lines are used when editing sentences, will replace all the "white space" with "*" in str string */
const regex = / /gi;

var str = '';

str.replace(regex, '*');

/** These 3 lines are used to show up an array with all folder names in "src\i18n\locales" folder */
const fs = require('fs');

const localesName = [...fs.readdirSync('./locales')];

console.log(localesName);
