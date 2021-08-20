/** Files to modify locales
 *  next-i18next.config.js
 *  locales.ts
 *  */

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['cn', 'ar', 'en', 'ms', 'in', 'vi', 'zh'],
    localePath: './src/i18n/locales'
  },
  react: {
    useSuspense: false
  }
};
