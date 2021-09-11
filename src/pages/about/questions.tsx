import { Accordion, Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import Wrapper from '../../components/Wrapper';

const InfoAccordionItem = dynamic(
  () => import('../../components/Common/InfoAccordionItem'),
  { ssr: false }
);

const questions: React.FC<{}> = () => {
  const { t } = useTranslation(['questions']);

  return (
    <Wrapper>
      <Flex
        pt={{ base: 10, md: 20 }}
        px={{ base: 10, md: 20 }}
        direction="column"
        align="center"
      >
        <InfoTitle title={t('questions')} />
        <InfoTitleSub title={t('thisArticleCollects')} />

        <Box width={'80vw'} my={10}>
          <Accordion width={'80vw'} allowToggle>
            <InfoAccordionItem
              title={t('whatKindOfSupervision')}
              content={[
                t('WCGMarketsLtdIsRegistered'),
                t('WCGMarketsLtdIsSupervised'),
                t('WCGMarketsLtdIsAuthorized')
              ]}
            />

            <InfoAccordionItem
              title={t('HowToOpenAnAccountInWCG')}
              content={[t('youCanRegisterYourRealAccount')]}
              externalHref="https://trader.wc012.com/register"
            />

            <InfoAccordionItem
              title={t('whatKindOfAccounts')}
              content={[t('weProvideDifferentAccountTypes')]}
            />

            <InfoAccordionItem
              title={t('whatKindOfDocuments')}
              content={[t('customersInMainlandChina')]}
            />

            <InfoAccordionItem
              title={t('howLongWillItTake')}
              content={[t('accountOpeningWillTake')]}
            />

            <InfoAccordionItem
              title={t('howLongWillItTakeToProcess')}
              content={[t('theWithdrawalWillTake')]}
            />

            <InfoAccordionItem
              title={t('HowDoIKnowMyWithdrawal')}
              content={[t('onceTheWithdrawalApplication')]}
            />

            <InfoAccordionItem
              title={t('whatIsTheMT4Platform')}
              content={[t('MetaTrader4')]}
            />

            <InfoAccordionItem
              title={t('howToDownload')}
              content={[t('youCanClickHere')]}
              internalHref="/platform/MT4Overview"
            />

            <InfoAccordionItem
              title={t('canITradeOverWeekends')}
              content={[t('noTradingOverWeekends')]}
            />
          </Accordion>
        </Box>
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
      'questions'
    ]))
  }
});

export default questions;
