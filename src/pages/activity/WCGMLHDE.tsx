import { links } from '@/assets/links';
import HTMLHead from '@/components/Base/HTMLHead';
import LiveChat from '@/components/Base/LiveChat';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import React from 'react';

export const WCGMLHDE_BG = '#db3525';
const WCGMLHDE_FOOTER_BG = '#931016';
const WCGMLHDE_FONT_WHITE = 'white';
const WCGMLHDE_FONT_YELLOW = '#eee3ad';
const WCGMLHDE_DATE_BG = '#c82818';

const WCGMLHDE: React.FC<{}> = () => {
  return (
    <>
      <HTMLHead />
      <LiveChat />

      <WCGMLHDEBanner />

      <Flex bg={WCGMLHDE_BG} color="white" flexDir="column" align="center">
        <WCGMLHDEDate />

        <WCGMLHDEContent />
      </Flex>
      <WCGMLHDEButtons />

      <Flex bg={WCGMLHDE_BG} height={{ base: '50px', md: '150px' }}></Flex>
      <WCGMLHDERules />
    </>
  );
};

const WCGMLHDEBanner: React.FC<{}> = () => (
  <Flex
    minH={{ base: '320px', md: '600px' }}
    bg={WCGMLHDE_BG}
    bgImage={{
      base: '/../assets/images/activity_WCGMLHDE_M.jpg',
      md: '/../assets/images/activity_WCGMLHDE.jpg'
    }}
    bgPosition="top center"
    bgSize="cover"
    bgRepeat="no-repeat"
  ></Flex>
);

const WCGMLHDEDate: React.FC<{}> = () => (
  <Flex
    flexDir="column"
    p={2}
    my={5}
    px={{ base: 5, md: 0 }}
    fontSize={{ base: '12px', md: '18px' }}
    width={{ base: '100%', md: 'auto' }}
    textAlign="center"
    align="center"
  >
    <Box
      border="1px"
      borderColor="white"
      bg={WCGMLHDE_DATE_BG}
      width={{ base: '90vw', md: 'auto' }}
      px={{ base: 2, md: 10 }}
      py={2}
      fontSize={{ base: '12px', md: '20px' }}
      fontWeight="700"
      textAlign="center"
      borderRadius={{ base: 0, md: '25px' }}
    >
      August 1, 2023 to September 30, 2023
    </Box>
  </Flex>
);

const WCGMLHDEContent: React.FC<{}> = () => (
  <Box
    mt={{ base: 10, md: 20 }}
    mb={{ base: 10, md: '100px' }}
    fontSize={{ base: '12px', md: '18px' }}
    width={{ base: '80vw', md: '90vw' }}
    maxW={{ base: 'auto', md: '900px' }}
    textAlign="center"
    lineHeight={{ base: 5, md: 10 }}
  >
    <Box mb={5}>
      Thank you for your support of WCG MARKETS. To celebrate the
      company&lsquo;s development in Malaysia, we will launch the following
      promotions from August 1, 2023 to September 30, 2023:
    </Box>
    <Box color={WCGMLHDE_FONT_YELLOW}>
      1. Promotion target: All new and existing Malaysian customers who make
      their first deposit into a WCG MARKETS real trading account during the
      promotion period.
    </Box>
    <Box color={WCGMLHDE_FONT_YELLOW}>
      2. Promotion offer: 30% of the first deposit amount will be credited to
      the customer&lsquo;s account as additional credit. For example, deposit
      $1,000 for the first time to get an additional $300 credit.
    </Box>
  </Box>
);

const WCGMLHDEButtons: React.FC<{}> = () => (
  <Flex
    bg={WCGMLHDE_BG}
    color={WCGMLHDE_FONT_WHITE}
    justify="center"
    py={'80px'}
    alignItems="center"
    textAlign="center"
    height={{ base: '40px', md: '50px' }}
    fontSize={{ base: '20px', md: '30px' }}
  >
    <Link
      width="30vw"
      maxW="200px"
      textAlign="center"
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={WCGMLHDE_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href="/"
      isExternal
    >
      WEBSITE
    </Link>
    <Link
      width="30vw"
      maxW="200px"
      textAlign="center"
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={WCGMLHDE_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href={links.registerZH}
      isExternal
    >
      REGISTER
    </Link>
    <Link
      width="30vw"
      maxW="200px"
      textAlign="center"
      py={3}
      mx={2}
      fontWeight="700"
      borderRadius="5px"
      border="1px solid white"
      bg={WCGMLHDE_FOOTER_BG}
      _hover={{
        opacity: 0.8,
        transition: '1s'
      }}
      href={links.liveChat}
      isExternal
    >
      SUPPORT
    </Link>
  </Flex>
);

const WCGMLHDERules: React.FC<{}> = () => (
  <Flex bg={WCGMLHDE_FOOTER_BG} color={WCGMLHDE_FONT_WHITE} justify="center">
    <Stack
      my={'6em'}
      width={{ base: '90vw', md: '80vw' }}
      spacing={{ base: 1, md: 3 }}
      fontSize={{ base: '10px', md: '14px' }}
      textAlign={{ base: 'center', md: 'center' }}
    >
      <Box>● Promotion terms:</Box>
      <Box>
        1. This promotion is only open to new customers who have not opened a
        real account with WCG MARKETS. Existing customers are not eligible for
        this offer.
      </Box>
      <Box>
        2. Each customer can only participate in this promotion once. Multiple
        account openings and deposits will not be calculated cumulatively.
      </Box>
      <Box>
        3. Customers must complete the first deposit within 30 days after
        opening an account, otherwise it will be invalid.
      </Box>
      <Box>
        4. The deposit amount must be $300 or above to be eligible for the
        offer.
      </Box>
      <Box>
        5. The credit will be deposited into the customer&lsquo;s account within
        3 working days after deposit.
      </Box>
      <Box>
        6. Withdrawals made during the promotion period will disqualify the
        customer and the credited amount will be clawed back.
      </Box>
      <Box>7. The credit can only be used for trading, not for withdrawal.</Box>
      <Box>
        8. The credit can be used as margin for loss protection, but the
        customer is responsible for covering any losses incurred.
      </Box>
      <Box>
        9. After the promotion ends, any unused credit will be clawed back.
      </Box>
      <Box>
        10. The company reserves the right to amend, terminate the promotion and
        claw back the credit at any time.
      </Box>
      <Box>
        11. This offer can not be used in conjunction with other promotion of
        the company.
      </Box>
      <Box>
        12. The company reserves the right of final interpretation of the
        promotion.
      </Box>
      <Box>
        13. High risk investment warning: CFDs are complex financial products,
        using leverage can lead to the high possibility of losing the principal
        quickly. You may be required to deposit additional margin. Please
        understand the product mechanics and consider whether you can withstand
        the risks before trading. Past prices and performance of financial
        derivative products do not guarantee or indicate future trends. Such
        financial products may not be suitable for all investors, please fully
        understand all potential risks and seek independent advice if necessary
        before entering the market.
      </Box>
      <Box>14. Promotion quotas are limited, first come first served.</Box>
      <Box>
        15. Each customer can only participate in this promotion once with one
        account.
      </Box>
      <Box>
        16. A single trading account can receive a maximum gift of $30,000.
      </Box>
      <Box>
        17. WCG reserves the right to amend or terminate this promotion at any
        time. Any amendments or termination notices will be subject to WCG
        Markets&lsquo; announcements.
      </Box>
      <Box>
        18. All abnormal transactions, including scalping within 15 minutes, A/B
        account trading, using cheat software or other computer programs
        resulting in multiple accounts placing orders from the same IP address
        simultaneously, and other suspicious operations, will be considered
        invalid trading lots and will not be included in the calculation for
        this promotion (For the definition of abnormal transactions, please
        refer to the WCG official website).
      </Box>
    </Stack>
  </Flex>
);

export default WCGMLHDE;
