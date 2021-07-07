import { Box } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import TopLinks from './TopLinks/TopLinks';

interface WrapperProps {
  variant?: 'small' | 'regular' | 'large';
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = 'regular'
}: WrapperProps) => {
  const maxW =
    variant === 'regular' ? '800px' : variant === 'large' ? '100vw' : '400px';
  return (
    <>
      <Header />
      <TopLinks />
      <Box minH="70vh" mx="auto" maxW={maxW} w="100%">
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Wrapper;
