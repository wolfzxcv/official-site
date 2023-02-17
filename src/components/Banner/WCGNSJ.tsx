import { Locales } from '@/i18n/config';
import { WCGNSJ_BG } from '@/pages/activity/WCGNSJ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGNSJ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGNSJ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGNSJ_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGNSJ_M.jpg',
          md: '/../assets/images/activity_WCGNSJ_banner.jpg'
        }}
        bgPosition="center"
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default WCGNSJ;
