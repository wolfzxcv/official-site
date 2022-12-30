import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGDRJ_BG = '#5b9877';
const WCGDRJ_TABLE_BG = '#10423f';
const WCGDRJ_TABLE_BG_LIGHT = '#174f4c';
const WCGDRJ_TITLE_FONT = 'white';
const WCGDRJ_TITLE_BOX_BG = '#e93c4f';
const WCGDRJ_FOOTER_BG = '#10423f';
const WCGDRJ_FONT_YELLOW = '#fffe9d';

const WCGDRJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGDRJ_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGDRJ_M.jpg',
          md: '/../assets/images/activity_WCGDRJ.jpg'
        }}
        bgPosition="top center"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGDRJContent />

      {/* rules */}
      <Flex bg={WCGDRJ_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGDRJRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGDRJContent: React.FC<{}> = () => (
  <Flex bg={WCGDRJ_BG} color="white" flexDir="column" align="center">
    <WCGDRJTitle />

    {/* table */}
    <WCGDRJTable />

    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mt={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '18px' }}
    >
      例子:A客户12月份首次入金3000美元，在活动结算前完成了200手，即每手回赠7美元，逄周一发放的信用额应累计达1400美元回赠并在活动完结之后自动转变成现金可自由取出。
    </Box>

    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mb={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '18px' }}
    >
      (贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶，指数類1标准手按官方合約单位要求)*11
      (外汇产品交易2标准手＝1手计算)*12
    </Box>

    <Flex
      justify="center"
      my={20}
      pb={20}
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
        bg={WCGDRJ_TITLE_BOX_BG}
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
        官网首页
      </Link>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={1}
        bg={WCGDRJ_TITLE_BOX_BG}
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
        href={links.registerZH}
        isExternal
      >
        立即开户
      </Link>
      <Box
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={1}
        bg={WCGDRJ_TITLE_BOX_BG}
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
        onClick={openChatWindow}
      >
        在线客服
      </Box>
    </Flex>
  </Flex>
);

export const WCGDRJTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    fontSize={{ base: '12px', md: '18px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
  >
    <Box
      borderRadius={{ base: '3px', md: '25px' }}
      bg={WCGDRJ_TABLE_BG}
      color={WCGDRJ_TITLE_FONT}
      border={'1px'}
      borderColor="white"
      my={5}
      px={5}
      py={2}
      fontSize={{ base: '12px', md: 'inherit' }}
    >
      2022年12月1日 – 2022年12月31日
    </Box>

    <Box
      width={{ base: '90vw', md: '760px' }}
      fontSize={{ base: '12px', md: '18px' }}
      color={WCGDRJ_FONT_YELLOW}
      mb={5}
    >
      客户12月内存入金额最低500美元,
      即自动参加冬日交易狂欢节!!!交易愈多回赠愈多!!!!每个户口回赠可高达一万美元!!!
    </Box>

    <Box
      width={{ base: '90vw', md: '760px' }}
      fontSize={{ base: '12px', md: '18px' }}
    >
      客户在活动期间存入500美元或以上，即自动参加本活动，客户12月内交易内累计达要求，即可按层级拥有每手回赠奖励。每手交易每逄周一结算直到整个活动完结，已发放的回赠会自动转变成现金可自由取出。
    </Box>
  </Flex>
);

const WCGDRJTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    my={8}
    fontSize={{ base: '12px', md: '18px' }}
  >
    <StyledWCGDRJTable>
      <thead>
        <tr>
          <th>12月累计交易达</th>
          <th>每手回赠</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5手</td>
          <td>1美元</td>
        </tr>
        <tr>
          <td>15手</td>
          <td>3美元</td>
        </tr>
        <tr>
          <td>60手</td>
          <td>5美元</td>
        </tr>
        <tr>
          <td>180手</td>
          <td>7美元</td>
        </tr>
        <tr>
          <td>520手或以上</td>
          <td>9美元</td>
        </tr>
      </tbody>
    </StyledWCGDRJTable>
  </Box>
);

const StyledWCGDRJTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid white;
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  tr {
    background-color: ${WCGDRJ_TABLE_BG_LIGHT};
    color: white;
  }

  tr:nth-of-type(1) {
    background-color: ${WCGDRJ_TABLE_BG};
  }

  th {
    color: ${WCGDRJ_FONT_YELLOW};
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }

  .font-yellow {
    font-weight: 700;
    color: ${WCGDRJ_FONT_YELLOW};
  }
`;

const WCGDRJRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>
    <Box>
      1.
      客户在活动期间完成所属的入金交易手数要求是12月起开仓计算的已平仓单,方便计算于本活动的交易手数。
    </Box>
    <Box>2. 信用额回赠于交易后逄周一发放。</Box>
    <Box>
      3.
      客户于活动期间，如有出金，客户于活动期间入金余额达到活动最低参加金额500美金，也可以继续参加活动。
    </Box>
    <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>
      5.
      于活动结束日(2022年12月31)收市之后的第一个交易日进行信用额转变现金结算。
    </Box>
    <Box>6. 本活动单一交易户口最高可获赠金10000美元。</Box>
    <Box>
      7. 如达交易手数提升回赠层级，逄周一结算时会自动补充层级间相差的信用额。
    </Box>
    <Box>
      8. WCG 将保留权利随时修改或终止此促销活动,任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      9.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>10. 客户成功入金500美元或以上之后自动可参加是次活动。</Box>
    <Box>
      11. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶，指数类1标准手按官方合约单位要求。
    </Box>
    <Box>12. 外汇产品交易2标准手＝1手计算。</Box>
    <Box>
      13.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box>14. 活动名额有限送完即止。</Box>
    <Box>
      15.
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
    </Box>
  </>
);

export default WCGDRJ;
