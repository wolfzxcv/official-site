import { Box } from '@chakra-ui/react';
import React from 'react';

const WCGDC: React.FC<{}> = () => {
  return (
    <Box
      minH={{ base: '600px', md: '500px' }}
      bgImage={{
        base: '/../assets/images/activity_WCGDC_banner_M.jpg',
        md: '/../assets/images/activity_WCGDC_banner.jpg'
      }}
      bgPosition={{ base: 'top center', md: 'top right' }}
      bgSize="cover"
      _hover={{
        cursor: 'pointer'
      }}
    ></Box>
  );
};

export default WCGDC;
