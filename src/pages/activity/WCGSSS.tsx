import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGSSS_BG_BLUE = '#021c4d';

const WCGSSS_FOOTER_BG = '#010b24';
const WCGSSS_FONT_YELLOW = '#ffe483';

const WCGSSS: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '300px', md: '710px' }}
        bg={WCGSSS_BG_BLUE}
        bgImage={{
          base: '/../assets/images/activity_WCGSSS_M.jpg',
          md: '/../assets/images/activity_WCGSSS.jpg'
        }}
        bgPosition="top center"
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGSSSContent />

      {/* rules */}
      <Flex bg={WCGSSS_FOOTER_BG} justify="center">
        <Stack
          my={10}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '12px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGSSSRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGSSSContent: React.FC<{}> = () => (
  <Flex bg={WCGSSS_BG_BLUE} color="white" flexDir="column" align="center">
    <WCGSSSTitle />

    {/* table */}
    <WCGSSSTable />

    <Stack width="90vw" py={10} textAlign="center">
      <Text>
        例子:A客户10月份入金10,000美元， 在活动结算时完成了150手，即比活动要求
      </Text>
      <Text>的1%高，所以可获13倍的交易回赠，即150x13=1950美元现金</Text>
    </Stack>

    <Flex justify="center" pt={5} pb={20}>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
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
        href={links.registerReal}
        isExternal
      >
        立即开户
      </Link>
      <Box
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        border="1px"
        borderColor="white"
        borderRadius="5px"
        fontWeight={700}
        fontSize="24px"
        lineHeight="42px"
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
  </Flex>
);

export const WCGSSSTitle: React.FC<{}> = () => (
  <Flex flexDir="column" p={2} my={5} fontSize="18px" textAlign="center">
    <Box fontWeight={700} fontSize="20px">
      2022年10月1日 – 2022年10月31日
    </Box>
    <Box
      border="1px"
      borderColor={WCGSSS_FONT_YELLOW}
      color={WCGSSS_FONT_YELLOW}
      bg="#ba01f5"
      p={3}
      borderRadius="25px"
      my={5}
    >
      客户10月内存入金额最低1000美元起，
      即可参加10月份交易手数10倍现金保底激赏大回馈！
    </Box>
    <Box>
      客户在活动期间存入1000美元或以上即可参加本活动，客户于活动期间交易手数达到入金的1%即可
    </Box>
    <Box>
      获得10倍交易手数的现金回馈到交易户口，奖励于2个工作天内发放。按入金量最高可有15倍回赠。
    </Box>
  </Flex>
);

const WCGSSSTable: React.FC<{}> = () => (
  <Box width={{ base: '90vw', md: '600px' }}>
    <StyledWCGSSSTable>
      <thead>
        <tr>
          <th>10月累计入金</th>
          <th>1%要求的交易量</th>
          <th>交易量的回赠倍数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1000~4999</td>
          <td>10~49</td>
          <td>10</td>
        </tr>
        <tr>
          <td>5000~9999</td>
          <td>50~99</td>
          <td>12</td>
        </tr>
        <tr>
          <td>10000~29999</td>
          <td>100~299</td>
          <td>13</td>
        </tr>
        <tr>
          <td>30000或以上</td>
          <td>300</td>
          <td>15</td>
        </tr>
      </tbody>
    </StyledWCGSSSTable>
  </Box>
);

const StyledWCGSSSTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid white;
    padding: 10px;
  }

  thead {
    color: ${WCGSSS_FONT_YELLOW};
    background-color: #0f3a89;
  }

  tbody {
    td {
      color: white;
      text-align: center;
      background-color: #0a2a67;
    }
  }
`;

const WCGSSSRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>
    <Box>
      1.
      客户在活动期间完成所属的入金交易手数要求(10月起开仓计算的已平仓单)，即可将信用额赠金转为现金。
    </Box>
    <Box>2. 奖励于活动结束后2个工作天内发放。</Box>
    <Box>
      3.
      客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
    </Box>
    <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>5. 交易手数于活动结束日(2022年10月31)收市时间进行结算。</Box>
    <Box>6. 单一交易户口最高可获赠金5000美元。</Box>
    <Box>7. 交易回赠的倍数按累计纯入金金额去按层计算。</Box>
    <Box>
      8. WCG 将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      9.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>10. 客户成功入金之后即可参加是次活动。</Box>
    <Box>
      11. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶。
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

export default WCGSSS;
