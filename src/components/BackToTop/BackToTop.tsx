import { Box } from '@chakra-ui/react';
import React from 'react';
import BackToTopDesktop from './BackToTopDesktop';
import BackToTopMobile from './BackToTopMobile';

const BackToTop: React.FC<{}> = () => {
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }}>
        <BackToTopMobile />
      </Box>

      <Box display={{ base: 'none', md: 'block' }}>
        <BackToTopDesktop />
      </Box>
    </>
  );
};

export default BackToTop;
