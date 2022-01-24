import { Box, Center, Flex, Select, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Base/Wrapper';
import InfoTitle from '../../components/Common/InfoTitle';
import {
  IDetail,
  IDetailKey,
  IProduct,
  productsData
} from '../../components/Product/productsData';
import { StyledTable } from '../../components/Styled/Styled';
import { Locales } from '../../i18n/config';

const products: React.FC<{}> = () => {
  const { t } = useTranslation('products');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  const allProducts =
    currentLang === 'cn' || currentLang
      ? productsData.filter((x) => x.category !== 'cryptocurrencies')
      : productsData;
  const productsOptions = allProducts.map((x) => x.category);
  const [category, setCategory] = useState(productsOptions[0]);

  useEffect(() => {
    if (router.query?.option) {
      const option = router.query?.option as IProduct['category'];

      const hasOption = productsOptions.includes(option);
      if (hasOption) {
        setCategory(option);
      }
    }
  }, []);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const category = event.target.value as IProduct['category'];
    setCategory(category);
  };

  const tableData = productsData.find((x) => x.category === category);
  let tableHead: IDetailKey[];
  let tableBody: IDetail[];
  if (tableData && tableData.detail) {
    const mergeDetailKeys = Object.assign({}, ...tableData.detail);
    tableHead = Object.keys(mergeDetailKeys) as IDetailKey[];
    tableBody = tableData.detail;
  }

  const formatValue = (val: string) => {
    const getValArr = val.split('*');
    if (getValArr[0] === '') {
      return t(getValArr[1]);
    } else {
      return `${getValArr[0]} ${t(getValArr[1])}`;
    }
  };

  return (
    <Wrapper>
      <Flex direction="column" align="center">
        <Box
          width={{ base: '85vw', md: '92vw' }}
          m={3}
          p={3}
          bg="tomato"
          color="white"
          textAlign={isArabic ? 'right' : 'left'}
        >
          {`${isArabic ? '' : '* '}${t('tradingTime')}`}
        </Box>
        {/* select */}
        <Flex my={10} width={{ base: '80vw', md: '30vw' }} align="center">
          <Text fontWeight="600" pr={2} whiteSpace="nowrap">
            {`${t('product')} :`}
          </Text>
          <Select onChange={handleCategoryChange} value={category}>
            {productsOptions.map((x) => (
              <option key={x} value={x}>
                {t(x)}
              </option>
            ))}
          </Select>
        </Flex>

        {/* table data */}
        {tableData && tableHead ? (
          <Box mb={20} width={'90vw'} textAlign="center">
            <InfoTitle title={t(tableData.category)} />

            {/* Mobile table data  */}
            <Box display={{ base: 'block', md: 'none' }}>
              {tableBody.map((eachItem) => (
                <Box
                  key={eachItem.product}
                  border={'1px'}
                  borderColor="gray.200"
                  boxShadow="xl"
                  borderRadius={'10px'}
                  my={10}
                >
                  {tableHead.map((eachTitle, idx) => (
                    <Flex
                      key={eachItem.product + eachTitle}
                      p={2}
                      bgColor={idx % 2 === 0 ? 'auto' : 'gray.100'}
                      direction={isArabic ? 'row-reverse' : 'row'}
                    >
                      <Box
                        fontWeight={'600'}
                        textAlign={isArabic ? 'right' : 'left'}
                        width={'50%'}
                      >
                        {t(eachTitle)}
                      </Box>
                      <Box width={'50%'}>
                        {eachItem[eachTitle].includes('*')
                          ? formatValue(eachItem[eachTitle])
                          : eachItem[eachTitle]}
                      </Box>
                    </Flex>
                  ))}
                </Box>
              ))}
            </Box>

            {/* Desktop table data  */}
            <Box display={{ base: 'none', md: 'block' }}>
              <StyledTable>
                <thead>
                  <tr>
                    {tableHead.map((eachTitle) => (
                      <th key={eachTitle}>{t(eachTitle)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableBody.map((eachItem) => (
                    <tr key={eachItem.product}>
                      {tableHead.map((eachTitle) => (
                        <td key={eachItem + eachTitle}>
                          {eachItem[eachTitle].includes('*')
                            ? formatValue(eachItem[eachTitle])
                            : eachItem[eachTitle]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    {tableHead.map((eachTitle) => (
                      <th key={eachTitle}>{t(eachTitle)}</th>
                    ))}
                  </tr>
                </tfoot>
              </StyledTable>
            </Box>
          </Box>
        ) : (
          <Center>No data</Center>
        )}
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'products'
    ]))
  }
});

export default products;
