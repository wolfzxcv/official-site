import { Box } from '@chakra-ui/react';
import React from 'react';

const BannerVN1: React.FC<{}> = () => {
  return (
    <Box
      minH={{ base: '600px', md: '500px' }}
      bg="#161F48"
      bgImage={{
        base: '/../assets/images/banner_WCGVN1_M.jpg',
        md: '/../assets/images/banner_WCGVN1.jpg'
      }}
      bgPosition={{ base: 'center', md: 'center' }}
      bgSize={{ base: 'contain', md: 'cover' }}
      bgRepeat="no-repeat"
      _hover={{
        cursor: 'pointer'
      }}
    ></Box>
  );
};

export default BannerVN1;
