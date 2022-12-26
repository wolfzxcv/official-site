import { links } from '@/assets/links';
import Banner from '@/components/Banner/Banner';
import WCGDC from '@/components/Banner/WCGDC';
import WCGJYK from '@/components/Banner/WCGJYK';
import Wrapper from '@/components/Base/Wrapper';
import Carousel from '@/components/Carousel/Carousel';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import IntroductionVideo from '@/components/PopUp/IntroductionVideo';
import WCGGN from '@/components/PopUp/WCGGN';
import { Locales } from '@/i18n/config';
import { formatLang } from '@/utils';
import { Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { AiFillLock, AiOutlineFieldTime } from 'react-icons/ai';
import { BsLightningFill } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { GiChampions, GiServerRack } from 'react-icons/gi';
import { HiServer } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';

const Index: React.FC<{}> = () => {
  const { t } = useTranslation('home');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  const lang = formatLang(currentLang, 'ar').replace('-', '_');
  const sliders = [
    <WCGJYK key="WCGJYK" />,
    <WCGDC key="WCGDC" />,
    <Banner key="Banner" />
  ];

  return (
    <Wrapper>
      <WCGGN />

      <IntroductionVideo />

      <Carousel
        defaultSlider={<Banner key="Banner" />}
        sliders={sliders}
        showArrow
      />

      {/* 3 red/white blocks: Safe and secure depository */}
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        justify="space-around"
        align="center"
        my={10}
      >
        <Box
          width={{ base: '80vw', xl: '28vw' }}
          my={3}
          border={{ base: 'none', xl: '1px' }}
        >
          <Flex
            direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
            minH={{ base: '100px', xl: isChinese ? '200px' : '292px' }}
            align="center"
          >
            <Box m={5} color="red.600">
              <AiFillLock fontSize="32px" />
            </Box>
            <Stack
              p={2}
              spacing={3}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <Box
                fontSize="24px"
                fontWeight="700"
                height={isChinese ? 'auto' : '72px'}
              >
                {t('safeAndSecureDepository')}
              </Box>
              <Box minH={isChinese ? 'auto' : '144px'}>
                {t('customerFunds')}
              </Box>
            </Stack>
          </Flex>
        </Box>

        <Box
          width={{ base: '80vw', xl: '28vw' }}
          my={3}
          border={{ base: 'none', xl: '1px' }}
        >
          <Flex
            direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
            minH={{ base: '100px', xl: isChinese ? '200px' : '292px' }}
            align="center"
          >
            <Box m={5} color="red.600">
              <BsLightningFill fontSize="32px" />
            </Box>
            <Stack
              p={2}
              spacing={3}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <Box
                fontSize="24px"
                fontWeight="700"
                height={isChinese ? 'auto' : '72px'}
              >
                {t('efficientDeposit')}
              </Box>
              <Box minH={isChinese ? 'auto' : '144px'}>
                {t('theDepositAndWithdrawal')}
              </Box>
            </Stack>
          </Flex>
        </Box>

        <Box
          width={{ base: '80vw', xl: '28vw' }}
          my={3}
          border={{ base: 'none', xl: '1px' }}
        >
          <Flex
            direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
            minH={{ base: '100px', xl: isChinese ? '200px' : '292px' }}
            align="center"
          >
            <Box m={5} color="red.600">
              <GiServerRack fontSize="32px" />
            </Box>
            <Stack
              p={2}
              spacing={3}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <Box
                fontSize="24px"
                fontWeight="700"
                height={isChinese ? 'auto' : '72px'}
              >
                {t('fastPayment')}
              </Box>
              <Box minH={isChinese ? 'auto' : '144px'}>
                {t('theLatestTechnology')}
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Flex>

      {/* Invest */}
      <Flex
        my={10}
        p={5}
        direction="column"
        align="center"
        bgColor="gray.800"
        color="white"
      >
        <Flex fontSize={{ base: '28px', md: '36px' }} fontWeight="700">
          <Text color="red.500" mr={isChinese ? 0 : 3}>
            {t('invest')}
          </Text>
          <Text>{t('inNewChannels')}</Text>
        </Flex>
        <Box fontSize={{ base: '20px', md: '24px' }} my={3}>
          {t('professionalEquals')}
        </Box>
        <Image src="/../assets/images/home_divider.png" alt="divider" />
      </Flex>

      {/* Trading System */}
      <Flex
        m={10}
        direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
        justify="space-evenly"
        align="center"
      >
        <InfoCard
          icon={<FaMobileAlt fontSize="32px" />}
          title={t('mobileTradingSystem')}
          text={t('WCGMobileTradingSystem')}
          minH={isChinese ? 'auto' : '300px'}
          bigW="40vw"
        />

        <InfoCard
          icon={<GiChampions fontSize="32px" />}
          title={t('brandReputation')}
          text={t('WCGValuesTheCustomersTradingExperience')}
          minH={isChinese ? 'auto' : '300px'}
          bigW="40vw"
        />
      </Flex>

      {/* Precious Metals Contract */}
      <Flex py={10} my={10} align="center" color="white">
        <Box
          textAlign={isArabic ? 'right' : 'left'}
          width={{ base: '98vw', xl: '75vw' }}
          minH="295px"
          bgColor="gray.800"
          padding="10"
        >
          <InfoTitle title={t('preciousMetalsContract')} />
          <Stack pt={5} spacing={2}>
            <Text>{t('timesLeverage')}</Text>
            <Text>{t('LondonGoldLondonSilver')}</Text>
            <Text>{t('shortFundSettlementTime')}</Text>
          </Stack>

          <Flex
            justify="center"
            alignItems="center"
            display={{ base: 'flex', xl: 'none' }}
          >
            <Link
              _hover={{
                textDecoration: 'none'
              }}
              href={links.register}
              isExternal
            >
              <Box
                mt={{ base: 10, xl: 0 }}
                p={2}
                bg="red.600"
                fontSize="22px"
                textAlign="center"
                width="250px"
              >
                {t('accountOpening')}
              </Box>
            </Link>
          </Flex>
        </Box>

        <Flex
          bgImage="/../assets/images/home_gold.jpg"
          bgSize="cover"
          height="295px"
          width="600px"
          justify="center"
          alignItems="center"
          display={{ base: 'none', xl: 'flex' }}
        >
          <Link
            _hover={{
              textDecoration: 'none'
            }}
            href={links.register}
            isExternal
          >
            <Box
              mt={{ base: 10, xl: 0 }}
              p={2}
              bg="red.600"
              fontSize="22px"
              minW="250px"
              textAlign="center"
              _hover={{
                bgColor: 'red.500',
                cursor: 'pointer',
                transition: '1s'
              }}
            >
              {t('accountOpening')}
            </Box>
          </Link>
        </Flex>
      </Flex>

      {/* TradingView Widget BEGIN */}
      <Box my={10} display={{ base: 'none', md: 'block' }}>
        {currentLang === 'cn' ? (
          <iframe
            frameBorder="0"
            height="580"
            style={{
              height: '600px',
              margin: '0 auto',
              width: '80vw',
              minWidth: '600px'
            }}
            scrolling="yes"
            src={`https://rili-d.jin10.com/open.php?fontSize=14px&theme=primary`}
          ></iframe>
        ) : (
          <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <iframe
              scrolling="no"
              // @ts-expect-error
              allowtransparency="true"
              frameBorder="0"
              src={`https://www.tradingview-widget.com/embed-widget/events/?locale=${lang}#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22utm_source%22%3A%22www.wcglb.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22events%22%7D`}
              style={{
                height: '600px',
                margin: '0 auto',
                width: '80vw',
                minWidth: '600px'
              }}
            ></iframe>
            <Box textAlign="center">
              <Link
                href="https://tw.tradingview.com/markets/currencies/economic-calendar/"
                isExternal
                color="blue.300"
              >
                財經日曆
              </Link>
              由TradingView提供
            </Box>
          </div>
        )}
      </Box>

      {/* TradingView Widget END */}

      {/* Mobile Real-time quotation of our trading products */}
      <Box display={{ base: 'block', xl: 'none' }} width="100%">
        <Box width="100%" height="auto">
          <Image
            minW="100%"
            src="/../assets/images/home_mobileBg.jpg"
            alt="mobile"
          />
        </Box>

        <Flex m={10} direction="column" justify="center" align="center">
          <InfoCard
            icon={<AiOutlineFieldTime fontSize="32px" />}
            title={t('realTimeQuotation')}
            text={t('aVarietyOfProfessional')}
          />

          <InfoCard
            icon={<ImEarth fontSize="32px" />}
            title={t('investmentProductsAcross')}
            text={t('includingMoreThan')}
          />

          <InfoCard
            icon={<HiServer fontSize="32px" />}
            title={t('connectingTo')}
            text={t('automatedProcess')}
          />
        </Flex>
      </Box>

      {/* Desktop Real-time quotation of our trading products */}
      <Box display={{ base: 'none', xl: 'block' }}>
        <Flex justify="center" mt="250px">
          <Box maxW="432px" mx={2}>
            <Image src="/../assets/images/home_phone.jpg" alt="left" />
            <Stack
              bgImage="/../assets/images/home_cardBg.png"
              bgSize="cover"
              minH={isChinese ? '150px' : '225px'}
              p={6}
              spacing={3}
              color="white"
              textAlign={isArabic ? 'right' : 'left'}
            >
              <Text fontSize="24px" fontWeight="700">
                {t('realTimeQuotation')}
              </Text>
              <Text>{t('aVarietyOfProfessional')}</Text>
            </Stack>
          </Box>

          <Box maxW="432px" position="relative" top="-115px" right="16px">
            <Image
              src="/../assets/images/home_twoPhone.png"
              alt="middle"
              maxW="512px"
            />

            <Stack
              bgImage="/../assets/images/home_cardBg.png"
              bgSize="cover"
              minH={isChinese ? '150px' : '225px'}
              position="relative"
              top="-28px"
              left="16px"
              zIndex={-1}
              p={6}
              spacing={3}
              color="white"
              textAlign={isArabic ? 'right' : 'left'}
            >
              <Text fontSize="24px" fontWeight="700">
                {t('investmentProductsAcross')}
              </Text>
              <Text>{t('includingMoreThan')}</Text>
            </Stack>
          </Box>

          <Box maxW="432px" mx={2}>
            <Image src="/../assets/images/home_connectServer.jpg" alt="right" />
            <Stack
              bgImage="/../assets/images/home_cardBg.png"
              bgSize="cover"
              minH={isChinese ? '150px' : '225px'}
              p={6}
              spacing={3}
              color="white"
              textAlign={isArabic ? 'right' : 'left'}
            >
              <Text fontSize="24px" fontWeight="700">
                {t('connectingTo')}
              </Text>
              <Text>{t('automatedProcess')}</Text>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* Download immediately */}
      <Box
        mt={{ base: '100px', md: 0 }}
        mx={10}
        mb="100px"
        _hover={{ transition: '1s' }}
      >
        <Flex
          justify="center"
          align="center"
          height="70px"
          mb={{ base: 20, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box
            fontSize={{ base: '32px', md: '48px' }}
            fontWeight="700"
            color="black"
            textAlign="center"
            mr={{ base: 0, md: 5 }}
          >
            {t('downloadImmediately')}
          </Box>
          <Box>
            <Image src="/../assets/images/home_meta4.png" alt="meta4"></Image>
          </Box>
        </Flex>

        <Box textAlign="center">{t('fastExecutionOfEachOrder')}</Box>

        <Flex my={10} justify="center">
          <Link
            mx={2}
            _hover={{
              transform: 'scale(1.2)'
            }}
            isExternal
            href={links.mt4IOS}
          >
            <Image src="/../assets/images/home_apple.png" alt="apple"></Image>
          </Link>

          <Link
            mx={2}
            _hover={{
              transform: 'scale(1.2)'
            }}
            isExternal
            href={links.mt4Android}
          >
            <Image
              src="/../assets/images/home_android.png"
              alt="android"
            ></Image>
          </Link>

          <Link
            mx={2}
            _hover={{
              transform: 'scale(1.2)'
            }}
            isExternal
            href={links.mt4Apk}
          >
            <Image src="/../assets/images/home_huawei.png" alt="huawei"></Image>
          </Link>

          <Link
            mx={2}
            _hover={{
              transform: 'scale(1.2)'
            }}
            href={links.mt4App}
          >
            <Image src="/../assets/images/home_pc.png" alt="pc"></Image>
          </Link>
        </Flex>

        <Center>
          <Image src="/../assets/images/home_divider.png" alt="divider" />
        </Center>
      </Box>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'home'
    ]))
  }
});

export default Index;
