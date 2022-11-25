import { Locales } from '@/i18n/config';
import { WCGDRJ_BG } from '@/pages/activity/WCGDRJ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGDRJ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGDRJ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGDRJ_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGDRJ_M.jpg',
          md: '/../assets/images/activity_WCGDRJ_banner.jpg'
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

export default WCGDRJ;
