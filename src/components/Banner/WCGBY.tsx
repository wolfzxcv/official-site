import { Locales } from '@/i18n/config';
import { WCGBYTitle, WCGBY_BG_RED } from '@/pages/activity/WCGBY';
import { Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGBY: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGBY" locale={currentLang}>
      <Flex
        minH={{ base: '600px', md: '500px' }}
        bg={WCGBY_BG_RED}
        backgroundImage={{
          base: "url('../assets/images/activity_WCGBY_M.jpg')",
          md: "url('../assets/images/activity_WCGBY_banner.jpg')"
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
          bg={WCGBY_BG_RED}
          mt="380px"
          color="white"
          flexDir="column"
          align="center"
          justify="flex-end"
        >
          <WCGBYTitle />
        </Flex>
      </Flex>
    </NextLink>
  );
};

export default WCGBY;
