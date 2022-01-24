import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoTitle from '../../components/Common/InfoTitle';
import { Locales } from '../../i18n/locales';

const riskDisclaimer: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* Risk Disclaimer */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('riskDisclaimer')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '1. ' : ''}${t(
              'internetConnectivityFailure'
            )}`}
          />

          <Text>{t('sinceWCGCannotControl')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '2. ' : ''}${t(
              'marketRiskAndOnlineTrading'
            )}`}
          />

          <Text>{t('preciousMetalsTrading')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '3. ' : ''}${t('passwordProtection')}`}
          />

          <Text>{t('customersMustKeepThePassword')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '4. ' : ''}${t('incorrectPriceQuotation')}`}
          />

          <Text>{t('whenQuotationOrTransaction')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '5. ' : ''}${t('arbitrage')}`}
          />

          <Text>{t('internetIssues')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '6. ' : ''}${t('price')}`}
          />

          <Text>{t('WCGStrictlyProhibits')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '7. ' : ''}${t('bankruptcyDisclosure')}`}
          />

          <Text>{t('theTransactionsBetween')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '8. ' : ''}${t(
              'introducingBrokerDisclosure'
            )}`}
          />

          <Stack spacing={5}>
            <Text>{t('WCGDoesNotSupervise')}</Text>

            <Text>{`${!isArabic ? '1. ' : ''}${t(
              'theClientUnderstandsAndAgrees'
            )}`}</Text>
            <Text>{`${!isArabic ? '2. ' : ''}${t('becauseTheRisk')}`}</Text>
            <Text>{`${!isArabic ? '3. ' : ''}${t(
              'theClientUnderstands'
            )}`}</Text>
            <Text>{`${!isArabic ? '4. ' : ''}${t('ifTheCustomer')}`}</Text>
          </Stack>
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
      'conditions',
      'header'
    ]))
  }
});

export default riskDisclaimer;
