import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGZQJ_BG_BROWN = '#801a15';

const WCGZQJ_FOOTER_BG = '#6b130f';
const WCGZQJ_FONT_YELLOW = '#dbd1ae';

const WCGZQJ_BUTTON = '#c44139';

const WCGZQJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '600px', md: '710px' }}
        bg={WCGZQJ_BG_BROWN}
        bgImage={{
          base: '/../assets/images/activity_WCGZQJ_M.jpg',
          md: '/../assets/images/activity_WCGZQJ.jpg'
        }}
        bgPosition="top center"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGZQJContent />

      {/* rules */}
      <Flex bg={WCGZQJ_FOOTER_BG} justify="center">
        <Stack
          my={10}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '12px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGZQJRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGZQJContent: React.FC<{}> = () => (
  <Flex bg={WCGZQJ_BG_BROWN} color="white" flexDir="column" align="center">
    <WCGZQJTitle />

    {/* table */}
    <WCGZQJTable />

    <Stack width="90vw" py={10} textAlign="center" color={WCGZQJ_FONT_YELLOW}>
      <Text>
        例子：A客户9月份首次入金10,000美元，24小时内再入金10,000美元，由首充起
      </Text>
      <Text>24小时内共入金20,000美元，即可获得入金的20%信用额就是</Text>
      <Text>4000美元信用额，只要客户在 9月内完成赠金金额除以5的交易手数。</Text>
      <Text>4000/5=800手即可将信用额赠金转为现金自由出金。</Text>
    </Stack>

    <Flex justify="center" pt={5} pb={10}>
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        py={3}
        mx={2}
        bg={WCGZQJ_BUTTON}
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
        bg={WCGZQJ_BUTTON}
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
        py={3}
        mx={2}
        bg={WCGZQJ_BUTTON}
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

export const WCGZQJTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    border="1px"
    borderColor={WCGZQJ_FONT_YELLOW}
    bg="#961b14"
    p={2}
    my={10}
    fontSize="18px"
    textAlign="center"
  >
    <Box>客户九月内首次存入任何金额的二十四小时内</Box>
    <Box>即可获得高达入金20%的交易赠金大红包！</Box>
  </Flex>
);

const WCGZQJTable: React.FC<{}> = () => (
  <Box width={{ base: '90vw', md: '600px' }}>
    <StyledWCGZQJTable>
      <thead>
        <tr>
          <th>入金金额（美元）</th>
          <th>赠金金额（美元）</th>
          <th>完成交易手数可提取</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$300~$2999</td>
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
    </StyledWCGZQJTable>
  </Box>
);

const StyledWCGZQJTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid ${WCGZQJ_FONT_YELLOW};
    padding: 10px;
  }

  thead {
    color: ${WCGZQJ_FONT_YELLOW};
    background-color: ${WCGZQJ_BG_BROWN};
  }

  tbody {
    td {
      color: white;
      text-align: center;
      background-color: #87211c;
    }
  }
`;

const WCGZQJRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" color={WCGZQJ_FONT_YELLOW} fontWeight="bold">
      ·活动规则及注意事项
    </Box>
    <Box>
      1.
      客户在活动期间完成所属的入金交易手数要求(9月起开仓计算的已平仓单)，即可将信用额赠金转为现金。
    </Box>
    <Box>2. 信用额于入金后2个工作天内发放。</Box>
    <Box>
      3.
      客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
    </Box>
    <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>5. 单一交易户口最高可获赠金4000美元。</Box>
    <Box>6. 如未能完成交易要求手数，信用额会于2022年10月1日自动扣回。</Box>
    <Box>
      7. WCG 将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      8.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>9. 客户成功入金之后自动可参加本次活动。</Box>
    <Box>
      10. 贵金属，原油交易手数定义; 黄金
      1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶。
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

export default WCGZQJ;
