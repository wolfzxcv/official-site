import axios from 'axios';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const companyNews: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  // const [info, setInfo] = useState([]);
  useEffect(() => {
    getCompanyNews(currentLang);
  }, []);

  const getCompanyNews = async (currentLang) => {
    try {
      const {
        data: {
          data: { com }
        }
      } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/index/company?lang=${currentLang}`
      );

      console.log(com[0]);
      // setInfo(com);
    } catch (e) {
      console.log(e);
    }
  };

  return <Wrapper>companyNews page!</Wrapper>;
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
