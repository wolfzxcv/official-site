import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import LinkButton from './LinkButton';

const TopLinks: React.FC<{}> = () => {
  const { t } = useTranslation(['common']);

  return (
    <Flex
      position="sticky"
      top="0"
      bgColor="gray.700"
      height="50px"
      alignItems="center"
      justify="center"
      color="white"
    >
      <LinkButton
        text={t('openRealAccount')}
        href="https://trader.wc012.com/register"
        inMobile
      ></LinkButton>

      <LinkButton
        text={t('openDemoAccount')}
        href="https://trader.wc012.com/registerMock"
        inMobile
      ></LinkButton>

      <LinkButton
        text={t('usersCenter')}
        href="https://trader.wc012.com/login"
      ></LinkButton>

      <LinkButton
        text={t('iBCenter')}
        href="https://broker.wc012.com/"
      ></LinkButton>
    </Flex>
  );
};

export default TopLinks;
