import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface financialCalendarProps {}

const financialCalendar: React.FC<financialCalendarProps> = () => {
  return <Wrapper variant="large">financialCalendar page!</Wrapper>;
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['header']))
  }
});

export default financialCalendar;
