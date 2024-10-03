import { Locales } from '@/i18n/config';
import { WCGJTX_BG } from '@/pages/activity/WCGJTX';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGJTX: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGJTX" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGJTX_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGJTX_M.jpg`,
          md: `/../assets/images/activity_WCGJTX_banner.jpg`
        }}
        bgPosition={{ base: 'top center', md: 'center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default WCGJTX;
