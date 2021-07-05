export type Locales = 'en' | 'nb-NO' | 'zh-TW';

interface localesOptions {
  code: Locales;
  value: string;
}

export const locales: Locales[] = ['en', 'nb-NO', 'zh-TW'];

export const localesOptions: localesOptions[] = [
  { code: 'en', value: 'English' },
  { code: 'nb-NO', value: 'norsk(bokmål)' },
  { code: 'zh-TW', value: '中文' }
];

// const fs = require('fs');

// const localesName = [...fs.readdirSync('./locales')];

// console.log(localesName);
