import { Locales } from '@/i18n/config';
import { WCG20RJ_BG } from '@/pages/activity/WCG20RJ';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCG20RJ: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCG20RJ" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={WCG20RJ_BG}
        bgImage={{
          base: `/../assets/images/activity_WCG20RJ_M.jpg`,
          md: `/../assets/images/activity_WCG20RJ_banner.jpg`
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

export default WCG20RJ;
