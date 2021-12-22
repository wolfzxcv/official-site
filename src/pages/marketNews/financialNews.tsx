import { Box, Flex, Image } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import { formatTimestamp } from '../../utils';

type INews = {
  id: string;
  createAt: number;
  author: string;
  imageUrl: string;
  text: string;
};

const formatHTML = (text) => {
  const regex = /https:(.*)html/;

  const newOutput = text.split(' ').map((each) => {
    if (each.match(regex)) {
      return `<a href=${each} target="_blank" style="color:blue;">${each}</a>`;
    } else {
      return each;
    }
  });

  return newOutput.join(' ');
};

const financialNews: React.FC<{}> = () => {
  const { t } = useTranslation(['marketNews']);

  const [news, setNews] = useState<INews[]>([]);

  const hasNews = news.length > 0;

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const {
        data: { data }
      } = await axios.get(process.env.NEXT_PUBLIC_JS_API_URL);

      setNews(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <Flex p={10} direction="column" align="center">
        <InfoTitle title={t('financialNews')} />
        <InfoTitleSub title={t('theMostImportant')} />

        {hasNews &&
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
                  dangerouslySetInnerHTML={{ __html: formatHTML(each.text) }}
                />
              </Flex>
            </Flex>
          ))}
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
      'marketNews'
    ]))
  }
});

export default financialNews;
