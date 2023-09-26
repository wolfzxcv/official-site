import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGIPH_BG = '#130540';
const WCGIPH_DATE_BG = '#ff00ac';
const WCGIPH_DATE_BORDER = '#9b93ae';
const WCGIPH_BUTTON_BG = '#475cf3';
const WCGIPH_FOOTER_BG = '#3a2270';

const WCGIPH_FONT_YELLOW = '#f1fe06';
const WCGIPH_TITLE_FONT = 'white';

const WCGIPH_TABLE_FONT_YELLOW = '#f9e905';
const WCGIPH_TABLE_BG_LIGHT_BROWN = '#d9a02d';
const WCGIPH_TABLE_BG_DARK_BROWN = '#a1651c';
const WCGIPH_TABLE_BG_LIGHT_BLUE = '#5e48cf';
const WCGIPH_TABLE_BG_DARK_BLUE = '#3b2d8c';

const WCGIPH: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGIPH_BG}
        bgImage={{
          base: '/../assets/images/activity_WCGIPH_M.jpg',
          md: '/../assets/images/activity_WCGIPH.jpg'
        }}
        bgPosition={{ base: 'left center', md: 'top center' }}
        bgSize="cover"
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGIPHContent />

      {/* rules */}
      <Flex bg={WCGIPH_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGIPHRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGIPHContent: React.FC<{}> = () => (
  <Flex bg={WCGIPH_BG} color="white" flexDir="column" align="center">
    <WCGIPHTitle />

    {/* table */}
    <WCGIPHTable />

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
        bg={WCGIPH_BUTTON_BG}
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
        bg={WCGIPH_BUTTON_BG}
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
        href={links.registerZH}
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
        bg={WCGIPH_BUTTON_BG}
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

export const WCGIPHTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    fontSize={{ base: '14px', md: '20px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
  >
    <Box
      border="1px"
      borderColor={WCGIPH_DATE_BORDER}
      borderRadius="20px"
      bg={WCGIPH_DATE_BG}
      color={WCGIPH_TITLE_FONT}
      py={2}
      px={{ base: 5, md: '50px' }}
      whiteSpace="nowrap"
      mb={10}
      fontSize={{ base: '14px', md: '22px' }}
      textAlign="center"
    >
      2023年10月1日~2023年10月31日
    </Box>

    <Box
      mb={10}
      width={{ base: '90vw', md: 'fit-content' }}
      color={WCGIPH_FONT_YELLOW}
    >
      <Text>0机价出iPhone 15 Pro Max</Text>
    </Box>

    <Box width={{ base: '90vw', md: 'fit-content' }}>
      活动期间内累计净入金超过5000美元即可向在线客服申请参加本活动，
    </Box>

    <Box width={{ base: '90vw', md: 'fit-content' }}>
      在活动期间成功报名并完成指定的交易量要求，即可获得相应等级的赠金
    </Box>
  </Flex>
);

const WCGIPHTable: React.FC<{}> = () => (
  <Box
    width={{ base: '95vw', md: '800px' }}
    my={8}
    fontSize={{ base: '10px', md: '18px' }}
  >
    <StyledWCGIPHTable>
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
          <td className="yellow">iPhone 15 pro(256GB)</td>
        </tr>
        <tr>
          <td>第六等级</td>
          <td>750或更多</td>
          <td className="yellow">iPhone 15 Pro Max(256GB)</td>
        </tr>
      </tbody>
    </StyledWCGIPHTable>
  </Box>
);

const StyledWCGIPHTable = styled.table`
  width: 100%;
  color: ${WCGIPH_TITLE_FONT};
  border-collapse: collapse;
  td,
  th {
    border: 1px solid ${WCGIPH_TITLE_FONT};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  thead > tr > th {
    background-color: ${WCGIPH_TABLE_BG_LIGHT_BLUE};
    &:last-child {
      background-color: ${WCGIPH_TABLE_BG_LIGHT_BROWN};
    }
  }

  tbody > tr > td {
    background-color: ${WCGIPH_TABLE_BG_DARK_BLUE};
    &:last-child {
      background-color: ${WCGIPH_TABLE_BG_DARK_BROWN};
    }
  }

  th {
    font-size: ${{ base: '16px', md: '20pt' }};
    white-space: ${{ base: 'nowrap', md: 'inherit' }};
  }

  .yellow {
    color: ${WCGIPH_TABLE_FONT_YELLOW};
  }
`;

const WCGIPHRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动声明
    </Box>
    <Box>1. 客户需自行主动向官方客服申请方会参加本次的活动。</Box>
    <Box>
      2. 于活动结束日(2023年10月31日)收市之后未达交易量要求会自动取消资格。
    </Box>
    <Box>
      3.
      客户而自行注意交易户口中信用额的变化，这可能引起保证金的变化，有机会导致强制平仓的风险。
    </Box>
    <Box>4. 客户在活动期间内申请提取任何资金将取消此活动资格。</Box>
    <Box>
      5.
      客户在活动期间完成所属的入金和交易手数要求是10月参加本次的活动起开仓计算的已平仓单，方计算于本活动的交易手数。
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
  </>
);

export default WCGIPH;
