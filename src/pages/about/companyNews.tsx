import axios from 'axios';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const companyNews: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const [info, setInfo] = useState([]);
  useEffect(() => {
    loadData(currentLang);
  }, []);

  const loadData = async (currentLang) => {
    const {
      data: {
        data: { com }
      }
    } = await axios.get(
      `http://www.wc012.com/api/index/company?lang=${currentLang}`
    );
    console.log(com);
    setInfo(com);
  };

  return <Wrapper>companyNews page! </Wrapper>;
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

export default companyNews;
