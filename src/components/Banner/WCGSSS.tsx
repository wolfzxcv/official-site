import { Locales } from '@/i18n/config';
import { WCGSSS_BG_BLUE } from '@/pages/activity/WCGSSS';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGSSS: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGSSS" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGSSS_BG_BLUE}
        bgImage={{
          base: '/../assets/images/activity_WCGSSS_M.jpg',
          md: '/../assets/images/activity_WCGSSS_banner.jpg'
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

export default WCGSSS;
