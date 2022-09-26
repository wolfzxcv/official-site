import Wrapper from '@/components/Base/Wrapper';
import { InfoAccordionItemProps } from '@/components/Common/InfoAccordion';
import InfoTitle from '@/components/Common/InfoTitle';
import InfoTitleSub from '@/components/Common/InfoTitleSub';
import { Locales } from '@/i18n/config';
import { ArrowBackIcon } from '@chakra-ui/icons';
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

const advancedTrading: React.FC<{}> = () => {
  const { t } = useTranslation('advancedTrading');

  const router = useRouter();
  const currentLang = router.locale as Locales;

  const data: InfoAccordionItemProps[] = [
    {
      title: t('technicalAnalysis'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('whatIsTechnical')
        },
        {
          type: 'text',
          objectKey: t('technicalAnalysisPredicts')
        },
        {
          type: 'text',
          objectKey: t('unlikeFundamentalAnalysis')
        },
        {
          type: 'title',
          objectKey: t('tradersWhoUse')
        },
        {
          type: 'text',
          objectKey: t('theMarketPrice')
        },
        {
          type: 'text',
          objectKey: t('thePriceFluctuates')
        },
        {
          type: 'text',
          objectKey: t('historyWillRepeat')
        },
        {
          type: 'text',
          objectKey: t('theseThreePremises')
        },
        {
          type: 'text',
          objectKey: t('itShouldBe')
        },
        {
          type: 'title',
          objectKey: t('theRoleOf')
        },
        {
          type: 'text',
          objectKey: t('commonMethodsOf')
        },
        {
          type: 'title',
          objectKey: t('whyIdentifyingTrends')
        },
        {
          type: 'text',
          objectKey: t('justUnderstanding')
        },
        {
          type: 'text',
          objectKey: t('thereAreMany')
        },
        {
          type: 'text',
          objectKey: t('noteThatAlthough')
        },
        {
          type: 'title',
          objectKey: t('trendLines')
        },
        {
          type: 'text',
          objectKey: t('aTrendLine')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_9.png'
        },
        {
          type: 'text',
          objectKey: t('theResistanceLine')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_10.png'
        },
        {
          type: 'text',
          objectKey: t('onTheMT4')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_11.png'
        },
        {
          type: 'text',
          objectKey: t('thePrincipleOf')
        },
        {
          type: 'text',
          objectKey: t('drawingATrend')
        }
      ]
    },
    {
      title: t('fundamentalAnalysis'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('fundamentalAnalysis')
        },
        {
          type: 'text',
          objectKey: t('fundamentalAnalysisOverview')
        },
        {
          type: 'text',
          objectKey: t('technicalAnalysisStudies')
        },
        {
          type: 'text',
          objectKey: t('technicalAnalysisReveals')
        },
        {
          type: 'text',
          objectKey: t('theFactorsAffecting')
        },
        {
          type: 'text',
          objectKey: t('ofCourse')
        },
        {
          type: 'title',
          objectKey: t('longTerm')
        },
        {
          type: 'text',
          objectKey: t('whenMeasuringCurrencys')
        },
        {
          type: 'title',
          objectKey: t('purchasingPower')
        },
        {
          type: 'text',
          objectKey: t('purchasingPowerParity')
        },
        {
          type: 'text',
          objectKey: t('exchangeRate')
        },
        {
          type: 'text',
          objectKey: t('forExample')
        },
        {
          type: 'text',
          objectKey: t('ifTheCurrent')
        },
        {
          type: 'text',
          objectKey: t('itShouldBeNoted')
        },
        {
          type: 'title',
          objectKey: t('balanceOfPayments')
        },
        {
          type: 'text',
          objectKey: t('accordingToThe')
        },
        {
          type: 'text',
          objectKey: t('theCurrentAccount')
        },
        {
          type: 'text',
          objectKey: t('theCapitalAccount')
        },
        {
          type: 'text',
          objectKey: t('capitalFlows')
        },
        {
          type: 'text',
          objectKey: t('whenACountry')
        },
        {
          type: 'text',
          objectKey: t('theFixedIncomeMarket')
        },
        {
          type: 'title',
          objectKey: t('detectCurrency')
        },
        {
          type: 'text',
          objectKey: t('investorsCanPay')
        },
        {
          type: 'title',
          objectKey: t('theFixedIncome')
        },
        {
          type: 'text',
          objectKey: t('giltsBonds')
        },
        {
          type: 'title',
          objectKey: t('otherCountriesInternational')
        },
        {
          type: 'text',
          objectKey: t('theFixedIncomeProducts')
        },
        {
          type: 'text',
          objectKey: t('weAlsoNeed')
        }
      ]
    },
    {
      title: t('fibonacciRetracementLine'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('fibonacciRetracementLine')
        },
        {
          type: 'text',
          objectKey: t('definition')
        },
        {
          type: 'text',
          objectKey: t('theFibonacciRetracement')
        },
        {
          type: 'title',
          objectKey: t('effect')
        },
        {
          type: 'text',
          objectKey: t('fibonacciRetracementsProvide')
        },
        {
          type: 'text',
          objectKey: t('someTradersLike')
        },
        {
          type: 'title',
          objectKey: t('parameter')
        },
        {
          type: 'text',
          objectKey: t('uptrendOrDowntrend')
        },
        {
          type: 'title',
          objectKey: t('applicationExample')
        },
        {
          type: 'text',
          objectKey: t('ifYouFind')
        },
        {
          type: 'text',
          objectKey: t('inTheMT4')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_12.png'
        },
        {
          type: 'text',
          objectKey: t('afterClicking')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_13.png'
        }
      ]
    },
    {
      title: t('supportAndResistance'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('supportAndResistance')
        },
        {
          type: 'text',
          objectKey: t('supportLevel')
        },
        {
          type: 'text',
          objectKey: t('theMethods')
        },
        {
          type: 'title',
          objectKey: t('trendline')
        },
        {
          type: 'text',
          objectKey: t('weIntroduced')
        },
        {
          type: 'text',
          objectKey: t('sometimes')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_14.png'
        },
        {
          type: 'text',
          objectKey: t('theAbovePicture')
        },
        {
          type: 'text',
          objectKey: t('inManyCases')
        },
        {
          type: 'title',
          objectKey: t('previousHigh')
        },
        {
          type: 'text',
          objectKey: t('whenTheFX')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_15.png'
        },
        {
          type: 'text',
          objectKey: t('theAbovePictureShows')
        },
        {
          type: 'text',
          objectKey: t('whenJudgingSupport')
        },
        {
          type: 'text',
          objectKey: t('whenThePrice')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_16.png'
        },
        {
          type: 'text',
          objectKey: t('theAbove')
        },
        {
          type: 'title',
          objectKey: t('patternRecognitionJudgment')
        },
        {
          type: 'text',
          objectKey: t('chartPatterns')
        },
        {
          type: 'text',
          objectKey: t('inADouble')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_17.png'
        },
        {
          type: 'title',
          objectKey: t('technicalIndexJudgment')
        },
        {
          type: 'text',
          objectKey: t('someClassicalTechnical')
        }
      ]
    },
    {
      title: t('marketParticipants'),
      complexContent: [
        {
          type: 'title',
          objectKey: t('marketParticipants')
        },
        {
          type: 'text',
          objectKey: t('byUnderstanding')
        },
        {
          type: 'title',
          objectKey: t('interbankMarket')
        },
        {
          type: 'text',
          objectKey: t('theInterbankMarket')
        },
        {
          type: 'text',
          objectKey: t('beingAtThe')
        },
        {
          type: 'title',
          objectKey: t('centralBanks')
        },
        {
          type: 'text',
          objectKey: t('controlTheMoney')
        },
        {
          type: 'text',
          objectKey: t('thisMeansThat')
        },
        {
          type: 'title',
          objectKey: t('investmentManagementCompanies')
        },
        {
          type: 'text',
          objectKey: t('theseCompaniesUsually')
        },
        {
          type: 'text',
          objectKey: t('inOtherWords')
        },
        {
          type: 'title',
          objectKey: t('retailTraders')
        },
        {
          type: 'text',
          objectKey: t('retailTradersConduct')
        },
        {
          type: 'title',
          objectKey: t('nonBank')
        },
        {
          type: 'text',
          objectKey: t('refersToForeign')
        }
      ]
    },
    {
      title: t('tradingStyle'),
      complexContent: [
        {
          type: 'text',
          objectKey: t('hereWeWill')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_18.png'
        },
        {
          type: 'title',
          objectKey: t('eODTransaction')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_19.png'
        },
        {
          type: 'text',
          objectKey: t('thisIsATrading')
        },
        {
          type: 'text',
          objectKey: t('ifYouAreBusy')
        },
        {
          type: 'title',
          objectKey: t('fundamentals')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_19.png' //in the old website, 19 & 20 are same image
        },
        {
          type: 'text',
          objectKey: t('useFundamentalInformation')
        },
        {
          type: 'title',
          objectKey: t('dayTrading')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_21.png'
        },
        {
          type: 'text',
          objectKey: t('intradayTradersComplete')
        },
        {
          type: 'text',
          objectKey: t('dayTradingContains')
        },
        {
          type: 'title',
          objectKey: t('newsTrading')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_22.png'
        },
        {
          type: 'text',
          objectKey: t('newsTradersTend')
        },
        {
          type: 'title',
          objectKey: t('longTermTrading')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_19.png' //in the old website, 19 & 23 are same image
        },
        {
          type: 'text',
          objectKey: t('theTradingStyle')
        },
        {
          type: 'text',
          objectKey: t('dueToThe')
        },
        {
          type: 'title',
          objectKey: t('scalping')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_24.png'
        },
        {
          type: 'text',
          objectKey: t('scalpingIsAn')
        },
        {
          type: 'text',
          objectKey: t('intradayAndScalping')
        },
        {
          type: 'title',
          objectKey: t('swingTrading')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_25.png'
        },
        {
          type: 'text',
          objectKey: t('asASwing')
        },
        {
          type: 'title',
          objectKey: t('technicalTrading')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_26.png'
        },
        {
          type: 'text',
          objectKey: t('useTechnicalAnalysis')
        },
        {
          type: 'title',
          objectKey: t('trendTrading')
        },
        {
          type: 'image',
          objectKey: '/../assets/images/course_27.png'
        },
        {
          type: 'text',
          objectKey: t('theTrendTrading')
        }
      ]
    }
  ];

  return (
    <Wrapper>
      <Flex display="flex" p={10} direction="column" align="center">
        <InfoTitle title={t('advancedTradingCourse')} />
        <InfoTitleSub title={t('predictPossibleFuture')} />

        <InfoAccordion data={data} />

        <Box my={5}>
          <NextLink
            passHref={true}
            href="/learnTrade/intermediateTrading"
            locale={currentLang}
          >
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'advancedTrading'
    ]))
  }
});

export default advancedTrading;
