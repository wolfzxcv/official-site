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
import { StyledBox } from '../components/Styled/Styled';
import Wrapper from '../components/Wrapper';
import { Locales } from '../i18n/locales';

const Index: React.FC<{}> = () => {
  const { t } = useTranslation(['common', 'home']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'hk';

  return (
    <Wrapper variant="large">
      <Box
        minH="500px"
        backgroundImage="url('../assets/images/banner.png')"
        bgAttachment="fixed"
        bgPosition="top center"
        bgSize="cover"
      >
        <Flex
          height="inherit"
          minH="500px"
          direction="column"
          justify="center"
          align="center"
        >
          {/* Banner */}
          <Stack spacing={3} p={3} width={{ base: '80vw', xl: '60vw' }}>
            <Text fontWeight="700" fontSize="42px" color="white">
              {t('home:diversifiedProducts')}
            </Text>
            <Text fontWeight="700" fontSize="42px" color="white">
              {t('home:strongAdvantages')}
            </Text>
            <Text fontSize="24px" color="white">
              {t('home:highLiquidity')}
            </Text>
            <Text fontSize="24px" color="white">
              {t('home:safetyOfFunds')}
            </Text>
          </Stack>

          {/* Button under Banner */}
          <StyledBox
            as="a"
            href="/products/forex"
            m={3}
            p={2}
            minH="48px"
            minW="200px"
            border="2px"
            borderColor="gray.100"
            bgColor="transparent"
            color="gray.100"
            textAlign="center"
            fontSize="24px"
            _hover={{
              bgColor: 'gray.100',
              color: 'gray.700',
              cursor: 'pointer',
              transform: 'scale(1.1)',
              fontWeight: '600'
            }}
          >
            {t('home:askProductsNow')}
          </StyledBox>
        </Flex>
      </Box>

      {/* 3 red/white blocks */}
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        justify="space-around"
        align="center"
        my={10}
      >
        <Box
          bg={{ base: 'none', xl: 'red.600' }}
          color={{ base: 'black', xl: 'white' }}
          width={{ base: '80vw', xl: '28vw' }}
          my={3}
        >
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            minH={{ base: '100px', xl: '250px' }}
            border={{ base: 'none', xl: '1px' }}
            align="center"
          >
            <Box m={5} color={{ base: 'red.600', xl: 'inherit' }}>
              <AiFillLock fontSize="32px" />
            </Box>
            <Stack p={2} spacing={3} textAlign={{ base: 'center', xl: 'left' }}>
              <Text fontSize="24px" fontWeight="700">
                {t('home:safeAndSecureDepository')}
              </Text>
              <Text>{t('home:customerFunds')}</Text>
            </Stack>
          </Flex>
        </Box>

        <Box
          bg={{ base: 'none', xl: 'red.600' }}
          color={{ base: 'black', xl: 'white' }}
          width={{ base: '80vw', xl: '28vw' }}
          my={3}
        >
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            minH={{ base: '100px', xl: '250px' }}
            border={{ base: 'none', xl: '1px' }}
            align="center"
          >
            <Box m={5} color={{ base: 'red.600', xl: 'inherit' }}>
              <BsLightningFill fontSize="32px" />
            </Box>
            <Stack p={2} spacing={3} textAlign={{ base: 'center', xl: 'left' }}>
              <Text fontSize="24px" fontWeight="700">
                {t('home:efficientDeposit')}
              </Text>
              <Text>{t('home:theDepositAndWithdrawal')}</Text>
            </Stack>
          </Flex>
        </Box>

        <Box
          bg={{ base: 'none', xl: 'red.600' }}
          color={{ base: 'black', xl: 'white' }}
          width={{ base: '80vw', xl: '28vw' }}
          my={3}
        >
          <Flex
            direction={{ base: 'column', xl: 'row' }}
            minH={{ base: '100px', xl: '250px' }}
            border={{ base: 'none', xl: '1px' }}
            align="center"
          >
            <Box m={5} color={{ base: 'red.600', xl: 'inherit' }}>
              <GiServerRack fontSize="32px" />
            </Box>
            <Stack p={2} spacing={3} textAlign={{ base: 'center', xl: 'left' }}>
              <Text fontSize="24px" fontWeight="700">
                {t('home:fastPayment')}
              </Text>
              <Text>{t('home:theLatestTechnology')}</Text>
            </Stack>
          </Flex>
        </Box>
      </Flex>

      {/* Invest */}
      <Flex my="80px" direction="column" align="center">
        <Flex fontSize="36px" fontWeight="700">
          <Text color="red.500" mr={isChinese ? 0 : 3}>
            {t('home:invest')}
          </Text>
          <Text>{t('home:inNewChannels')}</Text>
        </Flex>
        <Box fontSize="24px" my={3}>
          {t('home:professionalEquals')}
        </Box>
        <Image src="../assets/images/home_divider.png" alt="divider" />
      </Flex>

      {/* Mobile Trading System */}
      <Flex
        my={10}
        direction={{ base: 'column', xl: 'row' }}
        justify="center"
        align="center"
      >
        <Box m={5} color="red.600">
          <FaMobileAlt fontSize="32px" />
        </Box>

        <Stack
          p={2}
          spacing={3}
          width={{ base: '80vw', xl: '40vw' }}
          textAlign={{ base: 'center', xl: 'left' }}
        >
          <Text fontSize="24px" fontWeight="700">
            {t('home:mobileTradingSystem')}
          </Text>
          <Text>{t('home:WCGMobileTradingSystem')}</Text>
        </Stack>

        <Box mt={{ base: 10, xl: 5 }} mb={5} mx={5} color="red.600">
          <GiChampions fontSize="32px" />
        </Box>

        <Stack
          p={2}
          spacing={3}
          width={{ base: '80vw', xl: '40vw' }}
          textAlign={{ base: 'center', xl: 'left' }}
        >
          <Text fontSize="24px" fontWeight="700">
            {t('home:brandReputation')}
          </Text>
          <Text>{t('home:withFormalBusinessLicense')}</Text>
        </Stack>
      </Flex>

      {/* Precious Metals Contract */}
      <Flex
        backgroundImage="url('../assets/images/home_gold.png')"
        bgSize="cover"
        minH="250px"
        px={5}
        py={10}
        my={10}
        direction={{ base: 'column', xl: 'row' }}
        align="center"
        justify="space-evenly"
        color="white"
      >
        <Box maxW="70vw">
          <Text fontSize="36px" fontWeight="700">
            {t('home:preciousMetalsContract')}
          </Text>
          <Text fontSize="22px">{t('home:timesLeverage')}</Text>
        </Box>

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
            fontSize="28px"
            _hover={{
              bgColor: 'red.500',
              cursor: 'pointer',
              transform: 'scale(1.1)',
              fontWeight: '600'
            }}
          >
            {t('home:accountOpening')}
          </StyledBox>
        </Link>
      </Flex>

      {/* embed from  */}
      {/* <Box my={10} display={{ base: 'none', md: 'block' }}>
        <iframe
          frameBorder="0"
          height="580"
          style={{ margin: '0 auto', width: '80vw', minWidth: '600px' }}
          scrolling="yes"
          src={`https://rili-d.jin10.com/open.php?fontSize=14px&theme=primary`}
        ></iframe>
      </Box> */}

      {/* TradingView Widget BEGIN */}
      <Box my={10} display={{ base: 'none', md: 'block' }}>
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <iframe
            scrolling="no"
            // @ts-expect-error
            allowtransparency="true"
            frameBorder="0"
            src="https://www.tradingview-widget.com/embed-widget/events/?locale=zh_CN#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22importanceFilter%22%3A%22-1%2C0%2C1%22%2C%22utm_source%22%3A%22www.wcglb.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22events%22%7D"
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
      </Box>
      {/* TradingView Widget END */}

      {/* Mobile Real-time quotation of our trading products */}
      <Box display={{ base: 'block', xxl: 'none' }} width="inherit">
        <Box
          width="inherit"
          backgroundImage="url('../assets/images/home_mobileBg.png')"
          bgSize="cover"
          height="980px"
        ></Box>

        <Box p={5}>
          <Box mt={10} mx="auto" color="red.600">
            <Center>
              <AiOutlineFieldTime fontSize="32px" />
            </Center>
          </Box>
          <Stack spacing={3} textAlign="center">
            <Text fontSize="24px" fontWeight="700">
              {t('home:realTimeQuotation')}
            </Text>
            <Text>{t('home:aVarietyOfProfessional')}</Text>
          </Stack>

          <Box mt={10} mx="auto" color="red.600">
            <Center>
              <ImEarth fontSize="32px" />
            </Center>
          </Box>
          <Stack spacing={3} textAlign="center">
            <Text fontSize="24px" fontWeight="700">
              {t('home:investmentProductsAcross')}
            </Text>
            <Text>{t('home:includingMoreThan')}</Text>
          </Stack>

          <Box mt={10} mx="auto" color="red.600">
            <Center>
              <HiServer fontSize="32px" />
            </Center>
          </Box>
          <Stack spacing={3} textAlign="center">
            <Text fontSize="24px" fontWeight="700">
              {t('home:connectingTo')}
            </Text>
            <Text>{t('home:automatedProcess')}</Text>
          </Stack>
        </Box>
      </Box>

      {/* Desktop Real-time quotation of our trading products */}
      <Box display={{ base: 'none', xxl: 'block' }}>
        <Flex justify="center" mt="250px">
          <Box maxW="432px" mx={2}>
            <Image src="../assets/images/home_phone.png" alt="left" />
            <Stack
              backgroundImage="url('../assets/images/home_cardBg.png')"
              bgSize="cover"
              minH={isChinese ? '150px' : '215px'}
              p={6}
              spacing={3}
              color="white"
              textAlign="left"
            >
              <Text fontSize="24px" fontWeight="700">
                {t('home:realTimeQuotation')}
              </Text>
              <Text>{t('home:aVarietyOfProfessional')}</Text>
            </Stack>
          </Box>

          <Box maxW="432px" position="relative" top="-115px" right="16px">
            <Image
              src="../assets/images/home_twoPhone.png"
              alt="middle"
              maxW="512px"
            />

            <Stack
              backgroundImage="url('../assets/images/home_cardBg.png')"
              bgSize="cover"
              minH={isChinese ? '150px' : '215px'}
              position="relative"
              top="-28px"
              left="16px"
              zIndex={-1}
              p={6}
              spacing={3}
              color="white"
              textAlign="left"
            >
              <Text fontSize="24px" fontWeight="700">
                {t('home:investmentProductsAcross')}
              </Text>
              <Text>{t('home:includingMoreThan')}</Text>
            </Stack>
          </Box>

          <Box maxW="432px" mx={2}>
            <Image src="../assets/images/home_connectServer.png" alt="right" />
            <Stack
              backgroundImage="url('../assets/images/home_cardBg.png')"
              bgSize="cover"
              minH={isChinese ? '150px' : '215px'}
              p={6}
              spacing={3}
              color="white"
              textAlign="left"
            >
              <Text fontSize="24px" fontWeight="700">
                {t('home:connectingTo')}
              </Text>
              <Text>{t('home:automatedProcess')}</Text>
            </Stack>
          </Box>
        </Flex>
      </Box>

      {/* Download immediately */}
      <StyledBox m={10}>
        <Flex
          justify="center"
          align="center"
          height="70px"
          mb={{ base: 20, md: 10 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Box
            fontSize="48px"
            fontWeight="700"
            color="black"
            textAlign="center"
            mr={{ base: 0, md: 5 }}
          >
            {t('home:downloadImmediately')}
          </Box>
          <Box>
            <Image src="../assets/images/home_meta4.png" alt="meta4"></Image>
          </Box>
        </Flex>

        <Box textAlign="center">{t('home:fastExecutionOfEachOrder')}</Box>

        <Flex my={10} justify="center">
          <Link
            mx={2}
            _hover={{
              transform: 'scale(1.2)'
            }}
            isExternal
            href="https://apps.apple.com/us/app/metatrader-4/id496212596"
          >
            <Image src="../assets/images/home_apple.png" alt="apple"></Image>
          </Link>
          <Link
            mx={2}
            _hover={{
              transform: 'scale(1.2)'
            }}
            isExternal
            href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/metatrader4.apk?utm_source=www.metatrader4.com&utm_campaign=download"
          >
            <Image
              src="../assets/images/home_android.png"
              alt="android"
            ></Image>
          </Link>

          <Link
            mx={2}
            _hover={{
              transform: 'scale(1.2)'
            }}
            href="https://download.mql5.com/cdn/web/17749/mt4/wenchuangloballtd4setup.exe"
          >
            <Image src="../assets/images/home_pc.png" alt="pc"></Image>
          </Link>
        </Flex>

        <Center>
          <Image src="../assets/images/home_divider.png" alt="divider" />
        </Center>
      </StyledBox>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header',
      'home'
    ]))
  }
});

export default Index;
