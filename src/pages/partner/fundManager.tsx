import { CheckIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Icon, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { HiServer } from 'react-icons/hi';
import { ImEarth } from 'react-icons/im';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import InfoButtonBase from '../../components/Common/InfoButtonBase';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';
import { openChatWindow } from '../../utils';

const fundManager: React.FC<{}> = () => {
  // const { t } = useTranslation(['forex']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';
  return (
    <Wrapper>
      {/* Fund Manager */}
      <Flex
        position="relative"
        minH="500px"
        justify={{ base: 'center', xl: 'flex-start' }}
        align="center"
        py={20}
        pl={{ base: 0, xl: 20 }}
        background={{
          base: 'gray.600'
        }}
      >
        <Box
          width={{ base: '80vw', xl: '60vw' }}
          px={{ base: 0, xl: 20 }}
          color="white"
          textAlign={isArabic ? 'right' : 'left'}
          zIndex={1}
        >
          <Flex my={10}>
            <InfoTitle title="Fund manager" />
          </Flex>

          <Text my={10}>
            WCG provides asset management solutions for fund managers，
            including the award-winning MT4 MAM (multi-account management) fund
            management tool to help our partners effectively manage client funds
            in a safe environment and grow side by side with us.
          </Text>
          <InfoButtonBase text="Apply for manager" onClick={openChatWindow} />
        </Box>
        <Image
          src="../assets/images/fundManager_banner.png"
          alt="fund manager"
          objectFit="cover"
          objectPosition="0"
          position="absolute"
          right="0"
          height="100%"
          width={{ base: '100vw', xl: '60vw' }}
        />
      </Flex>

      {/* You can trade in the market through */}
      <Flex align="center" py={20} justifyContent="center" bgColor="gray.100">
        <Flex width="80vw">
          <Flex flex={3} flexDirection="column" justifyContent="center">
            <Text mb={5}>
              You can trade in the market through different position account
              systems. WCG provides the best analysis and trading tools (manual
              and algorithm). In addition， we will continue to provide
              automatic software updates to achieve fast and safe operation on
              any device.
            </Text>
            <Text mb={5}>
              Make full use of algorithms and trading opportunities to create，
              test and improve your strategies. Specify how to calculate
              parameters， set deadlines， maximize capital， value， and other
              investor requirements. Manage accounts and generate detailed
              reports to monitor customer transaction results in a unified way.
              Display any data on the graph， automatically calculate， manage
              operating balances， expenditures and handling fees.
            </Text>
            <Text mb={5}>
              WCG can help your fund to increase its income: your traders will
              be able to fully realize their potential and bring maximum profits
              to the fund， and its positive results will attract new investors
              to join.
            </Text>
          </Flex>
          <Image
            src="../assets/images/fundManager_1.png"
            alt="fund manager 1"
            flex={2}
            ml={20}
            maxWidth="400px"
            display={{ base: 'none', xl: 'block' }}
          />
        </Flex>
      </Flex>

      {/* Scientific and flexible management */}
      <Flex
        align="center"
        pt={20}
        pb={{ base: 0, xl: 20 }}
        justifyContent="center"
      >
        <Flex
          width="80vw"
          alignItems={{ base: 'flex-start', xl: 'center' }}
          flexDir={{ base: 'column-reverse', xl: 'row' }}
        >
          <Grid
            templateColumns="repeat(2, 1fr)"
            flex={3}
            maxWidth={{ base: 'unset', xl: '800px' }}
            width={{ base: '100vw', xl: 'unset' }}
            position="relative"
            left={{ base: '-10vw', xl: 0 }}
            mt={{ base: 8, xl: 0 }}
            mr={{ base: 0, xl: 20 }}
          >
            <Image
              src="../assets/images/fundManager_2.png"
              alt="fund manager 2"
              w="100%"
              h="100%"
            />
            <Image
              src="../assets/images/fundManager_3.png"
              alt="fund manager 3"
              w="100%"
              h="100%"
            />
            <Image
              src="../assets/images/fundManager_4.png"
              alt="fund manager 4"
              w="100%"
              h="100%"
            />
            <Image
              src="../assets/images/fundManager_5.png"
              alt="fund manager 5"
              w="100%"
              h="100%"
            />
          </Grid>
          <Flex
            flex={2}
            flexDirection="column"
            minW={{ base: 'unset', xl: '500px' }}
          >
            <InfoTitle title="Scientific and flexible management" />
            <Text mb={5}>
              Over the years， we have established a successful relationship
              with fund managers because we understand your needs
            </Text>
            <InfoTitle title="Multi-person account management" size="22px" />
            <Text mb={5}>
              Using the WCG MAM management system， money managers can quickly
              manage multiple accounts
            </Text>
            <InfoTitle title="Efficient account control" size="22px" />
            <Text mb={5}>
              Allow traders to add， delete or suspend the client at any time
            </Text>
            <InfoTitle title="Optional allocation types" size="22px" />
            <Text mb={5}>
              Multiple transaction allocation types， depending on your trading
              style and size and types of client funds
            </Text>
            <InfoTitle title="Multiple product categorie" size="22px" />
            <Text mb={5}>
              Multiple currency products， arbitrage exchange rates， precious
              metals， commodities and index CFDs， etc
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Fund managers can */}
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        justifyContent="space-evenly"
        bgColor="gray.100"
        color="white"
        position="relative"
        _before={{
          xl: {
            content: '""',
            position: 'absolute',
            left: '0',
            width: '40px',
            height: '100%',
            bg: 'red.700'
          }
        }}
      >
        <Box bg="red.700" w={{ base: '100%', xl: 500 }} py={20} px={16}>
          <Icon as={GiReceiveMoney} boxSize={10} mb={10} />
          <InfoTitle title="Fund Managers can" size="16px" />
          <Text mb={6} mt={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Collect the trading history of their accounts
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
        </Box>
        <Box
          w={{ base: '100%', xl: 500 }}
          py={20}
          px={16}
          bgImage="url('/assets/images/fundManager_investor_bg.png')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Icon as={GiTakeMyMoney} boxSize={10} mb={10} />
          <InfoTitle title="Investor can" size="16px" />
          <Text mb={6} mt={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Collect the trading history of their accounts
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            Open main account
          </Text>
        </Box>
      </Flex>

      {/* Have everything you need */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', xl: '60vw' }}
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="Have everything you need" />
          <Text>
            Together with WCG to establish a broad customer group， no matter
            the size of your business， you can use our excellent trading
            environment with abundant functionality to handle all your needs.
          </Text>
        </Box>
        <Flex
          w="80vw"
          px={16}
          pt={100}
          pb={8}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            icon={<RiMoneyDollarCircleLine fontSize="64px" />}
            text="Excellent trading environment to increase your income"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<ImEarth fontSize="64px" />}
            text="A multi-account trading platform that can satisfy your needs"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<HiServer fontSize="64px" />}
            text="The broker you need with strong background for cooperation and support"
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
        <Box>
          <InfoButtonBase
            text="I want to be a manager"
            onClick={openChatWindow}
          />
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
      'fundManager'
    ]))
  }
});

export default fundManager;
