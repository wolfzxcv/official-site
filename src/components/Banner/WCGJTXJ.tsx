import { Locales } from '@/i18n/config';
import { WCGJTXJ_BG } from '@/pages/activity/WCGJTXJ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGJTXJ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGJTXJ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGJTXJ_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGJTXJ_M.jpg`,
          md: `/../assets/images/activity_WCGJTXJ_banner.jpg`
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

export default WCGJTXJ;
