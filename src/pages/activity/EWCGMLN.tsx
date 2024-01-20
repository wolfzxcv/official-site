import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const EWCGMLN_BG = '#006a68';
const EWCGMLN_FOOTER_BG = '#f4463f';
const EWCGMLN_FONT_WHITE = 'white';
const EWCGMLN_FONT_YELLOW = '#fdeabc';
const EWCGMLN_DATE_BG = '#ff5a34';

const EWCGMLN: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <EWCGMLNBanner />

      <Flex bg={EWCGMLN_BG} color="white" flexDir="column" align="center">
        <EWCGMLNContent />
      </Flex>
      <EWCGMLNButtons />

      <Flex bg={EWCGMLN_BG} height={{ base: '50px', md: '100px' }}></Flex>
      <EWCGMLNRules />
    </>
  );
};

const EWCGMLNBanner: React.FC<{}> = () => (
  <Flex
    minH={{ base: '320px', md: '600px' }}
    bg={EWCGMLN_BG}
    bgImage={{
      base: '/../assets/images/activity_EWCGMLN_M.jpg',
      md: '/../assets/images/activity_EWCGMLN.jpg'
    }}
    bgPosition="top center"
    bgSize="cover"
    bgRepeat="no-repeat"
  ></Flex>
);

const EWCGMLNContent: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    px={{ base: 5, md: 0 }}
    fontSize={{ base: '12px', md: '18px' }}
    width={{ base: '100%', md: 'auto' }}
    textAlign="center"
    align="center"
    position="relative"
    bottom={{ base: '0', md: '150px' }}
  >
    <Flex
      border="1px"
      borderColor="white"
      flexDir="column"
      align="center"
      bg={EWCGMLN_DATE_BG}
      width={{ base: '90vw', md: 'auto' }}
      px={{ base: 2, md: 10 }}
      py={2}
      borderRadius="40px"
    >
      <Box color={EWCGMLN_FONT_YELLOW} fontSize={{ base: '12px', md: '16px' }}>
        活动时间 | Promotion period
      </Box>
      <Box
        fontSize={{ base: '16px', md: '20px' }}
        borderTop={{ base: `1px solid ${EWCGMLN_FONT_YELLOW}`, md: 'none' }}
        width="fit-content"
      >
        2024年1月22日至2024年3月31日
      </Box>
    </Flex>

    <Flex flexDir="column" mt={5}>
      <Box>
        活动对象: 所有已報名並在活动时间内入金到WCG
        MARKETS真实交易帐户的马来西亚客户。
      </Box>
      <Box fontSize="14px">
        Promotion target: All Malaysian customers who have registered and
        deposited funds into WCG MARKETS real trading account during the
        activity time.
      </Box>
    </Flex>

    {/* 5 balls */}
    <Flex
      mt={20}
      flexWrap="wrap"
      width="fit-content"
      maxW="500px"
      justify="center"
    >
      <Image
        p={3}
        width="33%"
        src="/../assets/images/activity_EWCGMLN_01.jpg"
        alt="activity_EWCGMLN_01"
      />

      <Image
        p={3}
        width="33%"
        src="/../assets/images/activity_EWCGMLN_02.jpg"
        alt="activity_EWCGMLN_02"
      />

      <Image
        p={3}
        width="33%"
        src="/../assets/images/activity_EWCGMLN_03.jpg"
        alt="activity_EWCGMLN_03"
      />

      <Image
        p={3}
        width="33%"
        src="/../assets/images/activity_EWCGMLN_04.jpg"
        alt="activity_EWCGMLN_04"
      />

      <Image
        p={3}
        width="33%"
        src="/../assets/images/activity_EWCGMLN_05.jpg"
        alt="activity_EWCGMLN_05"
      />
    </Flex>

    {/* 500USD GIFT */}
    {/* Mobile */}
    <Box
      maxW="95vw"
      display={{ base: 'block', md: 'none' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_1_M.jpg"
        alt="activity_EWCGMLN_1_M"
      />

      <Flex
        zIndex={1}
        position="absolute"
        bottom="3px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Mini Wireless Car Vacuum
        </Box>
        <Box flex={1} px={1}>
          Bean Bag Lazy Sofa
        </Box>
        <Box flex={1} px={1}>
          Karaoke Speaker With Wireless Microphone
        </Box>
      </Flex>
    </Box>
    {/* PC */}
    <Box
      maxW="1100px"
      display={{ base: 'none', md: 'block' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_1.jpg"
        alt="activity_EWCGMLN_1"
      />
      <Flex
        zIndex={1}
        position="absolute"
        bottom="30px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Mini Wireless Car Vacuum
        </Box>
        <Box flex={1} px={1}>
          Bean Bag Lazy Sofa
        </Box>
        <Box flex={1} px={1}>
          Karaoke Speaker With Wireless Microphone
        </Box>
      </Flex>
    </Box>

    {/* 1000USD GIFT */}
    {/* Mobile */}
    <Box
      maxW="95vw"
      display={{ base: 'block', md: 'none' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_2_M.jpg"
        alt="activity_EWCGMLN_2_M"
      />

      <Flex
        zIndex={1}
        position="absolute"
        bottom="3px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Cup Holder & USB Charger Luggage
        </Box>
        <Box flex={1} px={1}>
          Xiaomi Redmi Watch 3
        </Box>
        <Box flex={1} px={1}>
          Multifunctional Rice Cooker
        </Box>
      </Flex>
    </Box>
    {/* PC */}
    <Box
      maxW="1100px"
      display={{ base: 'none', md: 'block' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_2.jpg"
        alt="activity_EWCGMLN_2"
      />
      <Flex
        zIndex={1}
        position="absolute"
        bottom="30px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Cup Holder & USB Charger Luggage
        </Box>
        <Box flex={1} px={1}>
          Xiaomi Redmi Watch 3
        </Box>
        <Box flex={1} px={1}>
          Multifunctional Rice Cooker
        </Box>
      </Flex>
    </Box>

    {/* 3000USD GIFT */}
    {/* Mobile */}
    <Box
      maxW="95vw"
      display={{ base: 'block', md: 'none' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_3_M.jpg"
        alt="activity_EWCGMLN_3_M"
      />

      <Flex
        zIndex={1}
        position="absolute"
        bottom="3px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Redmi Buds 4 Pro
        </Box>
        <Box flex={1} px={1}>
          Xiaomi Smart Air Fryer
        </Box>
        <Box flex={1} px={1}>
          Xiaomi Mijia Electric Oven
        </Box>
      </Flex>
    </Box>
    {/* PC */}
    <Box
      maxW="1100px"
      display={{ base: 'none', md: 'block' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_3.jpg"
        alt="activity_EWCGMLN_3"
      />
      <Flex
        zIndex={1}
        position="absolute"
        bottom="30px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Redmi Buds 4 Pro
        </Box>
        <Box flex={1} px={1}>
          Xiaomi Smart Air Fryer
        </Box>
        <Box flex={1} px={1}>
          Xiaomi Mijia Electric Oven
        </Box>
      </Flex>
    </Box>

    {/* 5000USD GIFT */}
    {/* Mobile */}
    <Box
      maxW="95vw"
      display={{ base: 'block', md: 'none' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_4_M.jpg"
        alt="activity_EWCGMLN_4_M"
      />

      <Flex
        zIndex={1}
        position="absolute"
        bottom="3px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Xiaomi MI XM-K8 Pro Wireless Vacuum Cleaner
        </Box>
        <Box flex={1} px={1}>
          Multifunctional Household Smokeless Electric Barbecue
        </Box>
        <Box flex={1} px={1}>
          Automatic Retro Series Coffee Machine
        </Box>
      </Flex>
    </Box>
    {/* PC */}
    <Box
      maxW="1100px"
      display={{ base: 'none', md: 'block' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_4.jpg"
        alt="activity_EWCGMLN_4"
      />
      <Flex
        zIndex={1}
        position="absolute"
        bottom="30px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Xiaomi MI XM-K8 Pro Wireless Vacuum Cleaner
        </Box>
        <Box flex={1} px={1}>
          Multifunctional Household Smokeless Electric Barbecue
        </Box>
        <Box flex={1} px={1}>
          Automatic Retro Series Coffee Machine
        </Box>
      </Flex>
    </Box>

    {/* 10000USD GIFT */}
    {/* Mobile */}
    <Box
      maxW="95vw"
      display={{ base: 'block', md: 'none' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_5_M.jpg"
        alt="activity_EWCGMLN_5_M"
      />

      <Flex
        zIndex={1}
        position="absolute"
        bottom="3px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Huawei MatePad SE Tablet
        </Box>
        <Box flex={1} px={1}>
          POHKONG GOLD BAR 999.9 (3G)
        </Box>
        <Box flex={1} px={1}>
          TOUCH N GO CASH MONEY
        </Box>
      </Flex>
    </Box>
    {/* PC */}
    <Box
      maxW="1100px"
      display={{ base: 'none', md: 'block' }}
      mt={10}
      position="relative"
    >
      <Image
        src="/../assets/images/activity_EWCGMLN_5.jpg"
        alt="activity_EWCGMLN_5"
      />
      <Flex
        zIndex={1}
        position="absolute"
        bottom="30px"
        width="100%"
        color={EWCGMLN_FONT_YELLOW}
      >
        <Box flex={1} px={1}>
          Huawei MatePad SE Tablet
        </Box>
        <Box flex={1} px={1}>
          POHKONG GOLD BAR 999.9 (3G)
        </Box>
        <Box flex={1} px={1}>
          TOUCH N GO CASH MONEY
        </Box>
      </Flex>
    </Box>
  </Flex>
);

const EWCGMLNButtons: React.FC<{}> = () => (
  <Flex
    bg={EWCGMLN_BG}
    color={EWCGMLN_FONT_WHITE}
    justify="center"
    py={10}
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
      borderRadius="5px"
      border="1px solid white"
      bg={EWCGMLN_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href="/"
      isExternal
    >
      WEBSITE
    </Link>
    <Link
      width="30vw"
      maxW="200px"
      textAlign="center"
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={EWCGMLN_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href={
        'https://clientportal.wcgmarkets-asia.com/register/trader?link_id=vilef578&referrer_id=2237'
      }
      isExternal
    >
      REGISTER
    </Link>
    <Link
      width="30vw"
      maxW="200px"
      textAlign="center"
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={EWCGMLN_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href={links.liveChat}
      isExternal
    >
      SUPPORT
    </Link>
  </Flex>
);

const EWCGMLNRules: React.FC<{}> = () => (
  <Flex bg={EWCGMLN_FOOTER_BG} color={EWCGMLN_FONT_WHITE} justify="center">
    <Stack
      my={'6em'}
      width={{ base: '90vw', md: '80vw' }}
      spacing={{ base: 1, md: 3 }}
      fontSize={{ base: '10px', md: '14px' }}
      textAlign={{ base: 'center', md: 'center' }}
    >
      <Box>● 活动条款</Box>
      <Box>Promotion terms:</Box>
      <Box>1. 客户需主动向客服申请参加活动。</Box>
      <Box>
        Customers need to actively apply to customer service to participate in
        the Promotion.
      </Box>
      <Box>2. 入金金额须达500美元或以上方可享受优惠。</Box>
      <Box>
        The deposit amount must be $500 or above to be eligible for the offer.
      </Box>
      <Box>3. 礼品或现金将在活動完結14个工作日内发放。</Box>
      <Box>
        Gift or cash will be deposited within 14 working days after Promotion.
      </Box>
      <Box>4. 客户于活动期间出金会取消活动资格。</Box>
      <Box>
        Customers who withdraw funds during the Promotion will be disqualified
        from the Promotion.
      </Box>
      <Box>5. 入金层级和手数要求会在活动期间累积计算。</Box>
      <Box>
        Deposit level and lot size requirements will be calculated cumulatively
        during the event period.
      </Box>
      <Box>6. 公司保留随时修改、终止活动及收回信用额的权利。</Box>
      <Box>
        The company reserves the right to amend, terminate the promotion and
        claw back the credit at any time.
      </Box>
      <Box>7. 此优惠不可与公司其他优惠同时使用。</Box>
      <Box>
        This offer cannot be used in conjunction with other company offers.
      </Box>
      <Box>8. 公司保留活动最终解释权。</Box>
      <Box>
        The company reserves the right of final interpretation of the promotion.
      </Box>
      <Box>
        9.
        高风险投资警告差价合约（CFD）属复杂的金融产品，其使用杠杆交易的属性导致本金快速亏损的可能性较高，您有可能因此被要求追加保证金。请在入市前先了解差价合约的产品原理幷考虑是否能够承受此风险。所有金融衍生产品工具的过往价格与表现幷不担保或代表未来走势。此类金融产品幷不适合所有投资者，请务必在入市前完全了解所有潜在的风险，幷在有需要时寻求独立意见。
      </Box>
      <Box>
        High risk investment warning: CFDs are complex financial products, using
        leverage can lead to the high possibility of losing the principal
        quickly. You may be required to deposit additional margin. Please
        understand the product mechanics and consider whether you can withstand
        the risks before trading. Past prices and performance of financial
        derivative products do not guarantee or indicate future trends. Such
        financial products may not be suitable for all investors, please fully
        understand all potential risks and seek independent advice if necessary
        before entering the market.
      </Box>
      <Box>10. 活动名额有限送完即止。</Box>
      <Box>Promotion quotas are limited, first come first served.</Box>
      <Box>11. 每位客户只可使用一个账号参加此活动一次。</Box>
      <Box>
        Each customer can only participate in this promotion once with one
        account.
      </Box>
      <Box>
        12. WCG
        将保留权利随时修改或终止此促销活动,任何修改或终止活动的通知将以WCG
        Markets发出的公布为准。
      </Box>
      <Box>
        WCG reserves the right to amend or terminate this promotion at any time.
        Any amendments or termination notices will be subject to WCG
        Markets&apos; announcements.
      </Box>
      <Box>
        13.
        所有异常交易包括通过超短线刷单(15分钟内)、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内(异常交易的定义参阅WCG官网)。
      </Box>
      <Box>
        All abnormal transactions including ultra-short-term order brushing
        (within 15 minutes), AB position trading, or the use of plug-in software
        or other computer programs that cause multiple accounts to place orders
        at the same time using the same IP address, as well as transactions
        completed by other suspicious operations will be considered It is an
        invalid trading lot and is not included in the calculation range of this
        activity (for the definition of abnormal transactions, please refer to
        the WCG official website).
      </Box>
    </Stack>
  </Flex>
);

export default EWCGMLN;
