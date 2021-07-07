import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface forexProps {}

const forex: React.FC<forexProps> = () => {
  return <Wrapper variant="large">forex page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['common', 'header']))
  }
});

export default forex;
