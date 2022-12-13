export const formatLang = (lang, escapeLang = undefined) => {
  const defaultLang = 'en';

  let output;

  switch (lang) {
    case 'cn':
      output = 'zh-CN';
      break;
    case 'zh':
      output = 'zh-TW';
      break;
    case 'vi':
      output = 'vi-VN';
      break;
    case 'id':
      output = 'id';
      break;
    case 'ms':
      output = 'ms-MY';
      break;
    case 'th':
      output = 'th';
      break;
    case 'ar':
      output = 'ar';
      break;
    default:
      output = 'en';
  }

  if (typeof escapeLang === 'string' && lang === escapeLang) {
    output = defaultLang;
  } else if (Array.isArray(escapeLang) && escapeLang.includes(lang)) {
    output = defaultLang;
  }

  return output;
};
