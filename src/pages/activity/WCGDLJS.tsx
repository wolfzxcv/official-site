import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

const WCGDLJS: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Flex
        display={{ base: 'none', md: 'block' }}
        bgImage="../assets/images/activity_WCGDLJS.jpg"
        bgPosition="top center"
        bgSize="cover"
        height="1103px"
      >
        <Flex flexDir="column" align="center" justify="center">
          <Flex pt="460px" justify="space-evenly" width="700px">
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
                src="../assets/images/activity_WCGDLJS_b1.png"
                alt="activity_WCGDLJS_b1"
              />
            </Link>

            <Link
              _hover={{
                opacity: 0.8,
                transition: '1s'
              }}
              href={process.env.NEXT_PUBLIC_USERS_CENTER_ZH}
              isExternal
            >
              <Image
                src="../assets/images/activity_WCGDLJS_b2.png"
                alt="activity_WCGDLJS_b2"
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
                src="../assets/images/activity_WCGDLJS_b3.png"
                alt="activity_WCGDLJS_b3"
              />
            </Box>
          </Flex>
          <Box pt="20px" width="600px" fontSize="12px" fontWeight="600">
            <WCGDLJSContent />
          </Box>
        </Flex>
      </Flex>

      {/* Mobile layout less than 831px */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        minH="710px"
        bg="#34c0e1"
        backgroundImage="url('../assets/images/activity_WCGDLJS_M.jpg')"
        bgPosition="top center"
        bgSize="cover"
        flexDir="column"
        align="center"
      >
        <Flex pt="360px" pb="10px" justify="center">
          <Link href="/" isExternal width="30%">
            <Image
              src="../assets/images/activity_WCGDLJS_b1.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Link
            href={process.env.NEXT_PUBLIC_USERS_CENTER_ZH}
            isExternal
            width="30%"
          >
            <Image
              src="../assets/images/activity_WCGDLJS_b2.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Box width="30%" onClick={openChatWindow}>
            <Image
              src="../assets/images/activity_WCGDLJS_b3.png"
              alt="Instagram"
            />
          </Box>
        </Flex>

        <Box p={3} width="90vw" fontSize="8px" color="white">
          <WCGDLJSContent />
        </Box>
      </Flex>
    </>
  );
};

const WCGDLJSContentSign: React.FC<{}> = () => <>{'● '}</>;

export const WCGDLJSContent: React.FC<{}> = () => (
  <>
    <Box my={3}>活动规则及注意事项</Box>
    <Box>
      <WCGDLJSContentSign />
      活动时间:7月1日-7月31日
    </Box>
    <Box>
      <WCGDLJSContentSign />
      全新客户定义:过去一年未有在WCG MARKETS开户
    </Box>
    <Box>
      <WCGDLJSContentSign />
      活跃客户定义:活动期间入金不低于1000美元并交易手数不低于一手
    </Box>
    <Box>
      <WCGDLJSContentSign />
      奖金于活动结束14天内发放
    </Box>
    <Box>
      <WCGDLJSContentSign />
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户
    </Box>
    <Box>
      <WCGDLJSContentSign />
      若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，
      WCG有权停止客户交易，取消活动资格并按照WCG交易细则中異常交易的处理方法进行处理
    </Box>
    <Box>
      <WCGDLJSContentSign />
      贵金属，原油交易手数定义：黄金1标准手100盎司，白银一标准手2500盎司，原油1标准手1000桶
    </Box>
    <Box>
      <WCGDLJSContentSign />
      如活动期间出金则视为放弃本次活动
    </Box>
  </>
);

export default WCGDLJS;
