import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import ApiDataList from '../../components/Common/ApiDataList';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import Wrapper from '../../components/Wrapper';

const marketAnalysis: React.FC<{}> = () => {
  const { t } = useTranslation(['marketNews']);
  return (
    <Wrapper>
      <Flex p={10} direction="column" align="center">
        <InfoTitle title={t('theLatestReview')} />
        <InfoTitleSub title={t('theLatestReviewsAndForecasts')} />

        <ApiDataList api="index/index" objectKey="quote" />
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header',
      'marketNews'
    ]))
  }
});

export default marketAnalysis;
