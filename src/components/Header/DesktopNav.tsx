import { ILinkSource, menuList } from '@/assets/menuList';
import { TRANSITION } from '@/assets/styleConfig';
import { Locales } from '@/i18n/config';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const DesktopNav = () => {
  const { t } = useTranslation('header');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {menuList.map((each) => (
        <Box key={each.i18n}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Center>
                {each.href ? (
                  <NextLink
                    passHref={true}
                    href={each.href ?? '#'}
                    locale={currentLang}
                  >
                    <Link
                      p={1}
                      fontSize={'md'}
                      fontWeight={600}
                      color={linkColor}
                      _hover={{
                        textDecoration: 'underline',
                        color: linkHoverColor,
                        bgColor: 'gray.100'
                      }}
                    >
                      {t(each.i18n)}
                    </Link>
                  </NextLink>
                ) : (
                  <Text
                    p={1}
                    fontSize={'md'}
                    fontWeight={600}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'underline',
                      color: linkHoverColor,
                      cursor: 'pointer',
                      bgColor: 'gray.100'
                    }}
                  >
                    {t(each.i18n)}
                  </Text>
                )}
              </Center>
            </PopoverTrigger>

            {each.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={2}
                rounded={'xl'}
              >
                <Stack>
                  {each.children.map((child) => (
                    <DesktopSubNav key={child.href} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav: React.FC<ILinkSource> = ({
  i18n,
  href,
  isExternal = false
}: ILinkSource) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  return isExternal ? (
    <DesktopSubNavBase i18n={i18n} href={href} isExternal={isExternal} />
  ) : (
    <NextLink passHref={true} href={href} locale={currentLang}>
      <DesktopSubNavBase i18n={i18n} href={href} />
    </NextLink>
  );
};

const DesktopSubNavBase = forwardRef<HTMLAnchorElement, ILinkSource>(
  ({ i18n, href, isExternal = false, ...rest }: ILinkSource, ref) => {
    const { t } = useTranslation('header');
    const router = useRouter();
    const currentLang = router.locale as Locales;

    return (
      <Link
        ref={ref}
        {...rest}
        href={isExternal ? href : ''}
        isExternal={isExternal}
        role={'group'}
        display={
          currentLang === 'cn' && i18n === 'cryptocurrencies' ? 'none' : 'block'
        }
        p={2}
        rounded={'md'}
        bgColor={router.pathname === href ? 'red.50' : 'inherit'}
        _hover={{ bg: useColorModeValue('#b81c22', 'gray.900') }}
      >
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={TRANSITION}
              _groupHover={{ color: 'white' }}
              fontWeight={router.pathname === href ? 700 : 500}
              color={router.pathname === href ? 'red.800' : 'inherit'}
            >
              {t(i18n)}
            </Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}
          >
            <Icon color={'white'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  }
);

DesktopSubNavBase.displayName = 'DesktopSubNavBase';

export default DesktopNav;
