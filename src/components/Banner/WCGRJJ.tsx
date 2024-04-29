import { Locales } from '@/i18n/config';
import { WCGRJJ_BG } from '@/pages/activity/WCGRJJ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGRJJ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const picLang =
    currentLang === 'zh' ? 'zh' : currentLang === 'vi' ? 'vi' : 'cn';

  return (
    <NextLink passHref={true} href="/activity/WCGRJJ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGRJJ_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGRJJ_M_${picLang}.jpg`,
          md: `/../assets/images/activity_WCGRJJ_banner_${picLang}.jpg`
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

export default WCGRJJ;
