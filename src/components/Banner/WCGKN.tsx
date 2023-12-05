import { Locales } from '@/i18n/config';
import { WCGKN_BG, WCGKN_BG_M } from '@/pages/activity/WCGKN';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGKN: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGKN" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={{ base: WCGKN_BG_M, md: WCGKN_BG }}
        bgImage={{
          base: '/../assets/images/activity_WCGKN_M.jpg',
          md: '/../assets/images/activity_WCGKN_banner.jpg'
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

export default WCGKN;
