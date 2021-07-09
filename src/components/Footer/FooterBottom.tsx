import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const FooterBottom: React.FC<{}> = () => {
  const { t } = useTranslation(['footer']);
  return (
    <Flex direction="column" align="center" p={10}>
      <Box fontSize="sm">{t('WCGIsABusinessBrand')}</Box>
      <Flex direction={{ base: 'column', md: 'row' }} m={3}>
        <Flex direction="column" mx={2}>
          <Box fontSize="sm" mb={3}>
            {t('WCGMarketsLtdIsALimitedLiabilityCompany')}
          </Box>
          <Box fontSize="sm" mb={{ base: 3, md: 0 }}>
            {t('WCGMarketsLtdIsRegulatedByTheFINTRAC')}
          </Box>
        </Flex>

        <Flex direction="column" mx={2}>
          <Box fontSize="sm" mb={3}>
            {t('WenchuanGoldCompany')}
          </Box>
          <Box fontSize="sm">{t('WenchuanGlobalLtd')}</Box>
        </Flex>
      </Flex>
      <Box width={{ base: '85vw', md: '92vw' }} m={3} p={3} bg="tomato">
        {t('HighRiskInvestmentWarning')}
      </Box>
      <Box fontSize="sm" p={3}>
        {t('restrictedAreas')}
      </Box>
    </Flex>
  );
};

export default FooterBottom;
