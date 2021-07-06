import { Box, Flex, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../components/Wrapper';

const Index: React.FC<{}> = () => {
  const { t } = useTranslation('common');

  return (
    <Wrapper variant="large">
      <Box
        height="50vh"
        backgroundImage="url('../assets/images/nature01.jpg')"
        bgAttachment="fixed"
        bgPosition="top center"
        bgSize="cover"
      >
        <Flex height="inherit" justifyContent="center" align="center">
          <Text fontSize="72px" color="gray.300">
            {`${t('common:online')} ${t('common:contactUs')}`}
          </Text>
        </Flex>
      </Box>

      <Box textAlign="center" lineHeight="5rem">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
          dolore.
        </Text>
        <Text>
          Dignissimos vitae hic asperiores. Voluptatem odio libero aspernatur
          repudiandae iste.
        </Text>
        <Text>
          Minus eveniet, placeat veniam inventore maiores totam quos distinctio
          quibusdam.
        </Text>
        <Text>
          Iure rem quaerat accusantium, nulla distinctio deserunt voluptatum
          esse aliquid?
        </Text>
        <Text>
          Perspiciatis, vero! Est suscipit similique nisi eum tempora ex
          corrupti?
        </Text>
      </Box>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, ['common', 'header']))
  }
});

export default Index;
