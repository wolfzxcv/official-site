import { Box, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { animationsOnScroll } from '../../utils/animationsOnScroll';
import BackToTop from '../BackToTop/BackToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopLinks from '../TopLinks/TopLinks';
import GoogleTagManager from './GoogleTagManager';
import HTMLHead from './HTMLHead';
import LiveChat from './LiveChat';

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
      <HTMLHead />

      <LiveChat />
      <GoogleTagManager />

      <Box position="sticky" top="0" zIndex={100}>
        <Header />
        <TopLinks />
      </Box>
      <Box minH="70vh" maxW={maxW} w="100%">
        {children}
      </Box>
      <BackToTop />

      <Footer />
    </>
  );
};

export default Wrapper;
