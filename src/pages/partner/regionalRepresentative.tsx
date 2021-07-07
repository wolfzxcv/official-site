import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface regionalRepresentativeProps {}

const regionalRepresentative: React.FC<regionalRepresentativeProps> = () => {
  return <Wrapper variant="large">regionalRepresentative page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['header']))
  }
});

export default regionalRepresentative;
