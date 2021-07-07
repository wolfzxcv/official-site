import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
import { Copyright } from './Copyright';
import FooterBottom from './FooterBottom';
import FooterMiddle from './FooterMiddle';

const Footer: React.FC<{}> = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={{ base: '5', md: '0' }}
      width="full"
      bg="gray.700"
      color="gray.200"
    >
      <Copyright />
      <Divider />
      <FooterMiddle />
      <Divider />

      <FooterBottom />
    </Box>
  );
};

export default Footer;
