import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGEYS_BG = '#5925ad';
const WCGEYS_FOOTER_BG = '#8a0bf8';
const WCGEYS_FONT_WHITE = 'white';
const WCGEYS_TITLE_BOX_BG = '#9820d9';
const WCGEYS_BUTTON_BOX_BG = '#f737e2';
const WCGEYS_FONT_YELLOW = '#fff393';
const WCGEYS_TABLE_BG = '#9828e4';
const WCGEYS_TABLE_BG_LIGHT = '#f946ea';
const WCGEYS_TABLE_BG_DARK = '#781fdb';

const WCGEYS: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGEYS_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGEYS_M.jpg',
          md: '/../assets/images/activity_WCGEYS.jpg'
        }}
        bgPosition="top center"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGEYSContent />

      {/* rules */}
      <Flex bg={WCGEYS_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGEYSRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGEYSContent: React.FC<{}> = () => (
  <Flex bg={WCGEYS_BG} color="white" flexDir="column" align="center">
    <WCGEYSTitle />

    {/* table */}
    <WCGEYSTable />

    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mt={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '16px' }}
    >
      例子:A客户2月1号和2号分别入300和400美元，在2月3日入了500美元启动了本活动，由当天开始计算3个工作天，即2月7号前A客户的所有入金都计算于本活动内，所以A客户于2月6号和7号分别入了3000和1500美元。因此活动计算的共500+3000+1500=5000，已达3000层级但未到8000的，所以在2月8日A客户收到600美元交易奖金。而该交易奖金于活动结束日会自动扣除。
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
        px={1}
        bg={WCGEYS_BUTTON_BOX_BG}
        border="1px"
        borderColor="white"
        borderRadius="5px"
        fontWeight={900}
        fontSize="26px"
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
        px={1}
        bg={WCGEYS_BUTTON_BOX_BG}
        border="1px"
        borderColor="white"
        borderRadius="5px"
        fontWeight={900}
        fontSize="26px"
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
        px={1}
        bg={WCGEYS_BUTTON_BOX_BG}
        border="1px"
        borderColor="white"
        borderRadius="5px"
        fontWeight={900}
        fontSize="26px"
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

export const WCGEYSTitle: React.FC<{}> = () => (
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
      bg={WCGEYS_TITLE_BOX_BG}
      color={WCGEYS_FONT_WHITE}
      border={'1px'}
      borderColor="white"
      my={5}
      px={5}
      py={2}
      fontSize={{ base: '12px', md: 'inherit' }}
    >
      2023年2月1日 – 2023年2月28日
    </Box>

    <Box
      width={{ base: '90vw', md: '760px' }}
      fontSize={{ base: '12px', md: '16px' }}
    >
      活动期间首次入金单次满500美元(需主动向官网在线客服申请)始计算3个工作天内，累计净入金按层级回赠交易奖金于开始计算的第4个工作天发放。
    </Box>
  </Flex>
);

const WCGEYSTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    my={8}
    fontSize={{ base: '12px', md: '18px' }}
  >
    <StyledWCGEYSTable>
      <tbody>
        <tr>
          <th className="table_left_title">净入金金额 （美元）</th>
          <th className="table_right_title">回赠交易奖金（美元）</th>
        </tr>
        <tr>
          <td className="table_left_content">500</td>
          <td className="table_right_content">50</td>
        </tr>
        <tr>
          <td className="table_left_content">1500</td>
          <td className="table_right_content">225</td>
        </tr>
        <tr>
          <td className="table_left_content">3000</td>
          <td className="table_right_content">600</td>
        </tr>
        <tr>
          <td className="table_left_content">8000</td>
          <td className="table_right_content">2000</td>
        </tr>
        <tr>
          <td className="table_left_content">16000或以上</td>
          <td className="table_right_content">4800</td>
        </tr>
      </tbody>
    </StyledWCGEYSTable>
  </Box>
);

const StyledWCGEYSTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid ${WCGEYS_FONT_WHITE};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  .table_left_title {
    color: ${WCGEYS_FONT_YELLOW};
    background-color: ${WCGEYS_TABLE_BG};
  }

  .table_right_title {
    color: ${WCGEYS_FONT_YELLOW};
    background-color: ${WCGEYS_BUTTON_BOX_BG};
  }

  .table_left_content {
    color: ${WCGEYS_FONT_WHITE};
    background-color: ${WCGEYS_TABLE_BG_DARK};
  }

  .table_right_content {
    color: ${WCGEYS_FONT_YELLOW};
    background-color: ${WCGEYS_TABLE_BG_LIGHT};
  }
`;

const WCGEYSRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>
    <Box>1. 交易奖金等同于信用额只限交易之用不能取出。</Box>
    <Box>2. 客户成功单次入金满500美元方开始计算本活动。</Box>
    <Box>3. 参加活动需主动向官网在线客服申请。</Box>
    <Box>
      4.
      客户在活动期间内申请提取全部或部分资金将取消此活动资格，并实时取消所获赠金或交易奖金。
    </Box>
    <Box>
      5.
      如客户出金之后账户净值低于活动的入金金额会取消此活动资格并实时扣除交易奖金。
    </Box>
    <Box>6. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>
      7. 于活动结束日(2023年2月28日)收市之后自动扣除所有本活动发放的交易奖金。
    </Box>
    <Box>8. 本活动单一交易户口最高可获交易奖金4800美元。</Box>
    <Box>9. 交易奖金按净入金金额计算。</Box>
    <Box>
      10.
      如参加活动之后于2月期间出金超过活动的入金金额，本活动的交易奖金会被取消。
    </Box>
    <Box>
      11. WCG
      将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      12.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)，公司会终止本活动计划。
    </Box>
    <Box>
      13.
      客户需留意账户保证金风险，因为扣除交易奖金时会导致仓位变化，有可能引发系统自动平仓风险。
    </Box>
    <Box>
      14.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box>15. 活动名额有限送完即止。</Box>
    <Box>
      16.
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
    </Box>
  </>
);

export default WCGEYS;
