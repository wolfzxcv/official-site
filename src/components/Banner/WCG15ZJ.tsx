import { Box, Flex, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const WCG15ZJ: React.FC<{}> = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  return (
    <Box>
      {isShowDetail && (
        <Box
          minH={{ base: '600px', md: '500px' }}
          backgroundImage={{
            base: '../assets/images/activity_WCG15ZJ_M_detail.jpg',
            md: '../assets/images/activity_WCG15ZJ_detail.jpg'
          }}
          bgPosition="top center"
          bgSize="cover"
          display="flex"
          justifyContent="center"
          position="relative"
        >
          <Box
            p={1}
            my={{ base: 10, md: 5 }}
            width={{ base: '50vw', md: '130px' }}
            border="2px"
            borderRadius={{ base: '40px', md: '30px' }}
            borderColor="gray.100"
            bgColor="transparent"
            color="gray.100"
            textAlign="center"
            fontSize={{ base: '12px', md: '22px' }}
            _hover={{
              bgColor: 'gray.100',
              color: 'gray.700',
              cursor: 'pointer',
              transition: '1s'
            }}
            onClick={() => setIsShowDetail(false)}
            position="absolute"
            bottom="1"
          >
            关闭详情
          </Box>
        </Box>
      )}
      {!isShowDetail && (
        <Box
          minH={{ base: '600px', md: '500px' }}
          backgroundImage={{
            base: "url('../assets/images/activity_WCG15ZJ_M.jpg')",
            md: "url('../assets/images/activity_WCG15ZJ.jpg')"
          }}
          bgPosition="top center"
          bgSize="cover"
        >
          <Flex
            height="inherit"
            minH={{ base: '600px', md: '500px' }}
            width="100%"
            direction={{ base: 'row', md: 'column' }}
            justify={{ base: 'center', md: 'end' }}
            position="relative"
            align="center"
          >
            <Box
              display={{ base: 'block', md: 'none' }}
              p={1}
              my={7}
              width="50vw"
              border="2px"
              borderRadius="40px"
              borderColor="gray.100"
              bgColor="transparent"
              color="gray.100"
              textAlign="center"
              fontSize="12px"
              onClick={() => setIsShowDetail(true)}
              position="absolute"
              bottom="1"
              _hover={{ transition: '1s' }}
            >
              查看条款细则
            </Box>

            <Stack
              mb="150px"
              ml="420px"
              display={{ base: 'none', md: 'block' }}
            >
              <Box color="white" fontSize="28px" fontWeight="700">
                由2022年3月1日-2022年4月30日
              </Box>
              <Box color="yellow" fontSize="16px">
                关注WCG MARKETS官方微博，并私信留言交易账号
              </Box>
              <Flex>
                <Box color="yellow" fontSize="16px">
                  即可获得单次入金15%交易赠金大红包！
                </Box>
                <Box
                  color="white"
                  textDecoration="underline"
                  _hover={{
                    cursor: 'pointer'
                  }}
                  onClick={() => setIsShowDetail(true)}
                >
                  查看条款细则
                </Box>
              </Flex>
            </Stack>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default WCG15ZJ;
