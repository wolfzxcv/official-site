import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoButton from '../../components/Common/InfoButton';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import { Locales } from '../../i18n/locales';

const preciousMetals: React.FC<{}> = () => {
  const { t } = useTranslation(['preciousMetals']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* How to trade precious metals */}
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
            <InfoTitle title={t('howToTradePreciousMetals')} />
          </Flex>

          <Stack mb={10} spacing={3}>
            <Text>{t('forThoseTraders')}</Text>
            <Text>{t('thisMeansThatWhenTradingGold')}</Text>
            <Text>{t('whenThePriceRisesTo')}</Text>
          </Stack>

          <InfoButton
            text={t('viewTradingProducts')}
            href="/products"
            option="preciousMetals"
          />
        </Box>
        <Flex width={{ base: '0', xl: '40vw' }} justify="center">
          <Image src="../assets/images/preciousMetals_1.png" alt="gold" />
        </Flex>
      </Flex>

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
            <Image
              src="../assets/images/preciousMetals_icon1.png"
              alt="icon1"
            />
          }
          title={t('diversifiedInvestment')}
          text={t('justAsExperiencedInvestors')}
          withBorder
          minH={isChinese ? '330px' : '385px'}
        />

        <InfoCard
          image={
            <Image
              src="../assets/images/preciousMetals_icon2.png"
              alt="icon2"
            />
          }
          title={t('fightAgainstInflation')}
          text={t('asInflationIntensifies')}
          withBorder
          minH={isChinese ? '330px' : '385px'}
        />

        <InfoCard
          image={
            <Image
              src="../assets/images/preciousMetals_icon3.png"
              alt="icon3"
            />
          }
          title={t('highStorageValue')}
          text={t('about95OfTheWorldsGold')}
          withBorder
          minH={isChinese ? '330px' : '385px'}
        />
      </Flex>

      {/* Precious metals are difficult to mine */}
      <Flex
        direction="column"
        align="center"
        px={{ base: 10, md: 20 }}
        py={20}
        color="white"
        bgColor="gray.600"
      >
        <Text>{t('preciousMetalsAreDifficultToMine')}</Text>
        <Text>{t('amongAllPreciousMetals')}</Text>
      </Flex>

      {/* Participants in gold trading */}
      <Flex
        bgColor="gray.100"
        w={'100%'}
        py={20}
        direction={{ base: 'column', xl: 'row' }}
        justify="space-around"
        align="center"
      >
        <Box width={{ base: '60vw', xl: '40vw' }}>
          <Image src="../assets/images/preciousMetals_2.jpg" alt="gold2" />
        </Box>
        <Box
          my={{ base: 10, xl: 0 }}
          width={{ base: '80vw', xl: '40vw' }}
          textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
        >
          <InfoTitle title={t('participantsInGoldTrading')} />
          <Text my={3}>{t('theGoldMarketAttracts')}</Text>

          <Flex align="center" justify={isArabic ? 'flex-end' : 'auto'}>
            <Box
              display={!isArabic ? 'flex' : 'none'}
              fontSize="22px"
              color="red.600"
              fontWeight="600"
              mr={3}
            >
              A
            </Box>
            <InfoTitle size="22px" title={t('goldBelievers')} />
            <Box
              display={isArabic ? 'flex' : 'none'}
              fontSize="22px"
              color="red.600"
              fontWeight="600"
              ml={3}
            >
              A
            </Box>
          </Flex>
          <Text my={3}>{t('mainlyIncludeIndividualInvestors')}</Text>

          <Flex align="center" justify={isArabic ? 'flex-end' : 'auto'}>
            <Box
              display={!isArabic ? 'flex' : 'none'}
              fontSize="22px"
              color="red.600"
              fontWeight="600"
              mr={3}
            >
              B
            </Box>
            <InfoTitle size="22px" title={t('largeInstitutions')} />
            <Box
              display={isArabic ? 'flex' : 'none'}
              fontSize="22px"
              color="red.600"
              fontWeight="600"
              ml={3}
            >
              B
            </Box>
          </Flex>
          <Text my={3}>{t('suchInstitutionsIncludeHedgeFunds')}</Text>
        </Box>
      </Flex>

      {/* Reasons affecting the price of gold */}
      <Flex my={10} direction="column" align="center">
        <Box mt={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('reasonsAffectingThePriceOfGold')} />
          <InfoTitleSub title={t('thereAreManyFactors')} />
        </Box>
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/preciousMetals_3.jpg"
                alt="preciousMetals_3"
              />
            }
            title={t('centralBank')}
            text={t('theseInstitutions')}
            bigW="20vw"
            minH={isChinese ? '537px' : '585px'}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/preciousMetals_4.jpg"
                alt="preciousMetals_4"
              />
            }
            title={t('crudeOil')}
            text={t('crudeOilAndGold')}
            bigW="20vw"
            minH={isChinese ? '537px' : '585px'}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/preciousMetals_5.jpg"
                alt="preciousMetals_5"
              />
            }
            title={t('USDollars')}
            text={t('sinceGoldIsPriced')}
            bigW="20vw"
            minH={isChinese ? '537px' : '585px'}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/preciousMetals_6.jpg"
                alt="preciousMetals_6"
              />
            }
            title={t('stockMarket')}
            text={t('whenTheStockMarket')}
            bigW="20vw"
            minH={isChinese ? '537px' : '585px'}
          />
        </Flex>
      </Flex>

      {/* Historical gold price */}
      <Flex py={20} direction="column" align="center" bg="gray.100">
        <Box my={10} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('historicalGoldPrice')} />
          <InfoTitleSub title={t('theFollowingTable')} />
          <InfoTitleSub title={t('duringThisPeriod')} />
          <InfoTitleSub title={t('onTheOtherHand')} />
        </Box>

        <Box px={2}>
          <Image
            src="../assets/images/preciousMetals_7.png"
            alt="goldPricePic"
          />
        </Box>
      </Flex>

      {/* Gold trading example */}
      <Flex py={20} direction="column" align="center">
        <Box my={10} textAlign="center">
          <InfoTitle title={t('goldTradingExample')} />
        </Box>

        <Box
          width={{ base: '80vw', xl: '60vw' }}
          textAlign={isArabic ? 'right' : 'left'}
        >
          <Box>
            <InfoTitle size="22px" title={t('practicalGoldTrading')} />
            <Text>{t('supposeYouStudyTheGoldMarket')}</Text>
            <Text>{t('thisMeans')}</Text>
          </Box>

          <Box my={10}>
            <InfoTitle size="22px" title={t('profitScenario')} />
            <Text>{t('peoplesInterestInGoldSurged')}</Text>
            <Text>{t('yourTotalProfitIsCalculated')}</Text>
          </Box>

          <Box>
            <InfoTitle size="22px" title={t('lossScenario')} />
            <Text>{t('thePriceOfGold')}</Text>
            <Text>{t('theLossInThisCase')}</Text>
          </Box>

          <Box mt={10}>
            <Text>{t('althoughGoldTrading')}</Text>
          </Box>
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
      'preciousMetals'
    ]))
  }
});

export default preciousMetals;
