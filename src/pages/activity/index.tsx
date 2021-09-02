import { Box, Center, Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

const dark = '#182227';
const light = '#f0edc0';
const black = 'black';
const white = 'white';
const tableGray = '#242d32';
const leftButton = '#2c5468';
const rightButton = '#cc2727';

const Activity: React.FC<{}> = () => {
  return (
    <>
      <Box
        maxW="1920px"
        maxH="319px"
        bgImage="../assets/images/activity_banner.png"
        bgPosition="center"
      >
        <Center>
          <Image
            margin="auto"
            width="100vw"
            maxW="783px"
            height="auto"
            src="../assets/images/activity_banner_word.png"
            alt="banner_word"
          />
        </Center>
      </Box>
      <Flex
        bg={dark}
        padding={{ base: 10, md: 20 }}
        flexDirection="column"
        align="center"
      >
        <Box>
          <Box
            maxW="800px"
            color={white}
            borderColor={white}
            borderTop="1px"
            borderBottom="1px"
            paddingX={{ base: 0, md: 10 }}
            paddingY={5}
            fontSize={{ base: '12px', md: '36px' }}
            textAlign="center"
          >
            交易即送赠金！每人最高可领20000美元！
          </Box>
          <Box
            color={black}
            bg={white}
            marginTop={{ base: 5, md: 10 }}
            paddingX={{ base: 1, md: 10 }}
            paddingY={{ base: 3, md: 5 }}
            fontSize={{ base: '10px', md: '22px' }}
            fontWeight="600"
          >
            活动时间：2021年09月1日05:00 – 2021年11月30日05:00（北京时间）
          </Box>

          <Box
            color={white}
            marginTop={{ base: 5, md: 10 }}
            fontSize={{ base: '10px', md: '18px' }}
            fontWeight="600"
            textAlign="left"
          >
            <Text>活动产品：美原油、布伦特原油</Text>
            <Text>活动对象： WCG新客户</Text>
          </Box>

          <Box
            color={white}
            marginTop={5}
            fontSize={{ base: '10px', md: '18px' }}
            fontWeight="600"
            textAlign="left"
            maxW="680px"
          >
            活动期间内，只要于WCG Markets Ltd
            进行原油产品交易，可享：每手原油点差回赠10美金！每累积交易满20手，更额外赠送200美金！每位客户赠金总额最高20,000
          </Box>
        </Box>
      </Flex>
      <Flex
        maxW="1920px"
        maxH="524px"
        bgImage="../assets/images/activity_towers.png"
        bgPosition="center"
        padding={10}
        flexDirection="column"
        align="center"
      >
        <Box
          maxW="750px"
          color={light}
          width={{ base: '85vw', md: '80vw' }}
          textAlign="left"
        >
          <Box fontSize={{ base: '10px', md: '18px' }}>具体赠金：</Box>
          {/* <Flex>
            <Box bg={dark}>具体赠金：</Box>
            <Box bg={dark}>具体赠金：</Box>
          </Flex>
          <Box bg={dark}>具体赠金：</Box> */}
        </Box>
      </Flex>
      <Flex
        bg={dark}
        padding={{ base: 10, md: 20 }}
        flexDirection="column"
        align="center"
        fontSize={{ base: '10px', md: '18px' }}
      >
        <Box width={{ base: '85vw', md: '80vw' }} maxW="750px">
          <Box color={light}>部分手数赠金举例可参考下图：</Box>

          <StyledTable>
            <thead>
              <tr>
                <th>交易手数</th>
                <th>点差回赠（美金）</th>
                <th>额外赠金（美金）</th>
                <th>赠金总额（美金）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>10</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>20</td>
                <td>200</td>
                <td>200</td>
                <td>400</td>
              </tr>
              <tr>
                <td>40</td>
                <td>400</td>
                <td>400</td>
                <td>800</td>
              </tr>
              <tr>
                <td>60</td>
                <td>600</td>
                <td>600</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>10,000</td>
                <td>10,000</td>
                <td>20,000</td>
              </tr>
            </tbody>
          </StyledTable>

          <Center>
            <Flex
              marginTop={20}
              marginBottom={10}
              border="1px"
              borderColor={white}
              color={white}
              paddingX={10}
              paddingY={1}
            >
              <Box> </Box>
              <Stack>
                <Text>点差回赠统计时段</Text>
                <Text>北京时间：夏令，每天05:00至次日05:00</Text>
                <Text>北京时间：冬令，每天06:00至次日06:00</Text>
              </Stack>
            </Flex>
          </Center>

          <Box color={white} marginY={{ base: 2, md: 5 }}>
            点差回赠将于北京时间次日14:00前结算添加至客户交易账户。本活动每位客户最高可获赠金总额（即点差回赠与额外赠金相加总和）的上限为20,000美金。额外赠金将于活动结束后统一添加至客户交易账户。
          </Box>
          <Box color={white}>如有任何疑问，欢迎联系客服查询。</Box>

          <Flex color={white} marginTop={20} justify="center">
            <Link
              _hover={{
                textDecoration: 'none'
              }}
              href="https://direct.lc.chat/11929440/"
              isExternal
            >
              <Box
                width="40vw"
                maxW="300px"
                bg={leftButton}
                textAlign="center"
                marginX={1}
                paddingY={3}
              >
                在线咨询
              </Box>
            </Link>
            <Link
              _hover={{
                textDecoration: 'none'
              }}
              href="https://trader.wc012.com/register"
              isExternal
            >
              <Box
                width="40vw"
                maxW="300px"
                bg={rightButton}
                textAlign="center"
                marginX={1}
                paddingY={3}
              >
                立即开户
              </Box>
            </Link>
          </Flex>
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
          <Text>1. 任何争议WCG Markets Ltd保留最终决定权及最终解释权利;</Text>
          <Text>2. 每位WCG Markets Ltd客户只可使用一个账号参加此活动</Text>
          <Text>
            3. WCG Markets Ltd
            有权对企图篡改或违反本活动细则条款的客户取消活动资格;
          </Text>
          <Text>
            4. 如客户在活动期间,提取全部或部分资金,
            将取消此活动资格,并实时取消所获赠金
          </Text>
          <Text>5. 原油交易手数定义; 一标准手数原油等于1000桶</Text>
          <Text>
            6. 所有异常交易将不计算活动交易手数当中 (异常交易的定义参阅WCG官网)
          </Text>
          <Text>
            7. WCG Markets Ltd 将保留权利随时修改或终止此促销活动,
            任何修改或终止活动的通知将以WCG Markets Ltd 发出的公布为准;
          </Text>
        </Stack>
      </Flex>
    </>
  );
};

const StyledTable = styled.table`
  margin: 30px 0;
  color: ${light};
  border: 1px solid ${light};
  max-width: 700px;
  td,
  th {
    padding: 0 20px;
    line-height: 3;
    border: 1px solid ${light};
    text-align: center;
  }
  tr:nth-child(even) {
    background: ${tableGray};
  }
  tr:not(:first-child) {
    color: ${white};
  }
  border-collapse: collapse;
`;

export default Activity;
