import Wrapper from '@/components/Base/Wrapper';
import ApiDataList from '@/components/Common/ApiDataList';
import InfoTitle from '@/components/Common/InfoTitle';
import InfoTitleSub from '@/components/Common/InfoTitleSub';
import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const marketAnalysis: React.FC<{}> = () => {
  const { t } = useTranslation('marketNews');
  return (
    <Wrapper>
      <Flex p={10} direction="column" align="center">
        <InfoTitle title={t('theLatestReview')} />
        <InfoTitleSub title={t('theLatestReviewsAndForecasts')} />

        <ApiDataList api="/market" />
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'marketNews'
    ]))
  }
});

export default marketAnalysis;
