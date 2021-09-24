import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Locales } from '../../i18n/locales';

interface ApiDataListProps {
  api: string;
  objectKey: string;
}

const InfoAccordion = dynamic(() => import('./InfoAccordion'), { ssr: false });

const ApiDataList: React.FC<ApiDataListProps> = ({
  api,
  objectKey
}: ApiDataListProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  useEffect(() => {
    getItems(currentLang);
  }, []);

  const [items, setItems] = useState([]);

  const getItems = async (currentLang) => {
    try {
      const {
        data: { data }
      } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}${api}?lang=${currentLang}`
      );

      const newItems =
        data[objectKey] && data[objectKey].length
          ? data[objectKey].map((x) => ({
              id: x.id,
              date: x.time && x.time.length > 10 ? x.time.slice(0, 10) : x.time,
              title: x.title,
              htmlContent: x.content
            }))
          : [];

      setItems(newItems);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <InfoAccordion data={items} />
    </>
  );
};

export default ApiDataList;
