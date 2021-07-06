import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Select, Stack, useDisclosure } from '@chakra-ui/react';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Locales, locales, localesOptions } from '../../i18n/locales';
import Logo from './Logo';
import MenuItem from './MenuItem';
import { IMenuItem, menuList } from './menuList';

const Header: React.FC<{}> = () => {
  useEffect(() => {
    getCurrentLanguage();
  }, []);

  const [language, setLanguage] = useState(i18n?.languages[0]);

  const router = useRouter();

  const { t } = useTranslation(['header']);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => {
    isOpen ? onClose() : onOpen();
  };

  const getCurrentLanguage = () => {
    const langInLocalStorage = localStorage.getItem('language');

    if (langInLocalStorage) {
      handleSetLanguage(langInLocalStorage as Locales);
    } else {
      // to save locale in localStorage
      localStorage.setItem('language', i18n?.languages[0] as Locales);
    }
  };

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const locale = event.target.value as Locales;
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
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="gray.500"
      color="red.800"
    >
      <Flex align="center" mr={5}>
        <Logo />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon _hover={{ cursor: 'pointer' }} />
      </Box>

      <Stack
        color="gray.100"
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        spacing={10}
      >
        {menuList.map((each: IMenuItem) => (
          <MenuItem
            key={each.menu.src}
            href={each.menu.src}
            text={t(`header:${each.menu.i18n}`)}
          />
        ))}
      </Stack>

      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      >
        <Flex>
          <Select
            _hover={{
              bg: 'gray.600',
              color: 'white',
              borderColor: 'gray.200',
              cursor: 'pointer'
            }}
            bg="gray.500"
            onChange={handleLanguageChange}
            value={language}
          >
            {locales.map((locale: string) => (
              <option
                style={{ background: '#718096', color: 'white' }}
                value={locale}
                key={locale}
              >
                {localesOptions.find((x) => x.code === locale)?.value || locale}
              </option>
            ))}
          </Select>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
