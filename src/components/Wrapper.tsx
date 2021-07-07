import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import BackToTop from './BackToTop/BackToTop';
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
      <Head>
        <title>WCG</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/ico" href="../assets/images/favicon.ico" />
      </Head>
      <Header />
      <TopLinks />
      <Box minH="70vh" mx="auto" maxW={maxW} w="100%">
        {children}
      </Box>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Wrapper;
