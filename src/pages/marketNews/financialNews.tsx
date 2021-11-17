import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import ApiDataList from '../../components/Common/ApiDataList';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';

const financialNews: React.FC<{}> = () => {
  const { t } = useTranslation(['marketNews']);

  return (
    <Wrapper>
      <Flex p={10} direction="column" align="center">
        <InfoTitle title={t('todaysEconomic')} />
        <InfoTitleSub title={t('theMostImportant')} />

        <ApiDataList api="index/index" objectKey="focus" />
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

export default financialNews;
