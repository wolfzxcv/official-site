import { Box, Flex, Image, ListItem, OrderedList } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';

const privacyPolicy: React.FC<{}> = () => {
  const { t } = useTranslation(['conditions']);

  return (
    <Wrapper variant="large">
      {/* Privacy Policy */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('privacyPolicy')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={t('theCustomers')} />
          <OrderedList>
            <ListItem>{t('theVerificationProcedures')}</ListItem>
            <ListItem>{t('dealWithCustomers')}</ListItem>
            <ListItem>{t('transferSuchPersonalData')}</ListItem>
            <ListItem>{t('toProvideAny')}</ListItem>
          </OrderedList>
        </Box>

        <Box width={'80vw'} my={2}>
          <InfoTitle size="22px" title={t('WenChuanWillKeep')} />
          <OrderedList>
            <ListItem>{t('WenChuanOtherCompanies')}</ListItem>
            <ListItem>{t('agentsAndThirdPartyService')}</ListItem>
            <ListItem>{t('anyRegulatoryOrGovernmentAgency')}</ListItem>
            <ListItem>{t('personsDeemedAppropriate')}</ListItem>
          </OrderedList>
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

export default privacyPolicy;
