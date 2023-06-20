import { Box } from '@chakra-ui/react';
import React from 'react';

const WCGDWJ23: React.FC<{}> = () => {
  return (
    <Box
      minH={{ base: '600px', md: '500px' }}
      bgImage={{
        base: '/../assets/images/activity_WCGDWJ23_M.jpg',
        md: '/../assets/images/activity_WCGDWJ23_banner.jpg'
      }}
      bgPosition={{ base: 'left center', md: 'center' }}
      bgSize={{ base: 'cover', md: 'cover' }}
      bgRepeat="no-repeat"
    ></Box>
  );
};

export default WCGDWJ23;
