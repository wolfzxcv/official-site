import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

const WCGQYHK: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Flex
        display={{ base: 'none', md: 'block' }}
        bgImage="/../assets/images/activity_WCGQYHK.jpg"
        bgPosition="top center"
        bgSize="cover"
        height="100vh"
      >
        <Flex flexDir="column" align="center" justify="center">
          <Flex pt="520px" justify="space-evenly" width="700px">
            <Link
              _hover={{
                opacity: 0.8,
                transition: '1s'
              }}
              href="/"
              isExternal
            >
              <Image
                src="/../assets/images/activity_WCGQYHK_b1.png"
                alt="activity_WCGQYHK_b1"
              />
            </Link>

            <Link
              _hover={{
                opacity: 0.8,
                transition: '1s'
              }}
              href={links.userCenterZH}
              isExternal
            >
              <Image
                src="/../assets/images/activity_WCGQYHK_b2.png"
                alt="activity_WCGQYHK_b2"
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
                src="/../assets/images/activity_WCGQYHK_b3.png"
                alt="activity_WCGQYHK_b3"
              />
            </Box>
          </Flex>
          <Box
            pt="20px"
            width="600px"
            fontSize="12px"
            fontWeight="600"
            color="white"
          >
            <WCGQYHKContent />
          </Box>
        </Flex>
      </Flex>

      {/* Mobile layout less than 831px */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        minH="710px"
        bg="#34c0e1"
        bgImage="/../assets/images/activity_WCGQYHK_M.jpg"
        bgPosition="top center"
        bgSize="cover"
        flexDir="column"
        align="center"
      >
        <Flex pt="400px" pb="10px" justify="center">
          <Link href="/" isExternal width="30%">
            <Image
              src="/../assets/images/activity_WCGQYHK_b1.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Link href={links.userCenterZH} isExternal width="30%">
            <Image
              src="/../assets/images/activity_WCGQYHK_b2.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Box width="30%" onClick={openChatWindow}>
            <Image
              src="/../assets/images/activity_WCGQYHK_b3.png"
              alt="Instagram"
            />
          </Box>
        </Flex>

        <Box p={3} width="90vw" fontSize="8px" color="white">
          <WCGQYHKContent />
        </Box>
      </Flex>
    </>
  );
};

const WCGQYHKContentSign: React.FC<{}> = () => <>{'● '}</>;

export const WCGQYHKContent: React.FC<{}> = () => (
  <>
    <Box my={3}>活动规则及注意事项</Box>
    <Box>
      <WCGQYHKContentSign />
      活动时间:7月1日-7月31日
    </Box>
    <Box>
      <WCGQYHKContentSign />
      如活动期间出金则视为放弃本次活动，会自动扣回体验金
    </Box>
    <Box>
      <WCGQYHKContentSign />
      所有经本次活动发放的体验金会统一在2022年8月1日自动从客人户口扣除
    </Box>
    <Box>
      <WCGQYHKContentSign />
      若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，WCG有权停止客户交易，取消活动资格井按照WCG交易细则中异常交易的处理方法进行处理
    </Box>

    <Box>
      <WCGQYHKContentSign />
      公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户
    </Box>
  </>
);

export default WCGQYHK;
