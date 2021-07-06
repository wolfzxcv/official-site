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
import { locales, Locales, localesOptions } from '../../i18n/locales';

const LangSelector: React.FC<{}> = () => {
  useEffect(() => {
    getCurrentLanguage();
  }, []);
  const [language, setLanguage] = useState(i18n?.languages[0]);

  const router = useRouter();

  const getCurrentLanguage = () => {
    const langInLocalStorage = localStorage.getItem('language');

    if (langInLocalStorage) {
      handleSetLanguage(langInLocalStorage as Locales);
    } else {
      // to save locale in localStorage
      localStorage.setItem('language', i18n?.languages[0] as Locales);
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
      <MenuButton minW="100px" as={Button} rightIcon={<ChevronDownIcon />}>
        <Image src={`../assets/images/${language}.png`} alt={language}></Image>
      </MenuButton>
      <MenuList minW="0" w={{ base: '100px', md: '150px' }}>
        {locales.map((locale: Locales) => (
          <MenuItem key={locale} onClick={() => handleLanguageChange(locale)}>
            <Image src={`../assets/images/${locale}.png`} alt={locale}></Image>
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
