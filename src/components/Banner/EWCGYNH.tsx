import { Locales } from '@/i18n/config';
import { EWCGYNH_BG } from '@/pages/activity/EWCGYNH';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const EWCGYNH: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/activity/EWCGYNH" locale={currentLang}>
      <Box
        minH={{ base: '600px', md: '500px' }}
        bg={EWCGYNH_BG}
        bgImage={{
          base: '/../assets/images/activity_EWCGYNH_M.jpg',
          md: '/../assets/images/activity_EWCGYNH_banner.jpg'
        }}
        bgPosition={{ base: 'center', md: 'center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        _hover={{
          cursor: 'pointer'
        }}
      ></Box>
    </NextLink>
  );
};

export default EWCGYNH;
