import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';

interface tradeDetailsProps {}

const tradeDetails: React.FC<tradeDetailsProps> = () => {
  const { t } = useTranslation(['notice']);

  return (
    <Wrapper>
      {/* Trade Details */}
      <Flex my={10} direction="column" align="center">
        <Box>
          <InfoTitle title={t('tradeDetails')} />
        </Box>

        <Image my={3} src="../assets/images/home_divider.png" alt="divider" />

        <Box width={'80vw'} my={10}>
          <InfoTitle size="22px" title={t('sourceOfTradeExecution')} />
          <Stack spacing={3} mt={{ base: 5, md: 0 }}>
            <Text>{t('theQuotesOfOur')}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={10}>
          <InfoTitle size="22px" title={t('slippage')} />
          <Stack spacing={3} mt={{ base: 5, md: 0 }}>
            <Text>{t('ourCompanyWill')}</Text>
          </Stack>
        </Box>

        <Box width={'80vw'} my={10}>
          <InfoTitle size="22px" title={t('marketGapAndFluctuations')} />
          <Stack spacing={3} mt={{ base: 5, md: 0 }}>
            <Text>{t('whenEconomicData')}</Text>
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

export default tradeDetails;
