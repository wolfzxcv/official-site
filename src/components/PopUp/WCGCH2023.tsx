import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PopUp from './PopUp';

type WCGCH2023Props = {
  lang: 'zh' | 'cn' | 'en';
};

const WCGCH2023: React.FC<WCGCH2023Props> = ({ lang }: WCGCH2023Props) => {
  return <PopUp title="公告" content={<WCGCH2023Content lang={lang} />} />;
};

const WCGCH2023Content: React.FC<WCGCH2023Props> = ({
  lang
}: WCGCH2023Props) => {
  return (
    <Box>
      <Image
        src={`/../assets/images/activity_WCGCH2023_${lang}.jpg`}
        alt="WCGCH2023"
      />
    </Box>
  );
};

export default WCGCH2023;
