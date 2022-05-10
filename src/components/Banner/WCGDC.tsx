import { Flex } from '@chakra-ui/react';
import React from 'react';

const WCGDC: React.FC<{}> = () => {
  return (
    <Flex
      minH={{ base: '600px', md: '500px' }}
      backgroundImage={{
        base: "url('../assets/images/activity_WCGDC_banner_M.jpg')",
        md: "url('../assets/images/activity_WCGDC_banner.jpg')"
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

export default WCGDC;
