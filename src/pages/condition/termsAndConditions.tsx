import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface termsAndConditionsProps {}

const termsAndConditions: React.FC<termsAndConditionsProps> = () => {
  return <Wrapper variant="large">advancedTrading page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['header']))
  }
});

export default termsAndConditions;
