import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import { InfoAccordionItemProps } from '../../components/Common/InfoAccordion';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import { Locales } from '../../i18n/locales';

const InfoAccordion = dynamic(
  () => import('../../components/Common/InfoAccordion'),
  { ssr: false }
);

const intermediateTrading: React.FC<{}> = () => {
  const { t } = useTranslation(['intermediateTrading']);
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const data: InfoAccordionItemProps[] = [
    {
      title: t('MT4Tips'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('personalizationOfTheChart')
        },
        {
          type: 'text',
          objectKey: t('youCanPersonalizeYourChart')
        },
        {
          type: 'title',
          objectKey: t('hidingTheSellingPriceLine')
        },
        {
          type: 'text',
          objectKey: t('ifYouAddALotOfIndicators')
        },
        {
          type: 'title',
          objectKey: t('setDefaultChart')
        },
        {
          type: 'text',
          objectKey: t('onceYouHaveSetUpAVery')
        },
        {
          type: 'text',
          objectKey: t('ifYouWantToSetTheMost')
        },
        {
          type: 'title',
          objectKey: t('economicCalendar')
        },
        {
          type: 'text',
          objectKey: t('soHowCanWeKeepAnEye')
        },
        {
          type: 'text',
          objectKey: t('theEconomicCalendarLists')
        },
        {
          type: 'title',
          objectKey: t('customizationOfToolbars')
        },
        {
          type: 'text',
          objectKey: t('common')
        },
        {
          type: 'text',
          objectKey: t('chart')
        },
        {
          type: 'text',
          objectKey: t('drawLine')
        },
        {
          type: 'text',
          objectKey: t('cycle')
        },
        {
          type: 'text',
          objectKey: t('youCanSimplyDragThe')
        },
        {
          type: 'text',
          objectKey: t('hereYouCanComplete')
        },
        {
          type: 'text',
          objectKey: t('throughTheAboveOperations')
        },
        {
          type: 'title',
          objectKey: t('usingShortcutKeys')
        },
        {
          type: 'text',
          objectKey: t('keyboardShortcutsAre')
        },
        {
          type: 'text',
          objectKey: t('inTheLongRunThisWill')
        },
        {
          type: 'text',
          objectKey: t('terminal')
        },
        {
          type: 'text',
          objectKey: t('controlT')
        },
        {
          type: 'text',
          objectKey: t('thisIsTheMainWindow')
        },
        {
          type: 'text',
          objectKey: t('navigate')
        },
        {
          type: 'text',
          objectKey: t('controlN')
        },
        {
          type: 'text',
          objectKey: t('toAddIndicators')
        },
        {
          type: 'text',
          objectKey: t('marketQuotation')
        },
        {
          type: 'text',
          objectKey: t('controlM')
        },
        {
          type: 'text',
          objectKey: t('viewProductQuotation')
        },
        {
          type: 'text',
          objectKey: t('dataWindow')
        },
        {
          type: 'text',
          objectKey: t('controlD')
        },
        {
          type: 'text',
          objectKey: t('viewAllDataInformation')
        },
        {
          type: 'title',
          objectKey: t('usingShortcutKeys')
        },
        {
          type: 'text',
          objectKey: t('onTheMT4Platform')
        },
        {
          type: 'text',
          objectKey: t('theSpecificOperation')
        },
        {
          type: 'title',
          objectKey: t('favoriteIndicatorList')
        },
        {
          type: 'text',
          objectKey: t('inOrderToSimplifyThe')
        },
        {
          type: 'text',
          objectKey: t('openTheNavigationWindow')
        },
        {
          type: 'text',
          objectKey: t('expandTheRelevantContent')
        },
        {
          type: 'text',
          objectKey: t('moveTheMouseCursor')
        },
        {
          type: 'text',
          objectKey: t('rightClickTheMouse')
        },
        {
          type: 'text',
          objectKey: t('selectAddToFavorites')
        },
        {
          type: 'title',
          objectKey: t('alerts')
        },
        {
          type: 'text',
          objectKey: t('throughTheAlertFunction')
        }
      ]
    },
    {
      title: t('riskManagement'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('payAttentionToTheRisk')
        },
        {
          type: 'text',
          objectKey: t('beforePlacingATrade')
        },
        {
          type: 'text',
          objectKey: t('theSettingOfTheStop')
        },
        {
          type: 'text',
          objectKey: t('someTradersAreOnlyWilling')
        },
        {
          type: 'text',
          objectKey: t('onceYouHaveDeterminedThis')
        },
        {
          type: 'text',
          objectKey: t('theMarketPriceGapRefers')
        },
        {
          type: 'title',
          objectKey: t('example')
        },
        {
          type: 'text',
          objectKey: t('upposeYouHaveAUD10')
        },
        {
          type: 'text',
          objectKey: t('trade1LotOfAUDUSDInAn')
        },
        {
          type: 'text',
          objectKey: t('transactionVolume')
        },
        {
          type: 'text',
          objectKey: t('yiPip00001')
        },
        {
          type: 'text',
          objectKey: t('aUDUSDexchangeRate')
        },
        {
          type: 'text',
          objectKey: t('pipValue0000107465')
        },
        {
          type: 'text',
          objectKey: t('asYouCanSeeTradingDifferent')
        },
        {
          type: 'text',
          objectKey: t('toCalculateTheSpecificPrice')
        },
        {
          type: 'text',
          objectKey: t('aUDUSD')
        },
        {
          type: 'text',
          objectKey: t('nZDCAD')
        },
        {
          type: 'text',
          objectKey: t('ifYouWantToSetALargerStop')
        },
        {
          type: 'text',
          objectKey: t('inTheCaseOfTrading')
        },
        {
          type: 'text',
          objectKey: t('pleaseRememberThat')
        }
      ]
    },
    {
      title: t('howToCreateATradingStrategy'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('howToCreateATradingStrategy')
        },
        {
          type: 'text',
          objectKey: t('ifYouWantToBecomeATrader')
        },
        {
          type: 'title',
          objectKey: t('assessYourSkills')
        },
        {
          type: 'text',
          objectKey: t('haveYouTestedYourStrategy')
        },
        {
          type: 'title',
          objectKey: t('psychologicalPreparation')
        },
        {
          type: 'text',
          objectKey: t('tradingCanAffectYourEmotions')
        },
        {
          type: 'title',
          objectKey: t('risksManagement')
        },
        {
          type: 'text',
          objectKey: t('whenYouAreTrading')
        },
        {
          type: 'title',
          objectKey: t('settingGoals')
        },
        {
          type: 'text',
          objectKey: t('beforeYouStartTrading')
        },
        {
          type: 'title',
          objectKey: t('prepareToTrade')
        },
        {
          type: 'text',
          objectKey: t('beforeYouOYourFirst')
        },
        {
          type: 'title',
          objectKey: t('positionOpeningAndClosing')
        },
        {
          type: 'text',
          objectKey: t('beforeOpeningAPosition')
        },
        {
          type: 'text',
          objectKey: t('youShouldOpenPositions')
        },
        {
          type: 'text',
          objectKey: t('youShouldAlsoCloseThePosition')
        },
        {
          type: 'title',
          objectKey: t('recordAllMatters')
        },
        {
          type: 'text',
          objectKey: t('recordTheOverallTrading')
        },
        {
          type: 'text',
          objectKey: t('theKeyInformationThatNeeds')
        },
        {
          type: 'text',
          objectKey: t('openingPrice')
        },
        {
          type: 'text',
          objectKey: t('closingPrice')
        },
        {
          type: 'text',
          objectKey: t('yourInitialStopLoss')
        },
        {
          type: 'text',
          objectKey: t('positionSize')
        },
        {
          type: 'text',
          objectKey: t('reasonForOpeningAPosition')
        },
        {
          type: 'text',
          objectKey: t('psychologyDuringThe')
        },
        {
          type: 'text',
          objectKey: t('whetherItIsProfitOrLoss')
        },
        {
          type: 'text',
          objectKey: t('openingAndClosingPositions')
        },
        {
          type: 'text',
          objectKey: t('ifYouWantToBeAConsistent')
        }
      ]
    },
    {
      title: t('commonChartPatterns'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('whatIsAChartPattern')
        },
        {
          type: 'text',
          objectKey: t('inTheMarketBuyersAnd')
        },
        {
          type: 'text',
          objectKey: t('typicalChartPatterns')
        },
        {
          type: 'title',
          objectKey: t('headAndShoulders')
        },
        {
          type: 'text',
          objectKey: t('topAndHeadAndShoulders')
        },
        {
          type: 'title',
          objectKey: t('aTypicalHeadAndShoulders')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_1.png'
        },
        {
          type: 'text',
          objectKey: t('whenThePriceRisesAnd')
        },
        {
          type: 'text',
          objectKey: t('whenYouFindAHeadAnd')
        },
        {
          type: 'text',
          objectKey: t('moreCautiousTraders')
        },
        {
          type: 'text',
          objectKey: t('afterTheTradeIsOpened')
        },
        {
          type: 'text',
          objectKey: t('inAdditionYouMaySometimes')
        },
        {
          type: 'title',
          objectKey: t('theFigureBelowShowsThe')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_2.png'
        },
        {
          type: 'title',
          objectKey: t('doubleTopAndDoubleBottom')
        },
        {
          type: 'text',
          objectKey: t('doubleTopPatternOften')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_3.png'
        },
        {
          type: 'text',
          objectKey: t('nTermsOfTheTimingOfEntry')
        },
        {
          type: 'text',
          objectKey: t('theProfitTargetIsSetAtThe')
        },
        {
          type: 'text',
          objectKey: t('theReverseOfADoubleTop')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_4.png'
        },
        {
          type: 'title',
          objectKey: t('flagPattern')
        },
        {
          type: 'text',
          objectKey: t('theFlagPatternIsDifferent')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_5.png'
        },
        {
          type: 'text',
          objectKey: t('theAbovePictureIs')
        },
        {
          type: 'text',
          objectKey: t('takeTheFlagTrendInTheAbove')
        },
        {
          type: 'text',
          objectKey: t('calculateTheNumberOfPoints')
        },
        {
          type: 'text',
          objectKey: t('theFigureBelowShowsTheFlag')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_6.png'
        },
        {
          type: 'text',
          objectKey: t('theAboveContentCanBe')
        }
      ]
    },
    {
      title: t('stopLossAndTakeProfit'),
      complexContent: [
        {
          type: 'text',
          objectKey: t('stopLossCanHelp')
        },
        {
          type: 'title',
          objectKey: t('exampleOfStopLoss')
        },
        {
          type: 'text',
          objectKey: t('supposeThereIsAn')
        },
        {
          type: 'text',
          objectKey: t('itIsWorthNotingThat')
        },
        {
          type: 'title',
          objectKey: t('howMuchStopLoss')
        },
        {
          type: 'text',
          objectKey: t('onceYouOpenAPosition')
        },
        {
          type: 'title',
          objectKey: t('trailingStopLoss')
        },
        {
          type: 'text',
          objectKey: t('wheneverThePriceMoves')
        },
        {
          type: 'text',
          objectKey: t('profitTargetProfit')
        },
        {
          type: 'title',
          objectKey: t('profitTarget')
        },
        {
          type: 'text',
          objectKey: t('profitTargetProfitTarget')
        }
      ]
    },
    {
      title: t('exampleOfStopLoss'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('marketOrder')
        },
        {
          type: 'text',
          objectKey: t('aMarketOrder')
        },
        {
          type: 'title',
          objectKey: t('pendingOrder')
        },
        {
          type: 'text',
          objectKey: t('aPendingOrder')
        },
        {
          type: 'title',
          objectKey: t('typesOfPendingOrders')
        },
        {
          type: 'text',
          objectKey: t('stopLossPending')
        },
        {
          type: 'text',
          objectKey: t('takeProfitPending')
        },
        {
          type: 'title',
          objectKey: t('stopLossEntryOrder')
        },
        {
          type: 'text',
          objectKey: t('theFollowingFigure')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_7.png'
        },
        {
          type: 'title',
          objectKey: t('takeProfitPendingOrder')
        },
        {
          type: 'text',
          objectKey: t('theFigureBelowShows')
        },
        {
          type: 'text',
          objectKey: t('stopLossPendingOrders')
        }
      ]
    },
    {
      title: t('chartAnalysis'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('readTheChart')
        },
        {
          type: 'text',
          objectKey: t('chartsAreTheCore')
        },
        {
          type: 'text',
          objectKey: t('theFirstThingTo')
        },
        {
          type: 'title',
          objectKey: t('timeXAxisFromLeftToRight')
        },
        {
          type: 'text',
          objectKey: t('theXAxisOnTheChart')
        },
        {
          type: 'title',
          objectKey: t('priceYAxisFromTopToBottom')
        },
        {
          type: 'text',
          objectKey: t('youCanReadThePrice')
        },
        {
          type: 'title',
          objectKey: t('priceComposition')
        },
        {
          type: 'text',
          objectKey: t('onTheCandlestick')
        },
        {
          type: 'text',
          objectKey: t('openingPriceThis')
        },
        {
          type: 'text',
          objectKey: t('highestPrice')
        },
        {
          type: 'text',
          objectKey: t('lowestPrice')
        },
        {
          type: 'text',
          objectKey: t('closingPriceThe')
        },
        {
          type: 'text',
          objectKey: t('atTheEndOfAPeriod')
        }
      ]
    },
    {
      title: t('sellingPrice'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('spread')
        },
        {
          type: 'text',
          objectKey: t('theCompleteQuotation')
        },
        {
          type: 'text',
          objectKey: t('theLargerTheTransaction')
        },
        {
          type: 'text',
          objectKey: t('forTradersWhoTrade')
        },
        {
          type: 'image',
          objectKey: '../assets/images/course_8.png'
        },
        {
          type: 'text',
          objectKey: t('theAboveIsAScreenshot')
        },
        {
          type: 'title',
          objectKey: t('buyOrderLongPosition')
        },
        {
          type: 'text',
          objectKey: t('quotation')
        },
        {
          type: 'text',
          objectKey: t('theOpeningPriceForBuying')
        },
        {
          type: 'title',
          objectKey: t('sellOrderShortPosition')
        },
        {
          type: 'text',
          objectKey: t('theOpeningPriceForSelling')
        },
        {
          type: 'text',
          objectKey: t('inBothCases')
        }
      ]
    }
  ];

  return (
    <Wrapper>
      <Flex display="flex" p={10} direction="column" align="center">
        <InfoTitle title={t('intermediateTradingCourse')} />
        <InfoTitleSub title={t('makeYourTradingMore')} />

        <InfoAccordion data={data} />

        <Flex justifyContent="space-around" w="80vw">
          <Box my={5}>
            <NextLink href="/learnTrade/basicTrading" locale={currentLang}>
              <IconButton
                size="lg"
                bg="gray.600"
                _hover={{
                  bgColor: 'gray.600'
                }}
                color="white"
                title={t('basicTradingCourse')}
                aria-label={t('basicTradingCourse')}
                icon={<ArrowBackIcon fontSize="40px" />}
              />
            </NextLink>
          </Box>

          <Box my={5}>
            <NextLink href="/learnTrade/advancedTrading" locale={currentLang}>
              <IconButton
                size="lg"
                bg="gray.600"
                _hover={{
                  bgColor: 'gray.600'
                }}
                color="white"
                title={t('advancedTradingCourse')}
                aria-label={t('advancedTradingCourse')}
                icon={<ArrowForwardIcon fontSize="40px" />}
              />
            </NextLink>
          </Box>
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
      'intermediateTrading'
    ]))
  }
});

export default intermediateTrading;
