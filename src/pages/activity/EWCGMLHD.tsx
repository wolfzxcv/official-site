import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const EWCGMLHD_BG = '#d83d0d';
const EWCGMLHD_BUTTON_BG = '#ff9600';
const EWCGMLHD_FOOTER_BG = '#b01d0b';

const EWCGMLHD_FONT_WHITE = 'white';
const EWCGMLHD_TABLE_FONT_YELLOW = '#fef8a1';
const EWCGMLHD_TABLE_BG_LIGHT_BROWN = '#e1350d';
const EWCGMLHD_TABLE_BG_DARK_BROWN = '#d42a09';
const EWCGMLHD_TABLE_BG_LIGHT_RED = '#f9704c';
const EWCGMLHD_TABLE_BG_DARK_RED = '#f6583d';

const EWCGMLHD: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={EWCGMLHD_BG}
        bgImage={{
          base: '/../assets/images/activity_EWCGMLHD_M.jpg',
          md: '/../assets/images/activity_EWCGMLHD.jpg'
        }}
        bgPosition={{ base: 'left center', md: 'top center' }}
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <EWCGMLHDContent />

      {/* rules */}
      <Flex bg={EWCGMLHD_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={EWCGMLHD_FONT_WHITE}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <EWCGMLHDRules />
        </Stack>
      </Flex>
    </>
  );
};

const EWCGMLHDContent: React.FC<{}> = () => (
  <Flex
    bg={EWCGMLHD_BG}
    color={EWCGMLHD_FONT_WHITE}
    flexDir="column"
    align="center"
  >
    {/* table */}
    <EWCGMLHDTable />

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
        bg={EWCGMLHD_BUTTON_BG}
        border="1px"
        borderColor={EWCGMLHD_FONT_WHITE}
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
        官網首頁
        <Text fontSize={'14px'} lineHeight={1} mb={1}>
          HOMEPAGE
        </Text>
      </Link>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={1}
        bg={EWCGMLHD_BUTTON_BG}
        border="1px"
        borderColor={EWCGMLHD_FONT_WHITE}
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
        立即開戶
        <Text fontSize={'14px'} lineHeight={1} mb={1}>
          OPEN AN ACCOUNT
        </Text>
      </Link>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={1}
        bg={EWCGMLHD_BUTTON_BG}
        border="1px"
        borderColor={EWCGMLHD_FONT_WHITE}
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
        在線客服
        <Text fontSize={'14px'} lineHeight={1} mb={1}>
          CUSTOMER SERVICE
        </Text>
      </Link>
    </Flex>
  </Flex>
);

const EWCGMLHDTable: React.FC<{}> = () => (
  <Box
    width={{ base: '95vw', md: '800px' }}
    my={8}
    fontSize={{ base: '10px', md: '18px' }}
  >
    <StyledEWCGMLHDTable>
      <thead>
        <tr>
          <th>
            累計入金金額
            <Text fontSize={'14px'}>CUMULATIVE</Text>
            <Text fontSize={'14px'}>DEPOSIT AMOUNT</Text>
          </th>
          <th>
            贈金 (美元) <Text fontSize={'14px'}>BONUS ( USD )</Text>
            <Text fontSize={'14px'} color={EWCGMLHD_TABLE_BG_LIGHT_BROWN}>
              BONUS ( USD )
            </Text>
          </th>
          <th>
            交易手數要求 <Text fontSize={'14px'}>TRADING LOT</Text>
            <Text fontSize={'14px'}>REQUIREMENTS</Text>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1000</td>
          <td>100</td>
          <td>35</td>
        </tr>
        <tr>
          <td>3000</td>
          <td>300</td>
          <td>80</td>
        </tr>
        <tr>
          <td>6000</td>
          <td>600</td>
          <td>150</td>
        </tr>
        <tr>
          <td>10000</td>
          <td>1500</td>
          <td>320</td>
        </tr>
        <tr>
          <td>15000</td>
          <td>2250</td>
          <td>450</td>
        </tr>
      </tbody>
    </StyledEWCGMLHDTable>
  </Box>
);

const StyledEWCGMLHDTable = styled.table`
  width: 100%;
  color: ${EWCGMLHD_FONT_WHITE};
  border-collapse: collapse;
  td,
  th {
    border: 1px solid ${EWCGMLHD_FONT_WHITE};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  thead > tr > th {
    background-color: ${EWCGMLHD_TABLE_BG_LIGHT_RED};
    &:nth-child(2) {
      background-color: ${EWCGMLHD_TABLE_BG_LIGHT_BROWN};
      color: ${EWCGMLHD_TABLE_FONT_YELLOW};
    }
  }

  tbody > tr > td {
    background-color: ${EWCGMLHD_TABLE_BG_DARK_RED};
    &:nth-child(2) {
      background-color: ${EWCGMLHD_TABLE_BG_DARK_BROWN};
      color: ${EWCGMLHD_TABLE_FONT_YELLOW};
    }
  }

  th {
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }
`;

const EWCGMLHDRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold">
      ·活動規則及注意事項
    </Box>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      · Activity rules and precautions
    </Box>
    <Box>1. 入金金額是可參加層級的上限計算。</Box>
    <Box>
      1. The deposit amount is calculated as the upper limit of the level you
      can participate in.
    </Box>
    <Box>2. 申請參加後累計入金金額層級。</Box>
    <Box>
      2. Cumulative deposit amount levels after applying to participate.
    </Box>
    <Box>3. 活動結束日期在申請參加的當月最後一個工作日。</Box>
    <Box>
      3. The event end date is the last working day of the month in which you
      apply to participate.
    </Box>
    <Box>4. 但凡在活動期間開的已平倉單方能計算活動範圍。</Box>
    <Box>
      4. Only closed positions opened during the activity period can be used to
      calculate the scope of the activity.
    </Box>
    <Box>5. 回贈在活動結束時按已平倉的手數層級結算。</Box>
    <Box>
      5. The rebate will be settled based on the closed lot level at the end of
      the event.
    </Box>
    <Box>6. 活動需主動向客服申請參加。</Box>
    <Box>
      6. You need to actively apply to customer service to participate in the
      event.
    </Box>
    <Box>7. 客戶如參加活動之後，在活動結束前出金，會被取消活動資格。</Box>
    <Box>
      7. If a customer withdraws funds before the end of the event after
      participating in the event, he or she will be disqualified from the event.
    </Box>
    <Box>8. 回贈將在活動完結14個工作日內發放。</Box>
    <Box>
      8. The rebate will be issued within 14 working days after the event ends.
    </Box>
    <Box>9. 手數要求會在活動期間累積計算。</Box>
    <Box>
      9. Lot size requirements will be calculated cumulatively during the event
      period.
    </Box>
    <Box>10. 每位客戶只可使用一個賬號參加此活動一次。</Box>
    <Box>
      10. Each customer can only use one account to participate in this event
      once.
    </Box>
    <Box>11. 外匯產品交易2標準手＝1手計算。</Box>
    <Box>
      11. Forex product transactions, 2 standard lots = 1 lot are calculated.
    </Box>
    <Box>12. WCG MARKETS不承擔任何因本活動而引起的法律責任或爭議。</Box>
    <Box>
      12. WCG MARKETS does not assume any legal liability or disputes arising
      from this activity.
    </Box>
    <Box>13. 所有交易均涉及風險，您的損失可能大於您的入金。</Box>
    <Box>
      13. All trading involves risk, and you may lose more than your deposit.
    </Box>
    <Box>
      14. WCG
      將保留權利隨時修改或終止此促銷活動，任何修改或終止活動的通知將以WCG
      Markets發出的公布為準。
    </Box>
    <Box>
      14. WCG will reserve the right to modify or terminate this promotion at
      any time , and any notice of modification or termination will be subject
      to the announcement issued by WCG Markets.
    </Box>
    <Box>15. 公司保留活動最終解釋權。</Box>
    <Box>
      15. The company reserves the right of final interpretation of the event.
    </Box>
    <Box>
      16.
      高風險投資警告差價合約（CFD）屬覆雜的金融產品，其使用杠桿交易的屬性導致本金快速虧損的可能性較高，您有可能因此被要求追加保證金。請在入市前先了解差價合約的產品原理幷考慮是否能夠承受此風險。所有金融衍生產品工具的過往價格與表現幷不擔保或代表未來走勢。此類金融產品幷不適合所有投資者，請務必在入市前完全了解所有潛在的風險，幷在有需要時尋求獨立意見。
    </Box>
    <Box>
      16. High Risk Investment Warning: Contracts for Difference ( CFD ) are
      complex financial products, and their use of leveraged transactions may
      lead to a higher possibility of rapid loss of principal, and you may be
      required to add margin as a result. Please understand the product
      principles of CFDs before entering the market and consider whether you can
      bear the risk. The past prices and performance of all financial derivative
      instruments do not guarantee or represent future trends. Such financial
      products are not suitable for all investors. Please be sure to fully
      understand all potential risks before entering the market, and seek
      independent advice when necessary.
    </Box>
    <Box>17. 活動名額有限送完即止。</Box>
    <Box>
      17. The number of places for the event is limited while supplies last.
    </Box>
    <Box>
      18.
      所有異常交易包括通過超短線刷單(15分鐘內)、AB倉交易或者利用外掛軟件或其他計算機程序導致多個戶口使用相同IP地址同時下單，以及其他可疑操作完成的交易將被視為無效交易手數，不計入此活動的計算範圍內(異常交易的定義參閱WCG官網)。
    </Box>
    <Box>
      18. All abnormal transactions including ultra-short-term order brushing
      (within 15 minutes) , AB warehouse transactions, or the use of plug-in
      software or other computer programs that cause multiple accounts to place
      orders simultaneously using the same IP address, as well as transactions
      completed by other suspicious operations will be considered invalid. The
      number of trading lots is not included in the calculation range of this
      activity( For the definition of abnormal transactions, please refer to the
      WCG official website).
    </Box>
  </>
);

export default EWCGMLHD;
