import { Locales } from '@/i18n/config';
import { WCGDSH_BG } from '@/pages/activity/WCGDSH';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGDSH: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGDSH" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGDSH_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGDSH_M.jpg',
          md: '/../assets/images/activity_WCGDSH_banner.jpg'
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

export default WCGDSH;
