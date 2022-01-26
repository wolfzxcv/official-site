import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const white = 'white';
const yellow = '#FFD800';
const blue = '#2b8dff';
const blue2 = '#295fe5';
const darkBlue = '#18284f';

const JYSL: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <Box
        bgImage="../assets/images/activity_JYSL_bg.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        pb={10}
      >
        <Center>
          <Flex
            py={5}
            width={{ base: '85vw', md: '750px' }}
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
                ml={5}
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
              href={links.registerReal}
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
              href={links.registerReal}
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

      {/* grass */}
      <Flex
        maxW="100vw"
        height="193px"
        display={{ base: 'none', md: 'block' }}
        bg={blue2}
      >
        <Box
          width="100%"
          height="100%"
          bgImage="../assets/images/activity_JYSL_grass.png"
          bgPosition="center"
          bgRepeat="no-repeat"
        ></Box>
      </Flex>

      {/* 注意事项 */}
      <Flex
        bg={darkBlue}
        padding={{ base: 10, md: 20 }}
        flexDirection="column"
        align="center"
        fontSize={{ base: '12px', md: '12px' }}
      >
        <Stack
          spacing={2}
          color={white}
          maxW="750px"
          width={{ base: '85vw', md: '80vw' }}
        >
          <Text>注意事项</Text>
          <Text>1. 每位WCG客户只可使用一个账号参加此活动.</Text>
          <Text>2. 点差回赠将于北京时间次日14:00前结算添加至客户交易账户.</Text>
          <Text>
            3. 首充赠金发放后60天内完成相应的交易手数；贵金属交易手数定义; 黄金
            1标准手100盎司，白银
            1标准手2500盎司(持仓低于5分钟的订单不计入本次活动的手数)
          </Text>
          <Text>
            4.
            若客户通过超短线刷单，AB仓交易或者不正规交易套取赠金，WCG有权停止客户交易，取消赠金并按照WCG交易细则中异常交易的处理方法进行处理.
          </Text>
          <Text>
            5.
            客户在完成活动前，若产生账号结余为负数，且持仓单数为零，则提前自动结束活动，客户账号结余归零。客户再次注资，平台也不会扣除此负数金额.
          </Text>
          <Text>
            6.
            3个等级赠金只可选择其中一个，只在账户首次入金时选取，不可重复领取.
          </Text>
          <Text>
            7.
            客户在活动期间内申请提取全部或部分资金将取消此活动资格,并实时取消赠金.
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

export default JYSL;
