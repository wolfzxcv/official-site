import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGZQC_BG = '#2a1759';
const WCGZQC_TABLE_BG_RED = '#f63536';
const WCGZQC_TABLE_BG_LIGHT_BLUE = '#2a419f';
const WCGZQC_TABLE_BG_DARK_BLUE = '#0c2076';
const WCGZQC_TITLE_FONT = 'white';
const WCGZQC_FOOTER_BG = '#285185';
const WCGZQC_FONT_YELLOW = '#efd377';

const WCGZQC: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGZQC_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGZQC_M.jpg',
          md: '/../assets/images/activity_WCGZQC.jpg'
        }}
        bgPosition="top center"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGZQCContent />

      {/* rules */}
      <Flex bg={WCGZQC_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGZQCRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGZQCContent: React.FC<{}> = () => (
  <Flex bg={WCGZQC_BG} color="white" flexDir="column" align="center">
    <WCGZQCTitle />

    {/* table */}
    <WCGZQCTable />

    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      my={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '16px' }}
    >
      <Text>
        例子:A客户活动期间首次入金10,000美元，24小时内再入金10,000美元，由首充起24小时内共入金20,000美元，即可获得入金的20%信用额就是4000美元信用额，只要客户在9月内完成赠金金额除以5的交易手数。
      </Text>
      <Text>4000/5=800手即可将信用额赠金转为现金自由出金</Text>
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
        bg={WCGZQC_TABLE_BG_LIGHT_BLUE}
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
        bg={WCGZQC_TABLE_BG_LIGHT_BLUE}
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
        bg={WCGZQC_TABLE_BG_LIGHT_BLUE}
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

export const WCGZQCTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    fontSize={{ base: '14px', md: '20px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
  >
    <Box
      border="1px"
      borderColor={WCGZQC_TITLE_FONT}
      borderRadius="20px"
      bg={WCGZQC_TABLE_BG_LIGHT_BLUE}
      color={WCGZQC_TITLE_FONT}
      py={2}
      px="50px"
      mb={10}
      fontSize={{ base: '14px', md: '22px' }}
      textAlign="center"
    >
      2023年9月11日 – 2023年10月10日
    </Box>

    <Box width={{ base: '90vw', md: 'fit-content' }} color={WCGZQC_FONT_YELLOW}>
      <Text>中秋团圆入金超回赠20%!!</Text>
    </Box>

    <Box width={{ base: '90vw', md: 'fit-content' }}>
      客户活动期间内首次存入任何金额的24小时内，即可获得高达入金20%的交易赠金大红包!
    </Box>
  </Flex>
);

const WCGZQCTable: React.FC<{}> = () => (
  <Box
    width={{ base: '95vw', md: '800px' }}
    my={8}
    fontSize={{ base: '10px', md: '18px' }}
  >
    <StyledWCGZQCTable>
      <thead>
        <tr>
          <th>入金金额 （美元）</th>
          <th>赠金金额（美元）</th>
          <th>完成交易手数可提取</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$350~$2999</td>
          <td>入金的5%</td>
          <td>赠金金额除以5</td>
        </tr>
        <tr>
          <td>$3000~$9999</td>
          <td>入金的10%</td>
          <td>赠金金额除以5</td>
        </tr>
        <tr>
          <td>$10000~$19999</td>
          <td>入金的15%</td>
          <td>赠金金额除以5</td>
        </tr>
        <tr>
          <td>$20000以上</td>
          <td>入金的20%</td>
          <td>赠金金额除以5</td>
        </tr>
      </tbody>
    </StyledWCGZQCTable>
  </Box>
);

const StyledWCGZQCTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid ${WCGZQC_TITLE_FONT};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  tr {
    color: white;
    td:first-child {
      background-color: ${WCGZQC_TABLE_BG_LIGHT_BLUE};
    }
    td:not(:first-child) {
      color: ${WCGZQC_FONT_YELLOW};
    }
  }

  th {
    background-color: ${WCGZQC_TABLE_BG_DARK_BLUE};
    color: ${WCGZQC_TITLE_FONT};
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }

  td {
    background-color: ${WCGZQC_TABLE_BG_RED};
  }
`;

const WCGZQCRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>
    <Box>
      1.
      客户在活动期间完成所属的入金交易手数要求(活动期间起开仓计算的已平仓单)，即可将信用额赠金转为现金。
    </Box>
    <Box>2. 信用额于入金后2个工作天内发放。</Box>
    <Box>
      3.
      客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
    </Box>
    <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>5. 单一交易户口最高可获赠金4000美元。</Box>
    <Box>6. 如未能完成交易要求手数，信用额会于2023年10月11日自动扣回。</Box>
    <Box>
      7. WCG 将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      8.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>9. 客户需主动向官方在线客服申请参加活动。</Box>
    <Box>
      10. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶。
    </Box>
    <Box>
      11.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box>12. 活动名额有限送完即止。</Box>
    <Box>
      13.
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
    </Box>
  </>
);

export default WCGZQC;
