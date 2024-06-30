import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Locales } from '@/i18n/config';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React from 'react';

export const EWCGQYT_BG = '#2381ff';

const EWCGQYT_DATE_BG = '#e82686';
const EWCGQYT_DATE_BORDER = '#d8d8d2';
const EWCGQYT_BUTTON_BG = '#2740d0';
const EWCGQYT_FOOTER_BG = '#2740d0';

const EWCGQYT_TITLE_FONT = 'white';
const EWCGQYT_FONT_YELLOW = 'yellow';

const EWCGQYT: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '626px' }}
        bg={EWCGQYT_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGQYT_M.jpg`,
          md: `/../assets/images/activity_WCGQYT.jpg`
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <EWCGQYTContent />

      {/* rules */}
      <Flex bg={EWCGQYT_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <EWCGQYTRules />
        </Stack>
      </Flex>
    </>
  );
};

const EWCGQYTContent: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Flex bg={EWCGQYT_BG} color="white" flexDir="column" align="center">
      <EWCGQYTTitle />

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
          bg={EWCGQYT_BUTTON_BG}
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
          bg={EWCGQYT_BUTTON_BG}
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
          bg={EWCGQYT_BUTTON_BG}
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

export const EWCGQYTTitle: React.FC<{}> = () => {
  return (
    <Flex
      flexDir="column"
      p={2}
      pb={10}
      fontSize={{ base: '14px', md: '20px' }}
      textAlign="center"
      align="center"
      maxW="1000px"
      bg={EWCGQYT_BG}
      color="white"
    >
      <Box
        border="1px"
        borderColor={EWCGQYT_DATE_BORDER}
        borderRadius="20px"
        bg={EWCGQYT_DATE_BG}
        color={EWCGQYT_TITLE_FONT}
        py={2}
        mt={{ base: 0, md: 10 }}
        mb={10}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 'auto', md: '50px' }}
        whiteSpace="nowrap"
        fontSize={{ base: '14px', md: '22px' }}
        textAlign="center"
      >
        01/07/2024~31/07/2024
      </Box>

      <Flex mt={10} fontSize={{ base: '14px', md: '22px' }}>
        <Flex>
          <Text>报名参加活动之后的首次入金金额</Text>
          <Text color={EWCGQYT_FONT_YELLOW}>回赠20%交易赠金，</Text>
        </Flex>
      </Flex>
      <Flex fontSize={{ base: '14px', md: '22px' }}>
        <Flex>
          <Text>其後每次入金</Text>
          <Text color={EWCGQYT_FONT_YELLOW}>回赠10%交易赠金!</Text>
        </Flex>
      </Flex>

      <Box mt={10} fontSize={{ base: '10px', md: '16px' }}>
        例如: 报名参加活动之后首次入金1000美元，即可获得200美元的额外交易赠金。
      </Box>

      <Box fontSize={{ base: '10px', md: '16px' }}>
        之后每次入金都可享有入金回赠10%交易赠金的优惠，直致达到活动回赠的上限。
      </Box>
    </Flex>
  );
};

const EWCGQYTRules: React.FC<{}> = () => {
  return (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活动条款
      </Box>
      <Box>1. 此优惠活动仅开放给在WCG MARKETS开立真实的标准帐户的客户。</Box>
      <Box>2. 活动需主动向客服申请参加。</Box>
      <Box>3. 客户必须在报名参加活动之后3天内完成首次入金，逾期无效。</Box>
      <Box>4. 入金金额须达500美元或以上方可享受优惠。</Box>
      <Box>
        5. 报名完成首次入金之后，在活动期间的每次入金都可获得10%交易赠金。
      </Box>
      <Box>6. 单一交易户口最高可获赠金1000美元 。</Box>
      <Box>7. 交易赠金将在入金后1个工作日之后发放到客户帐户。</Box>
      <Box>
        8. 在交易赠金发效之前请确保帐户余额不低于500美元，方能接收交易赠金。
      </Box>
      <Box>9. 交易赠金仅可用于交易，不可出金，不可兑换、不可转让。</Box>
      <Box>
        10.
        这些交易赠金无法直接提取。如果使用这些交易赠金进行交易产生盈利，则赚取的利润将被添加到帐户的总价值中。相反，任何产生的亏损将从帐户价值中扣除。通过使用这些交易赠金产生的利润可按照出金程序进行提取。
      </Box>
      <Box>
        11.
        如果客户选择提取部分或全部入金和/或利润，相应部分的交易赠金，或整个交易赠金金额，将从其帐户中的入金交易赠金将按照比例扣除。
      </Box>

      <Box>
        12.
        活动结束会扣除所有已发放的交易赠金，请注意户口保证金比率，此操作有引起强制平仓的风险。
      </Box>
      <Box>13. 公司保留随时修改、终止活动及收回交易赠金的权利。</Box>
      <Box>14. 公司保留活动最终解释权。</Box>
      <Box>
        15.
        所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)，公司会终止本活动计划。
      </Box>
      <Box>
        16.
        高风险投资警告差价合约（CFD）属复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理幷考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现幷不担保或代表未来走势。此类金融产品幷不适合所有投资者，请务必在入市前完全了解所有潜在的风险，幷在有需要时寻求独立意见。
      </Box>
      <Box>17. 活动名额有限送完即止。</Box>
      <Box>18. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>
        由表格中的范例，您可了解当提交出金申请时，帐户中的入金交易赠金将按照比例扣除。
      </Box>
      <Flex justify={{ base: 'start', md: 'center' }}>
        <StyledTable>
          <thead>
            <tr>
              <th>入金</th>
              <th>交易赠金</th>
              <th>可出金餘額</th>
              <th>出金</th>
              <th>按比例扣除的贈金金額</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1000</td>
              <td>150</td>
              <td>1000</td>
              <td>300（$1,000 之 30%）</td>
              <td>45（$150 之 30%）</td>
            </tr>
            <tr>
              <td>5000</td>
              <td>600</td>
              <td>5000</td>
              <td>4000（$1,000 之 80%）</td>
              <td>480（$600 之 80%）</td>
            </tr>
            <tr>
              <td>8000</td>
              <td>1000</td>
              <td>8000</td>
              <td>3500（$8,000 之 43%）</td>
              <td>430（$1,000 之 43%）</td>
            </tr>
          </tbody>
        </StyledTable>
      </Flex>
    </>
  );
};

const StyledTable = styled.table`
  border: 1px solid white;
  max-width: 800px;
  td,
  th {
    padding: 0 20px;
    line-height: 3;
    border: 1px solid white;
    text-align: center;
  }

  border-collapse: collapse;
`;

export default EWCGQYT;
