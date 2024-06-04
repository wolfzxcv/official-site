import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

const FooterBottom: React.FC<{}> = () => {
  return (
    <Flex direction="column" align="center" p={10}>
      <Box>EMAIL: info@wcggroups.com</Box>
      <Box>
        Register Address: Hamchako, Mutsamudu, The Autonomous Island of Anjouan,
        Union of Comoros
      </Box>
      <Box>Registration Number: 15665</Box>
      <Box>Telephone Number: +852 46143795</Box>
      <Box>
        Physical Address: Room 7, 16/F, Block B, Kailey Industrial Centre, 12
        Fung Yip St, Chai Wan, Hong Kong
      </Box>

      <Box>
        High-risk investment warning: Contracts for Difference (CFD) are complex
        financial products, and their use of leveraged trading attributes is
        likely to cause rapid loss of principal, and you may be required to call
        for margin. Please understand the product principles of CFDs and
        consider whether you can withstand this risk before entering the market.
        The past prices and performance of all financial derivatives instruments
        do not guarantee or represent future trends. Such financial products are
        not suitable for all investors. Please be sure to fully understand all
        potential risks before entering the market and seek independent advice
        when necessary. Restricted areas: WCG Group Limited&apos;s website
        information does not aimed at targeting residents of British Columbia,
        Quebec and Saskatchewan, the Democratic People&apos;s Republic of Korea
        (North Korea), Iran, the United States and Hong Kong; And not to send or
        use the information to people in countries or jurisdictions where the
        publication or use of this information violates local laws and
        regulations.
      </Box>
    </Flex>
  );
};

export default FooterBottom;
