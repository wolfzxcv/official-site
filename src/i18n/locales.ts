/** Files to modify locales
 *  next-i18next.config.js
 *  locales.ts
 *  */

export type Locales = 'cn' | 'sa' | 'en' | 'my' | 'id' | 'vn' | 'hk';

interface localesOptions {
  code: Locales;
  value: string;
}

// export const locales: Locales[] = ['cn', 'sa', 'en', 'my', 'id', 'vn', 'hk'];
export const locales: Locales[] = ['cn', 'en', 'hk'];

export const localesOptions: localesOptions[] = [
  { code: 'cn', value: '简体' },
  // { code: 'sa', value: 'بالعربية' },
  { code: 'en', value: 'English' },
  // { code: 'my', value: 'Malay' },
  // { code: 'id', value: 'Indonesia' },
  // { code: 'vn', value: 'Việt Nam' },
  { code: 'hk', value: '繁體' }
];

// const fs = require('fs');

// const localesName = [...fs.readdirSync('./locales')];

// console.log(localesName);
