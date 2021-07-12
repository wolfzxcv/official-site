import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import CopyrightLinks from './CopyrightLinks';
import SocialMediaLinks from './SocialMediaLinks';

export const Copyright: React.FC<{}> = () => {
  const { t } = useTranslation(['footer']);
  return (
    <Flex
      mb={{ base: '5', md: '0' }}
      fontSize={'0.8rem'}
      minH="100px"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justify="space-around"
    >
      <Box width={{ base: 'auto', md: '20vw' }} px={{ base: 3, md: 0 }}>
        {t('copyright')}
      </Box>

      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex wrap="wrap">
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

        <Box mx={1} display={{ base: 'none', lg: 'flex' }}>
          |
        </Box>

        <Flex wrap="wrap">
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
      </Flex>

      <SocialMediaLinks />
    </Flex>
  );
};
