import { ArrowBackIcon } from '@chakra-ui/icons';
import { Accordion, Box, Flex, IconButton } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
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
  const [height, setHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const data: {
    type: IAccordionItemBasicType;
    key: string;
  }[][] = [
    [
      {
        type: 'title',
        key: t('whatIsTechnical')
      },
      {
        type: 'text',
        key: t('technicalAnalysisPredicts')
      },
      {
        type: 'text',
        key: t('unlikeFundamentalAnalysis')
      },
      {
        type: 'title',
        key: t('tradersWhoUse')
      },
      {
        type: 'text',
        key: t('theMarketPrice')
      },
      {
        type: 'text',
        key: t('thePriceFluctuates')
      },
      {
        type: 'text',
        key: t('historyWillRepeat')
      },
      {
        type: 'text',
        key: t('theseThreePremises')
      },
      {
        type: 'text',
        key: t('itShouldBe')
      },
      {
        type: 'title',
        key: t('theRoleOf')
      },
      {
        type: 'text',
        key: t('commonMethodsOf')
      },
      {
        type: 'title',
        key: t('whyIdentifyingTrends')
      },
      {
        type: 'text',
        key: t('justUnderstanding')
      },
      {
        type: 'text',
        key: t('thereAreMany')
      },
      {
        type: 'text',
        key: t('noteThatAlthough')
      },
      {
        type: 'title',
        key: t('trendLines')
      },
      {
        type: 'text',
        key: t('aTrendLine')
      },
      {
        type: 'image',
        key: '../assets/images/course_9.png'
      },
      {
        type: 'text',
        key: t('theResistanceLine')
      },
      {
        type: 'image',
        key: '../assets/images/course_10.png'
      },
      {
        type: 'text',
        key: t('onTheMT4')
      },
      {
        type: 'image',
        key: '../assets/images/course_11.png'
      },
      {
        type: 'text',
        key: t('thePrincipleOf')
      },
      {
        type: 'text',
        key: t('drawingATrend')
      }
    ],
    [
      {
        type: 'title',
        key: t('fundamentalAnalysis')
      },
      {
        type: 'text',
        key: t('fundamentalAnalysisOverview')
      },
      {
        type: 'text',
        key: t('technicalAnalysisStudies')
      },
      {
        type: 'text',
        key: t('technicalAnalysisReveals')
      },
      {
        type: 'text',
        key: t('theFactorsAffecting')
      },
      {
        type: 'text',
        key: t('ofCourse')
      },
      {
        type: 'title',
        key: t('longTerm')
      },
      {
        type: 'text',
        key: t('whenMeasuringCurrencys')
      },
      {
        type: 'title',
        key: t('purchasingPower')
      },
      {
        type: 'text',
        key: t('purchasingPowerParity')
      },
      {
        type: 'text',
        key: t('exchangeRate')
      },
      {
        type: 'text',
        key: t('forExample')
      },
      {
        type: 'text',
        key: t('ifTheCurrent')
      },
      {
        type: 'text',
        key: t('itShouldBeNoted')
      },
      {
        type: 'title',
        key: t('balanceOfPayments')
      },
      {
        type: 'text',
        key: t('accordingToThe')
      },
      {
        type: 'text',
        key: t('theCurrentAccount')
      },
      {
        type: 'text',
        key: t('theCapitalAccount')
      },
      {
        type: 'text',
        key: t('capitalFlows')
      },
      {
        type: 'text',
        key: t('whenACountry')
      },
      {
        type: 'text',
        key: t('theFixedIncomeMarket')
      },
      {
        type: 'title',
        key: t('detectCurrency')
      },
      {
        type: 'text',
        key: t('investorsCanPay')
      },
      {
        type: 'title',
        key: t('theFixedIncome')
      },
      {
        type: 'text',
        key: t('giltsBonds')
      },
      {
        type: 'title',
        key: t('otherCountriesInternational')
      },
      {
        type: 'text',
        key: t('theFixedIncomeProducts')
      },
      {
        type: 'text',
        key: t('weAlsoNeed')
      }
    ],
    [
      {
        type: 'title',
        key: t('fibonacciRetracementLine')
      },
      {
        type: 'text',
        key: t('definition')
      },
      {
        type: 'text',
        key: t('theFibonacciRetracement')
      },
      {
        type: 'title',
        key: t('effect')
      },
      {
        type: 'text',
        key: t('fibonacciRetracementsProvide')
      },
      {
        type: 'text',
        key: t('someTradersLike')
      },
      {
        type: 'title',
        key: t('parameter')
      },
      {
        type: 'text',
        key: t('uptrendOrDowntrend')
      },
      {
        type: 'title',
        key: t('applicationExample')
      },
      {
        type: 'text',
        key: t('ifYouFind')
      },
      {
        type: 'text',
        key: t('inTheMT4')
      },
      {
        type: 'image',
        key: '../assets/images/course_12.png'
      },
      {
        type: 'text',
        key: t('afterClicking')
      },
      {
        type: 'image',
        key: '../assets/images/course_13.png'
      }
    ],
    [
      {
        type: 'title',
        key: t('supportAndResistance')
      },
      {
        type: 'text',
        key: t('supportLevel')
      },
      {
        type: 'text',
        key: t('theMethods')
      },
      {
        type: 'title',
        key: t('trendline')
      },
      {
        type: 'text',
        key: t('weIntroduced')
      },
      {
        type: 'text',
        key: t('sometimes')
      },
      {
        type: 'image',
        key: '../assets/images/course_14.png'
      },
      {
        type: 'text',
        key: t('theAbovePicture')
      },
      {
        type: 'text',
        key: t('inManyCases')
      },
      {
        type: 'title',
        key: t('previousHigh')
      },
      {
        type: 'text',
        key: t('whenTheFX')
      },
      {
        type: 'image',
        key: '../assets/images/course_15.png'
      },
      {
        type: 'text',
        key: t('theAbovePictureShows')
      },
      {
        type: 'text',
        key: t('whenJudgingSupport')
      },
      {
        type: 'text',
        key: t('whenThePrice')
      },
      {
        type: 'image',
        key: '../assets/images/course_16.png'
      },
      {
        type: 'text',
        key: t('theAbove')
      },
      {
        type: 'title',
        key: t('patternRecognitionJudgment')
      },
      {
        type: 'text',
        key: t('chartPatterns')
      },
      {
        type: 'text',
        key: t('inADouble')
      },
      {
        type: 'image',
        key: '../assets/images/course_17.png'
      },
      {
        type: 'title',
        key: t('technicalIndexJudgment')
      },
      {
        type: 'text',
        key: t('someClassicalTechnical')
      }
    ],
    [
      {
        type: 'title',
        key: t('marketParticipants')
      },
      {
        type: 'text',
        key: t('byUnderstanding')
      },
      {
        type: 'title',
        key: t('interbankMarket')
      },
      {
        type: 'text',
        key: t('theInterbankMarket')
      },
      {
        type: 'text',
        key: t('beingAtThe')
      },
      {
        type: 'title',
        key: t('centralBanks')
      },
      {
        type: 'text',
        key: t('controlTheMoney')
      },
      {
        type: 'text',
        key: t('thisMeansThat')
      },
      {
        type: 'title',
        key: t('investmentManagementCompanies')
      },
      {
        type: 'text',
        key: t('theseCompaniesUsually')
      },
      {
        type: 'text',
        key: t('inOtherWords')
      },
      {
        type: 'title',
        key: t('retailTraders')
      },
      {
        type: 'text',
        key: t('retailTradersConduct')
      },
      {
        type: 'title',
        key: t('nonBank')
      },
      {
        type: 'text',
        key: t('refersToForeign')
      }
    ],
    [
      {
        type: 'text',
        key: t('hereWeWill')
      },
      {
        type: 'image',
        key: '../assets/images/course_18.png'
      },
      {
        type: 'title',
        key: t('eODTransaction')
      },
      {
        type: 'image',
        key: '../assets/images/course_19.png'
      },
      {
        type: 'text',
        key: t('thisIsATrading')
      },
      {
        type: 'text',
        key: t('ifYouAreBusy')
      },
      {
        type: 'title',
        key: t('fundamentals')
      },
      {
        type: 'image',
        key: '../assets/images/course_19.png' //in the old website, 19 & 20 are same image
      },
      {
        type: 'text',
        key: t('useFundamentalInformation')
      },
      {
        type: 'title',
        key: t('dayTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_21.png'
      },
      {
        type: 'text',
        key: t('intradayTradersComplete')
      },
      {
        type: 'text',
        key: t('dayTradingContains')
      },
      {
        type: 'title',
        key: t('newsTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_22.png'
      },
      {
        type: 'text',
        key: t('newsTradersTend')
      },
      {
        type: 'title',
        key: t('longTermTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_19.png' //in the old website, 19 & 23 are same image
      },
      {
        type: 'text',
        key: t('theTradingStyle')
      },
      {
        type: 'text',
        key: t('dueToThe')
      },
      {
        type: 'title',
        key: t('scalping')
      },
      {
        type: 'image',
        key: '../assets/images/course_24.png'
      },
      {
        type: 'text',
        key: t('scalpingIsAn')
      },
      {
        type: 'text',
        key: t('intradayAndScalping')
      },
      {
        type: 'title',
        key: t('swingTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_25.png'
      },
      {
        type: 'text',
        key: t('asASwing')
      },
      {
        type: 'title',
        key: t('technicalTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_26.png'
      },
      {
        type: 'text',
        key: t('useTechnicalAnalysis')
      },
      {
        type: 'title',
        key: t('trendTrading')
      },
      {
        type: 'image',
        key: '../assets/images/course_27.png'
      },
      {
        type: 'text',
        key: t('theTrendTrading')
      }
    ]
  ];

  useEffect(() => {
    if (
      document.getElementById('heightDetect2') &&
      document.querySelector('body')
    ) {
      const bodyTop = document
        .querySelector('body')
        .getBoundingClientRect().top;
      const divTop = document
        .getElementById('heightDetect2')
        .getBoundingClientRect().top;
      setHeight(divTop - bodyTop);
    }
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

  return (
    <Wrapper>
      <Flex
        display="flex"
        py={{ base: 10, xl: 20 }}
        bgColor="gray.50"
        direction="column"
        align="center"
      >
        <InfoTitle title={t('advancedTradingCourse')} />
        <InfoTitleSub title={t('predictPossibleFuture')} />
      </Flex>
      <Flex direction="column" align="center">
        <Box width={'80vw'} my={10}>
          <Accordion allowToggle>
            <InfoAccordionMultiItem
              title={t('technicalAnalysis')}
              content={data[0]}
              callback={() => window.scroll(0, height + 100)}
            />
            <InfoAccordionMultiItem
              title={t('fundamentalAnalysis')}
              content={data[1]}
              callback={() => window.scroll(0, height + 140)}
            />

            <InfoAccordionMultiItem
              title={t('fibonacciRetracementLine')}
              content={data[2]}
              callback={() => window.scroll(0, height + 180)}
            />

            <InfoAccordionMultiItem
              title={t('supportAndResistance')}
              content={data[3]}
              callback={() => window.scroll(0, height + 220)}
            />

            <InfoAccordionMultiItem
              title={t('marketParticipants')}
              content={data[4]}
              callback={() => window.scroll(0, height + 260)}
            />

            <InfoAccordionMultiItem
              title={t('tradingStyle')}
              content={data[5]}
              callback={() => window.scroll(0, height + 300)}
            />
          </Accordion>
        </Box>

        <Box mt={3} mb={10}>
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
              icon={<ArrowBackIcon fontSize="40px" />}
            />
          </NextLink>
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
      'advancedTrading'
    ]))
  }
});

export default advancedTrading;
