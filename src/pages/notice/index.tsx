import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface noticeProps {}

const notice: React.FC<noticeProps> = () => {
  return <Wrapper variant="large">notice page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['header']))
  }
});

export default notice;
