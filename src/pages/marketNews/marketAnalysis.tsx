import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface marketAnalysisProps {}

const marketAnalysis: React.FC<marketAnalysisProps> = () => {
  return <Wrapper variant="large">marketAnalysis page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['common', 'header']))
  }
});

export default marketAnalysis;
