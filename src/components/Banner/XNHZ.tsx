import { Locales } from '@/i18n/config';
import { openChatWindow } from '@/utils';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { StyledBox } from '../Styled/Styled';

const XNHZ: React.FC<{}> = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Box
      minH={{ base: '600px', md: '500px' }}
      backgroundImage={{
        base: isShowDetail
          ? 'none'
          : "url('../assets/images/activity_XNHZ_M.jpg')",
        md: "url('../assets/images/activity_XNHZ.jpg')"
      }}
      bgColor="red.700"
      pt={{ base: isShowDetail ? '0' : '420px', md: 0 }}
      bgPosition="top center"
      bgSize="cover"
    >
      <Flex
        height="inherit"
        minH={{ base: '0px', md: '500px' }}
        direction="column"
        justify="center"
        align="center"
      >
        {/* Banner */}
        <Stack spacing={3} p={2} width={{ base: '90vw', xl: '70vw' }}>
          <Text
            fontWeight="700"
            fontSize={{ base: '20px', md: '36px' }}
            color="yellow"
            textAlign="left"
          >
            {currentLang === 'cn'
              ? '贵金属，原油交易每手回赠25美元'
              : '貴金屬，原油交易每手回贈25美元'}
          </Text>

          {isShowDetail && (
            <>
              <Flex>
                <Flex direction="column">
                  <Text
                    fontWeight="600"
                    fontSize={{ base: '16px', md: '18px' }}
                    color="white"
                  >
                    {currentLang === 'cn'
                      ? '活动期间:由2022年1月17日 至 2022年2月7日'
                      : '活動期間:由2022年1月17日 至 2022年2月7日'}
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize={{ base: '14px', md: '18px' }}
                    color="white"
                  >
                    {currentLang === 'cn'
                      ? '开户提供其他平台交易证明即可每手回赠25美元'
                      : '開戶提供其他平台交易證明即可每手回贈25美元'}
                  </Text>

                  <Stack
                    mt={{ base: 10, md: 5 }}
                    spacing={{ base: 10, md: 3 }}
                    width={{ base: '80vw', md: '500px' }}
                  >
                    <Text fontSize={{ base: '10px', md: '16px' }} color="white">
                      {currentLang === 'cn'
                        ? '● 每位WCG Markets 客户只可使用一个帐号参加此活动'
                        : '● 每位WCG Markets 客戶只可使用一個帳號參加此活動'}
                    </Text>
                    <Text fontSize={{ base: '10px', md: '16px' }} color="white">
                      {currentLang === 'cn'
                        ? '● 点差回赠将于活动日结束次日结算添加至客户交易帐户'
                        : '● 點差回贈將於活動日結束次日結算添加至客戶交易帳戶'}
                    </Text>
                    <Text fontSize={{ base: '10px', md: '16px' }} color="white">
                      {currentLang === 'cn'
                        ? '● 若客户通过超短线刷单持仓低于5分钟的订单不计入本次活动的手数，AB仓交易或者不正规交易套取赠金，WCG Markets 有权停止客户交易，取消活动资格并按照WCG Markets 交易细则中异常交易的处理方式进行处理'
                        : '● 若客戶通過超短線刷單持倉低於5分鐘的訂單不計入本次活動的手數，AB倉交易或者不正規交易套取贈金，WCG Markets 有權停止客戶交易，取消活動資格並按照WCG Markets 交易細則中異常交易的處理方式進行處理'}
                    </Text>
                    <Text fontSize={{ base: '10px', md: '16px' }} color="white">
                      {currentLang === 'cn'
                        ? '● 公司保留随时修改、暂停、终止本活动计划及任何相关规则条款之权利及其解释权，毋须事前通知客户'
                        : '● 公司保留隨時修改、暫停、終止本活動計劃及任何相關規則條款之權利及其解釋權，毋須事前通知客戶'}
                    </Text>
                    <Text fontSize={{ base: '10px', md: '16px' }} color="white">
                      {currentLang === 'cn'
                        ? '● 贵金属，原油交易手数定义：黄金1标准手100盎司，白银1标准手2500盎司，原油1标准手1000桶'
                        : '● 貴金屬，原油交易手數定義：黃金1標準手100盎司，白銀1標準手2500盎司，原油1標準手1000桶'}
                    </Text>
                  </Stack>
                </Flex>

                <Box
                  _hover={{
                    cursor: 'pointer'
                  }}
                  display={{ base: 'none', md: 'block' }}
                  onClick={() => setIsShowDetail(false)}
                >
                  <AiFillCloseCircle color="white" fontSize="32px" />
                </Box>
              </Flex>
              <Flex justify="center">
                <StyledBox
                  p={1}
                  mt="20"
                  width="50vw"
                  border="2px"
                  borderRadius="40px"
                  borderColor="gray.100"
                  bgColor="transparent"
                  color="gray.100"
                  textAlign="center"
                  fontSize="12px"
                  display={{ base: 'block', md: 'none' }}
                  onClick={() => setIsShowDetail(false)}
                >
                  关闭详情
                </StyledBox>
              </Flex>
            </>
          )}

          {!isShowDetail && (
            <Flex py={3} justify={{ base: 'center', md: 'flex-start' }}>
              <StyledBox
                p={{ base: 1, md: 1 }}
                width={{ base: '70vw', md: '130px' }}
                border="2px"
                borderRadius={{ base: '40px', md: '30px' }}
                borderColor="gray.100"
                bgColor="transparent"
                color="gray.100"
                textAlign="center"
                fontSize={{ base: '22px', md: '22px' }}
                _hover={{
                  bgColor: 'gray.100',
                  color: 'gray.700',
                  cursor: 'pointer',
                  transition: '1s'
                }}
                onClick={openChatWindow}
              >
                {currentLang === 'cn' ? '马上领取' : '馬上領取'}
              </StyledBox>
            </Flex>
          )}
          {!isShowDetail && (
            <Flex
              pt={{ base: '20px', md: 0 }}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Text
                fontSize={{ base: '16px', md: '16px' }}
                fontWeight={100}
                color="white"
              >
                {currentLang === 'cn'
                  ? '交易存在风险，活动受条款限制，'
                  : '交易存在風險，活動受條款限制，'}
              </Text>
              <Text
                fontSize={{ base: '16px', md: '16px' }}
                fontWeight={100}
                color="white"
                textDecoration="underline"
                onClick={() => setIsShowDetail(true)}
                _hover={{
                  color: 'gray.500',
                  cursor: 'pointer',
                  transition: '1s'
                }}
              >
                {currentLang === 'cn' ? '点此查看' : '點此查看'}
              </Text>
            </Flex>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default XNHZ;
