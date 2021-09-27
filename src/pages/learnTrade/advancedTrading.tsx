import { ArrowBackIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Flex,
  IconButton,
  Image,
  useBreakpointValue
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IAccordionItemBasicType } from '../../components/Common/InfoAccordionMultiItem';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const InfoAccordionMultiItem = dynamic(
  () => import('../../components/Common/InfoAccordionMultiItem'),
  { ssr: false }
);

const advancedTrading: React.FC<{}> = () => {
  const { t } = useTranslation(['advancedTrading']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
  const [page, setPage] = useState(0);
  const [height, setHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const widthCheck = useBreakpointValue({ base: false, xl: true });
  const data: {
    type: IAccordionItemBasicType;
    key: string;
  }[][] = [
    [
      {
        type: 'title',
        key: t('WhatIsTechnicalAnalysis')
      },
      {
        type: 'text',
        key: t('TechnicalAnalysisPredictsMarketTrends')
      },
      {
        type: 'text',
        key: t('UnlikeFundamentalAnalysis')
      },
      {
        type: 'title',
        key: t('TradersWhoUseTechnicalAnalysis')
      },
      {
        type: 'text',
        key: t('TheMarketPriceContainsAll')
      },
      {
        type: 'text',
        key: t('TheseThreePremisesAreTheBasis')
      },
      {
        type: 'text',
        key: t('ItShouldBeNotedThatTechnicalAnalysis')
      },
      {
        type: 'text',
        key: t('TheRoleOfTechnicalAnalysis')
      },
      {
        type: 'text',
        key: t('CommonMethodsOfTechnicalAnalysis')
      },
      {
        type: 'title',
        key: t('WhyIdentifyingTrends')
      },
      {
        type: 'text',
        key: t('JustUnderstandingTheChartPrice')
      },
      {
        type: 'text',
        key: t('ThereAreManyToolsForIdentifyingTrends')
      },
      {
        type: 'text',
        key: t('NoteThatAlthoughTheMinuteChart')
      },
      {
        type: 'title',
        key: t('TrendLinesSupportLinesAndResistanceLines')
      },
      {
        type: 'text',
        key: t('ATrendLineIsAStraightLine')
      },
      {
        type: 'text',
        key: t('ASupportLineRefersTo')
      },
      {
        type: 'image',
        key: '../assets/images/course_9.png'
      },
      {
        type: 'text',
        key: t('TheResistanceLineRefersTo')
      },
      {
        type: 'image',
        key: '../assets/images/course_10.png'
      },
      {
        type: 'text',
        key: t('OnTheMT4Platform')
      },
      {
        type: 'image',
        key: '../assets/images/course_11.png'
      },
      {
        type: 'text',
        key: t('ThePrincipleOfDrawingATrendLine')
      },
      {
        type: 'text',
        key: t('DrawingATrendLine')
      }
    ],
    [
      {
        type: 'title',
        key: t('FundamentalAnalysis')
      },
      {
        type: 'text',
        key: t('FundamentalAnalysisOverview')
      },
      {
        type: 'text',
        key: t('TechnicalAnalysisStudiesHistoricalPrices')
      }
    ],
    [
      {
        type: 'title',
        key: t('FibonacciRetracementLine')
      },
      {
        type: 'text',
        key: t('Definition')
      },
      {
        type: 'text',
        key: t('Effect')
      },
      {
        type: 'title',
        key: t('FibonacciRetracementLine')
      },
      {
        type: 'text',
        key: t('FibonacciRetracementsProvideUs')
      },
      {
        type: 'text',
        key: t('SomeTradersLikeToDraw')
      },
      {
        type: 'title',
        key: t('Parameter')
      },
      {
        type: 'text',
        key: t('TheOfTheUptrendOrDowntrend')
      },
      {
        type: 'title',
        key: t('ApplicationExample')
      },
      {
        type: 'text',
        key: t('IfYouFindAWaveOfUptrend')
      },
      {
        type: 'text',
        key: t('InTheMT4Platform')
      },
      {
        type: 'image',
        key: '../assets/images/course_12.png'
      },
      {
        type: 'text',
        key: t('AfterClickingThisButton')
      },
      {
        type: 'image',
        key: '../assets/images/course_13.png'
      }
    ],
    [
      {
        type: 'title',
        key: t('SupportAndResistance')
      },
      {
        type: 'text',
        key: t('SupportLevelRefers')
      },
      {
        type: 'text',
        key: t('TheMethodsToIdentify')
      },
      {
        type: 'title',
        key: t('Trendline')
      },
      {
        type: 'text',
        key: t('InTechnicalAnalysisAndTrendJudgment')
      },
      {
        type: 'text',
        key: t('SometimesWhenThePriceFalls')
      },
      {
        type: 'image',
        key: '../assets/images/course_14.png'
      },
      {
        type: 'text',
        key: t('TheAbovePictureShows')
      },
      {
        type: 'text',
        key: t('InManyCasesResistanceAndSupportLevels')
      },
      {
        type: 'title',
        key: t('PreviousHighLow')
      },
      {
        type: 'text',
        key: t('WhenTheFXRateChanges')
      },
      {
        type: 'image',
        key: '../assets/images/course_15.png'
      },
      {
        type: 'text',
        key: t('TheAbovePictureShowsThePrevious')
      },
      {
        type: 'text',
        key: t('WhenJudgingSupportAndResistanceLevels')
      },
      {
        type: 'text',
        key: t('WhenThePriceReturnsTo')
      },
      {
        type: 'image',
        key: '../assets/images/course_16.png'
      },
      {
        type: 'text',
        key: t('TheAbovePictureIsTheWeeklyChart')
      },
      {
        type: 'title',
        key: t('PatternRecognitionJudgment')
      },
      {
        type: 'text',
        key: t('ChartPatternsOftenProvide')
      },
      {
        type: 'image',
        key: '../assets/images/course_17.png'
      },
      {
        type: 'title',
        key: t('TechnicalIndexJudgment')
      },
      {
        type: 'text',
        key: t('SomeClassicalTechnicalIndicators')
      }
    ],
    [
      {
        type: 'title',
        key: t('MarketParticipants')
      },
      {
        type: 'text',
        key: t('ByUnderstandingWhoAre')
      }
    ],
    [
      {
        type: 'text',
        key: t('HereWeWillDiscuss')
      },
      {
        type: 'image',
        key: '../assets/images/course_18.png'
      },
      {
        type: 'title',
        key: t('EODTransaction')
      },
      {
        type: 'image',
        key: '../assets/images/course_19.png'
      },
      {
        type: 'text',
        key: t('ThisIsATradingStyleAdopted')
      },
      {
        type: 'text',
        key: t('IfYouAreBusy')
      },
      {
        type: 'title',
        key: t('FundamentalsMacroTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_19.png' //in the old website, 19 & 20 are same image
      },
      {
        type: 'text',
        key: t('UseFundamentalInformation')
      },
      {
        type: 'title',
        key: t('DayTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_21.png'
      },
      {
        type: 'text',
        key: t('IntradayTradersComplete')
      },
      {
        type: 'text',
        key: t('DayTradingContains')
      },
      {
        type: 'title',
        key: t('NewsTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_22.png'
      },
      {
        type: 'text',
        key: t('NewsTradersTendToFocus')
      },
      {
        type: 'title',
        key: t('LongTermTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_19.png' //in the old website, 19 & 23 are same image
      },
      {
        type: 'text',
        key: t('TheTradingStyleOfHolding')
      },
      {
        type: 'text',
        key: t('DueToTheLongerHoldingPeriod')
      },
      {
        type: 'title',
        key: t('Scalping')
      },
      {
        type: 'image',
        key: '../assets/images/course_24.png'
      },
      {
        type: 'text',
        key: t('ScalpingIsAnIntraday')
      },
      {
        type: 'text',
        key: t('IntradayAndScalpingTraders')
      },
      {
        type: 'title',
        key: t('SwingTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_25.png'
      },
      {
        type: 'text',
        key: t('AsASwingTrader')
      },
      {
        type: 'title',
        key: t('TechnicalTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_26.png'
      },
      {
        type: 'text',
        key: t('UseTechnicalAnalysisToAnalyze')
      },
      {
        type: 'title',
        key: t('TrendTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_27.png'
      },
      {
        type: 'text',
        key: t('TheTrendTradingStyleHereRefers')
      }
    ]
  ];

  useEffect(() => {
    heightCalculation();
  }, [windowWidth]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  function heightCalculation() {
    if (
      document.getElementById('heightDetect3') &&
      document.querySelector('body')
    ) {
      const bodyTop = document
        .querySelector('body')
        .getBoundingClientRect().top;
      const divTop = document
        .getElementById('heightDetect3')
        .getBoundingClientRect().top;
      setHeight(divTop - bodyTop);
      return;
    } else {
      setTimeout(() => {
        heightCalculation();
      }, 500);
    }
  }

  return (
    <Wrapper>
      <Flex
        id="heightDetect3"
        display="flex"
        py={{ base: 10, xl: 20 }}
        bgColor="gray.50"
        direction="column"
        align="center"
      >
        <InfoTitle title={t('AnalysisAndTrends')} />
        <InfoTitleSub title={t('PredictPossibleFuturePrice')} />
      </Flex>
      <Flex direction="column" align="center">
        {widthCheck && (
          <Box display="flex" my={{ base: 0, xl: 20 }}>
            <Box w="25vw" mx={3}>
              <Accordion allowMultiple allowToggle defaultIndex={[2]}>
                <AccordionItem
                  onClick={(e) => {
                    router.push('/learnTrade/basicTrading');
                  }}
                >
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="600">
                        {t('basicTradingCourse')}
                      </Box>
                      <ChevronRightIcon fontSize="20px" />
                    </AccordionButton>
                  </h2>
                </AccordionItem>
                <AccordionItem
                  onClick={(e) => {
                    router.push('/learnTrade/intermediateTrading');
                  }}
                >
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="600">
                        {t('intermediateTradingCourse')}
                      </Box>
                      <ChevronRightIcon fontSize="20px" />
                    </AccordionButton>
                  </h2>
                </AccordionItem>

                <InfoAccordionMultiItem
                  title={t('AdvancedTradingCourse')}
                  content={[
                    {
                      type: 'page',
                      key: t('TechnicalAnalysisAndMarketTrends')
                    },
                    {
                      type: 'page',
                      key: t('FundamentalAnalysis')
                    },
                    {
                      type: 'page',
                      key: t('FibonacciRetracementLine')
                    },
                    {
                      type: 'page',
                      key: t('SupportAndResistance')
                    },
                    {
                      type: 'page',
                      key: t('MarketParticipants')
                    },
                    {
                      type: 'page',
                      key: t('TradingStyle')
                    }
                  ]}
                  pageCallback={(page: number) => setPage(page)}
                />
              </Accordion>
            </Box>
            <Box w="65vw" mx={3}>
              {data[page].map((each, index) => (
                <>
                  {each.type === 'text' && (
                    <Box
                      pb={3}
                      key={'advanced' + page + index + each.key}
                      textAlign={isArabic ? 'right' : 'left'}
                    >
                      {each.key}
                    </Box>
                  )}
                  {each.type === 'title' && (
                    <Box
                      fontWeight="bold"
                      pt={index === 0 ? 0 : 3}
                      key={'advanced' + page + index + each.key}
                      textAlign={isArabic ? 'right' : 'left'}
                    >
                      {each.key}
                    </Box>
                  )}
                  {each.type === 'image' && (
                    <Image
                      py={3}
                      key={'advanced' + page + index + each.key}
                      src={each.key}
                    />
                  )}
                </>
              ))}
              <Box pb={7} />
            </Box>
          </Box>
        )}

        {!widthCheck && (
          <Box width={'80vw'} my={10}>
            <Accordion width={'80vw'} allowToggle>
              <InfoAccordionMultiItem
                title={t('TechnicalAnalysisAndMarketTrends')}
                content={data[0]}
                callback={() => window.scroll(0, height + 100)}
              />
              <InfoAccordionMultiItem
                title={t('FundamentalAnalysis')}
                content={data[1]}
                callback={() => window.scroll(0, height + 140)}
              />

              <InfoAccordionMultiItem
                title={t('FibonacciRetracementLine')}
                content={data[2]}
                callback={() => window.scroll(0, height + 180)}
              />

              <InfoAccordionMultiItem
                title={t('SupportAndResistance')}
                content={data[3]}
                callback={() => window.scroll(0, height + 220)}
              />

              <InfoAccordionMultiItem
                title={t('MarketParticipants')}
                content={data[4]}
                callback={() => window.scroll(0, height + 260)}
              />

              <InfoAccordionMultiItem
                title={t('TradingStyle')}
                content={data[5]}
                callback={() => window.scroll(0, height + 300)}
              />
            </Accordion>
          </Box>
        )}
        {!widthCheck && (
          <Box mt={3} mb={10}>
            <IconButton
              size="lg"
              bg="gray.600"
              _hover={{
                bgColor: 'gray.600'
              }}
              color="white"
              title={t('intermediateTradingCourse')}
              onClick={() => router.push('/learnTrade/intermediateTrading')}
              aria-label={t('intermediateTradingCourse')}
              icon={<ArrowBackIcon fontSize="40px" />}
            />
          </Box>
        )}
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
      'advancedTrading'
    ]))
  }
});

export default advancedTrading;
