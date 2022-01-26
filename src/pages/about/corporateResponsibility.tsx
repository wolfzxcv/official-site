import Wrapper from '@/components/Base/Wrapper';
import ApiDataList from '@/components/Common/ApiDataList';
import InfoTitle from '@/components/Common/InfoTitle';
import InfoTitleSub from '@/components/Common/InfoTitleSub';
import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const corporateResponsibility: React.FC<{}> = () => {
  const { t } = useTranslation('contactUs');

  return (
    <Wrapper>
      <Flex p={{ base: 10, md: 20 }} direction="column" align="center">
        <InfoTitle title={t('corporateResponsibility')} />
        <InfoTitleSub title={t('corporateResponsibility')} />

        <ApiDataList api="index/responsibility" objectKey="reponce" />
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
      'contactUs'
    ]))
  }
});

export default corporateResponsibility;
