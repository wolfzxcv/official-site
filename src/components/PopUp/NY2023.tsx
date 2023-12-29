import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PopUp from './PopUp';

type NY2023Props = {
  lang: 'zh' | 'cn';
};

const NY2023: React.FC<NY2023Props> = ({ lang }: NY2023Props) => {
  return <PopUp title="公告" content={<NY2023Content lang={lang} />} />;
};

const NY2023Content: React.FC<NY2023Props> = ({ lang }: NY2023Props) => {
  return (
    <Box>
      <Image
        src={`/../assets/images/activity_WCGNY2023_${lang}.jpg`}
        alt="NY2023"
      />
    </Box>
  );
};

export default NY2023;
