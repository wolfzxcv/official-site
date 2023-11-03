import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGXJJ_BG = '#200e3e';
const WCGXJJ_DATE_BG = '#ff00ac';
const WCGXJJ_DATE_BORDER = '#9b93ae';
const WCGXJJ_BUTTON_BG = '#ff00ac';
const WCGXJJ_FOOTER_BG = '#18274e';

const WCGXJJ_FONT_YELLOW = '#e5ea09';
const WCGXJJ_TITLE_FONT = 'white';

const WCGXJJ_TABLE_FONT_YELLOW = '#f8e10d';
const WCGXJJ_TABLE_BG_LIGHT_PINK = '#ea167a';
const WCGXJJ_TABLE_BG_DARK_PINK = '#cc0e4c';
const WCGXJJ_TABLE_BG_LIGHT_PURPLE = '#5e48cf';
const WCGXJJ_TABLE_BG_DARK_PURPLE = '#3b2d8c';

const WCGXJJ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '500px', md: '1080px' }}
        bg={WCGXJJ_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGXJJ_M.jpg',
          md: '/../assets/images/activity_WCGXJJ.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
        justify="center"
        align="flex-end"
        color={WCGXJJ_TITLE_FONT}
      >
        <Box position="relative" bottom={{ base: '50px', md: '150px' }}>
          <WCGXJJTitle />
        </Box>
      </Flex>

      {/* content */}
      <WCGXJJContent />

      {/* rules */}
      <Flex bg={WCGXJJ_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGXJJRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGXJJContent: React.FC<{}> = () => (
  <Flex bg={WCGXJJ_BG} color="white" flexDir="column" align="center">
    {/* table */}
    <WCGXJJTable />

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
        bg={WCGXJJ_BUTTON_BG}
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
        bg={WCGXJJ_BUTTON_BG}
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
        bg={WCGXJJ_BUTTON_BG}
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

export const WCGXJJTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    fontSize={{ base: '14px', md: '20px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
  >
    <Box
      border="1px"
      borderColor={WCGXJJ_DATE_BORDER}
      borderRadius="20px"
      bg={WCGXJJ_DATE_BG}
      color={WCGXJJ_TITLE_FONT}
      py={2}
      width={{ base: '100%', md: 'auto' }}
      px={{ base: 'auto', md: '50px' }}
      whiteSpace="nowrap"
      fontSize={{ base: '14px', md: '22px' }}
      textAlign="center"
    >
      2023年11月1日~2023年11月30日
    </Box>

    <Box
      mt={{ base: 5, md: 20 }}
      mb={{ base: 5, md: 10 }}
      width={{ base: '90vw', md: 'fit-content' }}
      color={WCGXJJ_FONT_YELLOW}
    >
      <Text>0机价出iPhone 15 Pro Max</Text>
    </Box>

    <Box width="fit-content" display={{ base: 'none', md: 'block' }}>
      活动期间内累计净入金超过5000美元即可向在线客服申请参加本活动，
    </Box>

    <Box width="fit-content" display={{ base: 'none', md: 'block' }}>
      在活动期间成功报名并完成指定的交易量要求，即可获得相应等级的赠金
    </Box>

    <Box width="90vw" display={{ base: 'block', md: 'none' }}>
      活动期间内累计净入金超过5000美元即可向在线客服申请参加本活动，在活动期间成功报名并完成指定的交易量要求，即可获得相应等级的赠金
    </Box>
  </Flex>
);

const WCGXJJTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    mb={8}
    fontSize={{ base: '10px', md: '18px' }}
  >
    <StyledWCGXJJTable>
      <thead>
        <tr>
          <th></th>
          <th>交易手数</th>
          <th>赠金(美元)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>第一等级</td>
          <td>10</td>
          <td>15</td>
        </tr>
        <tr>
          <td>第二等级</td>
          <td>60</td>
          <td>100</td>
        </tr>
        <tr>
          <td>第三等级</td>
          <td>140</td>
          <td>240</td>
        </tr>
        <tr>
          <td>第四等级</td>
          <td>222</td>
          <td className="yellow">APPLE WATCH 9(GPS)</td>
        </tr>
        <tr>
          <td>第五等级</td>
          <td>610</td>
          <td className="yellow">IPHONE 15 PRO(256GB)</td>
        </tr>
        <tr>
          <td>第六等级</td>
          <td>750或更多</td>
          <td className="yellow">IPHONE 15 PRO MAX (256GB)</td>
        </tr>
      </tbody>
    </StyledWCGXJJTable>
  </Box>
);

const StyledWCGXJJTable = styled.table`
  width: 100%;
  color: ${WCGXJJ_TITLE_FONT};
  border-collapse: collapse;
  td,
  th {
    border: 1px solid ${WCGXJJ_TITLE_FONT};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  thead > tr > th {
    background-color: ${WCGXJJ_TABLE_BG_LIGHT_PURPLE};
    &:last-child {
      background-color: ${WCGXJJ_TABLE_BG_LIGHT_PINK};
    }
  }

  tbody > tr > td {
    background-color: ${WCGXJJ_TABLE_BG_DARK_PURPLE};
    &:last-child {
      background-color: ${WCGXJJ_TABLE_BG_DARK_PINK};
    }
  }

  th {
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }

  .yellow {
    color: ${WCGXJJ_TABLE_FONT_YELLOW};
  }
`;

const WCGXJJRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动声明
    </Box>
    <Box>1. 客户需自行主动向官方客服申请方会参加本次的活动。</Box>
    <Box>
      2. 于活动结束日(2023年11月30日)收市之后未达交易量要求会自动取消资格。
    </Box>
    <Box>
      3.
      客户而自行注意交易户口中信用额的变化，这可能引起保证金的变化，有机会导致强制平仓的风险。
    </Box>
    <Box>4. 客户在活动期间内申请提取任何资金将取消此活动资格。</Box>
    <Box>
      5.
      客户在活动期间完成所属的入金和交易手数要求是11月参加本次的活动起开仓计算的已平仓单，方计算于本活动的交易手数。
    </Box>
    <Box>
      6. WCG MARKETS保留对本活动的最终解释权，并有权随时修改或终止本活动。
    </Box>
    <Box>7. WCG MARKETS不承担任何因本活动而引起的法律责任或争议。</Box>
    <Box>
      8. 所有参与本活动的客户必须遵守WCG MARKETS的服务条款和风险披露声明。
    </Box>
    <Box>9. 所有交易均涉及风险，您的损失可能大于您的入金。</Box>
    <Box>10. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>
      11. WCG
      将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布为准。
    </Box>
    <Box>
      12.
      所有异常交易包括通过超短线刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
    <Box>13. 客户成功入指定金额之后需于活动期间主动向官网在线客服申请。</Box>
    <Box>
      14. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶。
    </Box>
    <Box>15. 外汇产品交易2标准手＝1手计算。</Box>
    <Box>
      16.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box>17. 活动名额有限送完即止。</Box>
    <Box>
      18.
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
    </Box>
  </>
);

export default WCGXJJ;
