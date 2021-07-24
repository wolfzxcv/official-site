import { Accordion, Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';

const InfoAccordionItem = dynamic(
  () => import('../../components/Common/InfoAccordionItem'),
  { ssr: false }
);

const tradeDetails: React.FC<{}> = () => {
  const { t } = useTranslation(['notice']);

  return (
    <Wrapper>
      {/* Trade Details */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('tradeDetails')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={10}>
          <Accordion width={'80vw'} allowToggle>
            <InfoAccordionItem
              title={t('sourceOfTradeExecution')}
              content={[t('theQuotesOfOur')]}
            />

            <InfoAccordionItem
              title={t('slippage')}
              content={[t('ourCompanyWill')]}
            />

            <InfoAccordionItem
              title={t('marketGapAndFluctuations')}
              content={[t('whenEconomicData')]}
            />

            <InfoAccordionItem
              title={t('leverageAndMarginPolicy')}
              content={[t('inAnyCase')]}
            />

            <InfoAccordionItem
              title={t('setTheValidityPeriodOfTheOrder')}
              content={[t('allPendingOrders')]}
            />

            <InfoAccordionItem
              title={t('forcedLiquidationPolicy')}
              content={[
                t('pleaseNoteThatUnlessWeHaveOtherNotice'),
                t('theCalculationMethod')
              ]}
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
      'notice'
    ]))
  }
});

export default tradeDetails;
