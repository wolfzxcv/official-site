import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const WCGDSH_BG = '#7cb413';
const WCGDSH_FOOTER_BG = '#fff9a1';
const WCGDSH_FONT_WHITE = 'white';
const WCGDSH_FONT_GREEN = '#385505';
const WCGDSH_LINK_BLUE = 'blue';
const WCGDSH_BG_DARKGREEN = '#689105';
const WCGDSH_BUTTON_BOX_BG = '#ed550a';

const WCGDSH: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <WCGDSHBanner />

      <Flex bg={WCGDSH_BG} color="white" flexDir="column" align="center">
        <WCGDSHDate />

        <WCGDSHContent />
      </Flex>
      <WCGDSHButtons />

      <Flex bg={WCGDSH_BG} height={{ base: '150px', md: '300px' }}></Flex>
      <WCGDSHRules />
    </>
  );
};

const WCGDSHBanner: React.FC<{}> = () => (
  <Flex
    minH={{ base: '320px', md: '600px' }}
    bg={WCGDSH_BG}
    bgImage={{
      base: '/../assets/images/activity_WCGDSH_M.jpg',
      md: '/../assets/images/activity_WCGDSH.jpg'
    }}
    bgPosition="top center"
    bgSize="cover"
    bgRepeat="no-repeat"
  ></Flex>
);

const WCGDSHDate: React.FC<{}> = () => (
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
      border="1px"
      borderColor="white"
      bg={WCGDSH_BG_DARKGREEN}
      width={{ base: '90vw', md: 'auto' }}
      px={2}
      py={2}
      fontSize={{ base: '12px', md: '20px' }}
      fontWeight="700"
      textAlign="center"
    >
      活动由2003年8月1号开始，2023年9月30号结束
    </Box>
  </Flex>
);

const WCGDSHContent: React.FC<{}> = () => (
  <Box
    mt={{ base: 10, md: 20 }}
    mb={{ base: 10, md: '150px' }}
    fontSize={{ base: '12px', md: '18px' }}
    width={{ base: '80vw', md: '90vw' }}
    maxW={{ base: 'auto', md: '900px' }}
    textAlign="center"
    lineHeight={{ base: 5, md: 10 }}
  >
    活动期间所有交易户口(只限于黄金，白银)每满80手
    <br />
    即可向客服申请
    <Box color={WCGDSH_FOOTER_BG}>
      香港迪士尼乐园年卡[奇妙處處通]銀色年卡一张
    </Box>
    或现金回赠175美元于交易账号。
    <br />
    礼品或回赠于活动结束7个工作天内发放。同一交易账号换拎上限为6次。
  </Box>
);

const WCGDSHButtons: React.FC<{}> = () => (
  <Flex
    bg={WCGDSH_FOOTER_BG}
    color={WCGDSH_FONT_WHITE}
    justify="center"
    py={'80px'}
    alignItems="center"
    textAlign="center"
    height={{ base: '40px', md: '50px' }}
    fontSize={{ base: '20px', md: '30px' }}
  >
    <Link
      width="30vw"
      maxW="200px"
      textAlign="center"
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="40px"
      bg={WCGDSH_BUTTON_BOX_BG}
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
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="40px"
      bg={WCGDSH_BUTTON_BOX_BG}
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
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="40px"
      bg={WCGDSH_BUTTON_BOX_BG}
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

const WCGDSHRules: React.FC<{}> = () => (
  <Flex bg={WCGDSH_FOOTER_BG} color={WCGDSH_FONT_GREEN} justify="center">
    <Stack
      my={'6em'}
      width={{ base: '90vw', md: '80vw' }}
      spacing={{ base: 1, md: 3 }}
      fontSize={{ base: '10px', md: '14px' }}
      textAlign={{ base: 'center', md: 'center' }}
    >
      <Box>1. 如申请香港迪士尼乐园年卡[奇妙處處通]銀色年卡用禮卷方式發放。</Box>
      <Box>
        2.
        香港迪士尼乐园年卡[奇妙處處通]銀色年卡用禮卷需三個月內到香港迪士尼乐园換取實體年卡並進行首用。
      </Box>
      <Box>
        3.
        迪士尼乐园年卡禮卷並未綁定可自行交換到任意人士到香港迪士尼乐园換取實體年卡。
      </Box>
      <Box>4. 換取實體年卡時需要個人身份訊息進行綁定。</Box>
      <Box>
        5. 收到短信后会员需自行到{' '}
        <Link
          color={WCGDSH_LINK_BLUE}
          href="https://www.hongkongdisneyland.com/zh-hk/reservation/landing/#park-visit"
          isExternal
        >
          香港迪士尼度假区官方网站
        </Link>{' '}
        上进行预约。详情查看{' '}
        <Link
          color={WCGDSH_LINK_BLUE}
          href="https://www.hongkongdisneyland.com/zh-hk/book/general-magic-access"
          isExternal
        >
          迪士尼乐园年卡须知
        </Link>{' '}
        或到{' '}
        <Link
          color={WCGDSH_LINK_BLUE}
          href="https://www.hongkongdisneyland.com/zh-hk/mydisney/"
          isExternal
        >
          香港迪士尼乐园官网
        </Link>{' '}
        查询。
      </Box>
      <Box>6. 活动由2023年8月1号开始，2023年9月30号结束。</Box>
      <Box>
        7. 活动期间单一交易账户于黄金及白银交易每满80手即可参加本活动一次。
      </Box>
      <Box>8. 同一个交易账户最多可参加本活动4次。</Box>
      <Box>
        9. 会员达到要求之后需自行到{' '}
        <Link
          color={WCGDSH_LINK_BLUE}
          href="https://www.wcgmarkets-global.com/cn"
          isExternal
        >
          WCG官网
        </Link>{' '}
        与客服申请。
      </Box>
      <Box>10. 礼品或回赠于活动结束起7个工作天内发放。</Box>
      <Box>
        11. WCG MARKETS保留对本活动的最终解释权，并有权随时修改或终止本活动。
      </Box>
      <Box>12. WCG MARKETS不承担任何因本活动而引起的法律责任或争议。</Box>
      <Box>
        13. 所有参与本活动的客户必须遵守WCG MARKETS的服务条款和风险披露声明。
      </Box>
      <Box>14. 所有交易均涉及风险，您的损失可能大于您的入金。</Box>
      <Box>15. 活动名额有限送完即止。</Box>
      <Box>
        16.
        公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
      </Box>
      <Box>
        17.
        若客户通过超短线刷单持仓低于15分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，WCG有权停止客户交易，取消活动资格幷按照WCG交易细则中异常交易的处理方法进行处理。
      </Box>
      <Box>
        18. 交易手数定义:黄金 1标准手100盎司，白银
        1标准手2500盎司,原油1标准手1000桶。
      </Box>
      <Box>19. 外汇产品交易2标准手＝1手计算。</Box>
    </Stack>
  </Flex>
);

export default WCGDSH;
