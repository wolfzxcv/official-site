import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Script from 'next/script';
import React from 'react';
import { AiFillLock, AiFillTags } from 'react-icons/ai';
import { BsLightningFill } from 'react-icons/bs';
import { GiServerRack } from 'react-icons/gi';
import Wrapper from '../components/Wrapper';

const Index: React.FC<{}> = () => {
  const { t } = useTranslation(['common', 'home']);

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
          <Box
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
              cursor: 'pointer'
            }}
          >
            {t('home:askProductsNow')}
          </Box>
        </Flex>
      </Box>

      {/* 3 red/white blocks */}
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        justify="space-around"
        align="center"
        my={3}
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
      <Flex my={10} direction="column" align="center">
        <Box fontSize="36px" fontWeight="700">
          {t('home:investInNewChannels')}
        </Box>
        <Box fontSize="24px" my={3}>
          {t('home:professionalEquals')}
        </Box>
        <Image src="../assets/images/home_divider.png" alt="divider" />
      </Flex>

      {/* Mobile Trading System */}
      <Flex my={10} direction={{ base: 'column', xl: 'row' }}>
        <Box m={5} color="red.600" display={{ base: 'none', xl: 'block' }}>
          <AiFillTags fontSize="32px" />
        </Box>
        <Stack p={2} spacing={3} textAlign={{ base: 'center', xl: 'left' }}>
          <Text fontSize="24px" fontWeight="700">
            {t('home:mobileTradingSystem')}
          </Text>
          <Text>{t('home:WCGMobileTradingSystem')}</Text>
        </Stack>

        <Box m={5} color="red.600" display={{ base: 'none', xl: 'block' }}>
          <AiFillTags fontSize="32px" />
        </Box>
        <Stack
          my={{ base: 10, xl: 0 }}
          p={2}
          spacing={3}
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

        <Box
          mt={{ base: 10, xl: 0 }}
          p={2}
          bg="red.600"
          fontSize="28px"
          _hover={{
            bgColor: 'red.500',
            cursor: 'pointer'
          }}
        >
          {t('home:accountOpening')}
        </Box>
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

      <Box>
        {/* TradingView Widget BEGIN */}
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://tw.tradingview.com/markets/currencies/economic-calendar/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="blue-text">財經日曆</span>
            </a>
            由TradingView提供
          </div>
          <Script
            src="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
            dangerouslySetInnerHTML={{
              __html: `{
              "width": "100%",
              "height": "500px",
              "colorTheme": "light",
              "isTransparent": false,
              "locale": "zh_TW",
              "importanceFilter": "-1,0,1"
            }`
            }}
            async
          />
        </div>
        {/* TradingView Widget END */}
      </Box>

      {/* Real-time quotation of our trading products */}
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
