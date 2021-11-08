import { Box, Flex, Image, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

const borderColor = 'black';

const WCGE: React.FC<{}> = () => {
  return (
    <Flex w="100%" minH="100vh" align="center" justify="center">
      <StyledBusinessCard
        display="flex"
        flexDirection="column"
        justifyContent="center"
        border={{ base: 'none', md: '1px' }}
        borderColor={borderColor}
        h={{ base: '100%', md: '281px' }}
      >
        <Flex
          className="logo-box"
          mx="50px"
          py={5}
          borderTop="1px"
          borderBottom="1px"
          borderColor={borderColor}
          justify="center"
          align="center"
        >
          <Flex w="100%">
            <Image
              width={181}
              height={76}
              src="../assets/images/logo.svg"
              alt="logo"
            />
          </Flex>

          <Flex flexDirection="column" w="100%" justify="center">
            <Flex align="center">
              <Image
                mr={3}
                w="16px"
                h="16px"
                src="../assets/images/activity_WCGE_icon1.png"
                alt="icon1"
              />
              {'WCG Markets Ltd'.toUpperCase()}
            </Flex>
            <a href="mailto: info@wcglb.com">
              <Flex align="center">
                <Image
                  mr={3}
                  w="16px"
                  h="12px"
                  src="../assets/images/activity_WCGE_icon2.png"
                  alt="icon2"
                />
                {'info@wcglb.com'.toUpperCase()}
              </Flex>
            </a>
            <Flex align="center">
              <Image
                mr={3}
                w="16px"
                h="14px"
                src="../assets/images/activity_WCGE_icon3.png"
                alt="icon3"
              />
              4001 203 612
            </Flex>
            <Link href="http://www.wcgmarkets.com/" isExternal>
              <Flex align="center">
                <Image
                  mr={3}
                  w="16px"
                  h="16px"
                  src="../assets/images/activity_WCGE_icon4.png"
                  alt="icon4"
                />

                {'http://www.wcgmarkets.com/'.toUpperCase()}
              </Flex>
            </Link>
          </Flex>
        </Flex>
        <Flex
          mx="50px"
          className="icon-box"
          justify={{ base: 'inherit', md: 'space-evenly' }}
        >
          <Flex align="center" my={2}>
            <Image
              w="25px"
              h="26px"
              src="../assets/images/activity_WCGE_icon5.png"
              alt="icon5"
            />
            WCGMarkets
          </Flex>
          <Flex align="center" my={2}>
            <Image
              w="25px"
              h="26px"
              src="../assets/images/activity_WCGE_icon6.png"
              alt="icon6"
            />
            WCGMarkets
          </Flex>
          <Link href="https://direct.lc.chat/11929440" isExternal>
            <Flex align="center" my={2}>
              <Image
                w="25px"
                h="26px"
                src="../assets/images/activity_WCGE_icon7.png"
                alt="icon7"
              />
              在线客服
            </Flex>
          </Link>
          <Flex align="center" my={2}>
            <Image
              w="25px"
              h="26px"
              src="../assets/images/activity_WCGE_icon8.png"
              alt="icon8"
            />
            金銀業貿易埸12行員
          </Flex>
        </Flex>
      </StyledBusinessCard>
    </Flex>
  );
};

const StyledBusinessCard = styled(Box)`
  width: 730px;

  /* custom break point 640px */
  @media (min-width: 641px) {
    .icon-box {
      justify-content: space-evenly;
    }
    .logo-box > :first-child {
      justify-content: center;
    }
  }
  @media (max-width: 640px) {
    .logo-box,
    .icon-box {
      flex-direction: column;
      padding-left: 10px;
    }

    .logo-box > div {
      margin-bottom: 30px;
    }

    .icon-box {
      img {
        margin-right: 12px;
      }
    }
  }
`;

export default WCGE;
