import { Locales } from '@/i18n/config';
import styled from '@emotion/styled';
import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type ApiDataListProps = {
  api: string;
  onTop?: number[];
};

const InfoAccordion = dynamic(() => import('./InfoAccordion'), { ssr: false });

const ApiDataList: React.FC<ApiDataListProps> = ({
  api,
  onTop
}: ApiDataListProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  useEffect(() => {
    getItems(currentLang);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [items, setItems] = useState([]);

  let buttonText = '';
  switch (currentLang) {
    case 'cn':
      buttonText = '查看详情';
      break;
    case 'id':
      buttonText = 'Silakan mengunjungi';
      break;
    case 'ms':
      buttonText = 'Sila melawat';
      break;
    case 'vi':
      buttonText = 'Xin hãy đến';
      break;
    case 'zh':
      buttonText = '查看詳情';
      break;
    default:
      buttonText = 'View';
      break;
  }

  const getItems = async (currentLang: Locales) => {
    try {
      const {
        data: { data }
      } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}${api}?lang=${currentLang}`
      );

      let newItems = data.map((x) => {
        const output = {
          id: x.id,
          date: x.displayTime,
          title: x.title,
          htmlContent:
            x.content +
            (x.url
              ? `<br/><br/><a target="_blank" style="background-color: #C53030; color: white; padding: 10px;" href="${x.url}">${buttonText}  ></a>`
              : '')
        };

        if (!!onTop && Array.isArray(onTop) && onTop.includes(x.id)) {
          // @ts-ignore
          output.isTop = true;
        }

        return output;
      });

      const topItems = newItems.filter((x) => x.isTop === true);

      const restItems = newItems.filter((x) => x.isTop !== true);

      newItems = [...topItems, ...restItems];

      setItems(newItems);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <StyledApiDataList>
      <InfoAccordion data={items} />
    </StyledApiDataList>
  );
};

const StyledApiDataList = styled.div`
  @media (max-width: 1279px) {
    .chakra-accordion__panel {
      overflow-x: scroll;
    }
  }
`;

export default ApiDataList;
