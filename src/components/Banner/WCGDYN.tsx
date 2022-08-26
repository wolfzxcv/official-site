import { Locales } from '@/i18n/config';
import { WCGDYNTitle, WCGDYN_BG_GREEN } from '@/pages/activity/WCGDYN';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGDYN: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGDYN" locale={currentLang}>
      <Flex
        minH={{ base: '600px', md: '500px' }}
        bg={WCGDYN_BG_GREEN}
        bgImage={{
          base: '../assets/images/activity_WCGDYN_M.jpg',
          md: '../assets/images/activity_WCGDYN_banner.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
        flexDir="column"
        justify="flex-start"
        align="center"
      >
        <Flex
          display={{ base: 'block', md: 'none' }}
          bg={WCGDYN_BG_GREEN}
          mt="330px"
          color="white"
          flexDir="column"
          align="center"
          justify="flex-end"
        >
          <WCGDYNTitle />
        </Flex>
      </Flex>
    </NextLink>
  );
};

export default WCGDYN;
