import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';

const financialCalendar: React.FC<{}> = () => {
  const { t } = useTranslation('marketNews');

  return (
    <Wrapper>
      <Flex
        pt={{ base: 10, md: 20 }}
        px={{ base: 10, md: 20 }}
        direction="column"
        align="center"
      >
        <InfoTitle title={t('economicCalendar')} />
        <InfoTitleSub title={t('weeklyForeignExchangeNews')} />
      </Flex>

      {/* embed from  */}
      <Box my={10}>
        <iframe
          frameBorder="0"
          height="580"
          style={{ margin: '0 auto', width: '90vw' }}
          scrolling="yes"
          src={`https://rili-d.jin10.com/open.php?fontSize=14px&theme=primary`}
        ></iframe>
      </Box>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'marketNews'
    ]))
  }
});

export default financialCalendar;
