import { Locales } from '@/i18n/config';
import { WCGIPH_BG } from '@/pages/activity/WCGIPH';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGIPH: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGIPH" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGIPH_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGIPH_M.jpg',
          md: '/../assets/images/activity_WCGIPH_banner.jpg'
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

export default WCGIPH;
