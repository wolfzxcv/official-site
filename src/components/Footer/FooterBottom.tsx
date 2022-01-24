import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';

const FooterBottom: React.FC<{}> = () => {
  const { t } = useTranslation('footer');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
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
            {t('WCGGoldCompany')}
          </Box>
          <Box fontSize="sm">{t('WCGGlobalLtd')}</Box>
        </Flex>
      </Flex>
      <Box
        width={{ base: '85vw', md: '92vw' }}
        m={3}
        p={3}
        bg="gray.900"
        textAlign={isArabic ? 'right' : 'left'}
      >
        {t('HighRiskInvestmentWarning')}
      </Box>
      <Box fontSize="sm" p={3} textAlign={isArabic ? 'right' : 'left'}>
        {t('restrictedAreas')}
      </Box>
    </Flex>
  );
};

export default FooterBottom;
