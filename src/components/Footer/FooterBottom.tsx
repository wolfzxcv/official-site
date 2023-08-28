import { Locales } from '@/i18n/config';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';

const FooterBottom: React.FC<{}> = () => {
  const { t } = useTranslation('footer');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';
  return (
    <Flex direction="column" align="center" p={10}>
      <Box fontSize="sm">{t('WCGIsABusinessBrand')}</Box>
      <Flex direction="column" m={3}>
        <Box fontSize="sm">{t('WCGMarketsLtdIsALimitedLiabilityCompany')}</Box>

        <Box fontSize="sm" my={3}>
          {t('WCGMarketsLtdIsRegulatedByTheFINTRAC')}
        </Box>
        {/*  On 28 Aug 2023, Wayno wanted to remove it */}
        {/* <Box fontSize="sm">{t('WCGGlobalLtd')}</Box> */}
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
