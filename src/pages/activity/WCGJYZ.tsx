import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGJYZ_BG = '#142B55';
const WCGJYZ_FOOTER_BG = '#2E0F48';
const WCGJYZ_FONT_WHITE = 'white';
const WCGJYZ_FONT_ORANGE = '#FBCC3E';
const WCGJYZ_FONT_YELLOW = '#FBF7AD';
const WCGJYZ_BUTTON_BOX_BG = '#4A2EFF';
const WCGJYZ_TABLE_BG_LEFT_TITLE = '#9918BD';
const WCGJYZ_TABLE_BG_RIGHT_TITLE = '#7425CE';
const WCGJYZ_TABLE_BG_LEFT_CONTENT = '#7812A4';
const WCGJYZ_TABLE_BG_RIGHT_CONTENT = '#5B1EBA';

const WCGJYZ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <WCGJYZBanner />

      <Flex bg={WCGJYZ_BG} color="white" flexDir="column" align="center">
        <WCGJYZDate />

        <WCGJYZContent />

        <WCGJYZButtons />
      </Flex>

      <WCGJYZRules />
    </>
  );
};

const WCGJYZBanner: React.FC<{}> = () => (
  <Flex
    minH={{ base: '320px', md: '600px' }}
    bg={WCGJYZ_BG}
    bgImage={{
      base: '/../assets/images/activity_WCGJYZ_M.jpg',
      md: '/../assets/images/activity_WCGJYZ.jpg'
    }}
    bgPosition="top center"
    bgSize="cover"
    bgRepeat="no-repeat"
  ></Flex>
);

const WCGJYZDate: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    px={{ base: 5, md: 0 }}
    fontSize={{ base: '12px', md: '18px' }}
    width={{ base: '100%', md: 'auto' }}
    textAlign="center"
    align="center"
  >
    <Box
      width="inherit"
      borderRadius={{ base: '20px', md: '25px' }}
      bg={WCGJYZ_BG}
      color={WCGJYZ_FONT_WHITE}
      border={'1px'}
      borderColor="white"
      my={5}
      px={'80px'}
      py={3}
      fontSize={{ base: '12px', md: 'inherit' }}
    >
      2023年7月1日至2023年7月31日
    </Box>
  </Flex>
);

const WCGJYZContent: React.FC<{}> = () => (
  <>
    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mt={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '16px' }}
    >
      活动对象：所有在WCG MARKETS开设真实账户并进行交易的客户
      <br />
      <Box my={2} color={WCGJYZ_FONT_ORANGE}>
        参加条件:
      </Box>
      [交易赠金]需主动到官网向在线客服申请
      <br />
      [邀请好友]需主动到官网向在线客服申请，达到要求之后现金奖励会自动发放
      <br />
      交易赠金活动规则：
      客户在活动期间入金一定金额，就可以获得相应比例的交易赠金。
    </Box>

    <WCGJYZTable />

    <Box
      color={WCGJYZ_FONT_WHITE}
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      my={5}
      textAlign="center"
      fontSize={{ base: '10px', md: '14px' }}
    >
      交易赠金最高不超过4000美元，并且只能用于交易，不能提现。交易赠金于入金成功3个工作天内发放，有效期为活动结束之前，交易赠金发放之后如申請任何金額的出金，交易赠金資格将被取消，已存的交易赠金将被扣除。在有效期结束则交易赠金将被扣除。
      <br />
      <Box>注意户口扣除交易赠金会引起保证金比率变动会导致强制平仓的风险</Box>
      <Flex justify="center" my={10}>
        <Image src="/../assets/images/activity_WCGJYZ_01.png" alt="icon" />
      </Flex>
      <br />
      <b>邀请好友：</b>
      客户在活动期间邀请好友开设真实账户进行一手交易並向在線客申報，就可以获得相应的现金奖励。
      <br />
      <Box my={2} color={WCGJYZ_FONT_ORANGE}>
        具体如下：
      </Box>
      邀请一位好友，双方各获得10美元现金奖励在好友开设账户并完成至少进行一手交易方可计算在本活动中。
      <br />
      现金奖励将活动结束的3个工作天内发放。
      <br />
      现金奖励可以随时提现。
    </Box>
  </>
);

const WCGJYZTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    my={8}
    fontSize={{ base: '12px', md: '18px' }}
  >
    <StyledWCGJYZTable>
      <tbody>
        <tr>
          <th className="table_left_title">单次入金</th>
          <th className="table_right_title">交易赠金</th>
        </tr>
        <tr>
          <td className="table_left_content">1000美元以上</td>
          <td className="table_right_content">获得5%交易赠金</td>
        </tr>
        <tr>
          <td className="table_left_content">5000美元以上</td>
          <td className="table_right_content">获得10%交易赠金</td>
        </tr>
        <tr>
          <td className="table_left_content">10000美元以上</td>
          <td className="table_right_content">获得15%交易赠金 </td>
        </tr>
      </tbody>
    </StyledWCGJYZTable>
  </Box>
);

const StyledWCGJYZTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid ${WCGJYZ_FONT_WHITE};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  .table_left_title {
    color: ${WCGJYZ_FONT_YELLOW};
    background-color: ${WCGJYZ_TABLE_BG_LEFT_TITLE};
  }

  .table_right_title {
    color: ${WCGJYZ_FONT_YELLOW};
    background-color: ${WCGJYZ_TABLE_BG_RIGHT_TITLE};
  }

  .table_left_content {
    color: ${WCGJYZ_FONT_WHITE};
    background-color: ${WCGJYZ_TABLE_BG_LEFT_CONTENT};
  }

  .table_right_content {
    color: ${WCGJYZ_FONT_YELLOW};
    background-color: ${WCGJYZ_TABLE_BG_RIGHT_CONTENT};
  }
`;

const WCGJYZButtons: React.FC<{}> = () => (
  <Flex
    justify="center"
    my={10}
    pb={10}
    alignItems="center"
    textAlign="center"
    height={{ base: '40px', md: '60px' }}
    fontSize={{ base: '24px', md: '36px' }}
  >
    <Link
      width="27vw"
      maxW="200px"
      textAlign="center"
      mx={2}
      px={1}
      bg={WCGJYZ_BUTTON_BOX_BG}
      border="1px"
      borderColor="white"
      borderRadius="5px"
      fontWeight={900}
      fontSize="22px"
      lineHeight="32px"
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
      width="27vw"
      maxW="200px"
      textAlign="center"
      mx={2}
      px={1}
      bg={WCGJYZ_BUTTON_BOX_BG}
      border="1px"
      borderColor="white"
      borderRadius="5px"
      fontWeight={900}
      fontSize="22px"
      lineHeight="32px"
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
      width="27vw"
      maxW="200px"
      textAlign="center"
      mx={2}
      px={1}
      bg={WCGJYZ_BUTTON_BOX_BG}
      border="1px"
      borderColor="white"
      borderRadius="5px"
      fontWeight={900}
      fontSize="22px"
      lineHeight="32px"
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
);

const WCGJYZRules: React.FC<{}> = () => (
  <Flex bg={WCGJYZ_FOOTER_BG} justify="center">
    <Stack
      my={'6em'}
      width={{ base: '90vw', md: '80vw' }}
      color={'white'}
      spacing={{ base: 1, md: 3 }}
      fontSize={{ base: '10px', md: '14px' }}
      textAlign={{ base: 'center', md: 'center' }}
    >
      <Box textAlign="center" fontWeight="bold" mb={2}>
        活动声明：
      </Box>
      <Box>1. 交易赠金等同于信用额只限交易之用不能取出。</Box>
      <Box>2. 客户需自行主动向官方客服申请方会参加本次的活动。</Box>
      <Box>
        3. 于活动结束日(2023年7月31日)收市之后自动扣除所有本活动发放的交易赠金。
      </Box>
      <Box>
        4.
        客户而自行注意交易户口中信用额的变化，这可能引起保证金的变化，有机会导致强制平仓的风险。
      </Box>
      <Box>
        5.
        客户在活动期间内申请提取任何资金将取消此活动资格，并实时取消所交易赠金。
      </Box>
      <Box>
        6.
        如客户出金之后账户净值低于活动的交易赠金金额会取消此活动资格并实时扣除交易赠金。
      </Box>
      <Box>
        7.
        如参加活动之后于活动期间出金超过活动的入金金额，本活动的交易奖金会被取消。
      </Box>
      <Box>
        8.
        客户在活动期间完成所属的入金和交易手数要求是7月起开仓计算的已平仓单，方计算于本活动的交易手数。
      </Box>
      <Box>
        9. WCG MARKETS保留对本活动的最终解释权，并有权随时修改或终止本活动。
      </Box>
      <Box>10. WCG MARKETS不承担任何因本活动而引起的法律责任或争议。</Box>
      <Box>
        11. 所有参与本活动的客户必须遵守WCG MARKETS的服务条款和风险披露声明。
      </Box>
      <Box>12. 所有交易均涉及风险，您的损失可能大于您的入金。</Box>
      <Box>13. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>
        14. WCG
        将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
        MARKETS发出的公布为准。
      </Box>
      <Box>
        15.
        所有异常交易包括通过超短线刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
      </Box>
      <Box>16. 客户成功入指定金额之后需于活动期间主动向官网在线客服申请。</Box>
      <Box>
        17.
        贵金属，原油交易手数定义;黄金1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶。
      </Box>
      <Box>18. 外汇产品交易2标准手=1手计算。</Box>
      <Box>
        19.
        活高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
      </Box>
      <Box>20. 活动名额有限送完即止。</Box>
      <Box>
        21.
        公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
      </Box>
    </Stack>
  </Flex>
);

export default WCGJYZ;
