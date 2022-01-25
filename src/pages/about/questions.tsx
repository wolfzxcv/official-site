import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import { InfoAccordionItemProps } from '../../components/Common/InfoAccordion';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';

const InfoAccordion = dynamic(
  () => import('../../components/Common/InfoAccordion'),
  { ssr: false }
);

const questions: React.FC<{}> = () => {
  const { t } = useTranslation('questions');

  const data: InfoAccordionItemProps[] = [
    {
      title: t('whatKindOfSupervision'),
      content: [
        t('WCGIsABusinessBrand'),
        t('WCGMarketsLtdIsSupervised'),
        t('WCGMarketsLtdIsRegistered')
      ]
    },
    {
      title: t('HowToOpenAnAccountInWCG'),
      content: [t('youCanRegisterYourRealAccount')],
      externalHref: 'https://trader.wc012.com/register'
    },
    {
      title: t('whatKindOfAccounts'),
      content: [t('weProvideDifferentAccountTypes')]
    },
    {
      title: t('whatKindOfDocuments'),
      content: [t('customersInMainlandChina')]
    },
    {
      title: t('howLongWillItTake'),
      content: [t('accountOpeningWillTake')]
    },
    {
      title: t('howLongWillItTakeToProcess'),
      content: [t('submitTheWithdrawal'), t('submitTheWithdrawalInstruction')]
    },
    {
      title: t('HowDoIKnowMyWithdrawal'),
      content: [t('onceTheWithdrawalApplication')]
    },
    {
      title: t('whatIsTheMT4Platform'),
      content: [t('MetaTrader4')]
    },
    {
      title: t('howToDownload'),
      content: [t('youCanClickHere')],
      internalHref: '/platform/MT4Overview'
    },
    {
      title: t('canITradeOverWeekends'),
      content: [t('noTradingOverWeekends')]
    }
  ];

  return (
    <Wrapper>
      <Flex p={{ base: 10, md: 20 }} direction="column" align="center">
        <InfoTitle title={t('questions')} />
        <InfoTitleSub title={t('thisArticleCollects')} />

        <InfoAccordion data={data} />
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
      'questions'
    ]))
  }
});

export default questions;
