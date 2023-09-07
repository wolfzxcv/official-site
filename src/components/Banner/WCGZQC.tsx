import { Locales } from '@/i18n/config';
import { WCGZQC_BG } from '@/pages/activity/WCGZQC';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGZQC: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGZQC" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGZQC_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGZQC_M.jpg',
          md: '/../assets/images/activity_WCGZQC_banner.jpg'
        }}
        bgPosition={{ base: 'center', md: 'center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default WCGZQC;
