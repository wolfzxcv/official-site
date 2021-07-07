import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface companyNewsProps {}

const companyNews: React.FC<companyNewsProps> = () => {
  return <Wrapper variant="large">companyNews page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['common', 'header']))
  }
});

export default companyNews;
