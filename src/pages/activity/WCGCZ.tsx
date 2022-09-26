import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

export const WCGCZ_BG_BLACK = '#000000';

const WCGCZ_FONT_YELLOW = '#f3c019';

const WCGCZ_FONT_RED = '#9f0f32';

const WCGCZ_FONT_WHITE = 'white';

const WCGCZ: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      {/* content */}
      <WCGCZContent />
    </>
  );
};

const WCGCZContent: React.FC<{}> = () => (
  <>
    {/* banner */}
    <Flex
      minH={{ base: '600px', md: '710px' }}
      bg={WCGCZ_BG_BLACK}
      bgImage={{
        base: '/../assets/images/activity_WCGCZ_M.jpg',
        md: '/../assets/images/activity_WCGCZ.jpg'
      }}
      bgPosition="top center"
      bgSize="contain"
      bgRepeat="no-repeat"
      justify="center"
      pt={{ base: '300px', md: '400px' }}
      pb="150px"
    >
      <Flex width={{ base: '90vw', md: '80vw' }} maxW="1000px" flexDir="column">
        <Flex color={WCGCZ_FONT_WHITE} pb={5}>
          <Image
            width="90px"
            height="80px"
            pr={5}
            src="/../assets/images/activity_WCGCZ_01.png"
            alt="activity_WCGCZ_01"
          />

          <Flex flexDir="column">
            <Box>
              为庆祝WCG受邀参加全球最大型之一的国际环球金融展览，加推期间限定活动!
            </Box>
            <Box>
              由2022年9月1日起到国际环球金融展览闭幕之后的一天(2022年9月16日)的收市时间内作结算，已完成交易了10手或以上(9月起开仓计算的已平仓单)乘5倍会变成信用额存到交易户口中，而客人只需在2022年9月17日到2022年9月30日期间完成了由9月16日计算的1.5倍手数，即可将信用额赠金转为现金自由出金。
            </Box>
          </Flex>
        </Flex>
        <Flex color={WCGCZ_FONT_YELLOW}>
          <Image
            width="90px"
            height="60px"
            pr={5}
            src="/../assets/images/activity_WCGCZ_02.png"
            alt="activity_WCGCZ_02"
          />

          <Box>
            例子:A客户9月1日到9月16日共交易了50手，所以可于2022年9月16日收市之后收到:
            50 x 5 = 250美元信用额。而A客户于9月16到9月30日期间完成 50 x1.5 = 75
            手交易，即信用额赠金转为现金自由出金。
          </Box>
        </Flex>
      </Flex>
    </Flex>

    <WCGCZButtons />

    <WCGCZRules />
  </>
);

const WCGCZButtons: React.FC<{}> = () => (
  <Flex justify="center" bg={WCGCZ_BG_BLACK} color={WCGCZ_FONT_WHITE}>
    <Link
      width="30%"
      maxW="200px"
      textAlign="center"
      py={5}
      mx={2}
      border={`4px dotted ${WCGCZ_FONT_YELLOW}`}
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
      width="30%"
      maxW="200px"
      textAlign="center"
      py={5}
      mx={2}
      border={`4px dotted ${WCGCZ_FONT_YELLOW}`}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href={links.userCenterZH}
      isExternal
    >
      立即开户
    </Link>
    <Box
      width="30%"
      maxW="200px"
      textAlign="center"
      py={5}
      mx={2}
      border={`4px dotted ${WCGCZ_FONT_YELLOW}`}
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
);

const WCGCZRules: React.FC<{}> = () => (
  <Flex
    minH={{ base: '600px', md: '710px' }}
    fontSize="10px"
    bg={WCGCZ_BG_BLACK}
    color={WCGCZ_FONT_RED}
    bgImage={{
      base: '/../assets/images/activity_WCGCZ_footer_M.jpg',
      md: '/../assets/images/activity_WCGCZ_footer.jpg'
    }}
    bgPosition="bottom center"
    bgSize="contain"
    bgRepeat="no-repeat"
    justify="center"
  >
    <Flex flexDir="column" width={{ base: '90vw', md: '60vw' }} py="150px">
      <Box> 活动规则及注意事项</Box>
      <Box>
        1.
        客户在活动期间完成所属的交易手数要求(9月起开仓计算的已平仓单)，即可将信用额赠金转为现金。
      </Box>
      <Box>2. 信用额于2022年9月16日当天发放。</Box>
      <Box>
        3.客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
      </Box>
      <Box>4. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>
        5.
        活动于2022年9月1日到2022年9月16日期间完成了10手或以上会自动参加本活动。
      </Box>
      <Box>6. 单一交易户口最高可获赠金4000美元。</Box>
      <Box>7. 如未能完成交易要求手数，信用额会于2022年10月1日自动扣回。</Box>
      <Box>
        8. WCG
        将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
        Markets发出的公布为准。
      </Box>
      <Box>
        9.
        所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
      </Box>
      <Box>10. 客户成功入金之后自动可参加本次活动。</Box>
      <Box>
        11. 贵金属，原油交易手数定义; 黄金
        1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶。
      </Box>
      <Box>
        12.
        高风险投资警告差价合约（CFD）属于复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理并考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现并不担保或代表未来走势。此类金融产品并不适合所有投资者，请务必在入市前完全了解所有潜在的风险，并在有需要时寻求独立意见。
      </Box>
      <Box>13. 活动名额有限送完即止。</Box>
      <Box>
        14.
        公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
      </Box>
    </Flex>
  </Flex>
);

export default WCGCZ;
