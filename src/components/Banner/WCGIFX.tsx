import { Flex } from '@chakra-ui/react';
import React from 'react';

const WCGIFX: React.FC<{}> = () => {
  return (
    <Flex
      minH={{ base: '600px', md: '500px' }}
      backgroundImage={{
        base: '../assets/images/activity_WCGIFX_banner_M.jpg',
        md: '../assets/images/activity_WCGIFX_banner.jpg'
      }}
      bgPosition={{ base: 'top center', md: 'top right' }}
      bgSize="cover"
      _hover={{
        cursor: 'pointer'
      }}
      justify="center"
      align="flex-end"
    ></Flex>
  );
};

export default WCGIFX;
