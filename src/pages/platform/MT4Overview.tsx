import { Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const MT4Overview: React.FC<{}> = () => {
  const { t } = useTranslation(['platform']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'hk';
  const isArabic = currentLang === 'sa';

  return (
    <Wrapper>
      <Flex my={10} direction="column" align="center">
        <Box width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title="WCG MT4" />
          <InfoTitleSub title={t('efficientAndFreeTrading')} />
          <Image src="../assets/images/mt4overview_1.png" alt="device" />
        </Box>
        <Flex
          my={10}
          direction={{ base: 'column', xl: 'row' }}
          justify="center"
          align="center"
        >
          <InfoCard
            image={
              <Image src="../assets/images/mt4overview_icon1.png" alt="icon1" />
            }
            title={t('personalTradingIndicators')}
            text={t('MT4ProvidesSimpleAndEasyToUse')}
            minH={isChinese ? '290px' : '370px'}
            withBorder
          />

          <InfoCard
            image={
              <Image src="../assets/images/mt4overview_icon2.png" alt="icon2" />
            }
            title={t('advancedChartTools')}
            text={t('MT4Provides31Chart')}
            minH={isChinese ? '290px' : '370px'}
            withBorder
          />

          <InfoCard
            image={
              <Image src="../assets/images/mt4overview_icon3.png" alt="icon3" />
            }
            title={t('diversifiedInvestmentTransactions')}
            text={t('theBestWayToManageRisk')}
            minH={isChinese ? '290px' : '370px'}
            withBorder
          />
        </Flex>
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
      'platform'
    ]))
  }
});

export default MT4Overview;
