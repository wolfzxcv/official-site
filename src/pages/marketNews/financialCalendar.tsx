import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import Wrapper from '../../components/Wrapper';

interface financialCalendarProps {}

const financialCalendar: React.FC<financialCalendarProps> = () => {
  const { t } = useTranslation(['marketNews']);

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

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header',
      'marketNews'
    ]))
  }
});

export default financialCalendar;
