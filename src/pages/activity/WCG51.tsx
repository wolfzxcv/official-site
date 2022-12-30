import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { openChatWindow } from '@/utils/openChatWindow';
import { Box, Flex, Image, Link, Stack } from '@chakra-ui/react';
import React from 'react';

const WCG51: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />
      {/* PC layout 1280px up */}
      <Box
        display={{ base: 'none', md: 'block' }}
        bgImage="/../assets/images/activity_WCG51.jpg"
        bgPosition="center top"
        bgRepeat="no-repeat"
        height="2905px"
        pt="800px"
      >
        <Flex pb="1580px" justify="center">
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
              src="/../assets/images/activity_WCG51_b1.png"
              alt="Instagram"
              mr={3}
            />
          </Link>

          <Link
            _hover={{
              opacity: 0.8,
              transition: '1s'
            }}
            href={links.registerZH}
            isExternal
          >
            <Image
              src="/../assets/images/activity_WCG51_b2.png"
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
              src="/../assets/images/activity_WCG51_b3.png"
              alt="Instagram"
            />
          </Box>
        </Flex>
        <Flex justify="center">
          <Stack spacing={1} color="white" width="700px" fontSize="14px">
            <Box>
              1.
              客户在活动期间完成所属的入金及交易手数要求，即可将信用额赠金转为现金。
            </Box>
            <Box>
              2. 客户在活动期间内申请提款将取消此活动资格，并实时取消所获赠金。
            </Box>
            <Box>3. 每位客户只可使用一个账号参加此活动一次。</Box>
            <Box>
              4. WCG
              将保留权利随时修改或终止此促销活动，任何修改或终止活动的通知将以WCG
              Markets发出的公布为准。
            </Box>
            <Box>
              5.
              所有异常交易包括通过超短线刷单、AB仓交易或者利用外挂软件或其他计算机程序导致多个户口使用相同IP地址同时下单，以及其他可疑操作完成的交易将被视为无效交易手数，不计入此活动的计算范围内
              (异常交易的定义参阅WCG官网)。
            </Box>
            <Box>
              6. 贵金属手数定义：黄金 1标准手100盎司，白银 1标准手2500盎司。
            </Box>
          </Stack>
        </Flex>
      </Box>

      {/* Mobile layout less than 831px */}
      <Flex
        overflow="hidden"
        display={{ base: 'flex', md: 'none' }}
        bgImage="/../assets/images/activity_WCG51_M.jpg"
        bgPosition="top center"
        bgSize="cover"
        pt="480px"
        height="3486px"
        flexDir="column"
        align="center"
      >
        <Box
          width="300px"
          height="fit-content"
          fontSize="16px"
          bg="red.700"
          color="white"
          border="1px"
          borderColor="whiteAlpha.300"
          p={3}
        >
          WCG金送大礼，于2022年5月1日到2022年5月31日期间，户口累积入计算
        </Box>
        <Flex mt="150px" mb="100px" justify="center" w="95vw">
          <Link href="/" isExternal>
            <Image
              src="/../assets/images/activity_WCG51_M_b1.png"
              alt="Instagram"
              mx={1}
            />
          </Link>

          <Link href={links.registerZH} isExternal>
            <Image
              src="/../assets/images/activity_WCG51_M_b2.png"
              alt="Instagram"
              mx={1}
            />
          </Link>

          <Box onClick={openChatWindow}>
            <Image
              src="/../assets/images/activity_WCG51_M_b3.png"
              alt="Instagram"
              mx={1}
            />
          </Box>
        </Flex>

        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="/../assets/images/activity_WCG51_M_01.png"
            alt="activity_WCG51_M_01"
          />
        </Flex>

        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="/../assets/images/activity_WCG51_M_02.png"
            alt="activity_WCG51_M_02"
          />
        </Flex>

        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="/../assets/images/activity_WCG51_M_03.png"
            alt="activity_WCG51_M_03"
          />
        </Flex>

        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="/../assets/images/activity_WCG51_M_04.png"
            alt="activity_WCG51_M_04"
          />
        </Flex>

        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="/../assets/images/activity_WCG51_M_05.png"
            alt="activity_WCG51_M_05"
          />
        </Flex>

        <Flex w="95vw" my="70px" justify="center">
          <Image
            src="/../assets/images/activity_WCG51_M_06.png"
            alt="activity_WCG51_M_06"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default WCG51;
