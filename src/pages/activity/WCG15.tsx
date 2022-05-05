import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils/openChatWindow';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import React from 'react';

const WCG15: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Box
        display={{ base: 'none', md: 'block' }}
        bgImage="../assets/images/activity_WCG15.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        height="1798px"
        pt="1300px"
      >
        <Flex pb="180px" justify="center">
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
              src="../assets/images/activity_WCG15_b1.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Link
            _hover={{
              opacity: 0.8,
              transition: '1s'
            }}
            href={links.registerReal}
            isExternal
          >
            <Image
              src="../assets/images/activity_WCG15_b2.png"
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
              src="../assets/images/activity_WCG15_b3.png"
              alt="Instagram"
            />
          </Box>
        </Flex>
        <Flex justify="center">
          <Stack spacing={1} color="white" width="700px" fontSize="14px">
            <Box>活动规则及注意事项</Box>
            <Box>
              1.
              客户在活动期间完成所属的入金交易手数要求，即可将信用额赠金转为现金。
            </Box>
            <Box>
              2.
              客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
            </Box>
            <Box>3. 每位客户只可使用一个账号参加此活动一次。</Box>
            <Box>
              4. WCG
              将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以
              WCG Markets 发出的公布为准。
            </Box>
            <Box>
              5.
              所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内
              (异常交易的定义参阅WCG官网)。
            </Box>
          </Stack>
        </Flex>
      </Box>

      {/* Mobile layout less than 831px */}
      <Flex
        overflow="hidden"
        display={{ base: 'flex', md: 'none' }}
        bgImage="../assets/images/activity_WCG15_M.jpg"
        bgPosition="top center"
        bgSize="cover"
        height="1615px"
        pt="600px"
        flexDir="column"
        align="center"
      >
        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="../assets/images/activity_WCG15_M_01.png"
            alt="activity_WCG15_M_02"
          />
        </Flex>
        <Flex my="100px" justify="center" w="95vw">
          <Link href="/" isExternal>
            <Image
              src="../assets/images/activity_WCG15_M_b1.png"
              alt="Instagram"
              mx={1}
            />
          </Link>

          <Link href={links.registerReal} isExternal>
            <Image
              src="../assets/images/activity_WCG15_M_b2.png"
              alt="Instagram"
              mx={1}
            />
          </Link>

          <Box onClick={openChatWindow}>
            <Image
              src="../assets/images/activity_WCG15_M_b3.png"
              alt="Instagram"
              mx={1}
            />
          </Box>
        </Flex>
      </Flex>
      <Flex
        overflow="hidden"
        display={{ base: 'flex', md: 'none' }}
        bg="#d43f3a"
        justify="center"
        py={10}
      >
        <Stack spacing={1} w="85vw" color="white" fontSize="12px">
          <Box mb={1}>活动规则及注意事项</Box>
          <Box>
            1.
            客户在活动期间完成所属的入金交易手数要求，即可将信用额赠金转为现金。
          </Box>
          <Box>
            2.
            客户在活动期间内申请提取全部或大部分资金将取消此活动资格，并实时取消所获赠金。
          </Box>
          <Box>3. 每位客户只可使用一个账号参加此活动一次。</Box>
          <Box>
            4. WCG
            将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以 WCG
            Markets 发出的公布为准。
          </Box>
          <Box>
            5.
            所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内
            (异常交易的定义参阅WCG官网)。
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default WCG15;
