import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGZQX_BG = '#187877';

const WCGZQX_DATE_BG = '#0f9443';
const WCGZQX_DATE_BORDER = '#53ad7c';
const WCGZQX_BUTTON_BG = '#bf3d1b';
const WCGZQX_FOOTER_BG = '#0d5e61';

const WCGZQX_TITLE_FONT = 'white';

const WCGZQX_TABLE_FONT_YELLOW = '#f7e59d';
const WCGZQX_TABLE_BG_LEFT_TITLE = '#d14e24';
const WCGZQX_TABLE_BG_RIGHT_TITLE = '#f38864';
const WCGZQX_TABLE_BG_LEFT_CONTENT = '#bf3d1b';
const WCGZQX_TABLE_BG_RIGHT_CONTENT = '#f06a4f';

const WCGZQX: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '630px' }}
        bg={{ base: WCGZQX_BG, md: WCGZQX_BG }}
        bgImage={{
          base: '/../assets/images/activity_WCGZQX_M.jpg',
          md: '/../assets/images/activity_WCGZQX.jpg'
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGZQXContent />

      {/* rules */}
      <Flex bg={WCGZQX_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGZQXRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGZQXContent: React.FC<{}> = () => (
  <Flex
    bg={{ base: WCGZQX_BG, md: WCGZQX_BG }}
    color="white"
    flexDir="column"
    align="center"
  >
    <WCGZQXTitle />

    {/* table */}
    <WCGZQXTable />

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
        bg={WCGZQX_BUTTON_BG}
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
        bg={WCGZQX_BUTTON_BG}
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
        bg={WCGZQX_BUTTON_BG}
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

export const WCGZQXTitle: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    pb={20}
    fontSize={{ base: '14px', md: '20px' }}
    textAlign="center"
    align="center"
    maxW="1000px"
    bg={{ base: WCGZQX_BG, md: WCGZQX_BG }}
    color="white"
  >
    <Box
      border="1px"
      borderColor={WCGZQX_DATE_BORDER}
      borderRadius="20px"
      bg={WCGZQX_DATE_BG}
      color={WCGZQX_TITLE_FONT}
      py={2}
      mt={{ base: 0, md: 10 }}
      mb={10}
      width={{ base: '100%', md: 'auto' }}
      px={{ base: 'auto', md: '50px' }}
      whiteSpace="nowrap"
      fontSize={{ base: '14px', md: '22px' }}
      textAlign="center"
    >
      2024年9月01日至2024年9月30日
    </Box>
  </Flex>
);

const WCGZQXTable: React.FC<{}> = () => (
  <Box
    width={{ base: '90vw', md: '800px' }}
    mb={8}
    fontSize={{ base: '10px', md: '18px' }}
  >
    <StyledWCGZQXTable>
      <thead>
        <tr>
          <th className="table_left_title">赠金金额 (美元)</th>
          <th className="table_right_title">所需平仓手数 (手)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>100</td>
          <td>15</td>
        </tr>
        <tr>
          <td>200</td>
          <td>30</td>
        </tr>
        <tr>
          <td>300</td>
          <td>60</td>
        </tr>
        <tr>
          <td>500</td>
          <td>95</td>
        </tr>
        <tr>
          <td>1000</td>
          <td>170</td>
        </tr>
      </tbody>
    </StyledWCGZQXTable>
  </Box>
);

const StyledWCGZQXTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid ${WCGZQX_TITLE_FONT};
    padding: 10px;
    text-align: center;
    white-space: nowrap;
  }

  .table_left_title {
    color: ${WCGZQX_TABLE_FONT_YELLOW};
    background-color: ${WCGZQX_TABLE_BG_LEFT_TITLE};
  }

  .table_right_title {
    background-color: ${WCGZQX_TABLE_BG_RIGHT_TITLE};
  }

  tbody > tr > td {
    background-color: ${WCGZQX_TABLE_BG_RIGHT_CONTENT};
    &:first-child {
      color: ${WCGZQX_TABLE_FONT_YELLOW};
      background-color: ${WCGZQX_TABLE_BG_LEFT_CONTENT};
    }
  }
`;

const WCGZQXRules: React.FC<{}> = () => (
  <>
    <Box textAlign="center" fontWeight="bold" mb={5}>
      ·活动规则及注意事项
    </Box>
    <Box>1. 但凡在活动期间开的已平仓单方能计算活动范围。</Box>
    <Box>2. 回赠在活动结束时按已平仓的手数层级结算。</Box>
    <Box>3. 活动需主动向客服申请参加。</Box>
    <Box>4. 可提现回赠将在活动完结14个工作日内发放。</Box>
    <Box>5. 手数要求会在活动期间累积计算。</Box>
    <Box>6. 活动不能与其他优惠重叠。</Box>
    <Box>7. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>
      8. WCG 将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
      Markets发出的公布爲准。
    </Box>
    <Box>9. 公司保留活动最终解释权。</Box>
    <Box>
      10.
      高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
    <Box>11. 活动名额有限送完即止。</Box>
    <Box>
      12.
      所有异常交易包括通过超短綫刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视爲无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
    </Box>
  </>
);

export default WCGZQX;
