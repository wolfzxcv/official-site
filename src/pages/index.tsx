import { Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
  AiFillCloseCircle,
  AiFillLock,
  AiOutlineFieldTime
} from 'react-icons/ai';
import { BsLightningFill } from 'react-icons/bs';
import { FaMobileAlt } from 'react-icons/fa';
import { GiChampions, GiServerRack } from 'react-icons/gi';
import { HiServer } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';
import Wrapper from '../components/Base/Wrapper';
import InfoCard from '../components/Common/InfoCard';
import InfoTitle from '../components/Common/InfoTitle';
import PopUp from '../components/PopUp/PopUp';
import RestrictionsOnUse from '../components/PopUp/RestrictionsOnUse';
import { StyledBox } from '../components/Styled/Styled';
import { Locales } from '../i18n/locales';
import { openChatWindow } from '../utils';

const Index: React.FC<{}> = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { t } = useTranslation('home');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  // Activity use
  const [isShowDetail, setIsShowDetail] = useState(false);

  useEffect(() => {
    checkIp();
  }, []);

  const checkIp = async () => {
    try {
      const api = 'wcg/checkIp';
      const {
        data: { data }
      } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${api}`);

      if (data && data.isShow) {
        setShowPopUp(true);
      }
    } catch (e) {
      console.log(e);
      setShowPopUp(true);
    }
  };

  let lang = 'en';
  switch (currentLang) {
    case 'cn':
      lang = 'zh_CN';
      break;
    case 'zh':
      lang = 'zh_TW';
      break;
    case 'vi':
      lang = 'vi_VN';
      break;
    case 'id':
      lang = 'id';
      break;
    case 'ms':
      lang = 'ms_MY';
      break;
  }

  return (
    <Wrapper>
      {showPopUp && (
        <PopUp
          title="Restrictions on Use 使用限制"
          content={<RestrictionsOnUse />}
        />
      )}
      {isChinese ? (
        <Box
          minH={{ base: '800px', md: '500px' }}
          backgroundImage={{
            base: "url('../assets/images/XNHZ-M.jpg')",
            md: "url('../assets/images/XNHZ.jpg')"
          }}
          pt={{ base: isShowDetail ? '550px' : '450px', md: 0 }}
          bgPosition="top center"
          bgSize="cover"
        >
          <Flex
            height="inherit"
            minH={{ base: '0px', md: '500px' }}
            direction="column"
            justify="center"
            align="center"
          >
            {/* Banner */}
            <Stack spacing={3} p={2} width={{ base: '90vw', xl: '70vw' }}>
              <Text
                fontWeight="700"
                fontSize={{ base: '32px', md: '36px' }}
                color="yellow"
              >
                {currentLang === 'cn'
                  ? '贵金属，原油交易每手回赠25美元'
                  : '貴金屬，原油交易每手回贈25美元'}
              </Text>

              {isShowDetail && (
                <Flex>
                  <Flex direction="column">
                    <Text
                      fontWeight="600"
                      fontSize={{ base: '16px', md: '18px' }}
                      color="white"
                    >
                      {currentLang === 'cn'
                        ? '活动期间:由2022年1月17日 至 2022年2月7日'
                        : '活動期間:由2022年1月17日 至 2022年2月7日'}
                    </Text>
                    <Text
                      fontWeight="600"
                      fontSize={{ base: '16px', md: '18px' }}
                      color="white"
                    >
                      {currentLang === 'cn'
                        ? '开户提供其他平台交易证明即可每手回赠25美元'
                        : '開戶提供其他平台交易證明即可每手回贈25美元'}
                    </Text>

                    <Stack mt="5" width={{ base: '85vw', md: '500px' }}>
                      <Text
                        fontSize={{ base: '10px', md: '16px' }}
                        color="white"
                      >
                        {currentLang === 'cn'
                          ? '● 每位WCG客户只可使用一个帐号参加此活动'
                          : '● 每位WCG客戶只可使用一個帳號參加此活動'}
                      </Text>
                      <Text
                        fontSize={{ base: '10px', md: '16px' }}
                        color="white"
                      >
                        {currentLang === 'cn'
                          ? '● 点差回赠将于活动日结束次日结算添加至客户交易帐户'
                          : '● 點差回贈將於活動日結束次日結算添加至客戶交易帳戶'}
                      </Text>
                      <Text
                        fontSize={{ base: '10px', md: '16px' }}
                        color="white"
                      >
                        {currentLang === 'cn'
                          ? '● 若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，WCG有权停止客户交易，取消活动资格并按照WCG交易细则中异常交易的处理方式进行处理'
                          : '● 若客戶通過超短線刷單持倉低於5分鐘的訂單不計入本次活動的手數，AB倉交易或者不正規交易套取贈金，WCG有權停止客戶交易，取消活動資格並按照WCG交易細則中異常交易的處理方式進行處理'}
                      </Text>
                      <Text
                        fontSize={{ base: '10px', md: '16px' }}
                        color="white"
                      >
                        {currentLang === 'cn'
                          ? '● 公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户'
                          : '● 公司保留隨時修改、暫停、終止本活動計劃及任何相關規則條款之權利及其解釋權，毋須事前通知客戶'}
                      </Text>
                      <Text
                        fontSize={{ base: '10px', md: '16px' }}
                        color="white"
                      >
                        {currentLang === 'cn'
                          ? '● 贵金属，原油交易手数定义：黄金1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶'
                          : '● 貴金屬，原油交易手數定義：黃金1標準手100盎司，白銀1標準手2500盎司，原油1標準手1000桶'}
                      </Text>
                    </Stack>
                  </Flex>
                  <Box
                    _hover={{
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsShowDetail(false)}
                  >
                    <AiFillCloseCircle color="white" fontSize="32px" />
                  </Box>
                </Flex>
              )}

              <Flex py={3} justify={{ base: 'center', md: 'flex-start' }}>
                <StyledBox
                  p={{ base: 3, md: 1 }}
                  width={{ base: '70vw', md: '130px' }}
                  border="2px"
                  borderRadius={{ base: '40px', md: '30px' }}
                  borderColor="gray.100"
                  bgColor="transparent"
                  color="gray.100"
                  textAlign="center"
                  fontSize={{ base: '36px', md: '22px' }}
                  _hover={{
                    bgColor: 'gray.100',
                    color: 'gray.700',
                    cursor: 'pointer',
                    transition: '1s'
                  }}
                  onClick={openChatWindow}
                >
                  {currentLang === 'cn' ? '马上领取' : '馬上領取'}
                </StyledBox>
              </Flex>
              {!isShowDetail && (
                <Flex
                  pt={{ base: '30px', md: 0 }}
                  justify={{ base: 'center', md: 'flex-start' }}
                >
                  <Text
                    fontSize={{ base: '16px', md: '16px' }}
                    fontWeight={100}
                    color="white"
                  >
                    {currentLang === 'cn'
                      ? '交易存在风险，活动受条款限制，'
                      : '交易存在風險，活動受條款限制，'}
                  </Text>
                  <Text
                    fontSize={{ base: '16px', md: '16px' }}
                    fontWeight={100}
                    color="white"
                    textDecoration="underline"
                    onClick={() => setIsShowDetail(true)}
                    _hover={{
                      color: 'gray.500',
                      cursor: 'pointer',
                      transition: '1s'
                    }}
                  >
                    {currentLang === 'cn' ? '点此查看' : '點此查看'}
                  </Text>
                </Flex>
              )}
            </Stack>
          </Flex>
        </Box>
      ) : (
        <Box
          minH="500px"
          backgroundImage="url('../assets/images/banner.png')"
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
            <Stack
              textAlign={isArabic ? 'right' : 'left'}
              spacing={3}
              p={3}
              width={{ base: '80vw', xl: '60vw' }}
            >
              <Text
                fontWeight="700"
                fontSize={{ base: '28px', md: '42px' }}
                color="white"
              >
                {t('home:diversifiedProducts')}
              </Text>
              <Text
                fontWeight="700"
                fontSize={{ base: '28px', md: '42px' }}
                color="white"
              >
                {t('home:strongAdvantages')}
              </Text>
              <Text fontSize={{ base: '20px', md: '24px' }} color="white">
                {t('home:highLiquidity')}
              </Text>
              <Text fontSize={{ base: '20px', md: '24px' }} color="white">
                {t('home:safetyOfFunds')}
              </Text>
            </Stack>

            {/* Button under Banner */}
            <NextLink href="/products" locale={currentLang}>
              <StyledBox
                m={10}
                p={2}
                minH="48px"
                minW="200px"
                border="2px"
                borderColor="gray.100"
                bgColor="transparent"
                color="gray.100"
                textAlign="center"
                fontSize={{ base: '20px', md: '22px' }}
                _hover={{
                  bgColor: 'gray.100',
                  color: 'gray.700',
                  cursor: 'pointer',
                  transition: '1s'
                }}
              >
                {t('home:askProductsNow')}
              </StyledBox>
            </NextLink>
          </Flex>
        </Box>
      )}

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
                {t('home:safeAndSecureDepository')}
              </Box>
              <Box minH={isChinese ? 'auto' : '144px'}>
                {t('home:customerFunds')}
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
                {t('home:efficientDeposit')}
              </Box>
              <Box minH={isChinese ? 'auto' : '144px'}>
                {t('home:theDepositAndWithdrawal')}
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
                {t('home:fastPayment')}
              </Box>
              <Box minH={isChinese ? 'auto' : '144px'}>
                {t('home:theLatestTechnology')}
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
            {t('home:invest')}
          </Text>
          <Text>{t('home:inNewChannels')}</Text>
        </Flex>
        <Box fontSize={{ base: '20px', md: '24px' }} my={3}>
          {t('home:professionalEquals')}
        </Box>
        <Image src="../assets/images/home_divider.png" alt="divider" />
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
          title={t('home:mobileTradingSystem')}
          text={t('home:WCGMobileTradingSystem')}
          minH={isChinese ? 'auto' : '300px'}
          bigW="40vw"
        />

        <InfoCard
          icon={<GiChampions fontSize="32px" />}
          title={t('home:brandReputation')}
          text={t('home:WCGValuesTheCustomersTradingExperience')}
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
          <InfoTitle title={t('home:preciousMetalsContract')} />
          <Stack pt={5} spacing={2}>
            <Text>{t('home:timesLeverage')}</Text>
            <Text>{t('home:LondonGoldLondonSilver')}</Text>
            <Text>{t('home:shortFundSettlementTime')}</Text>
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
              href="https://trader.wc012.com/register"
              isExternal
            >
              <StyledBox
                mt={{ base: 10, xl: 0 }}
                p={2}
                bg="red.600"
                fontSize="22px"
                textAlign="center"
                width="250px"
                _hover={{
                  bgColor: 'red.500',
                  cursor: 'pointer',
                  transition: '1s'
                }}
              >
                {t('home:accountOpening')}
              </StyledBox>
            </Link>
          </Flex>
        </Box>

        <Flex
          backgroundImage="url('../assets/images/home_gold.jpg')"
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
            href="https://trader.wc012.com/register"
            isExternal
          >
            <StyledBox
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
              {t('home:accountOpening')}
            </StyledBox>
          </Link>
        </Flex>
      </Flex>

      {/* TradingView Widget BEGIN */}
      <Box my={10} display={{ base: 'none', md: 'block' }}>
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
      </Box>
      {/* TradingView Widget END */}

      {/* Mobile Real-time quotation of our trading products */}
      <Box display={{ base: 'block', xl: 'none' }} width="100%">
        <Box width="100%" height="auto">
          <Image
            minW="100%"
            src="../assets/images/home_mobileBg.jpg"
            alt="mobile"
          />
        </Box>

        <Flex m={10} direction="column" justify="center" align="center">
          <InfoCard
            icon={<AiOutlineFieldTime fontSize="32px" />}
            title={t('home:realTimeQuotation')}
            text={t('home:aVarietyOfProfessional')}
          />

          <InfoCard
            icon={<ImEarth fontSize="32px" />}
            title={t('home:investmentProductsAcross')}
            text={t('home:includingMoreThan')}
          />

          <InfoCard
            icon={<HiServer fontSize="32px" />}
            title={t('home:connectingTo')}
            text={t('home:automatedProcess')}
          />
        </Flex>
      </Box>

      {/* Desktop Real-time quotation of our trading products */}
      <Box display={{ base: 'none', xl: 'block' }}>
        <Flex justify="center" mt="250px">
          <Box maxW="432px" mx={2}>
            <Image src="../assets/images/home_phone.jpg" alt="left" />
            <Stack
              backgroundImage="url('../assets/images/home_cardBg.png')"
              bgSize="cover"
              minH={isChinese ? '150px' : '225px'}
              p={6}
              spacing={3}
              color="white"
              textAlign={isArabic ? 'right' : 'left'}
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
                {t('home:investmentProductsAcross')}
              </Text>
              <Text>{t('home:includingMoreThan')}</Text>
            </Stack>
          </Box>

          <Box maxW="432px" mx={2}>
            <Image src="../assets/images/home_connectServer.jpg" alt="right" />
            <Stack
              backgroundImage="url('../assets/images/home_cardBg.png')"
              bgSize="cover"
              minH={isChinese ? '150px' : '225px'}
              p={6}
              spacing={3}
              color="white"
              textAlign={isArabic ? 'right' : 'left'}
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
      <StyledBox mt={{ base: '100px', md: 0 }} mx={10} mb="100px">
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
            href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en&referrer=ref_id%3d5189084203383832573%26server%3dWenChuanGlobalLtd-Demo%252cWenChuanGlobalLtd-Live"
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
            href="https://download.mql5.com/cdn/web/17749/mt4/WenChuangloballtd4setup.exe"
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
