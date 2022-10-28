import { Locales } from '@/i18n/config';
import { WCGYHS_BG } from '@/pages/activity/WCGYHS';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGYHS: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGYHS" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGYHS_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGYHS_M.jpg',
          md: '/../assets/images/activity_WCGYHS_banner.jpg'
        }}
        bgPosition="top center"
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default WCGYHS;
