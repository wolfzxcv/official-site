const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['cn', 'ar', 'en', 'ms', 'id', 'th', 'vi', 'zh']
  },
  localePath: path.resolve('./src/i18n/locales'),
  react: {
    useSuspense: false
  }
};
