import { Locales } from '@/i18n/config';
import { Box, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import PopUp from './PopUp';

const WCGIFX2 = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return currentLang === 'zh' ? (
    <PopUp title="公告" content={<WCGIFX_zh />} useBorder={false} />
  ) : currentLang === 'cn' ? (
    <PopUp title="公告" content={<WCGIFX_cn />} useBorder={false} />
  ) : (
    <PopUp title="Announcement" content={<WCGIFX_en />} useBorder={false} />
  );
};

const WCGIFX_zh: React.FC<{}> = () => {
  return (
    <Box>
      <Image src={`/../assets/images/pop_up_WCGIFX_zh.jpg`} alt="WCGIFX_zh" />
    </Box>
  );
};

const WCGIFX_cn: React.FC<{}> = () => {
  return (
    <Box>
      <Image src={`/../assets/images/pop_up_WCGIFX_cn.jpg`} alt="WCGIFX_cn" />
    </Box>
  );
};

const WCGIFX_en: React.FC<{}> = () => {
  return (
    <Box>
      <Image src={`/../assets/images/pop_up_WCGIFX_en.jpg`} alt="WCGIFX_en" />
    </Box>
  );
};

export default WCGIFX2;
