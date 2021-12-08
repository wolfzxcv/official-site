import {
  Center,
  Flex,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import LinkButton from './LinkButton';

const TopLinks: React.FC<{}> = () => {
  const { t } = useTranslation(['common']);

  return (
    <Flex
      bgColor="gray.700"
      minH="70px"
      alignItems="center"
      justify="center"
      color="white"
      py={1}
    >
      <LinkButton
        text={t('openRealAccount')}
        href="https://trader.wc012.com/register"
        inMobile
        borderColor="#b81c22"
      ></LinkButton>

      <LinkButton
        text={t('openDemoAccount')}
        href="https://trader.wc012.com/registerMock"
        inMobile
        borderColor="green"
      ></LinkButton>

      <Popover trigger={'hover'} placement={'bottom-start'}>
        <PopoverTrigger>
          <Center>
            <LinkButton text={t('usersCenter')}></LinkButton>
          </Center>
        </PopoverTrigger>

        <PopoverContent border={0} bg="gray.700" px={0} py={3} width="auto">
          <Stack spacing={3}>
            <LinkButton text={t('usersCenterNew')}></LinkButton>
            <LinkButton
              text={t('usersCenterOld')}
              href="https://trader.wc012.com/login"
            ></LinkButton>
          </Stack>
        </PopoverContent>
      </Popover>

      <LinkButton
        text={t('iBCenter')}
        href="https://broker.wc012.com/"
      ></LinkButton>
    </Flex>
  );
};

export default TopLinks;
