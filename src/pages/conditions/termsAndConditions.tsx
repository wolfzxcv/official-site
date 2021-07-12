import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';

const termsAndConditions: React.FC<{}> = () => {
  const { t } = useTranslation(['conditions']);

  return (
    <Wrapper variant="large">
      {/* terms and conditions */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('conditions')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Text width={'80vw'}>{t('whenYouUseThisWebsite')}</Text>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={`1.${t('visitWebsite')}`} />

          <UnorderedList>
            <ListItem>{t('theCopyrightsOfThisWebsiteAndAllText')}</ListItem>
            <ListItem>{t('theInformationOnThisWebsite')}</ListItem>
            <ListItem>
              {t('exceptAsExpresslyStipulatedInThisAgreement')}
            </ListItem>
            <ListItem>{t('forTheAboveMentionedPurposes')}</ListItem>
          </UnorderedList>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={`2.${t('entireAgreement')}`} />

          <Text>{t('thisAgreementContains')}</Text>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={`3.${t('thirdPartyInformation')}`} />

          <Text width={'80vw'}>{t('thisWebsiteMayContain')}</Text>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle
            size="22px"
            title={`4.${t('responsibilitiesOfWenChuanInternational')}`}
          />

          <UnorderedList>
            <ListItem>{t('whenYouRegisterAs')}</ListItem>
            <ListItem>
              {t('inAdditionToTheAboveMentionedServiceDescriptions')}
            </ListItem>
            <ListItem>{t('youSufferAnyIndirect')}</ListItem>
          </UnorderedList>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={`5.${t('yourInformation')}`} />

          <Text>{t('inAdditionToYourObligation')}</Text>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={`6.${t('companyInformation')}`} />

          <Text>{t('WenChuanInternational')}</Text>
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
