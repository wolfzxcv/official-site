import { Locales } from '@/i18n/config';
import { WCGKJ_BG_RED } from '@/pages/activity/WCGKJ';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGKJ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGKJ" locale={currentLang}>
      <Flex
        minH={{ base: '600px', md: '500px' }}
        bg={WCGKJ_BG_RED}
        bgImage={{
          base: '/../assets/images/activity_WCGKJ_M.jpg',
          md: '/../assets/images/activity_WCGKJ_banner.jpg'
        }}
        bgPosition="top center"
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Flex>
    </NextLink>
  );
};

export default WCGKJ;
