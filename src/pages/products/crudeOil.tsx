import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import InfoButton from '../../components/Common/InfoButton';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const crudeOil: React.FC<{}> = () => {
  const { t } = useTranslation(['crudeOil']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'hk';
  const isArabic = currentLang === 'sa';

  return (
    <Wrapper>
      {/* Crude Oil */}
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
          color="white"
          textAlign={isArabic ? 'right' : 'left'}
        >
          <Flex my={10}>
            <InfoTitle title={t('crudeOil')} />
          </Flex>

          <Text my={10}>{t('crudeOilIsNotOnly')}</Text>
          <InfoButton
            text={t('viewTradingProducts')}
            href="/products"
            option="crudeOil"
          />
        </Box>
        <Flex width={{ base: '0', xl: '40vw' }} justify="center">
          <Image src="../assets/images/crudeOil_1.png" alt="oil" />
        </Flex>
      </Flex>

      {/* How to trade commodities */}
      <Box my={20} pt={20}>
        <Center>
          <InfoTitle title={t('howToTradeCommodities')} />
        </Center>
        {/* 3 blocks */}
        <Flex
          px={10}
          py={'100px'}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image src="../assets/images/crudeOil_icon1.png" alt="icon1" />
            }
            text={t('crudeOilAndNaturalGas')}
            withBorder
            minH={isChinese ? '301px' : '349px'}
          />

          <InfoCard
            image={
              <Image src="../assets/images/crudeOil_icon2.png" alt="icon2" />
            }
            text={t('whenYouAreTradingEnergy')}
            withBorder
            minH={isChinese ? '301px' : '349px'}
          />

          <InfoCard
            image={
              <Image src="../assets/images/crudeOil_icon3.png" alt="icon3" />
            }
            text={t('supposeYouThinkThat')}
            withBorder
            minH={isChinese ? '301px' : '349px'}
          />
        </Flex>
      </Box>

      {/* Basic knowledge of crude oil */}
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
          <Image src="../assets/images/crudeOil_2.png" alt="crudeOil_2" />
        </Box>
        <Box
          my={{ base: 10, xl: 0 }}
          width={{ base: '80vw', xl: '40vw' }}
          textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
        >
          <InfoTitle title={t('basicKnowledgeOfCrudeOil')} />
          <Text my={3}>{t('crudeOilIsUsedInManufacturing')}</Text>
          <Text my={3}>{t('youDoNotNeedTo')}</Text>
        </Box>
      </Flex>

      {/* Types of crude oil transactions */}
      <Flex direction="column" align="center">
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('typesOfCrudeOilTransactions')} />
          <InfoTitleSub title={t('likeStocks')} />
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
        justify="center"
        align="center"
      >
        <InfoCard
          image={
            <Image src="../assets/images/crudeOil_3.png" alt="crudeOil_3" />
          }
          title={t('WTI')}
          text={t('thisIsACrudeOilProduced')}
          minH={isChinese ? '400px' : '425px'}
          bigW="40vw"
        />

        <InfoCard
          image={
            <Image src="../assets/images/crudeOil_4.png" alt="crudeOil_4" />
          }
          title={t('BRENT')}
          text={t('brentCrudeOil')}
          minH={isChinese ? '400px' : '425px'}
          bigW="40vw"
        />
      </Flex>

      {/* Major affecting crude oil price factors */}
      <Flex py={10} direction="column" align="center" bgColor="gray.100">
        <Box mt={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('majorAffectingCrudeOilPriceFactors')} />
          <InfoTitleSub title={t('crudeOilIsOneOfTheMostTraded')} />
        </Box>
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/crudeOil_icon4.png"
                alt="crudeOil_icon4"
              />
            }
            title={t('extractionAndRefining')}
            text={`${t('crudeOilExtractionAndRefining')} ${t(
              'anyTechnologicalProgress'
            )}`}
            bigW="20vw"
            minH={isChinese ? '364px' : '520px'}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/crudeOil_icon5.png"
                alt="crudeOil_icon5"
              />
            }
            title={t('consumptionAndDemand')}
            text={`${t('theLargestConsumer')} ${t(
              'theIndustrialAndEconomicSectors'
            )}`}
            bigW="20vw"
            minH={isChinese ? '364px' : '520px'}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/crudeOil_icon6.png"
                alt="crudeOil_icon6"
              />
            }
            title={t('availabilityAndSupply')}
            text={t('noMatterHowTheSupplyChanges')}
            bigW="20vw"
            minH={isChinese ? '364px' : '520px'}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/crudeOil_icon7.png"
                alt="crudeOil_icon7"
              />
            }
            title={t('naturalDisastersAndAccidents')}
            text={`${t('naturalDisastersSuchAs')} ${t(
              'firesAndMechanicalFailures'
            )}`}
            bigW="20vw"
            minH={isChinese ? '364px' : '520px'}
          />
        </Flex>
      </Flex>

      {/* You need to be familiar with and regularly review two crude oil reports */}
      <Flex direction="column" align="center">
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('youNeedToBeFamiliarWith')} />
        </Box>
      </Flex>

      <Flex
        pb={20}
        direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
        justify="center"
        align="center"
      >
        <InfoCard
          image={
            <Image src="../assets/images/crudeOil_5.png" alt="crudeOil_5" />
          }
          title={t('USDepartmentOfEnergy')}
          text={t('theUSDepartmentOfEnergy')}
          minH={isChinese ? '408px' : '492px'}
          bigW="40vw"
        />

        <InfoCard
          image={
            <Image src="../assets/images/crudeOil_6.png" alt="crudeOil_6" />
          }
          title={t('OPEC')}
          text={t('theCrudeOilReportYouShouldStudy')}
          minH={isChinese ? '408px' : '492px'}
          bigW="40vw"
        />
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
      'crudeOil'
    ]))
  }
});

export default crudeOil;
