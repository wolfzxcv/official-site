import HistoryItem, { HistoryItemProps } from '@/components/About/HistoryItem';
import Wrapper from '@/components/Base/Wrapper';
import InfoTitle from '@/components/Common/InfoTitle';
import { Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const companyNews: React.FC<{}> = () => {
  const { t } = useTranslation('contactUs');

  const data: HistoryItemProps[] = [
    {
      year: '2018',
      month: t('October'),
      text: [t('setUpVietnam')],
      color: '#45aeae'
    },
    {
      year: '2018',
      month: t('December'),
      text: [t('invitedToParticipate')],
      color: '#3e7b97'
    },
    {
      year: '2019',
      month: t('January'),
      text: [t('partneredWith'), t('awardedTheMostInvestorTrusted')],
      color: '#e23a59'
    },
    {
      year: '2019',
      month: t('February'),
      text: [t('WCGMarketsLtdObtained'), t('establishedMalaysia')],
      color: '#fcc82b'
    },
    {
      year: '2019',
      month: t('September'),
      text: [t('setUpTaiwan')],
      color: '#45aeae'
    },
    {
      year: '2020',
      month: t('March'),
      text: [t('aLeaderInTheIndustry')],
      color: '#3e7b97'
    },
    {
      year: '2020',
      month: t('November'),
      text: [t('WCGMarketsLtdObtainedTheFINTRAC')],
      color: '#e23a59'
    },
    {
      year: '2020',
      month: t('December'),
      text: [t('startCharityProjects')],
      color: '#fcc82b'
    },
    {
      year: '2021',
      month: t('January'),
      text: [t('integrateAndUpdate')],
      color: '#45aeae'
    },
    {
      year: '2021',
      month: t('February'),
      text: [t('theTradingSystem')],
      color: '#3e7b97'
    },
    {
      year: '2021',
      month: t('April'),
      text: [t('focusingOn')],
      color: '#e23a59'
    }
  ];
  return (
    <Wrapper>
      <Flex p={{ base: 10, md: 20 }} direction="column" align="center">
        <InfoTitle title={t('companyNews')} />

        <br />
        <br />

        {data.map((x, idx) => (
          <HistoryItem
            key={x.text[0]}
            location={idx % 2 === 1 ? 'right' : 'left'}
            year={x.year}
            month={x.month}
            text={x.text}
            color={x.color}
          />
        ))}
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'contactUs'
    ]))
  }
});

export default companyNews;
