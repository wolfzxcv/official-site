import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGFY_BG_RED = '#530b0f';
const WCGFY_BG_BROWN = '#500410';
const WCGFY_FT_RED = '#650717';
const WCGFY_FONT_YELLOW = '#fcd35f';
const WCGFY_BUTTON = '#a60000';

const WCGFY: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGFY_BG_RED}
        bgImage={{
          base: '/../assets/images/activity_WCGFY_M.jpg',
          md: '/../assets/images/activity_WCGFY.jpg'
        }}
        bgPosition="top center"
        bgSize={{ base: 'cover', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGFYContent />

      {/* rules */}
      <Flex fontSize="8px" bg={WCGFY_FT_RED} justify="center">
        <Stack
          my={10}
          width="90vw"
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '12px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGFYRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGFYContent: React.FC<{}> = () => (
  // color=
  <Flex bg={WCGFY_BG_BROWN} color="white" flexDir="column" align="center">
    <WCGFYTitle />

    {/* table */}
    <WCGFYTable />

    <Stack width="90vw" maxW="1000px" pt={10} pb={10} textAlign="center">
      <Text>
        例子:盈富客户首次入金6,000美元，48小时内再入金4,000美元即达10000美元。每手交易可回赠3美元，在活动结算前完成了100手，活动二总共获得300美元回赠，加上活动一获取赠金50美元，盈富客户尊享额外回赠共350美元。另加上本身[WCG超级优惠不止双11]活动中每手回赠5美元，可获取的500美元，盈富客户在11月共取得850美元可自由取出。
      </Text>
    </Stack>

    <Flex justify="center" pt={5} pb={10} pl={5} pr={5}>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={3}
        bg={WCGFY_BUTTON}
        border="1px"
        borderColor={WCGFY_FONT_YELLOW}
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
        bg={WCGFY_BUTTON}
        border="1px"
        borderColor={WCGFY_FONT_YELLOW}
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
        bg={WCGFY_BUTTON}
        border="1px"
        borderColor={WCGFY_FONT_YELLOW}
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

export const WCGFYTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    fontSize={{ base: '14px', md: '18px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
  >
    <Text
      fontWeight={700}
      fontSize={{ base: '16px', md: '20px' }}
      style={{ whiteSpace: 'nowrap' }}
    >
      活动时间：由2022年10月24日至 2022年11月30日
    </Text>
    <Box
      borderRadius="25px"
      bg={WCGFY_FONT_YELLOW}
      color={WCGFY_BG_RED}
      fontWeight={600}
      my={10}
      px={5}
      py={3}
      fontSize={{ base: '16px', md: 'inherit' }}
      style={{ whiteSpace: 'nowrap' }}
    >
      活动可与[WCG超级优惠不止双11]活动重迭
    </Box>

    <Box>活动一：酷极客户成功转移帐后只需要完成交易一手即可获取赠金50美元</Box>

    <Box>
      活动二：酷极客户在活动期间存入金额2000美元或以上，即自动参加本活动!!!
    </Box>

    <Box>
      客户在活动期间内首次存入任何金额的48小时内累计达要求，即可按层级交易手数回赠。每手回赠每逄周一结算。一经发放已等同现金可自由取出。
    </Box>
  </Flex>
);

const WCGFYTable: React.FC<{}> = () => (
  <Box width={{ base: '90vw', md: '600px' }} my={10}>
    <StyledWCGFYTable>
      <thead>
        <tr>
          <th>11月累计入金达</th>
          <th>每手回赠</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2000</td>
          <td>2美元</td>
        </tr>
        <tr>
          <td>10,000或以上</td>
          <td>3美元</td>
        </tr>
      </tbody>
    </StyledWCGFYTable>
  </Box>
);

const StyledWCGFYTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    color: ${WCGFY_FONT_YELLOW};
    border: 1px solid ${WCGFY_FONT_YELLOW};
    padding: 10px;
    width: 50%;
  }

  thead {
    color: ${WCGFY_FONT_YELLOW};
    background-color: ${WCGFY_FT_RED};
  }

  tbody {
    td {
      color: white;
      text-align: center;
      background-color: ${WCGFY_FT_RED};
    }
  }
`;

const WCGFYRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>

    <Box>
      1.
      盈富客户在活动期间完成所属的入金交易手数要求(转移帐户后开仓计算的已平仓单),即可获得回赠.
    </Box>
    <Box>2. 回赠于交易后逄周一发放。</Box>
    <Box>3. 盈富客户在活动期间内申请提取资金将取消此活动资格。</Box>
    <Box>4. 每位盈富客户只可使用一个账号参加此活动一次。</Box>
    <Box>5. 活动结束日(2022年11月30日)。</Box>
    <Box>6. 本活动单一交易户口最高可获回赠10000美元。</Box>
    <Box>7. 只限盈富客户参加。</Box>
    <Box>
      8. WCG 将保留权利随时修改或终止此促销活动,任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      9.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>
      10. 客户成功入金2000美元或以上和交易量达4手之后自动可参加是次活动。
    </Box>
    <Box>
      11. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶。
    </Box>
    <Box>12. 外汇产品交易并不计算在本活动交易量。</Box>
    <Box>
      13.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box>14. 活动名额有限送完即止</Box>
    <Box>
      15.
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户
    </Box>
  </>
);

export default WCGFY;
