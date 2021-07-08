import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Script from 'next/script';
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

      <Script
        dangerouslySetInnerHTML={{
          __html: `
    window.__lc = window.__lc || {};
    window.__lc.license = 11929440;
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/staging/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))`
        }}
      />
      <noscript>
        <a
          href="https://www.livechatinc.com/chat-with/11929440/"
          rel="nofollow"
        >
          Chat with us
        </a>
        , powered by{' '}
        <a
          href="https://www.livechatinc.com/?welcome"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          LiveChat
        </a>
      </noscript>
    </>
  );
};

export default Wrapper;
