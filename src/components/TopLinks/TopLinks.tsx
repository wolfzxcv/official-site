import { openChatWindow } from '@/utils';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import LinkButton from './LinkButton';

const TopLinks: React.FC<{}> = () => {
  const { t } = useTranslation('common');

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
        href={process.env.NEXT_PUBLIC_REGISTER_REAL}
        inMobile
        borderColor="#b81c22"
      ></LinkButton>

      <LinkButton
        text={t('openDemoAccount')}
        onClick={openChatWindow}
        inMobile
        borderColor="green"
      ></LinkButton>

      <LinkButton
        text={t('usersCenter')}
        href={process.env.NEXT_PUBLIC_USERS_CENTER}
      ></LinkButton>

      <LinkButton
        text={t('iBCenter')}
        href={process.env.NEXT_PUBLIC_IB_CENTER}
      ></LinkButton>
    </Flex>
  );
};

export default TopLinks;
