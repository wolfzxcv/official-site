/** Files to modify locales
 *  next-i18next.config.json
 *  */

/** Please use ISO codes to name locales as possible
 * https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 *  */

export type Locales = 'cn' | 'ar' | 'en' | 'ms' | 'id' | 'vi' | 'zh';

export const locales: Locales[] = ['cn', 'ar', 'en', 'ms', 'id', 'vi', 'zh'];

interface localesOptions {
  code: Locales;
  value: string;
}

export const localesOptions: localesOptions[] = [
  { code: 'cn', value: '简体' },
  { code: 'ar', value: 'بالعربية' },
  { code: 'en', value: 'English' },
  { code: 'ms', value: 'Malay' },
  { code: 'id', value: 'Indonesia' },
  { code: 'vi', value: 'Việt Nam' },
  { code: 'zh', value: '繁體' }
];
