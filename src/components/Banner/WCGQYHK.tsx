import { Locales } from '@/i18n/config';
import { WCGQYHKContent } from '@/pages/activity/WCGQYHK';
import { Box, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCGQYHK: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCGQYHK" locale={currentLang}>
      <Flex
        minH={{ base: '600px', md: '500px' }}
        backgroundImage={{
          base: "url('../assets/images/activity_WCGQYHK_M.jpg')",
          md: "url('../assets/images/activity_WCGQYHK_banner.jpg')"
        }}
        bgPosition={{ base: 'top center', md: 'top right' }}
        bgSize="cover"
        _hover={{
          cursor: 'pointer'
        }}
        flexDir="column"
        justify="flex-start"
        align="center"
      >
        <Box
          mt="390px"
          px={1}
          width="90vw"
          fontSize="8px"
          color="white"
          display={{ base: 'block', md: 'none' }}
        >
          <WCGQYHKContent />
        </Box>
      </Flex>
    </NextLink>
  );
};

export default WCGQYHK;
