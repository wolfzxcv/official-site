import { Box } from '@chakra-ui/react';
import React from 'react';
import BackToTopDesktop from './BackToTopDesktop';

const BackToTop: React.FC<{}> = () => {
  return (
    <>
      {/* <Box display={{ base: 'block', md: 'none' }}>
        <BackToTopMobile />
      </Box> */}

      <Box display={{ base: 'block', md: 'block' }}>
        <BackToTopDesktop />
      </Box>
    </>
  );
};

export default BackToTop;
