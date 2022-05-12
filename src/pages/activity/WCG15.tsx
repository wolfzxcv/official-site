import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils/openChatWindow';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import React from 'react';

const WCG15: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Box
        display={{ base: 'none', md: 'block' }}
        bgImage="../assets/images/activity_WCG15.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        height="1920px"
        pt="1300px"
      >
        <Flex pb="170px" justify="center">
          <Link
            _hover={{
              opacity: 0.8,
              transition: '1s'
            }}
            href="/"
            isExternal
          >
            <Image
              _hover={{
                opacity: 0.8,
                transition: '1s',
                cursor: 'pointer'
              }}
              src="../assets/images/activity_WCG15_b1.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Link
            _hover={{
              opacity: 0.8,
              transition: '1s'
            }}
            href={links.registerReal}
            isExternal
          >
            <Image
              src="../assets/images/activity_WCG15_b2.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Box
            _hover={{
              opacity: 0.8,
              transition: '1s',
              cursor: 'pointer'
            }}
            onClick={openChatWindow}
          >
            <Image
              src="../assets/images/activity_WCG15_b3.png"
              alt="Instagram"
            />
          </Box>
        </Flex>
        <Flex justify="center">
          <Stack spacing={1} color="white" width="800px" fontSize="14px">
            <Box>活动规则及注意事项</Box>
            <WCG15Content />
          </Stack>
        </Flex>
      </Box>

      {/* Mobile layout less than 831px */}
      <Flex
        overflow="hidden"
        display={{ base: 'flex', md: 'none' }}
        bgImage="../assets/images/activity_WCG15_M.jpg"
        bgPosition="top center"
        bgSize="cover"
        height="1615px"
        pt="600px"
        flexDir="column"
        align="center"
      >
        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="../assets/images/activity_WCG15_M_01.png"
            alt="activity_WCG15_M_02"
          />
        </Flex>
        <Flex my="100px" justify="center" w="95vw">
          <Link href="/" isExternal>
            <Image
              src="../assets/images/activity_WCG15_M_b1.png"
              alt="Instagram"
              mx={1}
            />
          </Link>

          <Link href={links.registerReal} isExternal>
            <Image
              src="../assets/images/activity_WCG15_M_b2.png"
              alt="Instagram"
              mx={1}
            />
          </Link>

          <Box onClick={openChatWindow}>
            <Image
              src="../assets/images/activity_WCG15_M_b3.png"
              alt="Instagram"
              mx={1}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        overflow="hidden"
        display={{ base: 'flex', md: 'none' }}
        bg="#d43f3a"
        justify="center"
        py={10}
      >
        <Stack spacing={1} w="85vw" color="white" fontSize="12px">
          <Box mb={1}>活动规则及注意事项</Box>
          <WCG15Content />
        </Stack>
      </Flex>
    </>
  );
};

const WCG15Content: React.FC<{}> = () => (
  <>
    <Box>
      1. 客户在活动期间完成所属的入金交易手数要求，即可将信用额赠金转为现金。
    </Box>
    <Box>
      2.
      客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
    </Box>
    <Box>3. 每位客户只可使用一个账号参加此活动一次。</Box>
    <Box>
      4. WCG 将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以
      WCG Markets 发出的公布为准。
    </Box>
    <Box>
      5.
      所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内
      (异常交易的定义参阅WCG官网)。
    </Box>
    <Box>6.客户成功入金之后，需主动向客服申请，方可参加本次活动。</Box>
    <Box>7.由入金日计起，需于30天内完成交易手数。</Box>
    <Box>
      8. 贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
      1标准手2500盎司，原油1标准手1000桶
    </Box>
    <Box>
      9.高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理，并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
    </Box>
  </>
);

export default WCG15;
