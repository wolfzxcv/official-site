import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoTitle from '../../components/Common/InfoTitle';
import { Locales } from '../../i18n/locales';

const termsAndConditions: React.FC<{}> = () => {
  const { t } = useTranslation(['conditions']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* terms and conditions */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('conditions')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Text width={'80vw'} textAlign={isArabic ? 'right' : 'left'}>
          {t('whenYouUseThisWebsite')}
        </Text>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '1.' : ''}${t('visitWebsite')}`}
          />

          <Stack spacing={5}>
            <Text>{`${!isArabic ? '• ' : ''}${t(
              'theCopyrightsOfThisWebsiteAndAllText'
            )}`}</Text>
            <Text>{`${!isArabic ? '• ' : ''}${t(
              'theInformationOnThisWebsite'
            )}`}</Text>
            <Text>{`${!isArabic ? '• ' : ''}${t(
              'exceptAsExpresslyStipulatedInThisAgreement'
            )}`}</Text>
            <Text>{`${!isArabic ? '• ' : ''}${t(
              'forTheAboveMentionedPurposes'
            )}`}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '2.' : ''}${t('entireAgreement')}`}
          />

          <Text>{t('thisAgreementContains')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '3.' : ''}${t('thirdPartyInformation')}`}
          />

          <Text width={'80vw'}>{t('thisWebsiteMayContain')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '4.' : ''}${t(
              'responsibilitiesOfWCGInternational'
            )}`}
          />

          <Stack spacing={5}>
            <Text>{`${!isArabic ? '• ' : ''}${t('whenYouRegisterAs')}`}</Text>
            <Text>{`${!isArabic ? '• ' : ''}${t(
              'inAdditionToTheAboveMentionedServiceDescriptions'
            )}`}</Text>
            <Text>{`${!isArabic ? '• ' : ''}${t(
              'youSufferAnyIndirect'
            )}`}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '5.' : ''}${t('yourInformation')}`}
          />

          <Text>{t('inAdditionToYourObligation')}</Text>
        </Box>

        <Box width={'80vw'} my={2} textAlign={isArabic ? 'right' : 'left'}>
          <InfoTitle
            size="22px"
            title={`${!isArabic ? '6.' : ''}${t('companyInformation')}`}
          />

          <Text>{t('WCGInternational')}</Text>
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
      'conditions',
      'header'
    ]))
  }
});

export default termsAndConditions;
