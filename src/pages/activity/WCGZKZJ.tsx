import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGZKZJ_BG = '#ad7930';
const WCGZKZJ_TABLE_BG = '#885816';
const WCGZKZJ_TABLE_BG_LIGHT = '#976623';
const WCGZKZJ_TITLE_FONT = 'white';
const WCGZKZJ_TITLE_BOX_BG = '#e32527';
const WCGZKZJ_FOOTER_BG = '#ab0a0f';
const WCGZKZJ_FONT_YELLOW = '#fff6a0';

const WCGZKZJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGZKZJ_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGZKZJ_M.jpg',
          md: '/../assets/images/activity_WCGZKZJ.jpg'
        }}
        bgPosition="top center"
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGZKZJContent />

      {/* rules */}
      <Flex bg={WCGZKZJ_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGZKZJRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGZKZJContent: React.FC<{}> = () => (
  <Flex bg={WCGZKZJ_BG} color="white" flexDir="column" align="center">
    <WCGZKZJTitle />

    {/* table */}
    <WCGZKZJTable />

    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mt={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '18px' }}
    >
      1.开户奖： 客户开户后，完成一手交易可获取50美元交易金，有效期为30天。
    </Box>

    <Box
      width={{ base: '350px', md: '800px' }}
      maxW="800px"
      mb={5}
      textAlign="center"
      fontSize={{ base: '12px', md: '18px' }}
    >
      2.首存赠金：活动期间，客户完成开户且首存金额300美元或以上，即可获得赠金，最高可达1500美元。本次活动赠金的交易手数统计时间，即交易有效期赠金到账起30天内有效。在交易有效期结束后，如客户完成指定交易手数，即可提取存款赠金。如在交易有效期结束前进行取款，将视为自动放弃赠金，系统将于客户取款前先从账户余额中扣除赠金，且活动期间不可再重新参与此活动。
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
        py={1}
        bg={WCGZKZJ_TITLE_BOX_BG}
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
        bg={WCGZKZJ_TITLE_BOX_BG}
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
        href="https://my.wcgmarkets-global.com/zh/register?referral=8ec170e9f1c2276d591d3864ae2e20a3"
        isExternal
      >
        立即开户
      </Link>
      <Box
        width="30vw"
        maxW="200px"
        textAlign="center"
        mx={2}
        py={1}
        bg={WCGZKZJ_TITLE_BOX_BG}
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
        onClick={openChatWindow}
      >
        在线客服
      </Box>
    </Flex>
  </Flex>
);

export const WCGZKZJTitle: React.FC<{}> = () => (
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
      bg={WCGZKZJ_TABLE_BG}
      color={WCGZKZJ_TITLE_FONT}
      border={'1px'}
      borderColor="white"
      my={5}
      px={5}
      py={2}
      fontSize={{ base: '12px', md: 'inherit' }}
    >
      活动时间：2023-01-01 至 2023-12-31
    </Box>

    <Box
      width={{ base: '90vw', md: '760px' }}
      fontSize={{ base: '12px', md: '18px' }}
    >
      交易有效时间：赠金到账起30天
    </Box>

    <Box
      width={{ base: '90vw', md: '760px' }}
      fontSize={{ base: '12px', md: '18px' }}
    >
      奖励对象：活动期间新客户
    </Box>
  </Flex>
);

const WCGZKZJTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    my={8}
    fontSize={{ base: '12px', md: '18px' }}
  >
    <StyledWCGZKZJTable>
      <thead>
        <tr>
          <th>奖励项</th>
          <th>参与资格</th>
          <th>赠金(美元)</th>
          <th>手数要求</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-yellow">开户奖</td>
          <td>开户后激活送</td>
          <td>50</td>
          <td>1手</td>
        </tr>
        <tr>
          <td rowSpan={6} className="font-yellow">
            首存奖励
          </td>
          <td className="font-yellow">首存金额(美元)</td>
          <td className="font-yellow">赠金(美元)</td>
          <td className="font-yellow">手数要求</td>
        </tr>
        <tr>
          <td>300-499</td>
          <td>100</td>
          <td>13手</td>
        </tr>
        <tr>
          <td>500-999</td>
          <td>150</td>
          <td>25手</td>
        </tr>
        <tr>
          <td>1000-1999</td>
          <td>200</td>
          <td>30手</td>
        </tr>
        <tr>
          <td>2000-4999</td>
          <td>500</td>
          <td>72手</td>
        </tr>
        <tr>
          <td>5000及以上</td>
          <td>1500</td>
          <td>188手</td>
        </tr>
      </tbody>
    </StyledWCGZKZJTable>
  </Box>
);

const StyledWCGZKZJTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid white;
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  tr {
    background-color: ${WCGZKZJ_TABLE_BG_LIGHT};
    color: white;
  }

  tr:nth-of-type(1) {
    background-color: ${WCGZKZJ_TABLE_BG};
  }

  th {
    color: ${WCGZKZJ_FONT_YELLOW};
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }

  .font-yellow {
    font-weight: 700;
    color: ${WCGZKZJ_FONT_YELLOW};
  }
`;

const WCGZKZJRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动条款
    </Box>
    <Box>
      1.
      活动期间，每位客户（同一身份ID）仅可享受一次本优惠。同一新客户不可同时参加两个开户活动。
      若同期有其他优惠活动，客户所享有的其他优惠则以其他优惠之条款规定为准。
    </Box>
    <Box>2. 开户奖的50美元交易金、需要完成一手平仓交易及激活后才可提取。</Box>
    <Box>
      3. 举例：陈先生入金1000美元即可获得金额250美元信用额
      (50开户奖+200首存奖励)。完成1手可将开户奖50美元转化成现金自由出金，而完成13手可按层级转化100美元，如此类推上限为首存金额的层级。
    </Box>
    <Box>4. 所有奖励均只会计算平仓手数，开仓交易手数则不计算在奖励内。 </Box>
    <Box>5. 信用额回赠会是安排每日早上处理。</Box>
    <Box>
      6. 贵金属，原油交易手数定义; 黄金
      1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶。
      外汇产品交易2标准手＝1手计算。
    </Box>
    <Box>
      7.
      每IP/每家庭/每人/每交易账户限领取赠金一次，销户重开客户不可参与此活动。活动期间如发现客户不正规交易，WCG有权停止客户新交易并取消奖励资格。
    </Box>
    <Box>
      8.
      客户需注意官网上存取款说明有关手续费的安排，本公司保留随时修改、更新有关安排的权利，恕不另行通知。
    </Box>
    <Box>
      9.
      任何因计算机及/或网络的通讯或技术问题、故障、意外或任何原因而引致数据送交迟延、遗失资料、
      数据错误 或无法辨识等情况，WCG概不负责。上述活动记录均以系统记录为准。
    </Box>
    <Box>10. WCG及其旗下公司员工不可参加。</Box>
    <Box>
      11.
      WCG保留本条款的最终解释权，及随时修改或终止本优惠的权利，而毋须事先作出通知。
    </Box>
  </>
);

export default WCGZKZJ;
