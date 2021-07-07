import { Box } from '@chakra-ui/react';
import React from 'react';
import { Copyright } from './Copyright';

const Footer: React.FC<{}> = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py="12"
      width="full"
      bg="gray.700"
      color="gray.200"
    >
      <Copyright />
    </Box>
  );
};

export default Footer;
