import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Accordion, AccordionButton, AccordionItem, Box, Flex, IconButton, Image, Link, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import InfoAccordionMultiItem from '../../components/Common/InfoAccordionMultiItem';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import { StyledBox } from '../../components/Styled/Styled';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';


const basicTrading: React.FC<{}> = () => {
  const { t } = useTranslation(['basicTrading']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';
  const [page, setPage] = useState(0)
  const [height, setHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const tallerBanner = currentLang === 'id' || currentLang === 'ms';
  const tallerInfoCard = tallerBanner || currentLang === 'en' || currentLang === 'vi';
  const widthCheck = useBreakpointValue({base: false, xl: true})
  const data: {
    type: "page" | "title" | "image" | "text"; 
    key: string
  }[][] = [
    [
      {
        type: "text",
        key: t('TheForeignExchangeMarketIsTheLargest')
      },
      {
        type: "text",
        key: t('TheForeignExchangeMarketIsTheUsually')
      },
      {
        type: "title",
        key: t('GlobalMarket')
      },
      {
        type: "text",
        key: t('ThisIsAGlobalMarket')
      },
      {
        type: "title",
        key: t('DecentralizedMarket')
      },
      {
        type: "text",
        key: t('DecentralizedMarketMeans')
      },
      {
        type: "title",
        key: t('OverTheCounterTransactions')
      },
      {
        type: "text",
        key: t('TheForeignExchangeMarketIsNotControlled')
      },
      {
        type: "title",
        key: t('TradingForeignExchange')
      },
      {
        type: "text",
        key: t('ForActiveTraders')
      },
      {
        type: "title",
        key: t('ComparedWithOtherMarkets')
      },
      {
        type: "text",
        key: t('TheDailyTradingVolume')
      },
      {
        type: "text",
        key: t('WhatFactorsPlayAKeyRole')
      },
      {
        type: "text",
        key: t('LetIsTakeAnotherExample')
      },
      {
        type: "text",
        key: t('SimilarToStocks')
      },
    ],
    [
      {
        type: "text",
        key: t('DoNotHaveExperience')
      },
    ],
    [
      {
        type: "text",
        key: t('EarlierWeIntroduced')
      },
      {
        type: "text",
        key: t('RememberThatTheMajorPlayers')
      },
      {
        type: "text",
        key: t('ChangesInGDP')
      },
      {
        type: "title",
        key: t('NewsOrEvents')
      },
      {
        type: "text",
        key: t('GrossDomesticProductGDP')
      },
      {
        type: "title",
        key: t('NonFarmPayrollAndUnemploymentRate')
      },
      {
        type: "text",
        key: t('TheMostInfluentialMarket')
      },
      {
        type: "title",
        key: t('EconomicCalendar')
      },
      {
        type: "text",
        key: t('SoHowCanWeKeep')
      },
      {
        type: "text",
        key: t('TheEconomicCalendar')
      },
      {
        type: "title",
        key: t('TradingForeignExchange')
      },
      {
        type: "text",
        key: t('ForActiveTraders')
      },
      {
        type: "title",
        key: t('MarketSentiment')
      },
      {
        type: "text",
        key: t('MarketSentimentCanBeUsed')
      },
      {
        type: "title",
        key: t('NewsTrading')
      },
      {
        type: "text",
        key: t('NewsTradingIsAVeryPopular')
      },
      {
        type: "title",
        key: t('AvoidNewsTrading')
      },
      {
        type: "text",
        key: t('ThisIsTheThirdTradingMethod')
      },
    ],
    [
      {
        type: "text",
        key: t('AfterTheDownloadProcess')
      },
      {
        type: "title",
        key: t('CreateAMarketOrder')
      },
    ],
    [
      {
        type: "text",
        key: t('LeverageAndMarginMargin')
      },
      {
        type: "title",
        key: t('AssumingThatA1Lot')
      },
    ],
    [
      {
        type: "text",
        key: t('ContractForDifference')
      },
      {
        type: "title",
        key: t('ExploreTheCFDMarket')
      },
    ]
  ]

  console.log("t: ", t)

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
        <InfoTitle title={t('howToStartTrading')} />
        <InfoTitleSub title={t('haventHadExperience')} />
      </Flex>
      <Flex
        direction="column"
        align="center"
      >
        {widthCheck && <Box display="flex" my={{base: 0, xl: 20}}>
          <Box w="25vw" mx={3}>
            <Accordion allowMultiple allowToggle defaultIndex={[0]}>
              <InfoAccordionMultiItem
                title={t('intermediateTradingCourse')}
                content={[
                  {
                    type: "page",
                    key: t('whatIsForeignExchangeTrading')
                  },
                  {
                    type: "page",
                    key: t('HowToStartTrading')
                  },
                  {
                    type: "page",
                    key: t('FactorsAffectingTheMarket')
                  },
                  {
                    type: "page",
                    key: t('BasicOperationOfTheMT4Platform')
                  },
                  {
                    type: "page",
                    key: t('LeverageAndMargin')
                  },
                  {
                    type: "page",
                    key: t('WhatIsACFDTransaction')
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
                {each.type === "image" && (
                  <Image py={3} src={each.key} />
                )}
              </Fragment>
            ))}
            {page === 1 && 
              <Flex
                direction="column"
                justify="space-evenly"
              >
                <InfoCard
                  title={t('TheFirstStep')}
                  text={t('WeOfferToTrade')}
                  withTag={false}
                  bigW="30vw"
                  minH={{
                    base: isChinese ? '200px' : '300px',
                    xl: tallerInfoCard ? '376px' : '300px'
                  }}
                  pt="5"
                  withBorder
                  node={<Flex
                    justify="center"
                    alignItems="center"
                    display={{ base: 'flex', xl: 'none' }}
                  >
                    <Link
                      _hover={{
                        textDecoration: 'none'
                      }}
                      href="https://trader.wc012.com/register"
                      isExternal
                    >
                      <StyledBox
                        mt={{ base: 10, xl: 0 }}
                        p={2}
                        bg="red.600"
                        color="white"
                        fontSize="22px"
                        textAlign="center"
                        width="250px"
                        _hover={{
                          bgColor: 'red.500',
                          cursor: 'pointer',
                          transition: '1s'
                        }}
                      >
                        {t('ApplyForARealAccount')}
                      </StyledBox>
                    </Link>
                  </Flex>}
                />

                <InfoCard
                  title={t('Step2')}
                  text={t('AfterYourRealAccount')}
                  withTag={false}
                  bigW="30vw"
                  minH={{
                    base: isChinese ? '200px' : '300px',
                    xl: tallerInfoCard ? '376px' : '300px'
                  }}
                  pt="5"
                  withBorder
                  node={<Flex
                    justify="center"
                    alignItems="center"
                    display={{ base: 'flex', xl: 'none' }}
                  >
                    <Link
                      _hover={{
                        textDecoration: 'none'
                      }}
                      href="https://trader.wc012.com/register"
                      isExternal
                    >
                      <StyledBox
                        mt={{ base: 10, xl: 0 }}
                        p={2}
                        bg="red.600"
                        color="white"
                        fontSize="22px"
                        textAlign="center"
                        width="250px"
                        _hover={{
                          bgColor: 'red.500',
                          cursor: 'pointer',
                          transition: '1s'
                        }}
                      >
                        {t('DepositFundsNow')}
                      </StyledBox>
                    </Link>
                  </Flex>}
                />

                <InfoCard
                  title={t('Step3')}
                  text={t('NowThatYourTradingAccount')}
                  withTag={false}
                  bigW="30vw"
                  minH={{
                    base: isChinese ? '200px' : '300px',
                    xl: tallerInfoCard ? '376px' : '300px'
                  }}
                  pt="5"
                  withBorder
                  node={<Stack p={3} pt={10} textAlign={"left"}>
                    <Text py={1}><span style={{fontWeight: "bold"}}>{t('UnderStandTheMarket')}</span>{" "}<span>{t('KnowWhatYouWant')}</span></Text>
                    <Text py={1}><span style={{fontWeight: "bold"}}>{t('UnderStandTheOperation')}</span>{" "}<span>{t('BeforeMakingTheFirstTransaction')}</span></Text>
                    <Text py={1}><span style={{fontWeight: "bold"}}>{t('StartYourTransaction')}</span>{" "}<span>{t('AfterYouAreFamiliar')}</span></Text>
                  </Stack>}
                />
              </Flex>
            }
            <Box pb={7}/>
          </Box>
        </Box>}
        
        {!widthCheck && <Box width={'80vw'} my={10}>
          <Accordion width={'80vw'} allowToggle>
            <InfoAccordionMultiItem
              title={t('whatIsForeignExchangeTrading')}
              content={data[0]}
              callback={()=>window.scroll(0, height+100)}
            />
            <InfoAccordionMultiItem
              title={t('HowToStartTrading')}
              content={data[1]}
              callback={()=>window.scroll(0, height+140)}
              node={
                <Flex
                  direction={{
                    base: 'column',
                    xl: isArabic ? 'row-reverse' : 'row'
                  }}
                  justify="space-evenly"
                  align="center"
                >
                  <InfoCard
                    title={t('TheFirstStep')}
                    text={t('WeOfferToTrade')}
                    withTag={false}
                    bigW="30vw"
                    minH={{
                      base: isChinese ? '200px' : '300px',
                      xl: tallerInfoCard ? '376px' : '300px'
                    }}
                    pt="5"
                    withBorder
                    node={<Flex
                      justify="center"
                      alignItems="center"
                      display={{ base: 'flex', xl: 'none' }}
                    >
                      <Link
                        _hover={{
                          textDecoration: 'none'
                        }}
                        href="https://trader.wc012.com/register"
                        isExternal
                      >
                        <StyledBox
                          mt={{ base: 10, xl: 0 }}
                          p={2}
                          bg="red.600"
                          color="white"
                          fontSize="22px"
                          textAlign="center"
                          width="250px"
                          _hover={{
                            bgColor: 'red.500',
                            cursor: 'pointer',
                            transition: '1s'
                          }}
                        >
                          {t('ApplyForARealAccount')}
                        </StyledBox>
                      </Link>
                    </Flex>}
                  />

                  <InfoCard
                    title={t('Step2')}
                    text={t('AfterYourRealAccount')}
                    withTag={false}
                    bigW="30vw"
                    minH={{
                      base: isChinese ? '200px' : '300px',
                      xl: tallerInfoCard ? '376px' : '300px'
                    }}
                    pt="5"
                    withBorder
                    node={<Flex
                      justify="center"
                      alignItems="center"
                      display={{ base: 'flex', xl: 'none' }}
                    >
                      <Link
                        _hover={{
                          textDecoration: 'none'
                        }}
                        href="https://trader.wc012.com/register"
                        isExternal
                      >
                        <StyledBox
                          mt={{ base: 10, xl: 0 }}
                          p={2}
                          bg="red.600"
                          color="white"
                          fontSize="22px"
                          textAlign="center"
                          width="250px"
                          _hover={{
                            bgColor: 'red.500',
                            cursor: 'pointer',
                            transition: '1s'
                          }}
                        >
                          {t('DepositFundsNow')}
                        </StyledBox>
                      </Link>
                    </Flex>}
                  />

                  <InfoCard
                    title={t('Step3')}
                    text={t('NowThatYourTradingAccount')}
                    withTag={false}
                    bigW="30vw"
                    minH={{
                      base: isChinese ? '200px' : '300px',
                      xl: tallerInfoCard ? '376px' : '300px'
                    }}
                    pt="5"
                    withBorder
                    node={<Stack p={3} pt={10} textAlign={"left"}>
                      <Text py={1}><span style={{fontWeight: "bold"}}>{t('UnderStandTheMarket')}</span>{" "}<span>{t('KnowWhatYouWant')}</span></Text>
                      <Text py={1}><span style={{fontWeight: "bold"}}>{t('UnderStandTheOperation')}</span>{" "}<span>{t('BeforeMakingTheFirstTransaction')}</span></Text>
                      <Text py={1}><span style={{fontWeight: "bold"}}>{t('StartYourTransaction')}</span>{" "}<span>{t('AfterYouAreFamiliar')}</span></Text>
                    </Stack>}
                  />
                </Flex>}
            />

            <InfoAccordionMultiItem
              title={t('FactorsAffectingTheMarket')}
              content={data[2]}
              callback={()=>window.scroll(0, height+180)}
            />

            <InfoAccordionMultiItem
              title={t('BasicOperationOfTheMT4Platform')}
              content={data[3]}
              callback={()=>window.scroll(0, height+220)}
            />

            <InfoAccordionMultiItem
              title={t('LeverageAndMargin')}
              content={data[4]}
              callback={()=>window.scroll(0, height+260)}
            />

            <InfoAccordionMultiItem
              title={t('WhatIsACFDTransaction')}
              content={data[5]}
              callback={()=>window.scroll(0, height+300)}
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
      'header'
    ]))
  }
});

export default basicTrading;
