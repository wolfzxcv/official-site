import { Box, Flex, Image, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';
import HTMLHead from '../../components/Base/HTMLHead';

const WCGEPopOver = dynamic(() => import('./WCGEPopOver'), { ssr: false });

const borderColor = 'black';

const WCGE: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />

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
            <Flex>
              <Image
                width={181}
                height={76}
                src="../assets/images/logo.svg"
                alt="logo"
              />
            </Flex>

            <Flex flexDirection="column" w="100%">
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
              <Link href="https://www.wcgmarkets.com/" isExternal>
                <Flex align="center">
                  <Image
                    mr={3}
                    w="16px"
                    h="16px"
                    src="../assets/images/activity_WCGE_icon4.png"
                    alt="icon4"
                  />

                  {'https://www.wcgmarkets.com/'.toUpperCase()}
                </Flex>
              </Link>
            </Flex>
          </Flex>
          <Flex
            mx="50px"
            className="icon-box"
            justify={{ base: 'inherit', md: 'space-evenly' }}
          >
            <WCGEPopOver />
            <Flex align="center" my={2}>
              <Image
                mr={3}
                w="25px"
                h="26px"
                src="../assets/images/activity_WCGE_icon6.png"
                alt="icon6"
              />
              WCGMarkets
            </Flex>

            <Link
              _hover={{ textDecoration: 'none' }}
              href="https://direct.lc.chat/11929440"
              isExternal
            >
              <Flex align="center" my={2}>
                <Image
                  mr={3}
                  w="25px"
                  h="26px"
                  src="../assets/images/activity_WCGE_icon7.png"
                  alt="icon7"
                />
                <Box>在线客服</Box>
              </Flex>
            </Link>
          </Flex>
        </StyledBusinessCard>
      </Flex>
    </>
  );
};

const StyledBusinessCard = styled(Box)`
  width: 730px;
  .icon-box {
    & > a > div {
      margin-top: 14px;
      margin-bottom: 14px;
    }
  }

  /* custom break point 640px */
  @media (min-width: 641px) {
    .icon-box {
      justify-content: space-evenly;
    }
    .logo-box > :first-of-type {
      width: 80%;
      justify-content: center;
    }
  }
  @media (max-width: 640px) {
    .logo-box,
    .icon-box {
      flex-direction: column;
      padding-left: 10px;
    }
    .logo-box {
      & > :first-of-type {
        width: 100%;
        margin-top: 30px;
      }
      & > div {
        margin-bottom: 30px;
      }
      margin-bottom: 30px;
    }

    .icon-box > :first-of-type {
      justify-content: flex-start;
    }
  }
`;

export default WCGE;
