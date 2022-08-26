import { Box, Flex, Stack } from '@chakra-ui/react';
import React from 'react';

const WCGIFX: React.FC<{}> = () => {
  return (
    <Flex
      minH={{ base: '600px', md: '500px' }}
      bgImage={{
        base: '../assets/images/activity_WCGIFX_banner_M.jpg',
        md: '../assets/images/activity_WCGIFX_banner.jpg'
      }}
      bgPosition={{ base: 'top center', md: 'top left' }}
      bgSize="cover"
      _hover={{
        cursor: 'pointer'
      }}
      justify="center"
    >
      <Flex
        flexDir="column"
        display={{ base: 'block', md: 'none' }}
        color="white"
        fontSize="9px"
        pt="250px"
        width="85vw"
      >
        <Stack>
          <Box>
            WCG MARKETS
            十分荣幸能够参与行业内最高规格之一的国际大型金融交流展览。
          </Box>
          <Box>
            交流展將于2022年9月13日到2022年9月15日於泰国 曼谷 盛泰乐
            中央世界举行。
          </Box>

          <Box>
            我们的团队将在52号展位期待你的莅临与我们会面，了解您如何从我们屡获殊荣的高性能交易技术中受益。
          </Box>

          <Box>WCG MARKETS & IFX EXPO THAILAND FINANCIAL EXPO</Box>

          <Box>
            Looking forward to seeing you at an international financial feast
          </Box>

          <Box>
            WCG MARKETS is very honored to be able to participate in one of the
            largest and high standard international financial exhibitions in the
            industry.
          </Box>

          <Box>
            The exhibition will be held from September 13, 2022 to September 15,
            2022 at Centara Central World, Bangkok, Thailand.
          </Box>

          <Box>
            Our team is looking forward to meeting you at booth 52 and
            showcasing you how you can benefit from our award-winning
            high-performance trading technology.
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default WCGIFX;
