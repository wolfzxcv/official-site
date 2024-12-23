import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Locales } from '@/i18n/config';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

export const WCGJTXJ_BG = '#894a15';

const WCGJTXJ_DATE_BG = '#e5392b';
const WCGJTXJ_DATE_BORDER = '#c89179';
const WCGJTXJ_BUTTON_BG = '#d77a35';
const WCGJTXJ_FOOTER_BG = '#d77a35';

const WCGJTXJ_TITLE_FONT = 'white';

const WCGJTXJ_TABLE_FONT_YELLOW = 'white';
const WCGJTXJ_TABLE_BG_LEFT_TITLE = '#ec4936';
const WCGJTXJ_TABLE_BG_RIGHT_TITLE = '#f07868';
const WCGJTXJ_TABLE_BG_LEFT_CONTENT = '#e5392b';
const WCGJTXJ_TABLE_BG_RIGHT_CONTENT = '#ea5e51';

const WCGJTXJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '630px' }}
        bg={{ base: WCGJTXJ_BG, md: WCGJTXJ_BG }}
        bgImage={{
          base: '/../assets/images/activity_WCGJTXJ_M.jpg',
          md: '/../assets/images/activity_WCGJTXJ.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGJTXJContent />

      {/* rules */}
      <Flex bg={WCGJTXJ_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGJTXJRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGJTXJContent: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Flex
      bg={{ base: WCGJTXJ_BG, md: WCGJTXJ_BG }}
      color="white"
      flexDir="column"
      align="center"
    >
      <WCGJTXJTitle />

      {/* table */}
      <WCGJTXJTable />

      <Flex
        justify="center"
        my={20}
        pb={15}
        alignItems="center"
        textAlign="center"
        height={{ base: '40px', md: '60px' }}
        fontSize={{ base: '24px', md: '36px' }}
      >
        <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGJTXJ_BUTTON_BG}
          border="1px"
          borderColor="white"
          borderRadius="5px"
          fontWeight={900}
          fontSize="24px"
          lineHeight="42px"
          _hover={{
            opacity: 0.8,
            transition: '1s'
          }}
          href="/"
          isExternal
        >
          {currentLang === 'zh' ? '官網首頁' : '官网首页'}
        </Link>
        <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGJTXJ_BUTTON_BG}
          border="1px"
          borderColor="white"
          borderRadius="5px"
          fontWeight={900}
          fontSize="24px"
          lineHeight="42px"
          _hover={{
            opacity: 0.8,
            transition: '1s'
          }}
          href={links.registerReal}
          isExternal
        >
          {currentLang === 'zh' ? '立即開戶' : '立即开户'}
        </Link>
        <Link
          width="30vw"
          maxW="200px"
          textAlign="center"
          mx={2}
          py={1}
          bg={WCGJTXJ_BUTTON_BG}
          border="1px"
          borderColor="white"
          borderRadius="5px"
          fontWeight={900}
          fontSize="24px"
          lineHeight="42px"
          _hover={{
            opacity: 0.8,
            transition: '1s'
          }}
          href={links.liveChat}
          isExternal
        >
          {currentLang === 'zh' ? '在線客服' : '在线客服'}
        </Link>
      </Flex>
    </Flex>
  );
};

export const WCGJTXJTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    pb={20}
    fontSize={{ base: '14px', md: '20px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
    bg={{ base: WCGJTXJ_BG, md: WCGJTXJ_BG }}
    color="white"
  >
    <Box
      border="1px"
      borderColor={WCGJTXJ_DATE_BORDER}
      borderRadius="20px"
      bg={WCGJTXJ_DATE_BG}
      color={WCGJTXJ_TITLE_FONT}
      py={2}
      mt={{ base: 0, md: 10 }}
      mb={10}
      width={{ base: '100%', md: 'auto' }}
      px={{ base: 'auto', md: '50px' }}
      whiteSpace="nowrap"
      fontSize={{ base: '14px', md: '22px' }}
      textAlign="center"
    >
      2024年11月01日至2024年11月30日
    </Box>
  </Flex>
);

const WCGJTXJTable: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Box
      width={{ base: '90vw', md: '800px' }}
      mb={8}
      fontSize={{ base: '10px', md: '18px' }}
    >
      <StyledWCGJTXJTable>
        <thead>
          <tr>
            <th className="table_left_title">
              {currentLang === 'zh' ? '贈金金額 (美元)' : '赠金金额 (美元)'}
            </th>
            <th className="table_right_title">
              {currentLang === 'zh' ? '所需平倉手數 (手)' : '所需平仓手数 (手)'}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>100</td>
            <td>15</td>
          </tr>
          <tr>
            <td>200</td>
            <td>30</td>
          </tr>
          <tr>
            <td>300</td>
            <td>60</td>
          </tr>
          <tr>
            <td>500</td>
            <td>95</td>
          </tr>
          <tr>
            <td>1000</td>
            <td>170</td>
          </tr>
        </tbody>
      </StyledWCGJTXJTable>
    </Box>
  );
};

const StyledWCGJTXJTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid ${WCGJTXJ_TITLE_FONT};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  .table_left_title {
    color: ${WCGJTXJ_TABLE_FONT_YELLOW};
    background-color: ${WCGJTXJ_TABLE_BG_LEFT_TITLE};
  }

  .table_right_title {
    background-color: ${WCGJTXJ_TABLE_BG_RIGHT_TITLE};
  }

  tbody > tr > td {
    background-color: ${WCGJTXJ_TABLE_BG_RIGHT_CONTENT};
    &:first-child {
      color: ${WCGJTXJ_TABLE_FONT_YELLOW};
      background-color: ${WCGJTXJ_TABLE_BG_LEFT_CONTENT};
    }
  }
`;

const WCGJTXJRules: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  return currentLang === 'zh' ? (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活動規則及注意事項
      </Box>
      <Box>1. 但凡在活動期間開的已平倉單方能計算活動範圍。</Box>
      <Box>2. 回贈在活動結束時按已平倉的手數層級結算。</Box>
      <Box>3. 活動需主動向客服申請參加。</Box>
      <Box>4. 可提現回贈將在活動完結14個工作日內發放。</Box>
      <Box>5. 手數要求會在主動報名後於活動期間累積計算。</Box>
      <Box>6. 活動不能與其他優惠重叠。</Box>
      <Box>7. 每位客戶只可使用一個賬號參加此活動一次。</Box>
      <Box>
        8. WCG
        將保留權利隨時修改或終止此促銷活動，任何修改或終止活動的通知將以WCG
        Markets發出的公布爲準。
      </Box>
      <Box>9. 公司保留活動最終解釋權。</Box>
      <Box>
        10.
        高風險投資警告差價合約（CFD）屬於覆雜的金融產品，其使用杠桿交易的屬性導致本金快速虧損的可能性較高，您有可能因此被要求追加保證金。請在入市前先了解差價合約的產品原理並考慮是否能夠承受此風險。所有金融衍生產品工具的過往價格與表現並不擔保或代表未來走勢。此類金融產品並不適合所有投資者，請務必在入市前完全了解所有潛在的風險，並在有需要時尋求獨立意見。
      </Box>
      <Box>11. 活動名額有限送完即止。</Box>
      <Box>
        12.
        所有異常交易包括通過超短綫刷單(15分鐘內)、AB倉交易或者利用外掛軟件或其他計算機程序導致多個戶口使用相同IP地址同時下單，以及其他可疑操作完成的交易將被視爲無效交易手數，不計入此活動的計算範圍內(異常交易的定義參閱WCG官網)。
      </Box>
    </>
  ) : (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活动规则及注意事项
      </Box>
      <Box>1. 但凡在活动期间开的已平仓单方能计算活动范围。</Box>
      <Box>2. 回赠在活动结束时按已平仓的手数层级结算。</Box>
      <Box>3. 活动需主动向客服申请参加。</Box>
      <Box>4. 可提现回赠将在活动完结14个工作日内发放。</Box>
      <Box>5. 手数要求会在主动报名后于活动期间累积计算。</Box>
      <Box>6. 活动不能与其他优惠重迭。</Box>
      <Box>7. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>
        8. WCG
        将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
        Markets发出的公布爲准。
      </Box>
      <Box>9. 公司保留活动最终解释权。</Box>
      <Box>
        10.
        高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
      </Box>
      <Box>11. 活动名额有限送完即止。</Box>
      <Box>
        12.
        所有异常交易包括通过超短綫刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视爲无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
      </Box>
    </>
  );
};

export default WCGJTXJ;
