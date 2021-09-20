import { ArrowBackIcon, ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, Box, Flex, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import InfoAccordionMultiItem from '../../components/Common/InfoAccordionMultiItem';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const intermediateTrading: React.FC<{}> = () => {
  const { t } = useTranslation(['intermediateTrading']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
  const [page, setPage] = useState(0)
  const [height, setHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const widthCheck = useBreakpointValue({base: false, xl: true})
  const data: {
    type: "page" | "title" | "image" | "text"; 
    key: string
  }[][] = [
    [
      {
        type: "title",
        key: t('PersonalizationOfTheChart')
      },
      {
        type: "text",
        key: t('YouCanPersonalize')
      },
      {
        type: "title",
        key: t('HidingTheSellingPriceLine')
      },
      {
        type: "text",
        key: t('IfYouAddALot')
      },
    ],
    [
      {
        type: "title",
        key: t('PayAttentionToTheRisk')
      },
      {
        type: "text",
        key: t('BeforePlacingATrade')
      },
      {
        type: "text",
        key: t('TheSettingOfTheStopLoss')
      },
    ],
    [
      {
        type: "title",
        key: t('HowToCreateATradingStrategy')
      },
      {
        type: "text",
        key: t('IfYouWantToBecomeATrader')
      },
      {
        type: "title",
        key: t('AssessYourSkills')
      },
      {
        type: "text",
        key: t('HaveYouTestedYourStrategy')
      },
    ],
    [
      {
        type: "title",
        key: t('WhatIsAChartPattern')
      },
      {
        type: "text",
        key: t('InTheMarketBuyersAndSellers')
      },
      {
        type: "text",
        key: t('TypicalChartPatternsInclude')
      },
      {
        type: "title",
        key: t('HeadAndShoulders')
      },
      {
        type: "text",
        key: t('TopAndHeadAndShouldersBottom')
      },
      {
        type: "title",
        key: t('ATypicalHeadAndShouldersPattern')
      },
      {
        type: "image",
        key: "../assets/images/course_1.png"
      },
      {
        type: "text",
        key: t('WhenThePriceRises')
      },
      {
        type: "text",
        key: t('WhenYouFindAHead')
      },
      {
        type: "text",
        key: t('MoreCautiousTraders')
      },
      {
        type: "text",
        key: t('AfterTheTradeIsOpened')
      },
      {
        type: "text",
        key: t('InAdditionYouMay')
      },
      {
        type: "title",
        key: t('TheFigureBelowShowsTheHead')
      },
      {
        type: "image",
        key: "../assets/images/course_2.png"
      },
      {
        type: "title",
        key: t('DoubleTopAndDoubleBottom')
      },
      {
        type: "text",
        key: t('DoubleTopPatternOftenAppears')
      },
      {
        type: "image",
        key: "../assets/images/course_3.png"
      },
      {
        type: "text",
        key: t('NTermsOfTheTimingOfEntry')
      },
      {
        type: "text",
        key: t('TheProfitTarget')
      },
      {
        type: "text",
        key: t('TheReverseOfADoubleTopPattern')
      },
      {
        type: "image",
        key: "../assets/images/course_4.png"
      },
      {
        type: "title",
        key: t('FlagPattern')
      },
      {
        type: "text",
        key: t('TheFlagPatternIsDifferent')
      },
      {
        type: "image",
        key: "../assets/images/course_5.png"
      },
      {
        type: "text",
        key: t('TheAbovePictureIsAFlagShape')
      },
      {
        type: "text",
        key: t('TakeTheFlagTrend')
      },
      {
        type: "text",
        key: t('CalculateTheNumberOfPoints')
      },
      {
        type: "text",
        key: t('TheFigureBelowShowsTheFlagPattern')
      },
      {
        type: "image",
        key: "../assets/images/course_6.png"
      },
      {
        type: "text",
        key: t('TheAboveContentCanBeUsed')
      },
    ],
    [
      {
        type: "text",
        key: t('StopLossCanHelpYouReduce')
      },
      {
        type: "title",
        key: t('ExampleOfStopLoss')
      },
      {
        type: "text",
        key: t('SupposeThereIsAnAUS200')
      },
      {
        type: "text",
        key: t('ItIsWorthNotingThatTheStopLoss')
      },
    ],
    [
      {
        type: "title",
        key: t('MarketOrder')
      },
      {
        type: "title",
        key: t('PendingOrder')
      },
      {
        type: "text",
        key: t('APendingOrderIsAnOrder')
      },
      {
        type: "title",
        key: t('TypesOfPendingOrders')
      },
      {
        type: "text",
        key: t('StopLossPendingOrders')
      },
      {
        type: "title",
        key: t('StopLossEntryOrder')
      },
      {
        type: "text",
        key: t('TheFollowingFigureShowsABuyStop')
      },
      {
        type: "image",
        key: "../assets/images/course_7.png"
      },
      {
        type: "title",
        key: t('TakeProfitPendingOrder')
      },
      {
        type: "text",
        key: t('TheFigureBelowShowsABuyTakeProfitPendingOrder')
      },
    ],
    [
      {
        type: "title",
        key: t('ReadTheChart')
      },
      {
        type: "text",
        key: t('ChartsAreTheCoreOfTrading')
      },
      {
        type: "text",
        key: t('TheFirstThingToUnderstand')
      },
      {
        type: "title",
        key: t('TimeXAxis')
      },
      {
        type: "text",
        key: t('TheXAxisOnTheChart')
      },
    ],
    [
      {
        type: "title",
        key: t('Spread')
      },
      {
        type: "text",
        key: t('TheCompleteQuotationConsists')
      },
      {
        type: "text",
        key: t('TheLargerTheTransactionVolume')
      },
      {
        type: "text",
        key: t('ForTradersWhoTradeMoreFrequently')
      },
      {
        type: "image",
        key: "../assets/images/course_8.png"
      },
      {
        type: "text",
        key: t('TheAboveIsAScreenshot')
      },
      {
        type: "title",
        key: t('BuyOrderLongPosition')
      },
      {
        type: "text",
        key: t('QuotationBuying ')
      },
      {
        type: "title",
        key: t('SellOrderShortPosition')
      },
      {
        type: "text",
        key: t('QuotationSelling')
      },
      {
        type: "text",
        key: t('InBothCasesYourProfitAndLoss')
      },
    ]
  ]

  useEffect(()=>{
    heightCalculation()
  }, [windowWidth])

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      handleResize()
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  function heightCalculation(){
    if (document.getElementById("heightDetect2") && document.querySelector("body")){
      const bodyTop = document.querySelector("body").getBoundingClientRect().top
      const divTop = document.getElementById("heightDetect2").getBoundingClientRect().top
      setHeight(divTop - bodyTop)
      return
    } else {
      setTimeout(()=>{
        heightCalculation()
      }, 500)
    }
  }

  return (
    <Wrapper>
      <Flex id="heightDetect2" display="flex" py={{base: 10, xl: 20}} bgColor="gray.50" direction="column" align="center">
        <InfoTitle title={t('UnderstandChartPatterns')} />
        <InfoTitleSub title={t('MakeYourTradingMore')} />
      </Flex>
      <Flex
        direction="column"
        align="center"
      >
        {widthCheck && <Box display="flex" my={{base: 0, xl: 20}}>
          <Box w="25vw" mx={3}>
            <Accordion allowMultiple allowToggle defaultIndex={[1]}>
              <AccordionItem onClick={(e)=>{
                router.push("/learnTrade/basicTrading")
              }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="600">
                      {t('basicTradingCourse')}
                    </Box>
                    <ChevronRightIcon fontSize="20px"/>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              <InfoAccordionMultiItem
                title={t('intermediateTradingCourse')}
                content={[
                  {
                    type: "page",
                    key: t('MT4Tips')
                  },
                  {
                    type: "page",
                    key: t('RiskManagement')
                  },
                  {
                    type: "page",
                    key: t('HowToCreateATradingStrategy')
                  },
                  {
                    type: "page",
                    key: t('CommonChartPatterns')
                  },
                  {
                    type: "page",
                    key: t('StopLossAndTakeProfit')
                  },
                  {
                    type: "page",
                    key: t('ExampleOfStopLoss')
                  },
                  {
                    type: "page",
                    key: t('ChartAnalysis')
                  },
                  {
                    type: "page",
                    key: t('SellingPriceBuyingPriceAndSpread')
                  },
                ]}
                pageCallback={(page: number) => setPage(page)}
              />
              <AccordionItem onClick={(e)=>{
                router.push("/learnTrade/advancedTrading")
              }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="600">
                      {t('AdvancedTradingCourse')}
                    </Box>
                    <ChevronRightIcon fontSize="20px"/>
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w="65vw" mx={3}>
            {data[page].map((each, index) => (
              <>
                {each.type === "text" && (
                  <Box pb={3} key={"intermediate" + page + index + each.key} textAlign={isArabic ? 'right' : 'left'}>
                    {each.key}
                  </Box>
                )}
                {each.type === "title" && (
                  <Box fontWeight="bold" pt={index === 0 ?0 :3} key={"intermediate" + page + index + each.key} textAlign={isArabic ? 'right' : 'left'}>
                    {each.key}
                  </Box>
                )}
                {each.type === "image" && (
                  <Image py={3} key={"intermediate" + page + index + each.key} src={each.key} />
                )}
              </>
            ))}
            <Box pb={7}/>
          </Box>
        </Box>}
        
        {!widthCheck && <Box width={'80vw'} my={10}>
          <Accordion width={'80vw'} allowToggle>
            <InfoAccordionMultiItem
              title={t('MT4Tips')}
              content={data[0]}
              callback={()=>window.scroll(0, height+100)}
            />

            <InfoAccordionMultiItem
              title={t('RiskManagement')}
              content={data[1]}
              callback={()=>window.scroll(0, height+140)}
            />

            <InfoAccordionMultiItem
              title={t('HowToCreateATradingStrategy')}
              content={data[2]}
              callback={()=>window.scroll(0, height+180)}
            />

            <InfoAccordionMultiItem
              title={t('CommonChartPatterns')}
              content={data[3]}
              callback={()=>window.scroll(0, height+220)}
            />

            <InfoAccordionMultiItem
              title={t('StopLossAndTakeProfit')}
              content={data[4]}
              callback={()=>window.scroll(0, height+260)}
            />

            <InfoAccordionMultiItem
              title={t('ExampleOfStopLoss')}
              content={data[5]}
              callback={()=>window.scroll(0, height+300)}
            />

            <InfoAccordionMultiItem
              title={t('ChartAnalysis')}
              content={data[6]}
              callback={()=>window.scroll(0, height+340)}
            />

            <InfoAccordionMultiItem
              title={t('SellingPriceBuyingPriceAndSpread')}
              content={data[7]}
              callback={()=>window.scroll(0, height+380)}
            />
          </Accordion>
        </Box>}
        {!widthCheck && 
        <Flex justifyContent="space-between">
          <Box mt={3} mb={10} w="60vw">
            <IconButton
              size="lg"
              bg="gray.600"
              _hover={{
                bgColor: 'gray.600'
              }}
              color="white"
              title={t('basicTradingCourse')}
              onClick={()=>router.push("/learnTrade/basicTrading")}
              aria-label={t('basicTradingCourse')}
              icon={<ArrowBackIcon fontSize="40px" />}
            />
          </Box>
          <Box mt={3} mb={10}>
            <IconButton
              size="lg"
              bg="gray.600"
              _hover={{
                bgColor: 'gray.600'
              }}
              color="white"
              title={t('AdvancedTradingCourse')}
              onClick={()=>router.push("/learnTrade/advancedTrading")}
              aria-label={t('AdvancedTradingCourse')}
              icon={<ArrowForwardIcon fontSize="40px" />}
            />
          </Box>
        </Flex>}
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header'
    ]))
  }
});

export default intermediateTrading;
