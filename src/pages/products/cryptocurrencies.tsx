import { Box, Center, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { GiPodiumWinner } from 'react-icons/gi';
import { HiDesktopComputer } from 'react-icons/hi';
import Wrapper from '../../components/Base/Wrapper';
import InfoButton from '../../components/Common/InfoButton';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import { Locales } from '../../i18n/config';

const cryptocurrencies: React.FC<{}> = () => {
  const { t } = useTranslation('cryptocurrencies');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isCN = currentLang === 'cn' || currentLang;
  const isArabic = currentLang === 'ar';

  useEffect(() => {
    if (isCN) {
      setTimeout(() => {
        router.push('/products');
      }, 3000);
    }
  }, []);

  return (
    <Wrapper>
      {isCN ? (
        <Center py={20}>No Content, will redirect to product page.</Center>
      ) : (
        <>
          {/* cryptocurrencies */}
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
                <InfoTitle title={t('cryptoCurrency')} />
              </Flex>

              <Text my={10}>{t('bitcoinIsAGameChanging')}</Text>
              <InfoButton
                text={t('viewTradingProducts')}
                href="/products"
                option="cryptocurrencies"
              />
            </Box>
            <Flex width={{ base: '0', xl: '40vw' }} justify="center">
              <Image
                src="../assets/images/cryptocurrencies_1.png"
                alt="cryptocurrencies"
              />
            </Flex>
          </Flex>
          {/* Bitcoin can be regarded as the most successful cryptocurrency */}
          <Flex my={20} direction="column" align="center">
            <Box my={20} width={'80vw'} textAlign="center">
              <InfoTitle size="22px" title={t('bitcoinCanBe')} />
            </Box>
            <Flex
              m={10}
              direction={{
                base: 'column',
                xl: isArabic ? 'row-reverse' : 'row'
              }}
              justify="space-evenly"
              align="center"
            >
              <InfoCard
                icon={<GiPodiumWinner fontSize="32px" />}
                title={t('advantagesOfCryptoCurrency')}
                text={t('inViewOfBitcoinsRole')}
                bigW="40vw"
                withBorder
              />

              <InfoCard
                icon={<HiDesktopComputer fontSize="32px" />}
                title={t('theCFDSystem')}
                text={t('asAGlobalCurrency')}
                bigW="40vw"
                withBorder
              />
            </Flex>
          </Flex>

          {/* How to trade crypto currency */}
          <Flex
            bgColor="gray.100"
            w={'100%'}
            py={20}
            direction={{ base: 'column', xl: 'row' }}
            justify="space-around"
            align="center"
          >
            <Box width={{ base: '60vw', xl: '40vw' }}>
              <Image src="../assets/images/cryptocurrencies_2.png" alt="pic2" />
            </Box>
            <Box
              my={{ base: 10, xl: 0 }}
              width={{ base: '80vw', xl: '40vw' }}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <InfoTitle title={t('howToTradeCryptoCurrency')} />
              <Text my={3}>{t('cryptoCurrencyTransactions')}</Text>
              <Text my={3}>{t('ifYouSpeculate')}</Text>
            </Box>
          </Flex>

          {/* Basic concepts of crypto currency */}
          <Flex
            bgColor="gray.100"
            w={'100%'}
            py={{ base: 20, xl: 0 }}
            direction={{ base: 'column-reverse', xl: 'row' }}
            justify="space-around"
            align="center"
          >
            <Box
              my={{ base: 10, xl: 0 }}
              width={{ base: '80vw', xl: '40vw' }}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <InfoTitle title={t('basicConceptsOfCryptoCurrency')} />
              <Text my={3}>{t('cryptoCurrencyIsACurrency')}</Text>
              <Text my={3}>{t('bitcoinAndManyOther')}</Text>
            </Box>
            <Box width={{ base: '60vw', xl: '40vw' }}>
              <Image src="../assets/images/cryptocurrencies_3.png" alt="pic3" />
            </Box>
          </Flex>

          {/* Understand Bitcoin */}
          <Flex py={20} align="center" direction="column">
            <Box
              my={10}
              width={{ base: '80vw', md: '60vw' }}
              textAlign="center"
            >
              <InfoTitle title={t('understandBitcoin')} />
              <InfoTitleSub title={t('bitcoinWasFounded')} />
            </Box>
            <Flex
              direction={{
                base: 'column',
                xl: isArabic ? 'row-reverse' : 'row'
              }}
            >
              <InfoCard
                image={
                  <Image
                    src="../assets/images/cryptocurrencies_icon1.png"
                    alt="icon1"
                  />
                }
                title={t('limitedSupply')}
                text={t('SatoshiNakamoto')}
              />

              <InfoCard
                image={
                  <Image
                    src="../assets/images/cryptocurrencies_icon2.png"
                    alt="icon2"
                  />
                }
                title={t('itCanBeObtainedThroughMining')}
                text={t('theSoCalledMining')}
              />
              <InfoCard
                image={
                  <Image
                    src="../assets/images/cryptocurrencies_icon3.png"
                    alt="icon3"
                  />
                }
                title={t('fastTransactions')}
                text={t('theAverageVerificationTime')}
              />
            </Flex>
          </Flex>

          {/* Historical gold price */}
          <Flex
            py={20}
            direction="column"
            align="center"
            bg="gray.600"
            color="white"
          >
            <Box
              my={10}
              width={{ base: '80vw', md: '60vw' }}
              textAlign="center"
            >
              <InfoTitle title={t('BitcoinsHistoricalPrice')} />
              <InfoTitleSub title={t('comparedWithTraditionalCurrencies')} />
            </Box>

            <Box px={2} py={5}>
              <Image src="../assets/images/cryptocurrencies_4.png" alt="data" />
            </Box>

            <Stack
              spacing={5}
              my={10}
              width={{ base: '80vw', md: '60vw' }}
              textAlign={isArabic ? 'right' : 'left'}
            >
              <Text>{t('HighPointInTheSpring')}</Text>
              <Text>{t('riseInNovember')}</Text>
              <Text>{t('lowPointInJanuary')}</Text>
              <Text>{t('highPoint')}</Text>
              <Text>{t('highestPointSoFar')}</Text>
            </Stack>
          </Flex>
        </>
      )}
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'cryptocurrencies'
    ]))
  }
});

export default cryptocurrencies;
