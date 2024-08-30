import { Locales } from '@/i18n/config';
import { WCGZQX_BG } from '@/pages/activity/WCGZQX';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGZQX: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGZQX" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGZQX_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGZQX_M.jpg`,
          md: `/../assets/images/activity_WCGZQX_banner.jpg`
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

export default WCGZQX;
