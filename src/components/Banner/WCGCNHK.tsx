import { Locales } from '@/i18n/config';
import { WCGCNHK_BG } from '@/pages/activity/WCGCNHK';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGCNHK: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGCNHK" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCGCNHK_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGCNHK_banner_M.jpg',
          md: '/../assets/images/activity_WCGCNHK_banner.jpg'
        }}
        bgPosition="center"
        bgSize={{ base: 'cover', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default WCGCNHK;
