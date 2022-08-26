import { Locales } from '@/i18n/config';
import { WCGCZ_BG_BLACK } from '@/pages/activity/WCGCZ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGCZ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGCZ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGCZ_BG_BLACK}
        bgImage={{
          base: '../assets/images/activity_WCGCZ_M.jpg',
          md: '../assets/images/activity_WCGCZ_banner.jpg'
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

export default WCGCZ;
