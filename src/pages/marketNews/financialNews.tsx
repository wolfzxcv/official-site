import { Box, Flex, Image } from '@chakra-ui/react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import { formatTimestamp } from '../../utils';

type financialNewsProps = {
  news: {
    id: string;
    createAt: number;
    author: string;
    imageUrl: string;
    text: string;
  }[];
};

const financialNews: React.FC<financialNewsProps> = ({
  news
}: financialNewsProps) => {
  const { t } = useTranslation(['marketNews']);

  return (
    <Wrapper>
      <Flex p={10} direction="column" align="center">
        <InfoTitle title={t('financialNews')} />
        <InfoTitleSub title={t('theMostImportant')} />

        {news.length &&
          news.map((each) => (
            <Flex
              py={5}
              key={each.text + each.createAt}
              width={{ base: '90vw', md: '700px' }}
              borderBottom="1px"
              borderColor="gray.200"
            >
              <Box>
                <Image
                  width="80px"
                  height="auto"
                  src={each.imageUrl}
                  alt={each.text}
                />
              </Box>
              <Flex flexDirection="column" width={'80%'} pl={5}>
                <Flex mb={3}>
                  <Box fontWeight={700}>{each.author}</Box>
                  <Box color="gray.400" ml={10}>
                    {formatTimestamp(each.createAt)}
                  </Box>
                </Flex>
                <Box
                  color="gray.600"
                  dangerouslySetInnerHTML={{ __html: each.text }}
                />
              </Flex>
            </Flex>
          ))}
      </Flex>
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  const { locale } = props;

  let news = [];

  try {
    const result = await axios.get(
      `https://www.dailyfxasia.com/real-time-news/update-data`
    );

    if (result && result.data) {
      news = result.data.map((x) => ({
        author: x.author.twitter_nick || null,
        imageUrl: x.author.photo_url || null,
        id: x.id,
        createAt: x.createAt,
        text: x.text
      }));
    }
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      news,
      ...(await serverSideTranslations(locale!, [
        'common',
        'footer',
        'header',
        'marketNews'
      ]))
    }
  };
};

export default financialNews;
