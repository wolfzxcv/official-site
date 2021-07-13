import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import NewsCard from '../../components/Common/NewsCard';
import Wrapper from '../../components/Wrapper';
import mockNews from './mockNews';

const financialNews: React.FC<{}> = () => {
  return (
    <Wrapper>
      {mockNews &&
        mockNews.map((each) => (
          <NewsCard
            key={each.id}
            id={each.id}
            date={each.date}
            title={each.title}
            author={each.author}
          />
        ))}
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header'
    ]))
  }
});

export default financialNews;
