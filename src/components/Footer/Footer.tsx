import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Copyright } from './Copyright';
import { SocialMediaLinks } from './SocialMediaLinks';

const Footer: React.FC<{}> = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py="12"
      width="full"
      px={{ base: '4', md: '200px' }}
      bg="gray.500"
      color="gray.200"
    >
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <SocialMediaLinks />
        </Stack>
        <Copyright />
      </Stack>
    </Box>
  );
};

export default Footer;
