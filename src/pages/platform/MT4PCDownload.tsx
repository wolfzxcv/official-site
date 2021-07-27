import { Box, Center, Flex, Image, List } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import InfoCard from '../../components/Common/InfoCard';
import InfoCardSm from '../../components/Common/InfoCardSm';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import DownloadButton from '../../components/Platform/DownloadButton';
import InfoList from '../../components/Platform/InfoList';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const MT4PCDownload: React.FC<{}> = () => {
  const { t } = useTranslation(['platform']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* MT4 PC version */}
      <Flex
        minH="500px"
        justify="center"
        align="center"
        py={20}
        px={{ base: 0, xl: 20 }}
        background={{
          base: 'gray.600',
          xl: 'linear-gradient(to bottom right, #4A5568, #4A5568 75%, transparent 30% , transparent);'
        }}
      >
        <Box
          width={{ base: '80vw', md: '60vw' }}
          px={{ base: 0, xl: 20 }}
          textAlign={isArabic ? 'right' : 'left'}
        >
          <Flex color="white" align="center" mb={5}>
            <Image
              boxSize="40px"
              mr={5}
              src="../assets/images/mt4pcdownload_pc.png"
              alt="pc"
            />

            <InfoTitle title={t('MT4PcVersion')} />
          </Flex>
          <InfoTitleSub title={t('MetaTrader4IsTheMostPopular')} />

          <Box
            mt={20}
            width={{ base: 'auto', xl: isChinese ? '200px' : '400px' }}
          >
            <DownloadButton
              href="https://download.mql5.com/cdn/web/17749/mt4/wenchuangloballtd4setup.exe"
              text={t('downloadImmediately')}
            />
          </Box>
        </Box>
        <Box width={{ base: '0', xl: '40vw' }}>
          <Image src="../assets/images/mt4pcdownload_1.png" alt="pc" />
        </Box>
      </Flex>

      {/* Comprehensive technical analysis function */}
      <Flex py={20} align="center" direction="column">
        <Box my={10} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('comprehensiveTechnicalAnalysisFunction')} />
          <InfoTitleSub title={t('professionalIconFunctions')} />
        </Box>
        <Flex wrap="wrap" justify="center">
          <InfoCardSm
            image={
              <Image
                src="../assets/images/mt4pcdownload_icon1.png"
                alt="icon1"
              />
            }
            text={t('automaticChartingRecords')}
          />
          <InfoCardSm
            image={
              <Image
                src="../assets/images/mt4pcdownload_icon2.png"
                alt="icon2"
              />
            }
            text={t('selfDefinedTechnicalIndicators')}
          />
          <InfoCardSm
            image={
              <Image
                src="../assets/images/mt4pcdownload_icon3.png"
                alt="icon3"
              />
            }
            text={t('supportMultipleWindows')}
          />
          <InfoCardSm
            image={
              <Image
                src="../assets/images/mt4pcdownload_icon4.png"
                alt="icon4"
              />
            }
            text={t('simpleChartingOperation')}
          />
          <InfoCardSm
            image={
              <Image
                src="../assets/images/mt4pcdownload_icon5.png"
                alt="icon5"
              />
            }
            text={t('nineChartingTimePeriods')}
          />
        </Flex>
      </Flex>

      {/* Why choose MetaTrader 4 platform? */}
      <Flex
        bgColor="gray.100"
        w="100%"
        my={10}
        py={{ base: 0, xl: 20 }}
        direction={{ base: 'column', xl: 'row' }}
        justify="space-around"
        align="center"
      >
        <Box width={{ base: '100%', xl: '40vw' }}>
          <Center>
            <Image src="../assets/images/mt4pcdownload_2.png" alt="device" />
          </Center>
        </Box>
        <Box
          my={{ base: 10, xl: 0 }}
          width={{ base: '80vw', xl: '40vw' }}
          textAlign={isArabic ? 'right' : 'left'}
        >
          <InfoTitle title={t('whyChoose')} />

          <List spacing={3} my={10}>
            <InfoList text={t('MT4IsTheMostPopularForeign')} />
            <InfoList text={t('itHasWonVariousAwards')} />
            <InfoList text={t('moreThan50Preset')} />
            <InfoList text={t('aNumberOfTradingProducts')} />
            <InfoList text={t('compatibleWithExpertAdvisors')} />
            <InfoList text={t('itHasAMobileVersion')} />
            <InfoList text={t('provideAnAdvanced')} />
          </List>
        </Box>
      </Flex>

      {/* Download the WCG MT4 trading platform now */}
      <Flex py={20} align="center" direction="column">
        <Box my={10} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('downloadTheWCGMT4')} />
          <InfoTitleSub title={t('usingMT4AllowsYou')} />
        </Box>
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/mt4pcdownload_3.png"
                alt="pcdownload_3"
              />
            }
            title={t('tradingSystem')}
            text={t('includesCurrentPriceExecution')}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/mt4pcdownload_4.png"
                alt="pcdownload_4"
              />
            }
            title={t('technicalAnalysis')}
            text={t('MT4ProvidesAMoreComprehensive')}
          />
          <InfoCard
            image={
              <Image
                src="../assets/images/mt4pcdownload_5.png"
                alt="pcdownload_5"
              />
            }
            title={t('safeAndConvenient')}
            text={t('advancedTradingAndAnalysisFunctions')}
          />
        </Flex>
      </Flex>

      <Center>
        <Box
          mb={20}
          width={{ base: 'auto', xl: isChinese ? '200px' : '400px' }}
        >
          <DownloadButton
            href="https://download.mql5.com/cdn/web/17749/mt4/wenchuangloballtd4setup.exe"
            text={t('downloadImmediately')}
          />
        </Box>
      </Center>
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

export default MT4PCDownload;
