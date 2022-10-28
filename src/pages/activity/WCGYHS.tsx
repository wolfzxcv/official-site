import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGYHS_BG = '#e03930';
const WCGYHS_TITLE_FONT = '#ffee8d';
const WCGYHS_TITLE_BOX_BG = '#c72719';
const WCGYHS_FOOTER_BG = '#5a0906';
const WCGYHS_FONT_YELLOW = '#ffe779';

const WCGYHS: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGYHS_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGYHS_M.jpg',
          md: '/../assets/images/activity_WCGYHS.jpg'
        }}
        bgPosition="top center"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGYHSContent />

      {/* rules */}
      <Flex bg={WCGYHS_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGYHSRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGYHSContent: React.FC<{}> = () => (
  <Flex bg={WCGYHS_BG} color="white" flexDir="column" align="center">
    <WCGYHSTitle />

    {/* table */}
    <WCGYHSTable />

    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      my={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '18px' }}
    >
      例子：A客户11月份首次入金6,000美元，48小时内再入金4,000美元即达10000美元层级所以有10000美元待领赠金。在活动结算前完成了3000手，每手回赠5美元，但1万累计入金层级只有待领赠金10,000，因此整个活动A共得10,000回赠并在活动完结之后自动转变成现金可自由取出。
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
        py={3}
        bg={WCGYHS_TITLE_BOX_BG}
        border="1px"
        borderColor="white"
        borderRadius="5px"
        fontWeight={700}
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
        py={3}
        bg={WCGYHS_TITLE_BOX_BG}
        border="1px"
        borderColor="white"
        borderRadius="5px"
        fontWeight={700}
        fontSize="24px"
        lineHeight="42px"
        _hover={{
          opacity: 0.8,
          transition: '1s'
        }}
        href={links.userCenterZH}
        isExternal
      >
        立即开户
      </Link>
      <Box
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={3}
        bg={WCGYHS_TITLE_BOX_BG}
        border="1px"
        borderColor="white"
        borderRadius="5px"
        fontWeight={700}
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

export const WCGYHSTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    fontSize={{ base: '14px', md: '18px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
  >
    <Box
      fontWeight={700}
      fontSize={{ base: '20px', md: '28px' }}
      style={{ whiteSpace: 'nowrap' }}
    >
      2022年11月1日 – 2022年11月30日
    </Box>

    <Box
      borderRadius={{ base: '3px', md: '25px' }}
      bg={WCGYHS_TITLE_BOX_BG}
      color={WCGYHS_TITLE_FONT}
      border={'1px'}
      borderColor="white"
      my={5}
      px={5}
      py={3}
      fontSize={{ base: '12px', md: 'inherit' }}
    >
      客户11月内存入金额最低2000美元和交易量达4手起,
      即自动参加超级优惠不止双11活动!!!
    </Box>

    <Box
      width={{ base: '90vw', md: '760px' }}
      fontSize={{ base: '12px', md: '18px' }}
    >
      客户在活动期间存入2000美元或以上和交易量达4手，即自动参加本活动，客户11月内首次存入任何金额的48小时内累计达要求，即可按层级拥有待领赠金。每手交易每逄周一结算返回5美元(信用额)直到完结待领赠金或整个活动完结，已发放的回赠会自动转变成现金可自由取出。
    </Box>
  </Flex>
);

const WCGYHSTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    my={8}
    fontSize={{ base: '12px', md: '18px' }}
  >
    <StyledWCGYHSTable>
      <thead>
        <tr>
          <th>11月累计入金达</th>
          <th>待领赠金（美元）</th>
          <th>每手回赠</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2000</td>
          <td>2000</td>
          <td>5美元</td>
        </tr>
        <tr>
          <td>5000</td>
          <td>5000</td>
          <td>5美元</td>
        </tr>
        <tr>
          <td>10000</td>
          <td>10000</td>
          <td>5美元</td>
        </tr>
        <tr>
          <td>30000或以上</td>
          <td>30000</td>
          <td>5美元</td>
        </tr>
      </tbody>
    </StyledWCGYHSTable>
  </Box>
);

const StyledWCGYHSTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid white;
    padding: 10px;
    background-color: ${WCGYHS_TITLE_BOX_BG};
    color: white;
    text-align: center;
    white-space: nowrap;
  }

  th {
    color: ${WCGYHS_FONT_YELLOW};
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }
`;

const WCGYHSRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>
    <Box>
      1.
      客户在活动期间完成所属的入金交易手数要求(11月起开仓计算的已平仓单)，即可获得回赠。
    </Box>
    <Box>2. 回赠于交易后逄周一发放。</Box>
    <Box>
      3.
      客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
    </Box>
    <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>5. 于活动结束日(2022年11月30日)收市时间进行信用额转变现金结算。</Box>
    <Box>6. 本活动单一交易户口最高可获赠金30000美元。</Box>
    <Box>
      7.
      如未能完成交易要求手数，未领取的待领赠金信用额会于2022年12月1日自动扣回。
    </Box>
    <Box>
      8. WCG 将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      9.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>
      10. 客户成功入金2000美元或以上和交易量达4手之后自动可参加是次活动。
    </Box>
    <Box>
      11. 贵金属，原油交易手数定义; 黄金
      1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶。
    </Box>
    <Box>12. 外汇产品交易并不计算在本活动交易量。</Box>
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

export default WCGYHS;
