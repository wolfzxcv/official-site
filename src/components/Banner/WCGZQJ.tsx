import { Locales } from '@/i18n/config';
import { WCGZQJ_BG_BROWN } from '@/pages/activity/WCGZQJ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGZQJ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGZQJ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGZQJ_BG_BROWN}
        bgImage={{
          base: '/../assets/images/activity_WCGZQJ_M.jpg',
          md: '/../assets/images/activity_WCGZQJ_banner.jpg'
        }}
        bgPosition={{ base: 'center center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default WCGZQJ;
