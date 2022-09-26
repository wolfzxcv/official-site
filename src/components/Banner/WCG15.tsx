import { Locales } from '@/i18n/config';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCG15: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCG15" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bgImage={{
          base: '/../assets/images/activity_WCG15_banner_M.jpg',
          md: '/../assets/images/activity_WCG15_banner.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top right' }}
        bgSize="cover"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default WCG15;
