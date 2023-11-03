import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGCNHK_BG = '#E76F8A';
const WCGCNHK_FOOTER_BG = '#30604A';
const WCGCNHK_FONT_WHITE = 'white';
const WCGCNHK_TITLE_BOX_BG = '#FF2C5C';
const WCGCNHK_BUTTON_BOX_BG = '#5B9D46';
const WCGCNHK_FONT_YELLOW = '#FBF7AD';
const WCGCNHK_TABLE_BG_LEFT_TITLE = '#FF3873';
const WCGCNHK_TABLE_BG_RIGHT_TITLE = '#FF85AA';
const WCGCNHK_TABLE_BG_LEFT_CONTENT = '#FF2C5C';
const WCGCNHK_TABLE_BG_RIGHT_CONTENT = '#FF6889';

const WCGCNHK: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <WCGCNHKBanner />

      <Flex bg={WCGCNHK_BG} color="white" flexDir="column" align="center">
        <WCGCNHKDate />

        <WCGCNHKContent />

        <WCGCNHKButtons />
      </Flex>

      <WCGCNHKRules />
    </>
  );
};

const WCGCNHKBanner: React.FC<{}> = () => (
  <Flex
    minH={{ base: '320px', md: '600px' }}
    bg={WCGCNHK_BG}
    bgImage={{
      base: '/../assets/images/activity_WCGCNHK_M.jpg',
      md: '/../assets/images/activity_WCGCNHK.jpg'
    }}
    bgPosition="top center"
    bgSize="cover"
    bgRepeat="no-repeat"
  ></Flex>
);

const WCGCNHKDate: React.FC<{}> = () => (
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
      bg={WCGCNHK_TITLE_BOX_BG}
      color={WCGCNHK_FONT_WHITE}
      border={'1px'}
      borderColor="white"
      my={5}
      px={'80px'}
      py={3}
      fontSize={{ base: '12px', md: 'inherit' }}
    >
      2023年4月1日 – 2023年5月31日
    </Box>
  </Flex>
);

const WCGCNHKContent: React.FC<{}> = () => (
  <>
    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mt={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '16px' }}
    >
      • 新开户奖励：活动期间，凡通过我们的官方网站注册并完成实名认证的新客户，
      <br />
      并在首次入金500美元以上者，并进行任何金额的交易即可获得5美元现金奖励。
      <br />
      •
      每位新客户只能参与一次，奖励将在入金后3个工作日内发放到客户的交易账户中。
      <br />
      •
      现有客户入金回赠(需自行主动向官方客服申请)：活动期间，凡单笔入金2000美元以上者，
      <br />
      即可享受交易赠金。交易赠金比例按照入金额度分级，具体如下：
      <br />
    </Box>

    <WCGCNHKTable />

    <Box
      color={WCGCNHK_FONT_WHITE}
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      my={5}
      textAlign="center"
      fontSize={{ base: '10px', md: '14px' }}
    >
      交易赠金每日按入金额度结算一次，交易赠金的发放按结算后的第一个工作天处理。
      <br />
      现金奖励将按照客户的交易量逐步发放，每交易1手cfd合约即可解锁1美元交易赠金转成现金奖励。
      <br />
      有效期为2023年4月1日至5月31日
    </Box>
  </>
);

const WCGCNHKTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    my={8}
    fontSize={{ base: '12px', md: '18px' }}
  >
    <StyledWCGCNHKTable>
      <tbody>
        <tr>
          <th className="table_left_title">入金额度（美元）</th>
          <th className="table_right_title">交易赠金比例 </th>
        </tr>
        <tr>
          <td className="table_left_content">2000 - 4999</td>
          <td className="table_right_content">350</td>
        </tr>
        <tr>
          <td className="table_left_content">5000 - 9999</td>
          <td className="table_right_content">1200</td>
        </tr>
        <tr>
          <td className="table_left_content">10000 - 49999</td>
          <td className="table_right_content">3000</td>
        </tr>
        <tr>
          <td className="table_left_content">50000及以上</td>
          <td className="table_right_content">10000</td>
        </tr>
      </tbody>
    </StyledWCGCNHKTable>
  </Box>
);

const StyledWCGCNHKTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid ${WCGCNHK_FONT_WHITE};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  .table_left_title {
    color: ${WCGCNHK_FONT_YELLOW};
    background-color: ${WCGCNHK_TABLE_BG_LEFT_TITLE};
  }

  .table_right_title {
    color: ${WCGCNHK_FONT_YELLOW};
    background-color: ${WCGCNHK_TABLE_BG_RIGHT_TITLE};
  }

  .table_left_content {
    color: ${WCGCNHK_FONT_WHITE};
    background-color: ${WCGCNHK_TABLE_BG_LEFT_CONTENT};
  }

  .table_right_content {
    color: ${WCGCNHK_FONT_YELLOW};
    background-color: ${WCGCNHK_TABLE_BG_RIGHT_CONTENT};
  }
`;

const WCGCNHKButtons: React.FC<{}> = () => (
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
      width="30vw"
      maxW="200px"
      textAlign="center"
      mx={2}
      px={1}
      bg={WCGCNHK_BUTTON_BOX_BG}
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
      bg={WCGCNHK_BUTTON_BOX_BG}
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
      px={1}
      bg={WCGCNHK_BUTTON_BOX_BG}
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

const WCGCNHKRules: React.FC<{}> = () => (
  <Flex bg={WCGCNHK_FOOTER_BG} justify="center">
    <Stack
      my={'6em'}
      width={{ base: '90vw', md: '80vw' }}
      color={'white'}
      spacing={{ base: 1, md: 3 }}
      fontSize={{ base: '10px', md: '14px' }}
      textAlign={{ base: 'center', md: 'center' }}
    >
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活动规则及注意事项
      </Box>
      <Box>1. 交易赠金等同于信用额只限交易之用不能取出。</Box>
      <Box>2. 未能转变成现金奖励的交易赠金于活动结束日会自动扣除。</Box>
      <Box>3. 客户需自行主动向官方客服申请方会参加本活动。</Box>
      <Box>
        4. 于活动结束日(2023年5月31日)收市之后自动扣除所有本活动发放的交易赠金。
      </Box>
      <Box>
        5.
        客户而自行注意交易户口中信用额的变化，这可能引起保证金的变化，有机会导致强制平仓的风险。
      </Box>
      <Box>
        6.
        客户在活动期间内申请提取全部或部分资金将取消此活动资格,并实时取消所获金奖励或交易赠金。
      </Box>
      <Box>
        7.
        如客户出金之后账户净值低于活动的交易赠金比例入金金额要求会取消此活动资格并实时扣除交易奖金。
      </Box>
      <Box>
        8.
        如参加活动之后于活动期间出金超过活动的入金金额，本活动的交易奖金会被取消。
      </Box>
      <Box>
        9.
        客户在活动期间完成所属的入金和交易手数要求是4月起开仓计算的已平仓单,方计算于本活动的交易手数。
      </Box>
      <Box>10. 现金奖励于活动结束一周内发放。</Box>
      <Box>11. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>12. 单一交易户口最高可获赠金20000美元。</Box>
      <Box>
        13. WCG
        将保留权利随时修改或终止此促销活动,任何修改或终止活动的通知将以WCG
        Markets发出的公布为准。
      </Box>
      <Box>
        14.
        所有异常交易包括通过超短线刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
      </Box>
      <Box>15. 客户成功入指定金额之后需于活动期间主动向官网在线客服申请 。</Box>
      <Box>
        16. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
        1标准手2500盎司，原油1标准手1000桶。
      </Box>
      <Box>17. 外汇产品交易2标准手＝1手计算。</Box>
      <Box>
        18.
        高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
      </Box>
      <Box>19. 活动名额有限送完即止。</Box>
      <Box>
        20.
        公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
      </Box>
    </Stack>
  </Flex>
);

export default WCGCNHK;
