import { Box, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import LiveChat from '../../components/LiveChat';
import { openChatWindow } from '../../utils/openChatWindow';

const dark = '#0d0d29';
const black = '#000';
const white = '#FFF';
const yellow = '#FFD800';
const topButton = '#df2309';

const WCGZG: React.FC<{}> = () => {
  return (
    <>
      <Flex bg={dark} justify="center" paddingY={{ base: 1, md: 5 }}>
        <Flex
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

          <Link
            _hover={{
              textDecoration: 'none'
            }}
            href="/"
          >
            <Box
              width="30vw"
              maxW="250px"
              bg={topButton}
              textAlign="center"
              marginX={1}
              paddingY={3}
              color={white}
              borderRadius={7}
            >
              官网首页
            </Box>
          </Link>
        </Flex>
      </Flex>
      <Flex bg={dark} justify="center">
        <Box>
          <Image
            height="auto"
            src="../assets/images/activity_WCGZG_banner_pic.png"
            alt="banner_pic"
          />
        </Box>
      </Flex>

      <Flex bg={dark} justify="center">
        <Box position={{ base: 'inherit', md: 'absolute' }} zIndex="1">
          <Image
            height="auto"
            src="../assets/images/activity_WCGZG_gold.png"
            alt="5"
          />
        </Box>

        <Box display={{ base: 'none', md: 'inline' }}>
          <Image
            position="relative"
            left="1000px"
            top="80px"
            height="auto"
            src="../assets/images/activity_WCGZG_lantern.png"
            alt="lantern"
          />
        </Box>
        <Box display={{ base: 'none', md: 'inline' }}>
          <Image
            position="relative"
            right="800px"
            top="350px"
            height="auto"
            src="../assets/images/activity_WCGZG_cloud.png"
            alt="cloud"
          />
        </Box>
      </Flex>

      <Flex bg={dark} padding={10} flexDirection="column" align="center">
        <Box
          width="100%"
          maxW="680px"
          color={white}
          borderColor={white}
          borderTop="1px"
          borderBottom="1px"
          paddingX={{ base: '1rem', md: 10 }}
          paddingY={5}
          fontSize={{ base: '10px', md: '18px' }}
          fontWeight="600"
        >
          <Text>
            活动时间：2021年09月20日05:00 – 2021年10月30日05:00（北京时间）
          </Text>
          <Text>活动产品：黄金，白银</Text>
          <Text>活动对象： WCG特选新客户</Text>
        </Box>

        <Box
          width="100%"
          color={yellow}
          marginTop={{ base: 5, md: 10 }}
          paddingX={{ base: '1rem', md: 10 }}
          fontSize={{ base: '10px', md: '18px' }}
          maxW="680px"
        >
          活动期间内，只要于WCG
          进行贵金属产品交易，最高可享：每手赠金20美金！赠可即时提取，每位客户赠金总额最高10,000美金！
        </Box>
      </Flex>

      <Flex bg={dark} py={{ base: 10, md: 20 }} justify="center">
        <Flex
          width={{ base: '85vw', md: '970px' }}
          justify="space-evenly"
          align="center"
        >
          <Image
            width="30%"
            height="auto"
            src="../assets/images/activity_WCGZG_5.png"
            alt="5"
          />
          <Image
            width="30%"
            height="auto"
            src="../assets/images/activity_WCGZG_15.png"
            alt="15"
          />
          <Image
            width="30%"
            height="auto"
            src="../assets/images/activity_WCGZG_20.png"
            alt="20"
          />
        </Flex>
      </Flex>

      <Flex bg={dark} py={{ base: 10, md: 20 }} justify="center">
        <Box display={{ base: 'none', md: 'inline' }}>
          <Image
            position="relative"
            right="250px"
            top="150px"
            height="auto"
            src="../assets/images/activity_WCGZG_lantern.png"
            alt="lantern"
          />
        </Box>
        <Flex
          position={{ base: 'inherit', md: 'absolute' }}
          zIndex="1"
          width={{ base: '85vw', md: '750px' }}
          justify="space-around"
          align="center"
        >
          <Image
            width="40%"
            height="auto"
            onClick={openChatWindow}
            _hover={{
              cursor: 'pointer'
            }}
            src="../assets/images/activity_WCGZG_buttona.png"
            alt="a"
          />
          <Link
            _hover={{
              textDecoration: 'none'
            }}
            href="https://trader.wc012.com/register"
            isExternal
            width="40%"
          >
            <Image
              height="auto"
              src="../assets/images/activity_WCGZG_buttonb.png"
              alt="b"
            />
          </Link>
        </Flex>
        <Box display={{ base: 'none', md: 'inline' }}>
          <Image
            position="relative"
            left="650px"
            bottom="100px"
            height="auto"
            src="../assets/images/activity_WCGZG_cloud.png"
            alt="cloud"
          />
        </Box>
      </Flex>

      <Flex
        bg={black}
        padding={{ base: 10, md: 20 }}
        flexDirection="column"
        align="center"
        fontSize={{ base: '10px', md: '12px' }}
      >
        <Stack
          spacing={2}
          color={white}
          maxW="750px"
          width={{ base: '85vw', md: '80vw' }}
        >
          <Text>注意事项</Text>
          <Text>1. 任何争议WCG保留最终决定权及最终解释权利;</Text>
          <Text>2. 每位WCG客户只可使用一个账号参加此活动</Text>
          <Text>
            3. WCG有权对企图篡改或违反本活动细则条款的客户取消活动资格
          </Text>
          <Text>4. 活动赠金将于北京时间次日14:00前结算添加至客户交易账户</Text>
          <Text>
            5. 贵金属交易手数定义; 黄金 1标准手100盎司，白银 1标准手2500盎司
          </Text>
        </Stack>
      </Flex>

      <LiveChat />
    </>
  );
};

export default WCGZG;
