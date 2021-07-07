import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Flex,
  Icon,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { ILinkSource, menuList } from './menuList';

const DesktopNav = () => {
  const { t } = useTranslation(['header']);

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
                  <Link
                    p={2}
                    href={each.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'underline',
                      color: linkHoverColor,
                      bgColor: 'blue.50'
                    }}
                  >
                    {t(each.i18n)}
                  </Link>
                ) : (
                  <Text
                    p={2}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'underline',
                      color: linkHoverColor,
                      cursor: 'pointer',
                      bgColor: 'blue.50'
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

const DesktopSubNav: React.FC<ILinkSource> = ({ i18n, href }: ILinkSource) => {
  const { t } = useTranslation(['header']);

  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.400' }}
            fontWeight={500}
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
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default DesktopNav;
