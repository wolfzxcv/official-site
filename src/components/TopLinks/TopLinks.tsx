import { links } from '@/assets/links';
import { Locales } from '@/i18n/config';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import LinkButton from './LinkButton';

const TopLinks: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  let customerService = links.liveChat;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';

  if (currentLang === 'vi') {
    customerService = links.liveChatVi;
  } else if (currentLang === 'id') {
    customerService = links.liveChatId;
  } else if (isChinese) {
    customerService = links.majkf;
  }

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
        href={links.registerDemo}
        inMobile
        borderColor="green"
      ></LinkButton>

      <LinkButton text={t('usersCenter')} href={links.usersCenter}></LinkButton>

      <LinkButton
        text={t('CustomerService')}
        href={customerService}
      ></LinkButton>
    </Flex>
  );
};

export default TopLinks;
