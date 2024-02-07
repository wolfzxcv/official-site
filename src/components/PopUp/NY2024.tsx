import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PopUp from './PopUp';

type NY2024Props = {
  lang: 'zh' | 'cn';
};

const NY2024: React.FC<NY2024Props> = ({ lang }: NY2024Props) => {
  return <PopUp title="公告" content={<NY2024Content lang={lang} />} />;
};

const NY2024Content: React.FC<NY2024Props> = ({ lang }: NY2024Props) => {
  return (
    <Box>
      <Image
        src={`/../assets/images/pop_up_WCGNY2024_${lang}.jpg`}
        alt="NY2024"
      />
    </Box>
  );
};

export default NY2024;
