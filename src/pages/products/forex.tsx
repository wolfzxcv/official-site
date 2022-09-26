import Wrapper from '@/components/Base/Wrapper';
import { InfoAccordionItemProps } from '@/components/Common/InfoAccordion';
import InfoButton from '@/components/Common/InfoButton';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { HiServer, HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';

const InfoAccordion = dynamic(
  () => import('@/components/Common/InfoAccordion'),
  { ssr: false }
);

const forex: React.FC<{}> = () => {
  const { t } = useTranslation('forex');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  const data: InfoAccordionItemProps[] = [
    {
      title: `${!isArabic ? '1. ' : ''}${t('chooseAForeign')}`,
      content: [t('theFirstDecision'), t('inWCG')]
    },
    {
      title: `${!isArabic ? '2. ' : ''}${t('determineTheDirection')}`,
      content: [
        t('afterChoosing'),
        `${!isArabic ? '--' : ''}${t(
          'ifYouThinkThatTheBaseCurrencyIsStronger'
        )}`,
        `${!isArabic ? '--' : ''}${t('ifYouThinkThatTheBaseCurrencyIsWeaker')}`,
        t('atTheSameTime')
      ]
    },
    {
      title: `${!isArabic ? '3. ' : ''}${t('setStop')}`,
      content: [t('stopLossTakeProfit'), t('thePurposeOf')]
    },
    {
      title: `${!isArabic ? '4. ' : ''}${t('monitorYourTrading')}`,
      content: [t('beforeThePositionIsClosed'), t('soRealTimeMonitoring')]
    },
    {
      title: `${!isArabic ? '5. ' : ''}${t('closeYourPosition')}`,
      content: [t('itIsExtremelyImportant'), t('FailingToDoSo')]
    }
  ];

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
          <Image src="/../assets/images/forex_forex.png" alt="forex" />
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

        <InfoAccordion data={data} />
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
            minH={isChinese ? '280px' : '306px'}
          />

          <InfoCard
            icon={<ImEarth fontSize="32px" />}
            title={t('fundingThreshold')}
            text={t('whenTradingForeignExchange')}
            withBorder
            minH={isChinese ? '280px' : '306px'}
          />

          <InfoCard
            icon={<HiServer fontSize="32px" />}
            title={t('hoursTrading')}
            text={t('fromMondayMorning')}
            withBorder
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'forex',
      'header'
    ]))
  }
});

export default forex;
