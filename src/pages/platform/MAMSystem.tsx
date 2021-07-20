import { Box, Center, Flex, Image, List, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { GiReceiveMoney } from 'react-icons/gi';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import DownloadButton from '../../components/Platform/DownloadButton';
import InfoList from '../../components/Platform/InfoList';
import MAMProfitList from '../../components/Platform/MAMProfitList';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';
import { openChatWindow } from '../../utils';

const MAMSystem: React.FC<{}> = () => {
  const { t } = useTranslation(['platform']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'hk';
  const isArabic = currentLang === 'sa';

  return (
    <Wrapper>
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
        <Box width={{ base: '80vw', md: '60vw' }} px={{ base: 0, xl: 20 }}>
          <Flex color="white" align="center" mb={5}>
            <Image
              boxSize="40px"
              mr={5}
              src="../assets/images/mt4mamsystem_mam.png"
              alt="mam"
            />

            <InfoTitle title={t('MAMMultiAccountManagementSystem')} />
          </Flex>
          <InfoTitleSub title={t('theMultiAccountManagementSystem')} />

          <Box
            mt={20}
            width={{ base: 'auto', xl: isChinese ? '250px' : '450px' }}
          >
            <DownloadButton
              onClick={openChatWindow}
              text={t('consultCustomerServiceImmediately')}
              type="user"
            />
          </Box>
        </Box>
        <Box width={{ base: '0', xl: '40vw' }}>
          <Image src="../assets/images/mt4mamsystem_1.png" alt="pc" />
        </Box>
      </Flex>

      <Flex py={20} align="center" direction="column">
        <Box my={10} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('MAMAccountSupportsFiveDistributionLogics')} />
          <InfoTitleSub
            title={t('theMAMSystemProvidesMultipleRatioSettings')}
          />
        </Box>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          align="center"
        >
          <Flex
            backgroundImage="url('../assets/images/mt4mamsystem_2.png')"
            bgSize="100% 100%"
            width={{ base: '80vw', sm: '60vw', md: '500px' }}
            height={{ base: '80vw', sm: '60vw', md: '500px' }}
            direction="column"
            justify="center"
            align="center"
          >
            <Text color="red.600" fontSize={{ base: '2rem', md: '4rem' }}>
              <GiReceiveMoney />
            </Text>

            <Text my={2}>{t('totalInvestment')}</Text>
            <Text>{t('totalProfit')}</Text>
          </Flex>

          <Stack spacing={3} mt={{ base: 20, md: 0 }} ml={{ base: 0, md: 20 }}>
            <Text>
              {`${!isArabic ? '1.' : ''}${t(
                'accountNetValueIsAllocatedAccordingToProportion'
              )}${isArabic ? '.1' : ''}`}
            </Text>
            <Text>
              {`${!isArabic ? '2.' : ''}${t('percentageAllocation')}${
                isArabic ? '.2' : ''
              }`}
            </Text>
            <Text>
              {`${!isArabic ? '3.' : ''}${t(
                'balanceIsAllocatedAccordingToProportion'
              )}${isArabic ? '.3' : ''}`}
            </Text>
            <Text fontWeight="700" fontSize="22px">
              {t('allocationByProfitAndLoss')}
            </Text>
            <Text>
              {`${!isArabic ? '4.' : ''}${t('profitAndLoss')}${
                isArabic ? '.4' : ''
              }`}
            </Text>
            <Text>
              {`${!isArabic ? '5.' : ''}${t('profitAndLossAre')}${
                isArabic ? '.5' : ''
              }`}
            </Text>
            <Box>
              <MAMProfitList
                left={t('investment200')}
                right={t('profit120')}
                bg="#c64f51"
                percentage="20%"
              />

              <MAMProfitList
                left={t('investment300')}
                right={t('profit180')}
                bg="#d06b72"
                percentage="30%"
              />

              <MAMProfitList
                left={t('investment500')}
                right={t('profit300')}
                bg="#d89292"
                percentage="50%"
              />
            </Box>
          </Stack>
        </Flex>
      </Flex>

      <Flex
        bgColor="gray.100"
        w="100%"
        my={10}
        py={{ base: 0, xl: 20 }}
        direction={{ base: 'column', xl: 'row' }}
        justify="space-around"
        align="center"
      >
        <Box width={{ base: '100%', xl: '40vw' }}>
          <Center>
            <Image src="../assets/images/mt4pcdownload_2.png" alt="device" />
          </Center>
        </Box>
        <Box
          my={{ base: 10, xl: 0 }}
          width={{ base: '80vw', xl: '40vw' }}
          textAlign={isArabic ? 'right' : 'left'}
        >
          <InfoTitle title={t('MAMFeaturesAndAdvantages')} />

          <List spacing={3} my={10}>
            <InfoList text={t('compatibleWithEA')} />
            <InfoList text={t('establishMultipleTrading')} />
            <InfoList text={t('accordingToAccountLevel')} />
            <InfoList text={t('aNumberOfTradingProducts')} />
            <InfoList text={t('customersCanStart')} />
            <InfoList text={t('compatibleWithAll')} />
            <InfoList text={t('thereIsNoLimit')} />
          </List>
        </Box>
      </Flex>

      <Flex py={20} align="center" direction="column">
        <Box my={10} width={{ base: '80vw', md: '60vw' }} textAlign="center">
          <InfoTitle title={t('yourPartnerToTheRoadOfSuccess')} />
          <InfoTitleSub
            title={t('toProvideYouWithFlexibleAndCompetitiveRates')}
          />
        </Box>
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
        >
          <InfoCard
            image={
              <Image
                src="../assets/images/mt4mamsystem_3.png"
                alt="pcdownload_3"
              />
            }
            title={t('transparentCommissionDetails')}
            text={t('realTimeDisplay')}
          />

          <InfoCard
            image={
              <Image
                src="../assets/images/mt4mamsystem_4.png"
                alt="pcdownload_4"
              />
            }
            title={t('convenientAndFastExecution')}
            text={t('allTransactionOrders')}
          />
          <InfoCard
            image={
              <Image
                src="../assets/images/mt4mamsystem_5.png"
                alt="pcdownload_5"
              />
            }
            title={t('AMustHaveSystem')}
            text={t('multilingualTradingPlatform')}
          />
        </Flex>
      </Flex>

      <Center>
        <Box
          mb={20}
          width={{ base: 'auto', xl: isChinese ? '250px' : '450px' }}
        >
          <DownloadButton
            onClick={openChatWindow}
            text={t('consultCustomerServiceImmediately')}
            type="user"
          />
        </Box>
      </Center>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header',
      'platform'
    ]))
  }
});

export default MAMSystem;
