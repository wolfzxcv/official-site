import { Locales } from '@/i18n/config';
import { Box, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCG51: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/WCG51" locale={currentLang}>
      <Flex
        minH={{ base: '600px', md: '500px' }}
        bgImage={{
          base: '../assets/images/activity_WCG51_banner_M.jpg',
          md: '../assets/images/activity_WCG51_banner.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top right' }}
        bgSize="cover"
        _hover={{
          cursor: 'pointer'
        }}
        justify="center"
        align="flex-end"
        pb="150px"
      >
        <Box
          width="300px"
          height="fit-content"
          fontSize="16px"
          display={{ base: 'block', md: 'none' }}
          bg="red.700"
          color="white"
          border="1px"
          borderColor="whiteAlpha.300"
          p={3}
        >
          WCG金送大礼，于2022年5月1日到2022年5月31日期间，户口累积入计算
        </Box>
      </Flex>
    </NextLink>
  );
};

export default WCG51;
