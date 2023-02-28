import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const WCGNSJ_BG = '#460c7c';
const WCGNSJ_FOOTER_BG = '#170e45';
const WCGNSJ_FONT_WHITE = 'white';
const WCGNSJ_TITLE_BOX_BG = '#572f9f';
const WCGNSJ_BUTTON_BOX_BG = '#d714a1';
const WCGNSJ_FONT_PINK = '#f9a3e4';

const WCGNSJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <WCGNSJBanner />

      <Flex bg={WCGNSJ_BG} color="white" flexDir="column" align="center">
        <WCGNSJDate />

        <WCGNSJContent />

        <WCGNSJButtons />
      </Flex>

      <WCGNSJRules />
    </>
  );
};

const WCGNSJBanner: React.FC<{}> = () => (
  <Flex
    minH={{ base: '320px', md: '600px' }}
    bg={WCGNSJ_BG}
    bgImage={{
      base: '/../assets/images/activity_WCGNSJ_M.jpg',
      md: '/../assets/images/activity_WCGNSJ.jpg'
    }}
    bgPosition="top center"
    bgSize="cover"
    bgRepeat="no-repeat"
  ></Flex>
);

const WCGNSJDate: React.FC<{}> = () => (
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
      bg={WCGNSJ_TITLE_BOX_BG}
      color={WCGNSJ_FONT_WHITE}
      border={'1px'}
      borderColor="white"
      my={5}
      px={5}
      py={2}
      fontSize={{ base: '12px', md: 'inherit' }}
    >
      2023年3月1日 – 2023年3月31日
    </Box>
  </Flex>
);

const WCGNSJContent: React.FC<{}> = () => (
  <>
    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mt={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '16px' }}
    >
      客户于3月内单次入金达380美元或以上，即可参加本活动。 <br />
      客户需于活动期间主动向官网在线客服申请。 <br />
      活动期间完成净入金(入金-出金=净入金)的1%交易量即可获得净入金的10%现金回赠。
      <br />
      回赠于活动结束一周内发放
      <br />
    </Box>

    <Box
      color={WCGNSJ_FONT_PINK}
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      my={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '16px' }}
    >
      例子:A客户3月6日入金10,000美元，3月10日获利出金500美元，3月14日向官网客服申请参加活动，
      <br />
      3月16日获利出金1500美元，活动结束时A客户净入金是8000美元(10000-500-1500=8000)
      <br />
      假如A客户于活动期间完成了80手交易量(8000 X 1% =
      80)，即可获得800美元现金(8000 X 10% = 800)
    </Box>
  </>
);

const WCGNSJButtons: React.FC<{}> = () => (
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
      bg={WCGNSJ_BUTTON_BOX_BG}
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
      bg={WCGNSJ_BUTTON_BOX_BG}
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
      bg={WCGNSJ_BUTTON_BOX_BG}
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
);

const WCGNSJRules: React.FC<{}> = () => (
  <Flex bg={WCGNSJ_FOOTER_BG} justify="center">
    <Stack
      my={'6em'}
      width={{ base: '90vw', md: '80vw' }}
      color={'white'}
      spacing={{ base: 1, md: 3 }}
      fontSize={{ base: '10px', md: '16px' }}
      textAlign={{ base: 'left', md: 'center' }}
    >
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活动规则及注意事项
      </Box>
      <Box>
        1.
        客户在活动期间完成所属的入金交易手数要求是3月起开仓计算的已平仓单，方计算于本活动的交易手数。
      </Box>
      <Box>2. 现金回赠于活动结束一周内发放。</Box>
      <Box>3. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>4. 单一交易户口最高可获赠金3800美元。</Box>
      <Box>
        5. WCG
        将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
        Markets发出的公布为准。
      </Box>
      <Box>
        6.
        所有异常交易包括通过超短线刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
      </Box>
      <Box>7. 客户成功入指定金额之后需于活动期间主动向官网在线客服申请。</Box>
      <Box>
        8. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
        1标准手2500盎司，原油1标准手1000桶。
      </Box>
      <Box>9. 外汇产品交易2标准手＝1手计算。</Box>
      <Box>
        10.
        高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
      </Box>
      <Box>11. 活动名额有限送完即止。</Box>
      <Box>
        12.
        公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
      </Box>
    </Stack>
  </Flex>
);

export default WCGNSJ;
