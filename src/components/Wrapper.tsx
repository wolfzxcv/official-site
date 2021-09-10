import { Box, useMediaQuery } from '@chakra-ui/react';
import Head from 'next/head';
import React, { useEffect } from 'react';
import packageJson from '../../package.json';
import { animationsOnScroll } from '../utils/animationsOnScroll';
import BackToTop from './BackToTop/BackToTop';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import LiveChat from './LiveChat';
import TopLinks from './TopLinks/TopLinks';

interface WrapperProps {
  maxW?: string;
  children?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  maxW = '100vw'
}: WrapperProps) => {
  const [isWideScreen] = useMediaQuery('(min-width: 1200px)');

  useEffect(() => {
    if (isWideScreen) {
      animationsOnScroll('animation', [
        'fadeIn',
        'fadeInDown',
        'fadeInLeft',
        'fadeInRight',
        'fadeInUp'
      ]);
    }
  }, []);

  return (
    <>
      <Head>
        <title>WCG</title>
        {packageJson.version && (
          <meta name="version" content={`${packageJson.version}`}></meta>
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/ico" href="../assets/images/favicon.ico" />
      </Head>
      <Box position="sticky" top="0" zIndex={1}>
        <Header />
        <TopLinks />
      </Box>
      <Box minH="70vh" maxW={maxW} w="100%">
        {children}
      </Box>
      <BackToTop />

      <Footer />

      <LiveChat />
    </>
  );
};

export default Wrapper;
