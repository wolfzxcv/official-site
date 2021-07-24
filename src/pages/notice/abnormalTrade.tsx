import { Accordion, Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';
const InfoAccordionItem = dynamic(
  () => import('../../components/Common/InfoAccordionItem'),
  { ssr: false }
);

const abnormalTrade: React.FC<{}> = () => {
  const { t } = useTranslation(['notice']);

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
  return (
    <Wrapper>
      {/* Abnormal Trade */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('abnormalTrade')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={10}>
          <Accordion width={'80vw'} allowToggle>
            <InfoAccordionItem
              title={t('whatIsAbnormalTrade')}
              content={[t('abnormalTradeMeans'), t('abnormalTradeTakesUp')]}
            />

            <InfoAccordionItem
              title={t('theDefinitionOfAbnormalTrades')}
              content={[
                t('whenTheCustomerWithdrawsMoney'),
                `${!isArabic ? '1. ' : ''}${t('whenThereIs')}`,
                `${!isArabic ? '2. ' : ''}${t('when30OfThe')}`,
                `${!isArabic ? '3. ' : ''}${t('whenClientIsUsing')}`,
                `${!isArabic ? '4. ' : ''}${t('whenCustomersAreTackling')}`,
                `${!isArabic ? '5. ' : ''}${t('aTradeOfUtilizing')}`,
                `${!isArabic ? '6. ' : ''}${t('whenTheNumber')}`
              ]}
            />

            <InfoAccordionItem
              title={t('handlingMethod')}
              content={[
                `${!isArabic ? '1. ' : ''}${t('whenThereIs')}`,
                `${!isArabic ? '2. ' : ''}${t('when30OfThe')}`
              ]}
            />
          </Accordion>
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
