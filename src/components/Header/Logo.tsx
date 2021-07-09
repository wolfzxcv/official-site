import { Box, Image, Link } from '@chakra-ui/react';
import React from 'react';

const Logo: React.FC<{}> = () => {
  return (
    <Link href="/">
      <Box>
        <Image src="../assets/images/logo.png" alt="logo" />
      </Box>
    </Link>
  );
};

export default Logo;
