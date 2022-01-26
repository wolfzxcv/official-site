import Wrapper from '@/components/Base/Wrapper';
import { InfoAccordionItemProps } from '@/components/Common/InfoAccordion';
import InfoTitle from '@/components/Common/InfoTitle';
import { Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import React from 'react';

const InfoAccordion = dynamic(
  () => import('@/components/Common/InfoAccordion'),
  { ssr: false }
);

const tradeDetails: React.FC<{}> = () => {
  const { t } = useTranslation('notice');

  const data: InfoAccordionItemProps[] = [
    {
      title: t('sourceOfTradeExecution'),
      content: [t('theQuotesOfOur')]
    },
    {
      title: t('slippage'),
      content: [t('ourCompanyWill')]
    },
    {
      title: t('marketGapAndFluctuations'),
      content: [t('whenEconomicData')]
    },
    {
      title: t('leverageAndMarginPolicy'),
      content: [t('inAnyCase')]
    },
    {
      title: t('setTheValidityPeriodOfTheOrder'),
      content: [t('allPendingOrders')]
    },
    {
      title: t('forcedLiquidationPolicy'),
      content: [
        t('pleaseNoteThatUnlessWeHaveOtherNotice'),
        t('theCalculationMethod')
      ]
    }
  ];

  return (
    <Wrapper>
      {/* Trade Details */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('tradeDetails')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

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
      'notice'
    ]))
  }
});

export default tradeDetails;
