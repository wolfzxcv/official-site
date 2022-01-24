import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import { i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { locales, Locales, localesOptions } from '../../i18n/config';
import { isUsingMobile } from '../../utils';

const LangSelector: React.FC<{}> = () => {
  useEffect(() => {
    getCurrentLanguage();
  }, []);

  const [language, setLanguage] = useState(i18n?.languages[0]);

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const getCurrentLanguage = () => {
    const langInLocalStorage = localStorage.getItem('language') as Locales;

    if (
      langInLocalStorage &&
      locales.includes(langInLocalStorage) &&
      langInLocalStorage !== currentLang
    ) {
      handleSetLanguage(langInLocalStorage);
    } else {
      let lang = i18n?.languages[0] as Locales;
      // Check browser language manually
      const isCN =
        (window as any)?.navigator.languages.includes('zh-CN') ||
        (window as any)?.navigator.languages.includes('zh-cn') ||
        null;

      if (isCN) {
        lang = 'cn';
      } else if (isUsingMobile()) {
        // If it's a mobile, use substr(0, 2) to get lang ISO code, if it matches any of our app locales, set it as language
        const matchLang = navigator.languages
          .find((x) => x.substr(0, 2) === navigator.language.substr(0, 2))
          .substr(0, 2) as Locales;
        if (i18n?.languages.includes(matchLang)) {
          lang = matchLang;
        }
      }

      // to save locale in localStorage
      localStorage.setItem('language', lang);
    }
  };

  const handleLanguageChange = (locale: Locales) => {
    handleSetLanguage(locale);
  };

  const handleSetLanguage = (locale: Locales) => {
    // to show option in select
    setLanguage(locale);
    // to change router locale

    router.push(router.asPath, router.asPath, { locale: locale });
    // to save locale in localStorage
    localStorage.setItem('language', locale);
  };

  return (
    <Menu>
      <MenuButton minW="90px" as={Button} rightIcon={<ChevronDownIcon />}>
        <Image src={`../assets/images/${language}.png`} alt={language}></Image>
      </MenuButton>
      <MenuList minW={{ base: '90px', md: '150px' }} zIndex={3}>
        {locales.map((locale: Locales) => (
          <MenuItem
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            _hover={{
              bgColor: '#CBD5E0'
            }}
          >
            <Image
              border="1px"
              src={`../assets/images/${locale}.png`}
              alt={locale}
            ></Image>
            <Text ml={4} display={{ base: 'none', md: 'block' }}>
              {localesOptions.find((x) => x.code === locale)?.value || locale}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LangSelector;
