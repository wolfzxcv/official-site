import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGBY_BG_RED = '#fc403b';
const WCGBY_BG_BROWN = '#4f0713';
const WCGBY_FONT_YELLOW = '#faeca5';

const WCGBY: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGBY_BG_RED}
        bgImage={{
          base: "url('../assets/images/activity_WCGBY_M.jpg')",
          md: '../assets/images/activity_WCGBY.jpg'
        }}
        bgPosition="top center"
        bgSize={{ base: 'cover', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGBYContent />

      {/* rules */}
      <Flex fontSize="8px" bg="#4f0713" justify="center">
        <Stack
          my={10}
          width="90vw"
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '12px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGBYRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGBYContent: React.FC<{}> = () => (
  <Flex bg={WCGBY_BG_RED} color="white" flexDir="column" align="center">
    <Flex justify="center" pt={5} pb={10}>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        py={3}
        mx={2}
        borderRadius="10px"
        bg={WCGBY_BG_BROWN}
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
        py={3}
        mx={2}
        borderRadius="10px"
        bg={WCGBY_BG_BROWN}
        _hover={{
          opacity: 0.8,
          transition: '1s'
        }}
        href={process.env.NEXT_PUBLIC_USERS_CENTER_ZH}
        isExternal
      >
        立即开户
      </Link>
      <Box
        width="30vw"
        maxW="200px"
        textAlign="center"
        py={3}
        mx={2}
        borderRadius="10px"
        bg={WCGBY_BG_BROWN}
        _hover={{
          opacity: 0.8,
          transition: '1s',
          cursor: 'pointer'
        }}
        onClick={openChatWindow}
      >
        在线客服
      </Box>
    </Flex>

    <WCGBYTitle />

    {/* table */}
    <WCGBYTable />

    <Stack width="90vw" pt={10} pb={20} textAlign="center">
      <Text>
        例子:A客户8月份首次入金10,000美元，即可获得入金的15%信用额就是
      </Text>
      <Text>1500美元信用额，只要客户在8 月内完成赠金金额除以5的交易手数。</Text>
      <Text>1500/5=300手即可将信用额赠金转为现金自由出金</Text>
    </Stack>
  </Flex>
);

export const WCGBYTitle: React.FC<{}> = () => (
  <>
    <Box
      border="1px"
      borderColor={WCGBY_FONT_YELLOW}
      borderRadius="20px"
      bg="red"
      color={WCGBY_FONT_YELLOW}
      p={2}
      fontSize="18px"
      textAlign="center"
    >
      2022年8月1日 – 2022年8月31日
    </Box>

    <Box pt={5} pb={10} fontSize="18px" width="90vw" textAlign="center">
      客户8月内首次存入任何金额，即可获得高达入金15%的交易赠金大红包
    </Box>
  </>
);

const WCGBYTable: React.FC<{}> = () => (
  <Box width={{ base: '90vw', md: '600px' }}>
    <StyledWCGBYTable>
      <thead>
        <tr>
          <th>入金金额（美元）</th>
          <th>赠金金额（美元）</th>
          <th>完成交易手数可提取</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$300~$5000</td>
          <td>入金的5%</td>
          <td>赠金金额除以5</td>
        </tr>
        <tr>
          <td>$5001~$9999</td>
          <td>入金的10%</td>
          <td>赠金金额除以5</td>
        </tr>
        <tr>
          <td>$10,000以上</td>
          <td>入金的15%</td>
          <td>赠金金额除以5</td>
        </tr>
      </tbody>
    </StyledWCGBYTable>
  </Box>
);

const StyledWCGBYTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid ${WCGBY_FONT_YELLOW};
    padding: 10px;
  }

  thead {
    color: ${WCGBY_FONT_YELLOW};
    background-color: red;
  }

  tbody {
    td {
      color: white;
      text-align: center;
    }
  }
`;

const WCGBYRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" color={WCGBY_BG_BROWN} fontWeight="bold">
      ·活动规则及注意事项
    </Box>

    <Box>
      1. 客户在活动期间完成所属的入金交易手数要求，即可将信用额赠金转为现金。
    </Box>
    <Box>2. 信用额于入金后2个工作天内发放。</Box>
    <Box>
      3.
      客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
    </Box>
    <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>5. 单一交易户口最高可获赠金3000美元。</Box>
    <Box>6. 如未能完成交易要求手数，信用额会于2022年9月1日自动扣回。</Box>
    <Box>
      7. WCG 将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      8.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>9. 客户成功入金之后自动可参加是次活动。</Box>
    <Box>
      10. 贵金属，原油交易手数定义; 黄金
      1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶。
    </Box>
    <Box>
      11.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
  </>
);

export default WCGBY;
