import { Locales } from '@/i18n/config';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
const WCGJYT: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Box
      minH={{ base: '600px', md: '500px' }}
      bgImage={{
        base:
          currentLang === 'zh'
            ? '/../assets/images/activity_WCGJYT_banner_M_zh.jpg'
            : '/../assets/images/activity_WCGJYT_banner_M_cn.jpg',
        md:
          currentLang === 'zh'
            ? '/../assets/images/activity_WCGJYT_banner_zh.jpg'
            : '/../assets/images/activity_WCGJYT_banner_cn.jpg'
      }}
      bgPosition={{ base: 'top center', md: 'top center' }}
      bgSize="cover"
      _hover={{
        cursor: 'pointer'
      }}
    ></Box>
  );
};

export default WCGJYT;
