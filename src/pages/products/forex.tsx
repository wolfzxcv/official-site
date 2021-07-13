import { Accordion, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { HiServer } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';
import InfoAccordionItem from '../../components/Common/InfoAccordionItem';
import InfoButton from '../../components/Common/InfoButton';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

interface forexProps {}

const forex: React.FC<forexProps> = () => {
  const { t } = useTranslation(['forex']);
  const [showLong, setShowLong] = useState(true);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'sa';

  return (
    <Wrapper>
      <Box>
        {/* forex */}
        <Flex justify="space-around" my={20}>
          <Flex direction="column" width={{ base: '80vw', md: '40vw' }} mx={2}>
            <InfoTitle title={t('foreignExchangeTransactions')} />
            <Text my={5}>{t('theForeignExchange')}</Text>
            <InfoButton text={t('viewTradingProducts')} href="/products" />
          </Flex>
          <Box display={{ base: 'none', md: 'flex' }}>
            <Image src={`../assets/images/forex_forex.png`} alt="forex"></Image>
          </Box>
        </Flex>

        {/* How to perform foreign exchange transactions */}
        <Flex
          direction="column"
          align="center"
          mt={10}
          py={5}
          px={10}
          bgColor={'red.600'}
          color="white"
        >
          <InfoTitle title={t('howToPerform')} />

          <Text textAlign={isArabic ? 'right' : 'left'} my={5} color="gray.400">
            {t('foreignExchangeCurrencies')}
          </Text>

          <Box>
            <Text>{t('inForeignExchangeTrading')}</Text>
            <Text my={5}>{t('throughWCG')}</Text>
            <Text>{t('unlikeOther')}</Text>
          </Box>
        </Flex>

        {/* Buy-long Sell-short */}
        <Flex direction="column" bgColor="gray.100" py="100px" align="center">
          <Box display="flex">
            <Button
              variant="outline"
              bgColor={showLong ? 'gray.200' : 'inherit'}
              mx={2}
              size="lg"
              onClick={() => {
                setShowLong(true);
              }}
            >
              {t('buyLong')}
            </Button>
            <Button
              variant="outline"
              bgColor={showLong ? 'inherit' : 'gray.200'}
              mx={2}
              size="lg"
              onClick={() => {
                setShowLong(false);
              }}
            >
              {t('sellShort')}
            </Button>
          </Box>
          <Box m={10}>
            {showLong ? t('judgeTheMarket') : t('anticipatingThat')}{' '}
          </Box>
          <InfoButton href="/learnTrade/basicTrading" text={t('learnMore')} />
        </Flex>

        {/* Start forex trading in five easy steps */}
        <Flex my={5} mx={5} p={5} direction="column" align="center">
          <InfoTitle title={t('startForexTrading')} />

          <Text my={5} color="gray.400">
            {t('joinA24Hour')}
          </Text>

          <Accordion width={'80vw'} allowToggle>
            <InfoAccordionItem
              title={`1. ${t('chooseAForeign')}`}
              content={[t('theFirstDecision'), t('inWCG')]}
            />

            <InfoAccordionItem
              title={`2. ${t('determineTheDirection')}`}
              content={[
                t('afterChoosing'),
                `--${t('ifYouThinkThatTheBaseCurrencyIsStronger')}`,
                `--${t('ifYouThinkThatTheBaseCurrencyIsWeaker')}`,
                t('atTheSameTime')
              ]}
            />

            <InfoAccordionItem
              title={`3. ${t('setStop')}`}
              content={[t('stopLossTakeProfit'), t('thePurposeOf')]}
            />

            <InfoAccordionItem
              title={`4. ${t('monitorYourTrading')}`}
              content={[
                t('beforeThePositionIsClosed'),
                t('soRealTimeMonitoring')
              ]}
            />

            <InfoAccordionItem
              title={`5. ${t('closeYourPosition')}`}
              content={[t('itIsExtremelyImportant'), t('FailingToDoSo')]}
            />
          </Accordion>
        </Flex>

        {/* Foreign exchange quotes */}
        <Flex direction="column">
          <Text mt={10} p={10} fontWeight={'600'} bg="red.600" color="white">
            {t('foreignExchangeQuotes')}
          </Text>

          <Flex
            px={10}
            py={'100px'}
            direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
            justify="space-evenly"
            align="center"
            bgColor="gray.100"
          >
            <InfoCard
              icon={<AiOutlineFieldTime fontSize="32px" />}
              title={t('supportLeverage')}
              text={t('youCanUtilizeLeverage')}
              withBorder
            />

            <InfoCard
              icon={<ImEarth fontSize="32px" />}
              title={t('fundingThreshold')}
              text={t('whenTradingForeignExchange')}
              withBorder
            />

            <InfoCard
              icon={<HiServer fontSize="32px" />}
              title={t('hoursTrading')}
              text={t('fromMondayMorning')}
              withBorder
            />
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'forex',
      'header'
    ]))
  }
});

export default forex;
