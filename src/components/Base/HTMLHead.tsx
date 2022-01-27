import Head from 'next/head';
import React from 'react';
import packageJson from '~/package.json';

const HTMLHead: React.FC<{}> = () => {
  return (
    <Head>
      <title>WCG Markets</title>
      {packageJson.version && (
        <meta name="version" content={`${packageJson.version}`}></meta>
      )}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/ico" href="../assets/images/favicon.ico" />
    </Head>
  );
};

export default HTMLHead;
