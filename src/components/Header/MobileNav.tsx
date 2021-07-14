import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';
import LinkButton from '../TopLinks/LinkButton';
import { IMenuItem, menuList } from './menuList';

const MobileNav = () => {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ lg: 'none' }}
      >
        {menuList.map((navItem) => (
          <MobileNavItem key={navItem.i18n} {...navItem} />
        ))}
      </Stack>
      <Flex
        display={{ base: 'flex', md: 'none' }}
        bgColor="gray.700"
        minH="40px"
        justify="center"
        color="white"
        pt={3}
      >
        <LinkButton
          text={t('usersCenter')}
          href="https://trader.wc012.com/login"
          inMobile
        ></LinkButton>

        <LinkButton
          text={t('iBCenter')}
          href="https://broker.wc012.com/"
          inMobile
        ></LinkButton>
      </Flex>
    </>
  );
};

const MobileNavItem = ({ i18n, href, children }: IMenuItem) => {
  const { t } = useTranslation(['header']);
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {t(`header:${i18n}`)}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <NextLink key={child.href} href={child.href} locale={currentLang}>
                <Link
                  width="100%"
                  py={2}
                  bgColor={
                    router.pathname === child.href ? 'red.50' : 'inherit'
                  }
                  fontWeight={router.pathname === child.href ? 700 : 500}
                  color={router.pathname === child.href ? 'red.800' : 'inherit'}
                >
                  {t(`header:${child.i18n}`)}
                </Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default MobileNav;
