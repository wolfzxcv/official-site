import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import MT4DownloadOption from '../../components/Platform/MT4DownloadOption';
import { Locales } from '../../i18n/locales';

const MT4Overview: React.FC<{}> = () => {
  const { t } = useTranslation(['platform']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* WCG MT4 */}
      <Flex my={10} direction="column" align="center">
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title="WCG MT4" />
          <InfoTitleSub title={t('efficientAndFreeTrading')} />
          <Image src="../assets/images/mt4overview_1.jpg" alt="device" />
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

        {/* Intuitive and easy to use */}
        <Flex
          bgColor="gray.100"
          w={'100%'}
          mt={10}
          py={20}
          direction={{ base: 'column', xl: 'row' }}
          justify="space-around"
          align="center"
        >
          <Box width={{ base: '60vw', xl: '40vw' }}>
            <Image src="../assets/images/mt4overview_2.jpg" alt="device" />
          </Box>
          <Box
            my={{ base: 10, xl: 0 }}
            width={{ base: '80vw', xl: '40vw' }}
            textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
          >
            <InfoTitle title={t('intuitiveAndEasyToUse')} />
            <Text my={3}>{t('completeAndComprehensiveReports')}</Text>
          </Box>
        </Flex>

        {/* Automatic adaptability and scalability */}
        <Flex
          bgColor="gray.100"
          w={'100%'}
          py={{ base: 20, xl: 0 }}
          direction={{ base: 'column-reverse', xl: 'row' }}
          justify="space-around"
          align="center"
        >
          <Box
            my={{ base: 10, xl: 0 }}
            width={{ base: '80vw', xl: '40vw' }}
            textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
          >
            <InfoTitle title={t('automaticAdaptabilityAndScalability')} />
            <Text my={3}>{t('throughTheFurtherDevelopment')}</Text>
          </Box>
          <Box width={{ base: '60vw', xl: '40vw' }}>
            <Image src="../assets/images/mt4overview_3.jpg" alt="device" />
          </Box>
        </Flex>
      </Flex>

      {/* Download WCG MT4 trading platform */}
      <Flex py={20} align="center" direction="column">
        <Box my={10} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('downloadWCGMT4TradingPlatform')} />
          <InfoTitleSub title={t('leadingTradingAndNetworkTechnology')} />
        </Box>
        <Flex>
          <MT4DownloadOption
            href="https://apps.apple.com/us/app/metatrader-4/id496212596"
            image={
              <Image
                src="../assets/images/mt4overview_ios.png"
                alt="forIPhone"
              />
            }
            text={t('forIPhone')}
            inMobile
          />
          <MT4DownloadOption
            href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en&referrer=ref_id%3d5189084203383832573%26server%3dWenChuanGlobalLtd-Demo%252cWenChuanGlobalLtd-Live"
            image={
              <Image
                src="../assets/images/mt4overview_android.png"
                alt="forAndroid"
              />
            }
            text={t('forAndroid')}
            inMobile
          />
          <MT4DownloadOption
            href="https://download.mql5.com/cdn/web/17749/mt4/wenchuangloballtd4setup.exe"
            image={
              <Image src="../assets/images/mt4overview_pc.png" alt="forPC" />
            }
            text={t('forPC')}
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
