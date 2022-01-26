import Wrapper from '@/components/Base/Wrapper';
import { InfoAccordionItemProps } from '@/components/Common/InfoAccordion';
import InfoTitle from '@/components/Common/InfoTitle';
import InfoTitleSub from '@/components/Common/InfoTitleSub';
import { Locales } from '@/i18n/config';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const InfoAccordion = dynamic(
  () => import('@/components/Common/InfoAccordion'),
  { ssr: false }
);

const basicTrading: React.FC<{}> = () => {
  const { t } = useTranslation('basicTrading');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const data: InfoAccordionItemProps[] = [
    {
      title: t('whatIsForeignExchangeTrading'),
      complexContent: [
        {
          type: 'text',
          objectKey: t('theForeignExchangeMarket')
        },
        {
          type: 'text',
          objectKey: t('theForeignExchangeMarketIsUsually')
        },
        {
          type: 'title',
          objectKey: t('globalMarket')
        },
        {
          type: 'text',
          objectKey: t('thisIsAGlobalMarket')
        },
        {
          type: 'text',
          objectKey: t('globalEconomic')
        },
        {
          type: 'title',
          objectKey: t('decentralizedMarket')
        },
        {
          type: 'text',
          objectKey: t('decentralizedMarketMeans')
        },
        {
          type: 'text',
          objectKey: t('insteadFinancialCenters')
        },
        {
          type: 'title',
          objectKey: t('overTheCounterTransactions')
        },
        {
          type: 'text',
          objectKey: t('theForeignExchangeMarketIsNotControlled')
        },
        {
          type: 'text',
          objectKey: t('brokersAndTraders')
        },
        {
          type: 'text',
          objectKey: t('thisKindOfMarket')
        },
        {
          type: 'title',
          objectKey: t('tradingForeignExchange')
        },
        {
          type: 'text',
          objectKey: t('forActiveTraders')
        },
        {
          type: 'text',
          objectKey: t('differentCurrency')
        },
        {
          type: 'title',
          objectKey: t('comparedWithOtherMarkets')
        },
        {
          type: 'text',
          objectKey: t('theDailyTradingVolume')
        },
        {
          type: 'text',
          objectKey: t('whatFactorsPlayAKeyRole')
        },
        {
          type: 'text',
          objectKey: t('LetsTakeAnotherExample')
        },
        {
          type: 'text',
          objectKey: t('similarToStocks')
        }
      ]
    },
    {
      title: t('howToStartTrading'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('step1')
        },
        {
          type: 'text',
          objectKey: t('weOfferTo')
        },
        {
          type: 'buttonLink',
          objectKey: t('applyForARealAccountNow'),
          secondKey: 'https://trader.wc012.com/register'
        },
        {
          type: 'title',
          objectKey: t('step2')
        },
        {
          type: 'text',
          objectKey: t('afterYourRealAccount')
        },
        {
          type: 'buttonLink',
          objectKey: t('depositFundsNow'),
          secondKey: 'https://trader.wc012.com/register'
        },
        {
          type: 'title',
          objectKey: t('step3')
        },
        {
          type: 'text',
          objectKey: t('nowThatYourTradingAccount')
        },
        {
          type: 'twoSection',
          objectKey: t('understandTheMarket'),
          secondKey: t('knowWhatYouWantTo')
        },
        {
          type: 'twoSection',
          objectKey: t('understandTheOperation'),
          secondKey: t('beforeMaking')
        },
        {
          type: 'twoSection',
          objectKey: t('startYourTransaction'),
          secondKey: t('afterYouAreFamiliarWith')
        }
      ]
    },
    {
      title: t('factorsAffectingTheMarket'),
      complexContent: [
        {
          type: 'text',
          objectKey: t('earlierWeIntroducedYou')
        },
        {
          type: 'text',
          objectKey: t('rememberThatTheMajorPlayers')
        },
        {
          type: 'text',
          objectKey: t('changesInGDP')
        },
        {
          type: 'title',
          objectKey: t('newsOrEvents')
        },
        {
          type: 'text',
          objectKey: t('grossDomesticProductGDP')
        },
        {
          type: 'text',
          objectKey: t('interestRate')
        },
        {
          type: 'text',
          objectKey: t('employment')
        },
        {
          type: 'text',
          objectKey: t('tradeSurplus')
        },
        {
          type: 'text',
          objectKey: t('forceMajeureEvent')
        },
        {
          type: 'title',
          objectKey: t('nonFarmPayroll')
        },
        {
          type: 'text',
          objectKey: t('theMostInfluentialMarketData')
        },
        {
          type: 'title',
          objectKey: t('economicCalendar')
        },
        {
          type: 'text',
          objectKey: t('soHowCanWeKeepAnEyeOn')
        },
        {
          type: 'text',
          objectKey: t('theEconomicCalendarListsTheNews')
        },
        {
          type: 'title',
          objectKey: t('tradingForeignExchange')
        },
        {
          type: 'text',
          objectKey: t('forActiveTraders')
        },
        {
          type: 'text',
          objectKey: t('differentCurrency')
        },
        {
          type: 'title',
          objectKey: t('marketSentiment')
        },
        {
          type: 'text',
          objectKey: t('marketSentimentCanBeUsedBy')
        },
        {
          type: 'title',
          objectKey: t('newsTrading')
        },
        {
          type: 'text',
          objectKey: t('newsTradingIsAVeryPopularWay')
        },
        {
          type: 'title',
          objectKey: t('avoidNewsTrading')
        },
        {
          type: 'text',
          objectKey: t('thisIsTheThirdTradingMethod')
        }
      ]
    },
    {
      title: t('basicOperationOfTheMT4Platform'),
      complexContent: [
        {
          type: 'text',
          objectKey: t('afterTheDownloadProcess')
        },
        {
          type: 'text',
          objectKey: t('checkYesIAgreeWith')
        },
        {
          type: 'text',
          objectKey: t('theInstallationWizard')
        },
        {
          type: 'text',
          objectKey: t('thePlatformInterface')
        },
        {
          type: 'text',
          objectKey: t('logInToTheTradingAccount')
        },
        {
          type: 'text',
          objectKey: t('inThePopUpLoginWindow')
        },
        {
          type: 'text',
          objectKey: t('thePlatformWillTakeSomeTime')
        },
        {
          type: 'title',
          objectKey: t('createAMarketOrder')
        },
        {
          type: 'text',
          objectKey: t('thereAreManyWaysTo')
        },
        {
          type: 'title',
          objectKey: t('productCategory')
        },
        {
          type: 'text',
          objectKey: t('lotsEnterTheLotSize')
        },
        {
          type: 'text',
          objectKey: t('stopLossPrice')
        },
        {
          type: 'text',
          objectKey: t('takeProfitPrice')
        },
        {
          type: 'text',
          objectKey: t('sellAtMarketPriceOrBuy')
        },
        {
          type: 'text',
          objectKey: t('theOrderTypeColumn')
        },
        {
          type: 'title',
          objectKey: t('economicCalendar')
        },
        {
          type: 'text',
          objectKey: t('soHowCanWeKeepAnEyeOn')
        },
        {
          type: 'text',
          objectKey: t('theEconomicCalendarListsTheNews')
        },

        {
          type: 'title',
          objectKey: t('pendingOrder')
        },
        {
          type: 'text',
          objectKey: t('changeTheOrderType')
        },
        {
          type: 'text',
          objectKey: t('thereAreFourTypes')
        },
        {
          type: 'text',
          objectKey: t('buyLimitBuyPending')
        },
        {
          type: 'text',
          objectKey: t('sellLimitSellPending')
        },
        {
          type: 'text',
          objectKey: t('buyStopBuyPending')
        },
        {
          type: 'text',
          objectKey: t('sellStopSellPending')
        },
        {
          type: 'text',
          objectKey: t('afterSelectingTheCorresponding')
        },
        {
          type: 'title',
          objectKey: t('oneClickTrading')
        },
        {
          type: 'text',
          objectKey: t('foreignExchangePrices')
        },
        {
          type: 'text',
          objectKey: t('onTheUpperLeftCorner')
        },
        {
          type: 'title',
          objectKey: t('modifyTheOrder')
        },
        {
          type: 'text',
          objectKey: t('afterOpening')
        },
        {
          type: 'text',
          objectKey: t('inThePopUpWindow')
        },
        {
          type: 'title',
          objectKey: t('closePosition')
        },
        {
          type: 'text',
          objectKey: t('theSummaryWindowAt')
        },
        {
          type: 'text',
          objectKey: t('theAccountBalance')
        },
        {
          type: 'text',
          objectKey: t('atThisTimeWeOpened')
        },
        {
          type: 'text',
          objectKey: t('oneClickClosing')
        },
        {
          type: 'title',
          objectKey: t('accountHistory')
        },
        {
          type: 'text',
          objectKey: t('youCanFindAllClosed')
        },
        {
          type: 'text',
          objectKey: t('profitLossTheTotal')
        },
        {
          type: 'text',
          objectKey: t('depositsTotalDeposits')
        },
        {
          type: 'text',
          objectKey: t('withdrawalTheTotal')
        },
        {
          type: 'title',
          objectKey: t('openTheChartAndLoad')
        },
        {
          type: 'text',
          objectKey: t('afterTheMT4Platform')
        },
        {
          type: 'text',
          objectKey: t('ifYouWantToSwitch')
        },
        {
          type: 'text',
          objectKey: t('withMT4IsLocatedInThe')
        },
        {
          type: 'text',
          objectKey: t('afterReadingThis')
        }
      ]
    },
    {
      title: t('leverageAndMargin'),
      complexContent: [
        {
          type: 'text',
          objectKey: t('leverageAndMarginMargin')
        },
        {
          type: 'title',
          objectKey: t('assumingThatA1Lot')
        },
        {
          type: 'title',
          objectKey: t('whenTheLeverageRatioIs11')
        },
        {
          type: 'title',
          objectKey: t('whenTheLeverageRatioIs1400')
        },
        {
          type: 'text',
          objectKey: t('pleaseKeepInMindThat')
        },
        {
          type: 'text',
          objectKey: t('weUsuallyRecommendTraders')
        },
        {
          type: 'text',
          objectKey: t('stopLossPriceWhenThePrice')
        },
        {
          type: 'text',
          objectKey: t('whenUsingLeverage')
        },
        {
          type: 'text',
          objectKey: t('weRecommendThatYou')
        }
      ]
    },
    {
      title: t('whatIsACFDTransaction'),
      complexContent: [
        {
          type: 'text',
          objectKey: t('contractForDifference')
        },
        {
          type: 'title',
          objectKey: t('exploreTheCfdMarket')
        },
        {
          type: 'text',
          objectKey: t('index')
        },
        {
          type: 'text',
          objectKey: t('energy')
        },
        {
          type: 'text',
          objectKey: t('preciousMetals')
        },
        {
          type: 'text',
          objectKey: t('contractDetails')
        },
        {
          type: 'title',
          objectKey: t('WhatAreTheDifferentTypes')
        },
        {
          type: 'text',
          objectKey: t('aStockIndexAsAFinancial')
        },
        {
          type: 'text',
          objectKey: t('commodityFuturesAreAlso')
        },
        {
          type: 'text',
          objectKey: t('byOpeningAnAccountThrough')
        },
        {
          type: 'title',
          objectKey: t('whatAreTheAdvantages')
        },
        {
          type: 'text',
          objectKey: t('theMostSignificantAdvantage')
        }
      ]
    }
  ];

  return (
    <Wrapper>
      <Flex display="flex" p={10} direction="column" align="center">
        <InfoTitle title={t('basicTradingCourse')} />
        <InfoTitleSub title={t('haventHadExperience')} />

        <InfoAccordion data={data} />

        <Box my={5}>
          <NextLink href="/learnTrade/intermediateTrading" locale={currentLang}>
            <IconButton
              size="lg"
              bg="gray.600"
              _hover={{
                bgColor: 'gray.600'
              }}
              color="white"
              title={t('intermediateTradingCourse')}
              aria-label={t('intermediateTradingCourse')}
              icon={<ArrowForwardIcon fontSize="40px" />}
            />
          </NextLink>
        </Box>
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
      'basicTrading'
    ]))
  }
});

export default basicTrading;
