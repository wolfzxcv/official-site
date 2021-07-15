import { Box } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Wrapper from '../../components/Wrapper';

interface financialCalendarProps {}

const financialCalendar: React.FC<financialCalendarProps> = () => {
  return (
    <Wrapper>
      {/* embed from  */}
      <Box my={10}>
        <iframe
          frameBorder="0"
          height="580"
          style={{ margin: '0 auto', width: '80vw' }}
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
      'header'
    ]))
  }
});

export default financialCalendar;
