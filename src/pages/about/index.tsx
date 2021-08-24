import { Box, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

const about: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Flex height="500px" bg="gray.800" color="white" justify="center" py={10}>
        <Box>WCG</Box>
        <Box>image</Box>
      </Flex>
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

export default about;
