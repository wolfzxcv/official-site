import { Box, Flex } from '@chakra-ui/layout';
import { useTranslation } from 'next-i18next';
import React from 'react';
import CopyrightLinks from './CopyrightLinks';
import SocialMediaLinks from './SocialMediaLinks';

export const Copyright: React.FC<{}> = () => {
  const { t } = useTranslation(['footer']);
  return (
    <Flex
      fontSize={'0.8rem'}
      minH="100px"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justify="space-around"
    >
      <Box>{t('copyright')}</Box>

      {/* mobile layout */}
      <Flex wrap="wrap" display={{ base: 'flex', lg: 'none' }}>
        <CopyrightLinks
          text={t('privacyPolicy')}
          href="/conditions/privacyPolicy"
        />
        <Box mx={1}>|</Box>
        <CopyrightLinks
          text={t('termsAndConditions')}
          href="/conditions/termsAndConditions"
        />
      </Flex>

      {/* desktop layout */}
      <Flex wrap="wrap" display={{ base: 'none', lg: 'flex' }}>
        <CopyrightLinks
          text={t('privacyPolicy')}
          href="/conditions/privacyPolicy"
        />
        <Box mx={1}>|</Box>
        <CopyrightLinks
          text={t('termsAndConditions')}
          href="/conditions/termsAndConditions"
        />

        <Box mx={1}>|</Box>

        <CopyrightLinks
          text={t('disputeSettlement')}
          href="/conditions/disputeSettlement"
        />
        <Box mx={1}>|</Box>
        <CopyrightLinks
          text={t('riskDisclaimer')}
          href="/conditions/riskDisclaimer"
        />
      </Flex>

      <SocialMediaLinks />
    </Flex>
  );
};
