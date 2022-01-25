import IResources from './src/i18n/localests/@types';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // eslint-disable-next-line
  type CustomTypeOptions = {
    defaultNS: 'en';
    resources: IResources;
  };
}
