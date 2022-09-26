import Wrapper from '@/components/Base/Wrapper';
import InfoButtonBase from '@/components/Common/InfoButtonBase';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import { Locales } from '@/i18n/config';
import { openChatWindow } from '@/utils';
import { CheckIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, Icon, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { BiDevices } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { GiReceiveMoney, GiTakeMyMoney } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

const fundManager: React.FC<{}> = () => {
  const { t } = useTranslation('fundManager');
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
            <InfoTitle title={t('fundManager')} />
          </Flex>

          <Text my={10}>{t('WCGProvidesAssetManagement')}</Text>
          <InfoButtonBase
            text={t('applyForManager')}
            onClick={openChatWindow}
          />
        </Box>
        <Image
          src="/../assets/images/fundManager_banner.png"
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
          <Flex
            flex={3}
            flexDirection="column"
            justifyContent="center"
            textAlign={isArabic ? 'right' : 'left'}
          >
            <Text mb={5}>{t('youCanTrade')}</Text>
            <Text mb={5}>{t('makeFullUseOfAlgorithms')}</Text>
            <Text mb={5}>{t('WCGCanHelpYourFund')}</Text>
          </Flex>
          <Image
            src="/../assets/images/fundManager_1.png"
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
          textAlign={isArabic ? 'right' : 'left'}
        >
          <Grid
            templateColumns="repeat(2, 1fr)"
            flex={3}
            maxWidth={{ base: 'unset', xl: '800px' }}
            width={{ base: '100vw', xl: 'unset' }}
            position="relative"
            left={{ base: '-10vw', xl: 0 }}
            mt={{ base: 16, xl: 0 }}
            mr={{ base: 0, xl: 20 }}
          >
            <Image
              src="/../assets/images/fundManager_2.png"
              alt="fund manager 2"
              w="100%"
              h="100%"
            />
            <Image
              src="/../assets/images/fundManager_3.png"
              alt="fund manager 3"
              w="100%"
              h="100%"
            />
            <Image
              src="/../assets/images/fundManager_4.png"
              alt="fund manager 4"
              w="100%"
              h="100%"
            />
            <Image
              src="/../assets/images/fundManager_5.png"
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
            <InfoTitle title={t('scientificAndFlexibleManagement')} />
            <Text mb={5}>{t('overTheYears')}</Text>
            <InfoTitle title={t('multiPersonAccountManagement')} size="22px" />
            <Text mb={5}>{t('usingTheWCGMAMManagementSystem')}</Text>
            <InfoTitle title={t('efficientAccountControl')} size="22px" />
            <Text mb={5}>{t('allowTradersToAdd')}</Text>
            <InfoTitle title={t('optionalAllocationTypes')} size="22px" />
            <Text mb={5}>{t('multipleTransactionAllocationTypes')}</Text>
            <InfoTitle title={t('multipleProductCategories')} size="22px" />
            <Text mb={5}>{t('multipleCurrencyProducts')}</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Fund managers can */}
      <Flex
        flexDir={{ base: 'column', xl: 'row' }}
        justifyContent="space-evenly"
        bgColor="gray.100"
        color="white"
        textAlign={isArabic ? 'right' : 'left'}
        position="relative"
      >
        <Box bg="red.700" w={{ base: '100%', xl: 500 }} py={20} px={16}>
          <Icon as={GiReceiveMoney} boxSize={10} mb={10} />
          <InfoTitle title={t('fundManagersCan')} size="16px" />
          <Text mb={6} mt={6}>
            <CheckIcon mr={2} />
            {t('openMainAccount')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('collectTheTradingHistory')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('manageInvestorAccounts')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('setANickname')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('setFees')}
          </Text>
        </Box>
        <Box
          w={{ base: '100%', xl: 500 }}
          py={20}
          px={16}
          bgImage="/assets/images/fundManager_investor_bg.png"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Icon as={GiTakeMyMoney} boxSize={10} mb={10} />
          <InfoTitle title={t('investorsCan')} size="16px" />
          <Text mb={6} mt={6}>
            <CheckIcon mr={2} />
            {t('lookForAFund')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('toOpenAn')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('toMakeDeposits')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('subscribeToThe')}
          </Text>
          <Text mb={6}>
            <CheckIcon mr={2} />
            {t('toViewTheir')}
          </Text>
        </Box>
      </Flex>

      {/* Have everything you need */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', xl: '60vw' }}
          textAlign={{ base: isArabic ? 'right' : 'left', xl: 'center' }}
        >
          <InfoTitle title={t('haveEverythingYouNeed')} />
          <Text>{t('togetherWithWCG')}</Text>
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
            text={t('excellentTradingEnvironment')}
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<BiDevices fontSize="64px" />}
            text={t('aMultiAccountTradingPlatform')}
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<FaHandshake fontSize="64px" />}
            text={t('theBrokerYouNeed')}
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
        <Box>
          <InfoButtonBase
            text={t('iWantToBeAManager')}
            onClick={openChatWindow}
          />
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
      'fundManager'
    ]))
  }
});

export default fundManager;
