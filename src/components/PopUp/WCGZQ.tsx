import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PopUp from './PopUp';

type WCGZQProps = {
  lang: 'zh' | 'cn';
};

const WCGZQ: React.FC<WCGZQProps> = ({ lang }: WCGZQProps) => {
  return <PopUp title="公告" content={<WCGZQContent lang={lang} />} />;
};

const WCGZQContent: React.FC<WCGZQProps> = ({ lang }: WCGZQProps) => {
  return (
    <Box>
      <Image
        src={`/../assets/images/activity_WCGZQ_${lang}.jpg`}
        alt="notice"
      />
    </Box>
  );
};

export default WCGZQ;
