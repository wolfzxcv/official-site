import { Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import LiveChat from '../../components/LiveChat/LiveChat';
import { openChatWindow } from '../../utils';

const white = 'white';
const orange = '#f55648';
const red = '#a60203';
const darkRed = '#620000';

const WCGI: React.FC<{}> = () => {
  return (
    <>
      <Box width="100%" bg={red}>
        {/* PC layout 1280px up */}
        <Box
          display={{ base: 'none', xl: 'block' }}
          bgImage="../assets/images/activity_WCGI_bg.jpg"
          bgPosition="center top"
          bgRepeat="no-repeat"
          height="3380px"
        >
          <TopLinks />

          {/*  立即開戶 */}
          <Flex
            position="absolute"
            top="930px"
            justify="space-evenly"
            width="100%"
          >
            <Box></Box>
            <Box ml={20}>
              <Link
                _hover={{
                  textDecoration: 'none'
                }}
                href="https://trader.wc012.com/register"
                isExternal
              >
                <Image
                  height="auto"
                  src="../assets/images/activity_WCGI_buttonb.png"
                  alt="b"
                />
              </Link>
            </Box>
          </Flex>

          {/* 在線諮詢 + 立即開戶 */}
          <Flex position="absolute" top="2500px" justify="center" width="100%">
            <Box mr={5}>
              <Image
                onClick={openChatWindow}
                _hover={{
                  cursor: 'pointer'
                }}
                src="../assets/images/activity_WCGI_buttona.png"
                alt="a"
              />
            </Box>

            <Box>
              <Link
                _hover={{
                  textDecoration: 'none'
                }}
                href="https://trader.wc012.com/register"
                isExternal
              >
                <Image
                  src="../assets/images/activity_WCGI_buttonb.png"
                  alt="b"
                />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* Mobile layout */}
      <Box
        width="100%"
        bg={red}
        pb={20}
        display={{ base: 'block', xl: 'none' }}
      >
        <TopLinks />

        <Image
          mx="auto"
          height="auto"
          src="../assets/images/activity_WCGI_banner_word.png"
          alt="banner_word"
        />
        <Flex bg={red} padding={10} flexDirection="column" align="center">
          <Box
            width="100%"
            maxW="680px"
            bg={white}
            color={orange}
            border="4px"
            borderColor={orange}
            borderRadius="20px"
            paddingX={{ base: '1rem', md: 10 }}
            paddingY={5}
            fontSize={{ base: '10px', md: '18px' }}
            fontWeight="600"
          >
            活动期间内，特选客户成功1,000美元或以上即可获得活动体验资格，符合资格客户完成指定交易手数可免费获得以下苹果系列产品一份。
          </Box>

          <Box
            width="100%"
            maxW="680px"
            mt={10}
            bg={red}
            color={white}
            border="4px dashed"
            borderColor={white}
            paddingX={{ base: '1rem', md: 10 }}
            paddingY={5}
            fontSize={{ base: '10px', md: '18px' }}
            fontWeight="600"
          >
            <Text>活动开始日期：2021年11月1日 — 2022年12月31日</Text>
            <Text>活动对象：特选客户及新客户 </Text>
          </Box>

          <Box my={20}>
            <Link
              _hover={{
                textDecoration: 'none'
              }}
              href="https://trader.wc012.com/register"
              isExternal
            >
              <Image
                height="auto"
                src="../assets/images/activity_WCGI_buttonb.png"
                alt="b"
              />
            </Link>
          </Box>

          <Box
            width="100%"
            maxW="750px"
            color={white}
            paddingX={{ base: '1rem', md: 10 }}
            paddingY={5}
            fontSize={{ base: '10px', md: '18px' }}
            fontWeight="600"
          >
            <Text>活动规则： </Text>
            <Text>
              １）在活动期间内成功入金1,000美元或以上即可获得参加活动资格，活动结束前完成指定交易手数可免费获得苹果系列产品一份。
            </Text>
            <Text>２）参加本次优惠活动的交易产品仅限贵金属及原油。</Text>
          </Box>
        </Flex>

        <Center>
          <Flex
            bg={white}
            py={5}
            width={{ base: '85vw', md: '800px' }}
            justify="space-evenly"
            align="center"
          >
            <Image
              width="40%"
              height="auto"
              src="../assets/images/activity_WCGI_2500.png"
              alt="15"
            />
            <Image
              width="40%"
              height="auto"
              src="../assets/images/activity_WCGI_2000.png"
              alt="5"
            />
          </Flex>
        </Center>

        <Center>
          <Flex
            bg={white}
            py={5}
            width={{ base: '85vw', md: '800px' }}
            justify="space-evenly"
            align="center"
          >
            <Image
              width="40%"
              height="auto"
              src="../assets/images/activity_WCGI_1500.png"
              alt="15"
            />
            <Image
              width="40%"
              height="auto"
              src="../assets/images/activity_WCGI_1000.png"
              alt="5"
            />
          </Flex>
        </Center>

        <Center>
          <Flex
            bg={white}
            p={10}
            width={{ base: '85vw', md: '800px' }}
            justify="space-evenly"
            align="center"
          >
            <Box
              bg={red}
              color={white}
              p={10}
              border="4px"
              borderRadius="10px"
              borderColor="orange"
            >
              例子：客户陈先生在活动期间内成功注资2,500美元，即可获得参加活动资格。陈先生在此次活动中完成了100手黄金及100手原油交易，于活动结束后可以免费获得以下苹果系列产品iPhone
              13 Pro手机一份。
            </Box>
          </Flex>
        </Center>

        <Center>
          <Flex
            bg={white}
            width={{ base: '85vw', md: '800px' }}
            px={{ base: 5, md: 20 }}
            py={10}
            justify="space-evenly"
            align="center"
            wrap="wrap"
          >
            <Image
              width={{ base: '80%', md: '50%' }}
              pr={{ base: 0, md: 2 }}
              height="auto"
              onClick={openChatWindow}
              _hover={{
                cursor: 'pointer'
              }}
              src="../assets/images/activity_WCGI_buttona.png"
              alt="a"
            />
            <Link
              _hover={{
                textDecoration: 'none'
              }}
              href="https://trader.wc012.com/register"
              isExternal
              width={{ base: '80%', md: '50%' }}
              pt={{ base: 5, md: 0 }}
              pl={{ base: 0, md: 2 }}
            >
              <Image
                height="auto"
                width="100%"
                src="../assets/images/activity_WCGI_buttonb.png"
                alt="b"
              />
            </Link>
          </Flex>
        </Center>

        <Center>
          {/* 加入公众号 */}
          <Flex bg={white} justify="center">
            <Flex
              width={{ base: '85vw', md: '800px' }}
              px={{ base: 5, md: 20 }}
              py={10}
              flexDirection="column"
              justify="center"
              align="center"
            >
              <Box pt={5}>
                <Image
                  height="auto"
                  width="100%"
                  src="../assets/images/activity_WCGI_GZH_LOGO.png"
                  alt="GZH_LOGO"
                />
              </Box>
            </Flex>
          </Flex>
        </Center>
      </Box>

      {/* 注意事项 */}
      <Flex
        bg={darkRed}
        padding={{ base: 10, md: 20 }}
        flexDirection="column"
        align="center"
        fontSize={{ base: '12px', md: '12px' }}
      >
        <Stack
          spacing={2}
          maxW="1080px"
          color={white}
          width={{ base: '90vw', md: '90vw' }}
        >
          <Text>注意事项</Text>
          <Text>
            1.
            是项优惠活动由ＷＣＧ邀请特选客户参加，特选客户符合注资要求后，即可获得参加活动资格。
          </Text>
          <Text>2. 参加本次优惠活动的交易产品仅限贵金属及原油。</Text>
          <Text>
            3.
            合资格交易指平台时间2021年11月1日00:00至2021年12月30日23:59内开仓及平仓的交易。交易手数以翌日系统结算为准
          </Text>
          <Text>
            4. 只计算活动期间内的开仓和平仓手数, 活动期间以外的交易手数不予计算
          </Text>
          <Text>
            5. 标准手数：黄金－100盎司，白银－2500盎司，原油－1000桶。
          </Text>
          <Text>
            6.
            活动有效期:客户账户获得参加活动资格开始计算至活动结束（2022年1月28日）。
          </Text>
          <Text>
            7.
            客户于活动有效期内完成指定交易手数，即可免费获得苹果系列产品奖赏一份。
          </Text>
          <Text>
            8. 每位客户只能获得一份礼品，该礼品不能作交换或兑换成现金。
          </Text>
          <Text>
            9.
            交易手数将于活动结束当天日结时结算，在与客户确认资料后会于当月将赠品发放于客户。
          </Text>
          <Text>
            10.
            活动有效期内不可取款，否则将被视为放弃获得活动奖赏资格。若客户在未完成所需交易手数前取款，将立即终⽌活动资格，且不得重新参加。
          </Text>
          <Text>
            11.
            每位客户只可参与一次活动，活动期间内销户重开的客户不享有活动参与资格。
          </Text>
          <Text>
            12. 为防止恶意套取活动奖赏，所有建仓后 5
            分钟内平仓的订单将不计入此活动的计算范围内。
          </Text>
          <Text>
            13. 所有通过超短线刷单、AB
            仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同 IP
            地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内。
          </Text>
          <Text>
            14.
            ＷＣＧ有权取消企图篡改或违反客户协议与活动条款及细则客户的参加资格。
          </Text>
          <Text>
            15.
            ＷＣＧ保留随时修改、暂停或取消优惠，或修订条款及细则而毋需事先通知之权利。如有任何争议，ＷＣＧ保留最终解释及决定权。
          </Text>
        </Stack>
      </Flex>

      <LiveChat />
    </>
  );
};

const TopLinks = () => {
  return (
    <Center>
      <Flex
        py={5}
        width={{ base: '85vw', xl: '980px' }}
        justify="space-between"
        align="center"
      >
        <Image
          width={{ base: 87, md: 109 }}
          height={{ base: 37, md: 46 }}
          src="../assets/images/activity_logo.png"
          alt="logo"
        />

        <Flex color={white} justify="center">
          <Link
            _hover={{
              textDecoration: 'none'
            }}
            href="/"
          >
            <Box height="1.2em">
              <Image
                mr={1}
                display="inline"
                height="inherit"
                width="auto"
                src="../assets/images/activity_WCGI_icon_1.png"
                alt="icon_1"
              />
              官网首页
            </Box>
          </Link>

          <Box
            _hover={{ cursor: 'pointer' }}
            onClick={openChatWindow}
            ml={5}
            height="1.2em"
          >
            <Image
              mr={1}
              display="inline"
              height="inherit"
              width="auto"
              src="../assets/images/activity_WCGI_icon_2.png"
              alt="icon_2"
            />
            在线客服
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};

export default WCGI;
