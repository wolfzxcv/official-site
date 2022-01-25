import { SSRConfig, UserConfig } from 'next-i18next';
import nextI18nextConfig from '../../next-i18next.config.js';
import { Locales } from './index';
import IResources from './localests/@types';

const fallbackLng = nextI18nextConfig.i18n.defaultLocale as Locales;

const defaultNS: keyof IResources = 'common';

const TARGET_PATH = './locales';

const getTranslations = async (
  locales: Locales[],
  modules: (keyof IResources)[]
) => {
  const resources = {};

  for (const locale of locales) {
    for (const module of modules) {
      const moduleContent: Record<string, string> = await import(
        `${TARGET_PATH}/${locale}/${module}`
      )[module];
      resources[locale]
        ? (resources[locale][module] = moduleContent)
        : (resources[locale] = { [module]: moduleContent });
    }
  }

  return resources;
};

export const serverSideTranslations = async (
  initialLocale: Locales,
  namespacesRequired: (keyof IResources)[] = [],
  configOverride: UserConfig | null = null
): Promise<SSRConfig> => {
  if (typeof initialLocale !== 'string') {
    throw new Error('Invalid locale');
  }

  if (!Array.isArray(namespacesRequired)) {
    throw new Error('Invalid namespaces');
  }

  let userConfig = configOverride;

  if (!userConfig) {
    userConfig = nextI18nextConfig;
  }

  if (userConfig === null) {
    throw new Error('next-i18next was unable to find a user config');
  }

  const requestLocales =
    initialLocale === fallbackLng
      ? [fallbackLng]
      : [initialLocale, fallbackLng];

  const requestModules = Array.from(
    new Set([...namespacesRequired, defaultNS])
  );

  const config = {
    ...userConfig,
    lng: initialLocale,
    fallbackLng,
    defaultNS,
    interpolation: {
      escapeValue: false
    }
  };

  const initialI18nStore = await getTranslations(
    requestLocales,
    requestModules
  );

  console.log('initialI18nStore', initialI18nStore);

  return {
    _nextI18Next: {
      initialI18nStore,
      initialLocale,
      userConfig: config
    }
  };
};
