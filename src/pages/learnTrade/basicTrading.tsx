import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, Box, Flex, IconButton, Image, Link, Text, useBreakpointValue } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import InfoAccordionMultiItem from '../../components/Common/InfoAccordionMultiItem';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import { StyledBox } from '../../components/Styled/Styled';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';


const basicTrading: React.FC<{}> = () => {
  const { t } = useTranslation(['basicTrading']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
  const [page, setPage] = useState(0)
  const [height, setHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const widthCheck = useBreakpointValue({base: false, xl: true})
  const data: {
    type: "page" | "point" | "lastPoint" | "title" | "image" | "text" | "buttonLink" | "twoSection"; 
    key: string,
    secondKey?: string,
  }[][] = [
    [
      {
        type: "text",
        key: t('theForeignExchangeMarket')
      },
      {
        type: "text",
        key: t('theForeignExchangeMarketIsUsually')
      },
      {
        type: "title",
        key: t('globalMarket')
      },
      {
        type: "point",
        key: t('thisIsAGlobalMarket')
      },
      {
        type: "lastPoint",
        key: t('globalEconomic')
      },
      {
        type: "title",
        key: t('decentralizedMarket')
      },
      {
        type: "point",
        key: t('decentralizedMarketMeans')
      },
      {
        type: "lastPoint",
        key: t('insteadFinancialCenters')
      },
      {
        type: "title",
        key: t('overTheCounterTransactions')
      },
      {
        type: "point",
        key: t('theForeignExchangeMarketIsNotControlled')
      },
      {
        type: "point",
        key: t('brokersAndTraders')
      },
      {
        type: "lastPoint",
        key: t('thisKindOfMarket')
      },
      {
        type: "title",
        key: t('tradingForeignExchange')
      },
      {
        type: "text",
        key: t('forActiveTraders')
      },
      {
        type: "text",
        key: t('differentCurrency')
      },
      {
        type: "title",
        key: t('comparedWithOtherMarkets')
      },
      {
        type: "text",
        key: t('theDailyTradingVolume')
      },
      {
        type: "text",
        key: t('whatFactorsPlayAKeyRole')
      },
      {
        type: "text",
        key: t('LetsTakeAnotherExample')
      },
      {
        type: "text",
        key: t('similarToStocks')
      },
    ],
    [
      {
        type: "title",
        key: t('step1'),
      },
      {
        type: "text",
        key: t('weOfferTo'),
      },
      {
        type: "buttonLink",
        key: t('applyForARealAccountNow'),
        secondKey: "https://trader.wc012.com/register"
      },
      {
        type: "title",
        key: t('step2'),
      },
      {
        type: "text",
        key: t('afterYourRealAccount'),
      },
      {
        type: "buttonLink",
        key: t('depositFundsNow'),
        secondKey: "https://trader.wc012.com/register"
      },
      {
        type: "title",
        key: t('step3'),
      },
      {
        type: "text",
        key: t('nowThatYourTradingAccount'),
      },
      {
        type: "twoSection",
        key: t('understandTheMarket'),
        secondKey: t('knowWhatYouWantTo')
      },
      {
        type: "twoSection",
        key: t('understandTheOperation'),
        secondKey: t('beforeMaking')
      },
      {
        type: "twoSection",
        key: t('startYourTransaction'),
        secondKey: t('afterYouAreFamiliarWith')
      },
    ],
    [
      {
        type: "text",
        key: t('earlierWeIntroducedYou')
      },
      {
        type: "text",
        key: t('rememberThatTheMajorPlayers')
      },
      {
        type: "text",
        key: t('changesInGDP')
      },
      {
        type: "title",
        key: t('newsOrEvents')
      },
      {
        type: "point",
        key: t('grossDomesticProductGDP')
      },
      {
        type: "point",
        key: t('interestRate')
      },
      {
        type: "point",
        key: t('employment')
      },
      {
        type: "point",
        key: t('tradeSurplus')
      },
      {
        type: "lastPoint",
        key: t('forceMajeureEvent')
      },
      {
        type: "title",
        key: t('nonFarmPayroll')
      },
      {
        type: "text",
        key: t('theMostInfluentialMarketData')
      },
      {
        type: "title",
        key: t('economicCalendar')
      },
      {
        type: "text",
        key: t('soHowCanWeKeepAnEyeOn')
      },
      {
        type: "text",
        key: t('theEconomicCalendarListsTheNews')
      },
      {
        type: "title",
        key: t('tradingForeignExchange')
      },
      {
        type: "text",
        key: t('forActiveTraders')
      },
      {
        type: "text",
        key: t('differentCurrency')
      },
      {
        type: "title",
        key: t('marketSentiment')
      },
      {
        type: "text",
        key: t('marketSentimentCanBeUsedBy')
      },
      {
        type: "title",
        key: t('newsTrading')
      },
      {
        type: "text",
        key: t('newsTradingIsAVeryPopularWay')
      },
      {
        type: "title",
        key: t('avoidNewsTrading')
      },
      {
        type: "text",
        key: t('thisIsTheThirdTradingMethod')
      },
    ],
    [
      {
        type: "text",
        key: t('afterTheDownloadProcess')
      },
      {
        type: "text",
        key: t('checkYesIAgreeWith'),
      },
      {
        type: "text",
        key: t('theInstallationWizard'),
      },
      {
        type: "text",
        key: t('thePlatformInterface'),
      },
      {
        type: "text",
        key: t('logInToTheTradingAccount'),
      },
      {
        type: "text",
        key: t('inThePopUpLoginWindow'),
      },
      {
        type: "text",
        key: t('thePlatformWillTakeSomeTime')
      },
      {
        type: "title",
        key: t('createAMarketOrder'),
      },
      {
        type: "text",
        key: t('thereAreManyWaysTo'),
      },
      {
        type: "title",
        key: t('productCategory'),
      },
      {
        type: "text",
        key: t('lotsEnterTheLotSize')
      },
      {
        type: "text",
        key: t('stopLossPrice')
      },
      {
        type: "text",
        key: t('takeProfitPrice')
      },
      {
        type: "text",
        key: t('sellAtMarketPriceOrBuy')
      },
      {
        type: "text",
        key: t('theOrderTypeColumn')
      },
      {
        type: "title",
        key: t('economicCalendar')
      },
      {
        type: "text",
        key: t('soHowCanWeKeepAnEyeOn')
      },
      {
        type: "text",
        key: t('theEconomicCalendarListsTheNews')
      },

      {
        type: "title",
        key: t('pendingOrder'),
      },
      {
        type: "text",
        key: t('changeTheOrderType')
      },
      {
        type: "text",
        key: t('thereAreFourTypes')
      },
      {
        type: "text",
        key: t('buyLimitBuyPending')
      },
      {
        type: "text",
        key: t('sellLimitSellPending')
      },
      {
        type: "text",
        key: t('buyStopBuyPending')
      },
      {
        type: "text",
        key: t('sellStopSellPending')
      },
      {
        type: "text",
        key: t('afterSelectingTheCorresponding')
      },
      {
        type: "title",
        key: t('oneClickTrading'),
      },
      {
        type: "text",
        key: t('foreignExchangePrices')
      },
      {
        type: "text",
        key: t('onTheUpperLeftCorner')
      },
      {
        type: "title",
        key: t('modifyTheOrder'),
      },
      {
        type: "text",
        key: t('afterOpening')
      },
      {
        type: "text",
        key: t('inThePopUpWindow')
      },
      {
        type: "title",
        key: t('closePosition'),
      },
      {
        type: "text",
        key: t('theSummaryWindowAt')
      },
      {
        type: "text",
        key: t('theAccountBalance')
      },
      {
        type: "text",
        key: t('atThisTimeWeOpened')
      },
      {
        type: "text",
        key: t('oneClickClosing')
      },
      {
        type: "title",
        key: t('accountHistory'),
      },
      {
        type: "text",
        key: t('youCanFindAllClosed')
      },
      {
        type: "text",
        key: t('profitLossTheTotal')
      },
      {
        type: "text",
        key: t('depositsTotalDeposits')
      },
      {
        type: "text",
        key: t('withdrawalTheTotal')
      },
      {
        type: "title",
        key: t('openTheChartAndLoad'),
      },
      {
        type: "text",
        key: t('afterTheMT4Platform')
      },
      {
        type: "text",
        key: t('ifYouWantToSwitch')
      },
      {
        type: "text",
        key: t('withMT4IsLocatedInThe')
      },
      {
        type: "text",
        key: t('afterReadingThis')
      },
    ],
    [
      {
        type: "text",
        key: t('leverageAndMarginMargin')
      },
      {
        type: "title",
        key: t('assumingThatA1Lot')
      },
      {
        type: "title",
        key: t('whenTheLeverageRatioIs11')
      },
      {
        type: "title",
        key: t('whenTheLeverageRatioIs1400')
      },
      {
        type: "text",
        key: t('pleaseKeepInMindThat')
      },
      {
        type: "text",
        key: t('weUsuallyRecommendTraders')
      },
      {
        type: "text",
        key: t('stopLossPriceWhenThePrice')
      },
      {
        type: "text",
        key: t('whenUsingLeverage')
      },
      {
        type: "text",
        key: t('weRecommendThatYou')
      },
    ],
    [
      {
        type: "text",
        key: t('contractForDifference')
      },
      {
        type: "title",
        key: t('exploreTheCfdMarket')
      },
      {
        type: "text",
        key: t('index')
      },
      {
        type: "text",
        key: t('energy')
      },
      {
        type: "text",
        key: t('preciousMetals')
      },
      {
        type: "text",
        key: t('contractDetails')
      },
      {
        type: "title",
        key: t('WhatAreTheDifferentTypes')
      },
      {
        type: "text",
        key: t('aStockIndexAsAFinancial')
      },
      {
        type: "text",
        key: t('commodityFuturesAreAlso')
      },
      {
        type: "text",
        key: t('byOpeningAnAccountThrough')
      },
      {
        type: "title",
        key: t('whatAreTheAdvantages')
      },
      {
        type: "text",
        key: t('theMostSignificantAdvantage')
      },
    ]
  ]

  useEffect(()=>{
    if (document.getElementById("heightDetect2") && document.querySelector("body")){
      const bodyTop = document.querySelector("body").getBoundingClientRect().top
      const divTop = document.getElementById("heightDetect2").getBoundingClientRect().top
      setHeight(divTop - bodyTop)
    }
  }, [windowWidth])

  useEffect(()=>{
    if (widthCheck){
      setPage(0)
    }
  }, [widthCheck])

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
      <Flex id="heightDetect2" display="flex" px={10} py={{base: 10, xl: 20}} bgColor="gray.50" direction="column" align="center">
        <InfoTitle title={t('howToStartTrading')} />
        <InfoTitleSub title={t('haventHadExperience')} />
      </Flex>
      <Flex
        direction="column"
        align="center"
      >
        {widthCheck && <Box display="flex" my={{base: 0, xl: 20}}>
          <Box w="25vw" mx={3}>
            <Accordion allowMultiple allowToggle defaultIndex={[0]} defaultChecked>
              <InfoAccordionMultiItem
                title={t('basicTradingCourse')}
                content={[
                  {
                    type: "page",
                    key: t('whatIsForeignExchangeTrading')
                  },
                  {
                    type: "page",
                    key: t('howToStartTrading')
                  },
                  {
                    type: "page",
                    key: t('factorsAffectingTheMarket')
                  },
                  {
                    type: "page",
                    key: t('basicOperationOfTheMT4Platform')
                  },
                  {
                    type: "page",
                    key: t('leverageAndMargin')
                  },
                  {
                    type: "page",
                    key: t('whatIsACFDTransaction')
                  },
                ]}
                pageCallback={(page: number) => setPage(page)}
              />
              
              <AccordionItem onClick={(e)=>{
                router.push("/learnTrade/intermediateTrading")
              }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="600">
                      {t('intermediateTradingCourse')}
                    </Box>
                    <ChevronRightIcon fontSize="20px"/>
                  </AccordionButton>
                </h2>
              </AccordionItem>
              
              <AccordionItem onClick={(e)=>{
                router.push("/learnTrade/advancedTrading")
              }}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontWeight="600">
                      {t('advancedTradingCourse')}
                    </Box>
                    <ChevronRightIcon fontSize="20px"/>
                  </AccordionButton>
                </h2>
              </AccordionItem>
            </Accordion>
          </Box>
          <Box w="65vw" mx={3}>
            {data[page].map((each, index) => (
              <Fragment key={each.key + index}>
                {each.type === "text" && (
                  <Box pb={3} textAlign={isArabic ? 'right' : 'left'}>
                    {each.key}
                  </Box>
                )}
                {each.type === "title" && (
                  <Box fontWeight="bold" pt={index === 0 ?0 :3} textAlign={isArabic ? 'right' : 'left'}>
                    {each.key}
                  </Box>
                )}
                {each.type === "point" && (
                  <Box pb={0} textAlign={isArabic ? 'right' : 'left'}>
                    {each.key}
                  </Box>
                )}
                {each.type === "lastPoint" && (
                  <Box pb={3} textAlign={isArabic ? 'right' : 'left'}>
                    {each.key}
                  </Box>
                )}
                {each.type === "image" && (
                  <Image py={3} src={each.key} />
                )}
                {each.type === "twoSection" && (
                  <Box textAlign={isArabic ? 'right' : 'left'}>
                    <Text py={1}><span style={{fontWeight: "bold"}}>{each.key}</span>{" "}<span>{each.secondKey}</span></Text>
                  </Box>
                )}
                {each.type === "buttonLink" && each.secondKey && (
                  <Link
                    _hover={{
                      textDecoration: 'none'
                    }}
                    href={each.secondKey}
                    isExternal
                  >
                    <StyledBox
                      mb={10}
                      p={2}
                      bg="red.600"
                      color="white"
                      fontSize="14px"
                      textAlign="center"
                      width="250px"
                      _hover={{
                        bgColor: 'red.500',
                        cursor: 'pointer',
                        transition: '1s'
                      }}
                    >
                      {each.key}
                    </StyledBox>
                  </Link>
                )}
              </Fragment>
            ))}
            <Box pb={7}/>
          </Box>
        </Box>}
        
        {!widthCheck && <Box width={'80vw'} my={10}>
          <Accordion width={'80vw'} allowToggle>
            <InfoAccordionMultiItem
              title={t('whatIsForeignExchangeTrading')}
              content={data[0]}
              callback={()=>{
                window.scroll(0, height+100)
              }}
            />
            <InfoAccordionMultiItem
              title={t('howToStartTrading')}
              content={data[1]}
              callback={()=>{
                window.scroll(0, height+140)
              }}
            />

            <InfoAccordionMultiItem
              title={t('factorsAffectingTheMarket')}
              content={data[2]}
              callback={()=>{
                window.scroll(0, height+180)
              }}
            />

            <InfoAccordionMultiItem
              title={t('basicOperationOfTheMT4Platform')}
              content={data[3]}
              callback={()=>{
                window.scroll(0, height+220)
              }}
            />

            <InfoAccordionMultiItem
              title={t('leverageAndMargin')}
              content={data[4]}
              callback={()=>{
                window.scroll(0, height+260)
              }}
            />

            <InfoAccordionMultiItem
              title={t('whatIsACFDTransaction')}
              content={data[5]}
              callback={()=>{
                window.scroll(0, height+300)
              }}
            />
          </Accordion>
        </Box>}
        {!widthCheck && 
          <Box mt={3} mb={10}>
            <IconButton
              size="lg"
              bg="gray.600"
              _hover={{
                bgColor: 'gray.600'
              }}
              color="white"
              title={t('intermediateTradingCourse')}
              onClick={()=>router.push("/learnTrade/intermediateTrading")}
              aria-label={t('intermediateTradingCourse')}
              icon={<ArrowForwardIcon fontSize="40px" />}
            />
            {/* <Button onClick={()=>router.push("/learnTrade/intermediateTrading")} 
              rightIcon={<ArrowForwardIcon />} 
              colorScheme="gray"
              variant="solid"
            >
              {t('intermediateTradingCourse')}
            </Button> */}
          </Box>}
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
      'basicTrading'
    ]))
  }
});

export default basicTrading;
