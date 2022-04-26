import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box } from '@chakra-ui/react';
import React from 'react';

const WCG51: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Box
        display={{ base: 'none', xl: 'block' }}
        bgImage="../assets/images/activity_WCG51.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        height="2905px"
      >
        WCG51 page
      </Box>
    </>
  );
};

export default WCG51;
