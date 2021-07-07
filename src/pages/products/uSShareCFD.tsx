import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface uSShareCFDProps {}

const uSShareCFD: React.FC<uSShareCFDProps> = () => {
  return <Wrapper variant="large">uSShareCFD page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['common', 'header']))
  }
});

export default uSShareCFD;
