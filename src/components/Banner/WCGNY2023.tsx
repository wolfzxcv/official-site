import { Box } from '@chakra-ui/react';
import React from 'react';

const WCGNY2023: React.FC<{}> = () => {
  return (
    <Box
      minH={{ base: '600px', md: '500px' }}
      bg="#161F48"
      bgImage={{
        base: '/../assets/images/activity_WCGNY2023_M.jpg',
        md: '/../assets/images/activity_WCGNY2023_banner.jpg'
      }}
      bgPosition={{ base: 'center', md: 'left center' }}
      bgSize={{ base: 'contain', md: 'cover' }}
      bgRepeat="no-repeat"
      _hover={{
        cursor: 'pointer'
      }}
    ></Box>
  );
};

export default WCGNY2023;
