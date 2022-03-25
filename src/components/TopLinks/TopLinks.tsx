import { links } from '@/assets/links';
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
        href={links.registerReal}
        inMobile
        borderColor="#b81c22"
      ></LinkButton>

      <LinkButton
        text={t('openDemoAccount')}
        onClick={openChatWindow}
        inMobile
        borderColor="green"
      ></LinkButton>

      <LinkButton text={t('usersCenter')} href={links.usersCenter}></LinkButton>

      <LinkButton text={t('iBCenter')} href={links.iBCenter}></LinkButton>
    </Flex>
  );
};

export default TopLinks;
