import { Locales } from '@/i18n/config';
import { WCGFY_BG_RED } from '@/pages/activity/WCGFY';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGFY: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGFY" locale={currentLang}>
      <Flex
        minH={{ base: '600px', md: '500px' }}
        bg={WCGFY_BG_RED}
        bgImage={{
          base: '/../assets/images/activity_WCGFY_M.jpg',
          md: '/../assets/images/activity_WCGFY_banner.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Flex>
    </NextLink>
  );
};

export default WCGFY;
