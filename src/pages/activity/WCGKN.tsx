import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGKN_BG = '#202b6d';
export const WCGKN_BG_M = '#253280';

const WCGKN_DATE_BG = '#e9326a';
const WCGKN_DATE_BORDER = '#9d94b3';
const WCGKN_BUTTON_BG = '#1ba4da';
const WCGKN_FOOTER_BG = '#fb438d';

const WCGKN_TITLE_FONT = 'white';

const WCGKN_TABLE_FONT_YELLOW = '#faf16e';
const WCGKN_TABLE_BG_LIGHT_PINK = '#f43a79';
const WCGKN_TABLE_BG_DARK_PINK = '#f43a79';
const WCGKN_TABLE_BG_LIGHT_BLUE = '#178fc4';
const WCGKN_TABLE_BG_DARK_BLUE = '#178fc4';

const WCGKN: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '500px' }}
        bg={{ base: WCGKN_BG_M, md: WCGKN_BG }}
        bgImage={{
          base: '/../assets/images/activity_WCGKN_M.jpg',
          md: '/../assets/images/activity_WCGKN.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGKNContent />

      {/* rules */}
      <Flex bg={WCGKN_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGKNRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGKNContent: React.FC<{}> = () => (
  <Flex
    bg={{ base: WCGKN_BG_M, md: WCGKN_BG }}
    color="white"
    flexDir="column"
    align="center"
  >
    <WCGKNTitle />

    {/* table */}
    <WCGKNTable />

    <Box mt={5} px={2} fontSize={{ base: '12px', md: '16px' }}>
      例子:A客户活动内首次入金3000美元，在活动结算前完成了200手，即每手回赠7美元，应累计达1400美元回赠并在活动完结之后自动转变成现金可自由取出。
    </Box>

    <Box px={2} fontSize={{ base: '12px', md: '16px' }}>
      (贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶，指数类1标准手按官方合约单位要求)*11
    </Box>
    <Box px={2} fontSize={{ base: '12px', md: '16px' }}>
      (外汇产品交易2标准手＝1手计算)*12
    </Box>

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
        bg={WCGKN_BUTTON_BG}
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
        bg={WCGKN_BUTTON_BG}
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
        立即开户
      </Link>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={1}
        bg={WCGKN_BUTTON_BG}
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
        在线客服
      </Link>
    </Flex>
  </Flex>
);

export const WCGKNTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    pb={20}
    fontSize={{ base: '14px', md: '20px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
    bg={{ base: WCGKN_BG_M, md: WCGKN_BG }}
    color="white"
  >
    <Box
      border="1px"
      borderColor={WCGKN_DATE_BORDER}
      borderRadius="20px"
      bg={WCGKN_DATE_BG}
      color={WCGKN_TITLE_FONT}
      py={2}
      mt={{ base: 0, md: 10 }}
      mb={10}
      width={{ base: '100%', md: 'auto' }}
      px={{ base: 'auto', md: '50px' }}
      whiteSpace="nowrap"
      fontSize={{ base: '14px', md: '22px' }}
      textAlign="center"
    >
      2023年12月1日 – 2024年1月31日
    </Box>

    <Box fontWeight={700} fontSize={{ base: '16px', md: '24px' }}>
      客户活动内存入金额最低500美元, 即可申请参加跨年交易活动!!!
    </Box>

    <Box mb={5} fontWeight={700} fontSize={{ base: '16px', md: '24px' }}>
      交易愈多回赠愈多!!!!每个户口回赠可高达一万美元!!!
    </Box>

    <Box>
      客户在活动期间存入500美元或以上，即可向在线客服参加本活动，客户活动交易内累计达要求，即可
    </Box>

    <Box>
      按层级拥有每手回赠奖励。每手交易直到整个活动完结结算，已发放的现金可自由取出。
    </Box>
  </Flex>
);

const WCGKNTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    mb={8}
    fontSize={{ base: '10px', md: '18px' }}
  >
    <StyledWCGKNTable>
      <thead>
        <tr>
          <th>活动累计交易达</th>
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
    </StyledWCGKNTable>
  </Box>
);

const StyledWCGKNTable = styled.table`
  width: 100%;
  color: ${WCGKN_TITLE_FONT};
  border-collapse: collapse;
  table-layout: fixed;
  td,
  th {
    border: 1px solid ${WCGKN_TITLE_FONT};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  thead > tr > th {
    background-color: ${WCGKN_TABLE_BG_LIGHT_BLUE};
    color: ${WCGKN_TABLE_FONT_YELLOW};
    &:last-child {
      background-color: ${WCGKN_TABLE_BG_LIGHT_PINK};
    }
  }

  tbody > tr > td {
    background-color: ${WCGKN_TABLE_BG_DARK_BLUE};
    &:last-child {
      background-color: ${WCGKN_TABLE_BG_DARK_PINK};
      color: ${WCGKN_TABLE_FONT_YELLOW};
    }
  }

  th {
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }

  .yellow {
    color: ${WCGKN_TABLE_FONT_YELLOW};
  }
`;

const WCGKNRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>
    <Box>
      1.
      客户在活动期间完成所属的入金交易手数要求是12月起开仓计算的已平仓单,方计算于本活动的交易手数。
    </Box>
    <Box>2. 回赠于整个活动完结后发放。</Box>
    <Box>
      3.
      客户在活动期间内申请提取全部或部分资金将取消此活动资格,并实时取消所获赠金或信用额。
    </Box>
    <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>5. 于活动结束日(2024年1月31)收市之后的第一个交易日进行现金结算。</Box>
    <Box>6. 本活动单一交易户口最高可获赠金10000美元。</Box>
    <Box>
      7. WCG 将保留权利随时修改或终止此促销活动,任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      8.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>9. 客户成功入金500美元或以上之后自动可参加是次活动。</Box>
    <Box>
      10. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶，指数类1标准手按官方合约单位要求。
    </Box>
    <Box>11. 外汇产品交易2标准手＝1手计算。</Box>
    <Box>
      12.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box>13. 活动名额有限送完即止。</Box>
    <Box>
      14.
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
    </Box>
  </>
);

export default WCGKN;
