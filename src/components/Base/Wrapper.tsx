import { Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import BackToTop from '../BackToTop/BackToTop';
import Footer from '../Footer/Footer';
import HTMLHead from './HTMLHead';

const LiveChat = dynamic(() => import('./LiveChat'), { ssr: false });
const Header = dynamic(() => import('../Header/Header'), { ssr: false });
const TopLinks = dynamic(() => import('../TopLinks/TopLinks'), { ssr: false });

type WrapperProps = {
  maxW?: string;
  children?: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({
  children,
  maxW = '100vw'
}: WrapperProps) => {
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
