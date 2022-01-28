import { Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import PopUp from './PopUp';

const WCG15ZJ: React.FC<{}> = () => {
  return <PopUp title="关注微博赠红包" content={<WCG15ZJContent />} />;
};

const WCG15ZJContent: React.FC<{}> = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const main = 'activity_WCG15ZJ_1.jpg';
  const detail = 'activity_WCG15ZJ_2.jpg';

  const pic = isShowDetail ? detail : main;

  return (
    <Box
      onClick={() => setIsShowDetail(!isShowDetail)}
      _hover={{ cursor: 'pointer' }}
    >
      <Image src={`../assets/images/${pic}`} alt="divider" />
    </Box>
  );
};

export default WCG15ZJ;
