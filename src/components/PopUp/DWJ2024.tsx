import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PopUp from './PopUp';

type DWJ2024Props = {
  lang: 'zh' | 'cn';
};

const DWJ2024: React.FC<DWJ2024Props> = ({ lang }: DWJ2024Props) => {
  return <PopUp title="公告" content={<DWJ2024Content lang={lang} />} />;
};

const DWJ2024Content: React.FC<DWJ2024Props> = ({ lang }: DWJ2024Props) => {
  return (
    <Box>
      <Image
        src={`/../assets/images/pop_up_WCGDWJ2024_${lang}.jpg`}
        alt="DWJ2024"
      />
    </Box>
  );
};

export default DWJ2024;
