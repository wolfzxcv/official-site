import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

export const WCGSJZ_BG = '#1e3253';

const WCGSJZ_DATE_BG = '#d449fa';
const WCGSJZ_DATE_BORDER = '#d8d8d2';
const WCGSJZ_BUTTON_BG = '#2084fe';
const WCGSJZ_FOOTER_BG = '#101936';
const WCGSJZ_WAY_BG = '#2a4771';
const WCGSJZ_TABLE_LEFT_TITLE = '#6f77b5';
const WCGSJZ_TABLE_LEFT_CONTENT = '#585e98';
const WCGSJZ_TABLE_RIGHT_TITLE = '#e05dfb';
const WCGSJZ_TABLE_RIGHT_CONTENT = '#d449fa';

const WCGSJZ_TITLE_FONT = 'white';
const WCGSJZ_FONT_YELLOW = 'yellow';

const WCGSJZ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '626px' }}
        bg={WCGSJZ_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGSJZ_M.jpg`,
          md: `/../assets/images/activity_WCGSJZ.jpg`
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGSJZContent />

      {/* rules */}
      <Flex bg={WCGSJZ_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGSJZRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGSJZContent: React.FC<{}> = () => {
  return (
    <Flex bg={WCGSJZ_BG} color="white" flexDir="column" align="center">
      <WCGSJZTitle />

      <Flex
        justify="center"
        my={10}
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
          bg={WCGSJZ_BUTTON_BG}
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
          bg={WCGSJZ_BUTTON_BG}
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
          bg={WCGSJZ_BUTTON_BG}
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
};

export const WCGSJZTitle: React.FC<{}> = () => {
  return (
    <Flex
      flexDir="column"
      p={2}
      pb={10}
      fontSize={{ base: '14px', md: '20px' }}
      textAlign="center"
      align="center"
      maxW="1000px"
      bg={WCGSJZ_BG}
      color="white"
    >
      <Box
        border="1px"
        borderColor={WCGSJZ_DATE_BORDER}
        borderRadius="20px"
        bg={WCGSJZ_DATE_BG}
        color={WCGSJZ_TITLE_FONT}
        py={2}
        mt={{ base: 0, md: 3 }}
        mb={3}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 'auto', md: '50px' }}
        whiteSpace="nowrap"
        fontSize={{ base: '14px', md: '22px' }}
        textAlign="center"
      >
        比赛时间: 2024.7.22 – 2024.8.30
      </Box>

      <Flex fontSize={{ base: '16px', md: '28px' }} fontWeight="900">
        <Text>冠军奖金高达</Text>
        <Text color={WCGSJZ_FONT_YELLOW}>20,000</Text>
        <Text>美元！</Text>
      </Flex>

      <Box
        border="1px"
        borderColor={WCGSJZ_DATE_BORDER}
        bg={WCGSJZ_WAY_BG}
        color={WCGSJZ_TITLE_FONT}
        py={2}
        mt={{ base: 0, md: 10 }}
        mb={10}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 'auto', md: '50px' }}
        whiteSpace="nowrap"
        fontSize="16px"
        textAlign="center"
      >
        参与方式
      </Box>

      <Flex
        fontSize="16px"
        flexDir="column"
        align="center"
        mb={{ base: 5, md: 10 }}
      >
        <Box fontWeight="900">报名</Box>
        <Box>
          <Link
            href={links.usersCenter}
            isExternal
            textDecoration="underline"
            _hover={{
              bgColor: WCGSJZ_WAY_BG,
              transition: '0.5s'
            }}
          >
            点此登录
          </Link>
          或注册
          <Link
            href={links.registerReal}
            isExternal
            textDecoration="underline"
            _hover={{
              bgColor: WCGSJZ_WAY_BG,
              transition: '0.5s'
            }}
          >
            WCG
          </Link>
          ，到用户中心报名并交付10美元活动注册费！
        </Box>
      </Flex>

      <Flex
        fontSize="16px"
        flexDir="column"
        align="center"
        mb={{ base: 5, md: 10 }}
      >
        <Box fontWeight="900">入金</Box>
        <Box>完成最低2000美元的入金邀请</Box>
      </Flex>

      <Flex
        fontSize="16px"
        flexDir="column"
        align="center"
        mb={{ base: 5, md: 10 }}
      >
        <Box fontWeight="900">参赛</Box>
        <Box>比拼交易技巧，赢取高达20,000美元大奖！</Box>
      </Flex>

      <Flex
        fontSize="16px"
        flexDir="column"
        align="center"
        mb={{ base: 5, md: 10 }}
      >
        <Box fontWeight="900">排名方式</Box>
        <Box>
          比赛期间参赛者的累计交易净利润（P/L）的百分比进行排名，盈利越多排名越高！
        </Box>
      </Flex>

      <Flex
        fontSize="16px"
        flexDir="column"
        align="center"
        mb={{ base: 5, md: 10 }}
      >
        <Box fontWeight="900">奖项设置</Box>
        <Box>
          大赛将选出20名优胜者，送上总价值超4万美金的奖金（可提现），助您在这个赛季乘风破浪，收获满满！
        </Box>
      </Flex>

      <Box fontWeight="700" fontSize={{ base: '14px', md: '22px' }}>
        比赛奖项详情
      </Box>
      <Flex
        justify={{ base: 'start', md: 'center' }}
        width={{ base: '100%', md: '700px' }}
      >
        <StyledTable>
          <thead>
            <tr>
              <th style={{ background: WCGSJZ_TABLE_LEFT_TITLE }}>比赛排名</th>
              <th
                style={{
                  background: WCGSJZ_TABLE_RIGHT_TITLE,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                奖金(可提现)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ background: WCGSJZ_TABLE_LEFT_CONTENT }}>1</td>
              <td
                style={{
                  background: WCGSJZ_TABLE_RIGHT_CONTENT,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                20000
              </td>
            </tr>
            <tr>
              <td style={{ background: WCGSJZ_TABLE_LEFT_CONTENT }}>2</td>
              <td
                style={{
                  background: WCGSJZ_TABLE_RIGHT_CONTENT,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                10000
              </td>
            </tr>
            <tr>
              <td style={{ background: WCGSJZ_TABLE_LEFT_CONTENT }}>3</td>
              <td
                style={{
                  background: WCGSJZ_TABLE_RIGHT_CONTENT,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                5000
              </td>
            </tr>
            <tr>
              <td style={{ background: WCGSJZ_TABLE_LEFT_CONTENT }}>4</td>
              <td
                style={{
                  background: WCGSJZ_TABLE_RIGHT_CONTENT,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                2500
              </td>
            </tr>
            <tr>
              <td style={{ background: WCGSJZ_TABLE_LEFT_CONTENT }}>5</td>
              <td
                style={{
                  background: WCGSJZ_TABLE_RIGHT_CONTENT,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                1000
              </td>
            </tr>
            <tr>
              <td style={{ background: WCGSJZ_TABLE_LEFT_CONTENT }}>6~10</td>
              <td
                style={{
                  background: WCGSJZ_TABLE_RIGHT_CONTENT,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                200
              </td>
            </tr>
            <tr>
              <td style={{ background: WCGSJZ_TABLE_LEFT_CONTENT }}>11~20</td>
              <td
                style={{
                  background: WCGSJZ_TABLE_RIGHT_CONTENT,
                  color: WCGSJZ_FONT_YELLOW
                }}
              >
                50
              </td>
            </tr>
          </tbody>
        </StyledTable>
      </Flex>

      <Flex
        justify={{ base: 'start', md: 'center' }}
        width={{ base: '100%', md: '700px' }}
        mt={{ base: 5, md: 10 }}
      >
        <Image src="/../assets/images/activity_WCGSJZ_ipad.jpg" alt="ipad" />
      </Flex>
    </Flex>
  );
};

const WCGSJZRules: React.FC<{}> = () => {
  return (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·比赛活动条款
      </Box>
      <Box>
        您是 WCG MARKETS新客户或现有客户，根据且已同意的操作协议有资格交易；
        依据适用的账户最低入金额和/或 WCG MARKETS的其他要求，您已在 WCG
        MARKETS开设真实交易账户； 您已报名参加本次比赛并在报名期内同意本条款。
        您已在比赛期内存入“比赛最低要求入金额”；
        “每人一奖”规则是指在整个比赛期间，每人只能获得一个奖项。
      </Box>
      <Box>1. 此比赛活动仅开放给在WCG MARKETS开立真实的标准帐户的客户。</Box>
      <Box>2. 活动需主动于用户中心报名参加。</Box>
      <Box>
        3. 如果客户选择提取部分或全部入金和/或利润，即视为自动放弃比赛活动。
      </Box>
      <Box>4. 公司保留随时修改、终止活动及收回赠金的权利。</Box>
      <Box>5. 公司保留活动最终解释权。</Box>
      <Box>
        6.
        所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)，公司会终止本活动计划。
      </Box>
      <Box>
        7.
        高风险投资警告差价合约（CFD）属复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理幷考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现幷不担保或代表未来走势。此类金融产品幷不适合所有投资者，请务必在入市前完全了解所有潜在的风险，幷在有需要时寻求独立意见。
      </Box>
    </>
  );
};

const StyledTable = styled.table`
  border: 1px solid white;
  width: 100%;
  td,
  th {
    padding: 0 20px;
    line-height: 2;
    border: 1px solid white;
    text-align: center;
  }

  border-collapse: collapse;
`;

export default WCGSJZ;
