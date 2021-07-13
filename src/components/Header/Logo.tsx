import { Image, Link } from '@chakra-ui/react';
import React from 'react';

const Logo: React.FC<{}> = () => {
  return (
    <Link href="/">
      <Image maxW={'80%'} h="auto" src="../assets/images/logo.png" alt="logo" />
    </Link>
  );
};

export default Logo;
