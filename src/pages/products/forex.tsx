import { Accordion, Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { HiServer, HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';
import InfoButton from '../../components/Common/InfoButton';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const InfoAccordionItem = dynamic(
  () => import('../../components/Common/InfoAccordionItem'),
  { ssr: false }
);

const forex: React.FC<{}> = () => {
  const { t } = useTranslation(['forex']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* forex */}
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
            <InfoTitle title={t('foreignExchangeTransactions')} />
          </Flex>

          <Text my={10}>{t('theForeignExchange')}</Text>
          <InfoButton text={t('viewTradingProducts')} href="/products" />
        </Box>
        <Flex width={{ base: '0', xl: '40vw' }} justify="center">
          <Image src="../assets/images/forex_forex.png" alt="forex" />
        </Flex>
      </Flex>

      {/* How to perform foreign exchange transactions */}
      <Flex direction="column" align="center" py={20}>
        <InfoTitle title={t('howToPerform')} />

        <Text width="80vw" align="center" my={5} color="gray.400">
          {t('foreignExchangeCurrencies')}
        </Text>

        <Box width="80vw">
          <Text>{t('inForeignExchangeTrading')}</Text>
          <Text my={5}>{t('throughWCG')}</Text>
          <Text>{t('unlikeOther')}</Text>
        </Box>
      </Flex>

      {/* Buy-long Sell-short */}
      <Flex
        py={20}
        direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
        justify="center"
        align="center"
        bgColor="gray.100"
      >
        <InfoCard
          icon={<HiTrendingUp fontSize="32px" />}
          title={t('buyLong')}
          text={t('judgeTheMarket')}
          bigW="40vw"
        />

        <InfoCard
          icon={<HiTrendingDown fontSize="32px" />}
          title={t('sellShort')}
          text={t('anticipatingThat')}
          bigW="40vw"
        />
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
        <Flex bg="red.600" color="white" mt={10} p={10} justify="center">
          <Text width="80vw" fontWeight={'600'}>
            {t('foreignExchangeQuotes')}
          </Text>
        </Flex>

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
            minH={isChinese ? '280px' : 'auto'}
          />

          <InfoCard
            icon={<ImEarth fontSize="32px" />}
            title={t('fundingThreshold')}
            text={t('whenTradingForeignExchange')}
            withBorder
            minH={isChinese ? '280px' : 'auto'}
          />

          <InfoCard
            icon={<HiServer fontSize="32px" />}
            title={t('hoursTrading')}
            text={t('fromMondayMorning')}
            withBorder
            minH={isChinese ? '280px' : 'auto'}
          />
        </Flex>
      </Flex>
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
