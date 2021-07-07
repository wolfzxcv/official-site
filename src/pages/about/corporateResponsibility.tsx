import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface corporateResponsibilityProps {}

const corporateResponsibility: React.FC<corporateResponsibilityProps> = () => {
  return <Wrapper variant="large">corporateResponsibility page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['header']))
  }
});

export default corporateResponsibility;
