import Wrapper from '@/components/Base/Wrapper';
import InfoButton from '@/components/Common/InfoButton';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';

const uSShareCFD: React.FC<{}> = () => {
  const { t } = useTranslation('uSShareCFD');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* Trade Shares CFDs */}
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
            <InfoTitle title={t('tradeSharesCFDs')} />
          </Flex>

          <Text my={10}>{t('WCGOffersAWideRange')}</Text>
          <InfoButton
            text={t('viewTradingProducts')}
            href="/products"
            option="uSShareCFD"
          />
        </Box>
        <Flex
          width={{ base: '0', xl: '40vw' }}
          display={{ base: 'none', xl: 'block' }}
        >
          <Text
            textShadow="3px 3px #C53030"
            fontWeight="700"
            fontSize="180px"
            textAlign="center"
          >
            CFD
          </Text>
        </Flex>
      </Flex>

      {/* Why trade Shares with WCG */}
      <Flex my={10} direction="column" align="center">
        <Box mt={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('whyTradeSharesWithWCG')} />
        </Box>
        <Flex
          py={10}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={
              <Image src="/../assets/images/uSShareCFD_icon1.png" alt="icon1" />
            }
            text={t('competitivePrices')}
            bigW="20vw"
            minH="290px"
          />

          <InfoCard
            image={
              <Image src="/../assets/images/uSShareCFD_icon2.png" alt="icon2" />
            }
            text={t('tradeShortAndLong')}
            bigW="20vw"
            minH="290px"
          />

          <InfoCard
            image={
              <Image src="/../assets/images/uSShareCFD_icon3.png" alt="icon3" />
            }
            text={t('tradeShares')}
            bigW="20vw"
            minH="290px"
          />

          <InfoCard
            image={
              <Image src="/../assets/images/uSShareCFD_icon4.png" alt="icon4" />
            }
            text={t('WCGOffersZeroCommission')}
            bigW="20vw"
            minH="290px"
          />
        </Flex>
      </Flex>

      {/* The world's nine major indexes */}
      <Flex py={20} direction="column" align="center" bg="gray.100">
        <Box my={20} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('howDoITradeCFDShares')} />
        </Box>

        <Box py={10} width="80vw" textAlign={isArabic ? 'right' : 'left'}>
          <Stack spacing={5}>
            <Text>{t('whenTradingASingleCFDShare')}</Text>
            <Text>{t('clientsWhoHoldBUY')}</Text>
            <Text>{t('ClientsWhoHoldSELL')}</Text>
            <Text>{t('adjustmentFormula')}</Text>

            {/* Cash Dividend */}
            <Box pt={10}>
              <InfoTitle size="22px" title={t('cashDividend')} />
            </Box>
            <Text>{t('forExample')}</Text>
            <Text>{t('ifAnIndividualClient')}</Text>

            {/* Share Split or Reserve Share Split */}
            <Box pt={10}>
              <InfoTitle
                size="22px"
                title={t('shareSplitOrReserveShareSplit')}
              />
            </Box>
            <Text>{t('ifACompanyAnnounces')}</Text>
            <Text>{t('reserveShareSplit')}</Text>
            <Text>{t('shareSplit')}</Text>
            <Text>{t('openPositions')}</Text>
            <Text>{t('however')}</Text>

            {/* Dividends */}
            <Box pt={10}>
              <InfoTitle size="22px" title={t('dividends')} />
            </Box>
            <Text>{t('aListedCompany')}</Text>

            {/* Ex-dividend Date */}
            <Box pt={10}>
              <InfoTitle size="22px" title={t('exDividendDate')} />
            </Box>
            <Text>{t('anExDividendIs')}</Text>
          </Stack>
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
      'uSShareCFD'
    ]))
  }
});

export default uSShareCFD;
