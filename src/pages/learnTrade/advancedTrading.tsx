import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface advancedTradingProps {}

const advancedTrading: React.FC<advancedTradingProps> = () => {
  return <Wrapper>advancedTrading page!</Wrapper>;
};
export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header'
    ]))
  }
});

export default advancedTrading;
