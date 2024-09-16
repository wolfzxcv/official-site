import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PopUp from './PopUp';

type ZQJ2024Props = {
  lang: 'zh' | 'cn';
};

const ZQJ2024: React.FC<ZQJ2024Props> = ({ lang }: ZQJ2024Props) => {
  return <PopUp title="公告" content={<ZQJ2024Content lang={lang} />} />;
};

const ZQJ2024Content: React.FC<ZQJ2024Props> = ({ lang }: ZQJ2024Props) => {
  return (
    <Box>
      <Image
        src={`/../assets/images/pop_up_WCGZQJ2024_${lang}.jpg`}
        alt="ZQJ2024"
      />
    </Box>
  );
};

export default ZQJ2024;
