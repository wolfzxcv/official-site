import { Locales } from '@/i18n/config';
import { WCGJYZ_BG } from '@/pages/activity/WCGJYZ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGJYZ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGJYZ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGJYZ_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGJYZ_M.jpg',
          md: '/../assets/images/activity_WCGJYZ_banner.jpg'
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

export default WCGJYZ;
