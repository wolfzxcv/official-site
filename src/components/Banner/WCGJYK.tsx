import { Locales } from '@/i18n/config';
import { WCGJYK_BG } from '@/pages/activity/WCGJYK';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGJYK: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGJYK" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGJYK_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGJYK_M.jpg',
          md: '/../assets/images/activity_WCGJYK_banner.jpg'
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

export default WCGJYK;
