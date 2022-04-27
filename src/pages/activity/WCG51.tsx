import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Locales } from '@/i18n/config';
import { openChatWindow } from '@/utils/openChatWindow';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const WCG51: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Box
        display={{ base: 'none', xl: 'block' }}
        bgImage="../assets/images/activity_WCG51.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        height="2905px"
        pt="800px"
      >
        <Flex pb="1580px" justify="center">
          <NextLink passHref={true} href="/" locale={currentLang}>
            <Image
              _hover={{
                opacity: 0.8,
                transition: '1s',
                cursor: 'pointer'
              }}
              src="../assets/images/activity_WCG51_b1.png"
              alt="Instagram"
              mr={3}
            />
          </NextLink>

          <Link
            _hover={{
              opacity: 0.8,
              transition: '1s'
            }}
            href={links.registerReal}
            isExternal
          >
            <Image
              src="../assets/images/activity_WCG51_b2.png"
              alt="Instagram"
              mr={3}
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
              src="../assets/images/activity_WCG51_b3.png"
              alt="Instagram"
            />
          </Box>
        </Flex>
        <Flex justify="center">
          <Stack
            spacing={1}
            color="white"
            width="650px"
            textAlign="center"
            fontSize="14px"
          >
            <Box>
              公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户。
            </Box>
            <Box>每位WCG客户只可使用一个账号参加此活动。</Box>
            <Box>
              若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，WCG有权停止客户交易，取消活动资格并按照WCG交易细则中异常交易的处理方法进行处理。
            </Box>
            <Box>
              贵金属，原油交易手数定义; 黄金 1标准手100盎司，白银
              1标准手2500盎司，原油1标准手1000桶。
            </Box>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default WCG51;
