import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const WCGDYN_BG_GREEN = '#7cb413';
const WCGDYN_BG_YELLOW = '#fff9a1';
const WCGDYN_BG_DARKGREEN = '#689105';
const WCGDYN_FONT_GREEN = '#385505';
const WCGDYN_BTN_ORANGE = '#ed550a';

const WCGDYN: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* banner */}
      <Flex
        minH={{ base: '320px', md: '600px' }}
        bg={WCGDYN_BG_GREEN}
        bgImage={{
          base: '/../assets/images/activity_WCGDYN_M.jpg',
          md: '/../assets/images/activity_WCGDYN.jpg'
        }}
        bgPosition="top center"
        bgSize={{ base: 'cover', md: 'cover' }}
        bgRepeat="no-repeat"
      ></Flex>

      {/* content */}
      <WCGDYNContent />

      {/* rules */}
      <Flex bg={WCGDYN_BG_YELLOW} justify="center" py={{ base: 10, md: 20 }}>
        <Stack
          width="90vw"
          color={WCGDYN_FONT_GREEN}
          spacing={{ base: 1, md: 3 }}
          fontSize={{ base: '10px', md: '12px' }}
          textAlign={{ base: 'left', md: 'center' }}
        >
          <WCGDYNRules />
        </Stack>
      </Flex>
    </>
  );
};

const WCGDYNContent: React.FC<{}> = () => (
  <Flex bg={WCGDYN_BG_GREEN} color="white" flexDir="column" align="center">
    <Flex
      width="100%"
      justify="center"
      py={5}
      bg={WCGDYN_BG_YELLOW}
      fontSize={{ base: 'auto', md: '36px' }}
    >
      <Link
        width="30vw"
        maxW="200px"
        textAlign="center"
        py={3}
        mx={2}
        fontWeight="700"
        borderRadius="40px"
        bg={WCGDYN_BTN_ORANGE}
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
        bg={WCGDYN_BTN_ORANGE}
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
        py={3}
        mx={2}
        fontWeight="700"
        borderRadius="40px"
        bg={WCGDYN_BTN_ORANGE}
        _hover={{
          opacity: 0.8,
          transition: '1s',
          cursor: 'pointer'
        }}
        onClick={openChatWindow}
      >
        在线客服
      </Box>
    </Flex>

    <Flex mt={20} mb={5}>
      <Image
        src={`/../assets/images/activity_WCGDYN_slogan.jpg`}
        alt="slogan"
      ></Image>
    </Flex>

    <WCGDYNTitle />
  </Flex>
);

export const WCGDYNTitle: React.FC<{}> = () => (
  <Flex flexDir="column" align="center">
    <Box
      border="1px"
      borderColor="white"
      bg={WCGDYN_BG_DARKGREEN}
      width={{ base: '90vw', md: 'auto' }}
      px={{ base: 2, md: 5 }}
      py={5}
      fontSize={{ base: '12px', md: '28px' }}
      fontWeight="700"
      textAlign="center"
    >
      活动由2002年8月1号开始，2022年8月31号结束
    </Box>

    <Box
      mt={{ base: 10, md: 20 }}
      mb={{ base: 10, md: '150px' }}
      fontSize={{ base: '12px', md: '18px' }}
      width={{ base: '80vw', md: '90vw' }}
      maxW={{ base: 'auto', md: '900px' }}
      textAlign="center"
      lineHeight={{ base: 5, md: 10 }}
    >
      活动期间所有交易户口(只限于黄金，白银)每满80手即可向客服申请上海迪士尼乐园星光宝石年卡一张或现金回赠320美元于交易账号。礼品或回赠于客服确认起2个工作天内发放。同一交易账号换拎上限为4次。
    </Box>
  </Flex>
);

const WCGDYNRules: React.FC<{}> = () => (
  <>
    <Box>
      1.
      申请上海迪士尼乐园星光宝石年卡时需客服提供完整个人信息，包括中文全名，身份证，正确能接收短信的手机号码等
    </Box>
    <Box>2. 单一个人信息只能申请一张迪士尼乐园年卡</Box>
    <Box>
      3. 收到短信后会员需自行到上海迪士尼度假区官方网站
      (点击https://shdr.cn/df)、App、上海迪士尼度假区官方微信公众号或微信迪士尼年卡小程序上进行兑换和预约。建议收到短信后15日内兑换年卡，如未在15日内兑换，年卡也将开始计算有效期。手续及详情
      查看上海迪士尼乐园年卡须知
      https://www.shanghaidisneyresort.com/annual-pass-rules/
      或到上海迪士尼乐园（“乐园”）官网 https://www.shanghaidisneyresort.com 查询
    </Box>
    <Box>4. 活动由2002年8月1号开始，2022年8月31号结束</Box>
    <Box>5. 活动期间单一交易账户于黄金及白银交易每满80手即可参加本活动一次</Box>
    <Box>6. 同一个交易账户最多可参加本活动4次</Box>
    <Box>
      7. 会员达到要求之后需自行到WCG官网https://www.wcgmarkets-global.com/cn
      与客服申请
    </Box>
    <Box>8. 礼品或回赠于客服确认起2个工作天内发放</Box>
    <Box>
      9.
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户
    </Box>
    <Box>
      10.
      若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，WCG有权停止客户交易，取消活动资格幷按照WCG交易细则中异常交易的处理方法进行处理
    </Box>
    <Box>11. 交易手数定义:黄金 1标准手100盎司，白银 1标准手2500盎司</Box>
  </>
);

export default WCGDYN;
