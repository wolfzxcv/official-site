import Wrapper from '@/components/Base/Wrapper';
import InfoButton from '@/components/Common/InfoButton';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import InfoTitleSub from '@/components/Common/InfoTitleSub';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';

const indexTrading: React.FC<{}> = () => {
  const { t } = useTranslation('indexTrading');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* Index trading */}
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
            <InfoTitle title={t('indexTrading')} />
          </Flex>

          <Text my={10}>{t('indexAlsoKnownAs')}</Text>
          <InfoButton
            text={t('viewTradingProducts')}
            href="/products"
            option="index"
          />
        </Box>
        <Flex width={{ base: '0', xl: '40vw' }} justify="center">
          <Image src="../assets/images/indexTrading_1.png" alt="indexTrading" />
        </Flex>
      </Flex>

      {/* The basis of trading indexes */}
      <Flex my={20} direction="column" align="center">
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('theBasisOfTradingIndexes')} />
          <InfoTitleSub title={t('indexesAllowUs')} />
        </Box>
        <Flex
          m={10}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_icon1.png"
                alt="icon1"
              />
            }
            title={t('marketValueWeightedIndex')}
            text={t('TheMarketValueWeightedIndex')}
            bigW="40vw"
            withBorder
            minH={isChinese ? 'auto' : '361px'}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_icon2.png"
                alt="icon2"
              />
            }
            title={t('priceWeightedIndex')}
            text={t('thisTypeOfIndex')}
            bigW="40vw"
            withBorder
            minH={isChinese ? 'auto' : '361px'}
          />
        </Flex>
      </Flex>

      {/* The world's nine major indexes */}
      <Flex py={20} direction="column" align="center" bg="gray.100">
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('theWorldsNineMajorIndexes')} />
          <InfoTitleSub title={t('takeALookAtThePerformance')} />
        </Box>

        {/* SPX500 column */}
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_SPX500.jpg"
                alt="SPX500"
              />
            }
            title={t('SPX500')}
            text={t('theWorldsMostWellKnown')}
          />

          <InfoCard
            image={
              <Image src="../assets/images/indexTrading_US30.jpg" alt="US30" />
            }
            title={t('US30')}
            text={t('stocksFrom30Companies')}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_NASDAQ.jpg"
                alt="NASDAQ"
              />
            }
            title={t('NASDAQ')}
            text={t('americasMostFamous')}
          />
        </Flex>

        {/* UK100 column */}
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_UK100.jpg"
                alt="UK100"
              />
            }
            title={t('UK100')}
            text={t('itContainsSomeLargeCompanies')}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_GER30.jpg"
                alt="GER30"
              />
            }
            title={t('GER30')}
            text={t('thisIndexConsistsOf')}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_JPN225.jpg"
                alt="JPN225"
              />
            }
            title={t('JPN225')}
            text={t('theMostPopularIndex')}
          />
        </Flex>

        {/* AUS200 column */}
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_AUS200.jpg"
                alt="AUS200"
              />
            }
            title={t('AUS200')}
            text={t('theIndexConsistsOfThe200')}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_FRA40.jpg"
                alt="FRA40"
              />
            }
            title={t('FRA40')}
            text={t('theBenchmarkIndex')}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/indexTrading_ESTX50.jpg"
                alt="ESTX50"
              />
            }
            title={t('ESTX50')}
            text={t('itIsComposedOf50')}
          />
        </Flex>
      </Flex>

      {/* How to trade index */}
      <Flex direction="column" align="center">
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('howToTradeIndex')} />
          <Box my={10}>{t('indexTradingProvidesTraders')}</Box>
        </Box>
      </Flex>

      {/* Identify trading opportunities */}
      <Flex
        py={20}
        direction="column"
        align="center"
        bg="gray.600"
        color="white"
      >
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('identifyTradingOpportunities')} />
          <Box py={10} textAlign={isArabic ? 'right' : 'left'}>
            <Stack spacing={5}>
              <Text>{t('theMostImportantInformation')}</Text>
              <Text>{t('takeTheGermanDAX')}</Text>
              <Text>{t('itShouldBeNoted')}</Text>

              <Box color="red.400">
                <InfoTitle size="22px" title={t('correlationBetween')} />
              </Box>

              <Text>{t('thePerformanceOfTheSP500')}</Text>
              <Text>{t('theChartBelow')}</Text>

              <Box py={10}>
                <Image src="../assets/images/indexTrading_2.png" alt="data" />
              </Box>

              <Text>{t('anIndexIsEitherBasedOn')}</Text>
            </Stack>

            <Stack mt={10} spacing={3}>
              <Box color="red.400">
                <InfoTitle size="22px" title={t('theDifferenceBetween')} />
              </Box>
              <Text>{t('inOrderToEvaluate')}</Text>

              <Box color="tomato">
                <InfoTitle size="18px" title={t('typeOfCompanies')} />
              </Box>

              <Text>{t('theUnitedStatesHas')}</Text>

              <Box color="tomato">
                <InfoTitle
                  size="18px"
                  title={t(
                    'theDifferenceBetweenTotalReturnIndexAndPriceReturnIndex'
                  )}
                />
              </Box>

              <Text>{t('theTypicalFeature')}</Text>
            </Stack>

            <Stack my={10}>
              <Text>{t('whenIndexPricesDiverge')}</Text>
            </Stack>
          </Box>
        </Box>
      </Flex>

      {/* Trading Index Contract */}
      <Flex my={20} direction="column" align="center">
        <Box pt={10} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('tradingIndexContract')} />
          <InfoTitleSub title={t('aCommitmentToPurchase')} />
          <InfoTitleSub title={t('CFDsAllowIndividuals')} />
        </Box>
        <Flex
          m={10}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            icon={<HiTrendingDown fontSize="32px" />}
            title={t('buy')}
            text={t('executingABuyOrder')}
            bigW="40vw"
            withBorder
            minH={isChinese ? 'auto' : '378px'}
          />

          <InfoCard
            icon={<HiTrendingUp fontSize="32px" />}
            title={t('sell')}
            text={t('executingASellOrder')}
            bigW="40vw"
            withBorder
            minH={isChinese ? 'auto' : '378px'}
          />
        </Flex>
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
      'indexTrading'
    ]))
  }
});

export default indexTrading;
