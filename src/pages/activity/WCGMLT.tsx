import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const WCGMLT_BG = '#702d1a';

const WCGMLT_DATE_BG = '#ff7421';
const WCGMLT_DATE_BORDER = '#d99573';
const WCGMLT_BUTTON_BG = '#f03723';
const WCGMLT_FOOTER_BG = WCGMLT_DATE_BG;

const WCGMLT_TITLE_FONT = 'white';

const WCGMLT: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

      {/* banner */}
      <Flex
        minH={{ base: '420px', md: '626px' }}
        bg={WCGMLT_BG}
        bgImage={{
          base: `/../assets/images/activity_WCGMLT_M.jpg`,
          md: `/../assets/images/activity_WCGMLT.jpg`
        }}
        bgPosition={{ base: 'top center', md: 'top center' }}
        bgSize={{ base: 'contain', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGMLTContent />

      {/* rules */}
      <Flex bg={WCGMLT_FOOTER_BG} justify="center">
        <Stack
          my={'6em'}
          width={{ base: '90vw', md: '80vw' }}
          color={'white'}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '16px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGMLTRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGMLTContent: React.FC<{}> = () => {
  return (
    <Flex bg={WCGMLT_BG} color="white" flexDir="column" align="center">
      <WCGMLTTitle />

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
          bg={WCGMLT_BUTTON_BG}
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
          bg={WCGMLT_BUTTON_BG}
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
          bg={WCGMLT_BUTTON_BG}
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

export const WCGMLTTitle: React.FC<{}> = () => {
  return (
    <Flex
      flexDir="column"
      p={2}
      pb={10}
      fontSize={{ base: '14px', md: '20px' }}
      textAlign="center"
      align="center"
      maxW="1000px"
      bg={WCGMLT_BG}
      color="white"
    >
      <Box
        border="1px"
        borderColor={WCGMLT_DATE_BORDER}
        borderRadius="20px"
        bg={WCGMLT_DATE_BG}
        color={WCGMLT_TITLE_FONT}
        py={2}
        mt={{ base: 0, md: 10 }}
        mb={10}
        width={{ base: '100%', md: 'auto' }}
        px={{ base: 'auto', md: '50px' }}
        whiteSpace="nowrap"
        fontSize={{ base: '14px', md: '22px' }}
        textAlign="center"
      >
        指定类别账户可以每次入金都可获得20%交易赠金
      </Box>

      <Box mt={10}>
        活动时间:每月最后一个交易日结束，每月首个交易日重新计算，直到另行通知。
      </Box>
    </Flex>
  );
};

const WCGMLTRules: React.FC<{}> = () => {
  return (
    <>
      <Box textAlign="center" fontWeight="bold" mb={5}>
        ·活动条款
      </Box>
      <Box>
        1. 此优惠活动仅开放给在WCG
        MARKETS开立真实的指定类别帐户的客户(固定保证金800美元，强平比率70%)。{' '}
      </Box>
      <Box>2. 活动需主动向客服申请参加。</Box>
      <Box>3. 客户必须在报名参加活动之后3天内完成首次入金，逾期无效。</Box>
      <Box>4. 入金金额须达500美元或以上方可享受优惠。</Box>
      <Box>5. 交易赠金将在入金后1个工作日内发放到客户帐户。</Box>
      <Box>
        6. 在交易赠金发效之前请确保帐户馀额不低于500美元，方能接收交易赠金。
      </Box>
      <Box>7. 交易赠金仅可用于交易，不可出金。</Box>
      <Box>
        8.
        客户如参加活动之后，在活动结束前出金，会被取消活动资格并扣除已发放的交易赠金。此操作有引起强制平仓的风险。
      </Box>
      <Box>
        9.
        活动结束会扣除所有已发放的交易赠金，请注意户口保证金比率，此操作有引起强制平仓的风险。
      </Box>
      <Box>10. 单一交易户口最高可获赠金5000美元。</Box>
      <Box>11. 公司保留随时修改、终止活动及收回体验金的权利。</Box>
      <Box>12. 公司保留活动最终解释权。</Box>
      <Box>
        13.
        所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)，公司会终止本活动计划。
      </Box>
      <Box>
        14.
        高风险投资警告差价合约（CFD）属复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理幷考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现幷不担保或代表未来走势。此类金融产品幷不适合所有投资者，请务必在入市前完全了解所有潜在的风险，幷在有需要时寻求独立意见。
      </Box>
      <Box>15. 活动名额有限送完即止。</Box>
      <Box>16. 每位客户只可使用一个账号参加此活动一次。</Box>
    </>
  );
};

export default WCGMLT;
