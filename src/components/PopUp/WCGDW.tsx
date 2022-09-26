import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PopUp from './PopUp';

type WCGDWProps = {
  lang: 'zh' | 'cn';
};

const WCGDW: React.FC<WCGDWProps> = ({ lang }: WCGDWProps) => {
  return <PopUp title="公告" content={<WCGDWContent lang={lang} />} />;
};

const WCGDWContent: React.FC<WCGDWProps> = ({ lang }: WCGDWProps) => {
  return (
    <Box>
      <Image
        src={`/../assets/images/activity_WCGDW_${lang}.jpg`}
        alt="notice"
      />
    </Box>
  );
};

export default WCGDW;
