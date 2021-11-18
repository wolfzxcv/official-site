import { Box, useMediaQuery } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import { animationsOnScroll } from '../../utils/animationsOnScroll';
import BackToTop from '../BackToTop/BackToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopLinks from '../TopLinks/TopLinks';
import HTMLHead from './HTMLHead';

const LiveChat = dynamic(() => import('./LiveChat'), { ssr: false });

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
