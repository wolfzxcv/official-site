import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
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
