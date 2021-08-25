import { Flex } from '@chakra-ui/react';
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
