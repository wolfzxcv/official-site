import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface iBBrokerProps {}

const iBBroker: React.FC<iBBrokerProps> = () => {
  return <Wrapper variant="large">iBBroker page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['header']))
  }
});

export default iBBroker;
