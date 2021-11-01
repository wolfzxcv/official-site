import { Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import LiveChat from '../../components/LiveChat/LiveChat';
import { openChatWindow } from '../../utils';

const white = 'white';
const yellow = '#FFD800';
const blue = '#2b8dff';
const blue2 = '#295fe5';
const darkRed = '#620000';

const WCGI: React.FC<{}> = () => {
  return (
    <>
      <Box
        bgImage="../assets/images/activity_WCGI_bg.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        height="3370px"
        pb={10}
      >
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
                    src="../assets/images/activity_JYSL_icon_1.png"
                    alt="icon_1"
                  />
                  官网首页
                </Box>
              </Link>

              <Box
                _hover={{ cursor: 'pointer' }}
                onClick={openChatWindow}
                ml={3}
                height="1.2em"
              >
                <Image
                  mr={1}
                  display="inline"
                  height="inherit"
                  width="auto"
                  src="../assets/images/activity_JYSL_icon_2.png"
                  alt="icon_2"
                />
                在线客服
              </Box>
            </Flex>
          </Flex>
        </Center>

        <Center>
          <Flex
            py={15}
            width={{ base: '85vw', md: '1020px' }}
            wrap="wrap-reverse"
            justify={{ base: 'center', md: 'space-between' }}
          >
            <Center width={{ base: '90%', md: '50%' }}>
              <Image
                margin="auto"
                src="../assets/images/activity_JYSL_laptop.png"
                alt="laptop"
              />
            </Center>
            <Center width={{ base: '90%', md: '50%' }}>
              <Image
                margin="auto"
                src="../assets/images/activity_JYSL_word.png"
                alt="word"
              />
            </Center>
          </Flex>
        </Center>

        <Flex
          flexDirection="column"
          align="center"
          fontSize={{ base: '14px', md: '22px' }}
          fontWeight="600"
          pb={10}
        >
          <Box
            width={{ base: '70%', md: '750px' }}
            color={white}
            paddingX={{ base: '1rem', md: 10 }}
            fontWeight="600"
          >
            <Text>
              活动时间：2021年11月1日05:00 – 2022年1月30日05:00（北京时间）
            </Text>
            <Text>活动产品：黄金，白银</Text>
            <Text>活动对象： WCG特选客户</Text>
          </Box>

          <Box my={10} width={{ base: '70%', md: 'auto' }}>
            <Link
              _hover={{
                textDecoration: 'none'
              }}
              href="https://trader.wc012.com/register"
              isExternal
            >
              <Image
                height="auto"
                src="../assets/images/activity_JYSL_buttonb.png"
                alt="b"
              />
            </Link>
          </Box>

          <Box
            width="100%"
            maxW="750px"
            color={white}
            px={{ base: '1rem', md: 10 }}
            textAlign="center"
          >
            <Text>活动期间内，只要于WCG 进行贵金属产品交易</Text>
          </Box>
          <Box
            width={{ base: '100%', md: 'auto' }}
            color={yellow}
            bg={blue}
            p={3}
            my={{ base: 5, md: 2 }}
            fontSize={{ base: 'inherit', md: '30px' }}
            textAlign="center"
          >
            最高可享：每手点差回赠可高达20美金！回赠即时提取！
          </Box>
          <Box
            width="100%"
            maxW="780px"
            color={white}
            px={{ base: '1rem', md: 10 }}
            textAlign="center"
          >
            <Text>
              入金100美元或以上即可享有10%信用额赠金,最高5000美元信用额赠金，只要完成交易手数要求即可提取赠金附送京东商城现金卡。
            </Text>
          </Box>
        </Flex>
        <Center>
          <Flex
            bg={blue}
            py={5}
            width={{ base: '85vw', md: '800px' }}
            justify="space-evenly"
            align="center"
          >
            <Image
              width={{ base: '50%', md: '40%' }}
              height="auto"
              src="../assets/images/activity_JYSL_20.png"
              alt="20"
            />
          </Flex>
        </Center>
        <Center>
          <Flex
            bg={blue}
            width={{ base: '85vw', md: '800px' }}
            justify="space-evenly"
            align="center"
          >
            <Image
              width={{ base: '40%', md: '30%' }}
              height="auto"
              src="../assets/images/activity_JYSL_15.png"
              alt="15"
            />
            <Image
              width={{ base: '40%', md: '30%' }}
              height="auto"
              src="../assets/images/activity_JYSL_5.png"
              alt="5"
            />
          </Flex>
        </Center>

        <Center>
          <Flex
            bg={blue}
            color={white}
            width={{ base: '85vw', md: '800px' }}
            px={{ base: 5, md: 20 }}
            py={10}
            justify="space-evenly"
            align="center"
          >
            举例：王先生注册账号后首次入金1000美元，可获得100美元的首充赠金，在活动期间完成20手交易，王先生总共可提现100美元首充赠金及300美元点差回赠并获得＄1000人民币京东卡一张。
          </Flex>
        </Center>

        <Center>
          <Flex
            bg={blue}
            color={white}
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
              src="../assets/images/activity_JYSL_buttona.png"
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
                src="../assets/images/activity_JYSL_buttonb.png"
                alt="b"
              />
            </Link>
          </Flex>
        </Center>

        <Center>
          {/* 加入公众号 */}
          <Flex bg={blue2} justify="center">
            <Flex
              bg={blue}
              color={white}
              width={{ base: '85vw', md: '800px' }}
              px={{ base: 5, md: 20 }}
              py={10}
              flexDirection="column"
              justify="center"
              align="center"
            >
              <Box width="100%" textAlign="center">
                加入公众号
              </Box>
              <Box pt={5}>
                <Image
                  height="auto"
                  width="100%"
                  src="../assets/images/activity_JYSL_GZH_LOGO.png"
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

export default WCGI;
