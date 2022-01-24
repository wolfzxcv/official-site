import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoTitle from '../../components/Common/InfoTitle';
import { Locales } from '../../i18n/config';

const privacyPolicy: React.FC<{}> = () => {
  const { t } = useTranslation('conditions');

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* Privacy Policy */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('privacyPolicy')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle size="22px" title={t('theCustomers')} />

          <Stack spacing={5}>
            <Text>{`${!isArabic ? '1. ' : ''}${t(
              'theVerificationProcedures'
            )}`}</Text>
            <Text>{`${!isArabic ? '2. ' : ''}${t('dealWithCustomers')}`}</Text>
            <Text>{`${!isArabic ? '3. ' : ''}${t(
              'transferSuchPersonalData'
            )}`}</Text>
            <Text>{`${!isArabic ? '4. ' : ''}${t('toProvideAny')}`}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle size="22px" title={t('WCGWillKeep')} />

          <Stack spacing={5}>
            <Text>{`${!isArabic ? '1. ' : ''}${t('WCGOtherCompanies')}`}</Text>
            <Text>{`${!isArabic ? '2. ' : ''}${t(
              'agentsAndThirdPartyService'
            )}`}</Text>
            <Text>{`${!isArabic ? '3. ' : ''}${t(
              'anyRegulatoryOrGovernmentAgency'
            )}`}</Text>
            <Text>{`${!isArabic ? '4. ' : ''}${t(
              'personsDeemedAppropriate'
            )}`}</Text>

            <Text>{t('AccordingTo')}</Text>
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

export default privacyPolicy;
