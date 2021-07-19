import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const abnormalTrade: React.FC<{}> = () => {
  const { t } = useTranslation(['notice']);

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'sa';
  return (
    <Wrapper>
      {/* Abnormal Trade */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('abnormalTrade')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={10}>
          <InfoTitle size="22px" title={t('whatIsAbnormalTrade')} />
          <Stack spacing={3} mt={{ base: 5, md: 0 }}>
            <Text>{t('abnormalTradeMeans')}</Text>
            <Text>{t('abnormalTradeTakesUp')}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={10} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle size="22px" title={t('theDefinitionOfAbnormalTrades')} />
          <Stack spacing={3} mt={{ base: 5, md: 0 }}>
            <Text>{t('whenTheCustomerWithdrawsMoney')}</Text>
            <Text>
              {`${!isArabic ? '1.' : ''}${t('whenThereIs')}${
                isArabic ? '.1' : ''
              }`}
            </Text>
            <Text>
              {`${!isArabic ? '2.' : ''}${t('when30OfThe')}${
                isArabic ? '.2' : ''
              }`}
            </Text>
            <Text>
              {`${!isArabic ? '3.' : ''}${t('whenClientIsUsing')}${
                isArabic ? '.3' : ''
              }`}
            </Text>

            <Text>
              {`${!isArabic ? '4.' : ''}${t('whenCustomersAreTackling')}${
                isArabic ? '.4' : ''
              }`}
            </Text>
            <Text>
              {`${!isArabic ? '5.' : ''}${t('aTradeOfUtilizing')}${
                isArabic ? '.5' : ''
              }`}
            </Text>
            <Text>
              {`${!isArabic ? '6.' : ''}${t('whenTheNumber')}${
                isArabic ? '.6' : ''
              }`}
            </Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={10} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle size="22px" title={t('handlingMethod')} />
          <Stack spacing={3} mt={{ base: 5, md: 0 }}>
            <Text>
              {`${!isArabic ? '1.' : ''}${t('whenThereIs')}${
                isArabic ? '.1' : ''
              }`}
            </Text>
            <Text>
              {`${!isArabic ? '2.' : ''}${t('when30OfThe')}${
                isArabic ? '.2' : ''
              }`}
            </Text>
            <Text>{t('whenTheCustomerWithdrawsMoney')}</Text>
          </Stack>
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
      'notice'
    ]))
  }
});

export default abnormalTrade;
