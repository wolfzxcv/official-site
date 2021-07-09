import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { StyledBox } from '../Styled/Styled';
import LinkButton from '../TopLinks/LinkButton';

const FooterMiddle: React.FC<{}> = () => {
  const { t } = useTranslation(['common', 'footer']);

  return (
    <Box m={4} textAlign="center">
      <Stack spacing={10}>
        <Text fontSize="3xl" fontWeight="700">
          {t('footer:provideYouWith')}
        </Text>
        <Text fontSize="sm">{t('footer:allTradesInvolveRisks')}</Text>

        <Flex direction={{ base: 'column', md: 'row' }} justify="space-around">
          <Flex alignItems="center" justify="center">
            <Box textAlign="left">
              <Text fontSize="3xl" fontWeight="700">
                {t('footer:startRealFXTrading')}
              </Text>
            </Box>
            <StyledBox ml={3}>
              <LinkButton
                text={t('openRealAccount')}
                href="https://trader.wc012.com/register"
                inMobile
                withBorder
              ></LinkButton>
            </StyledBox>
          </Flex>
          <Flex alignItems="center" justify="center">
            <Box textAlign="left">
              <Text fontSize="3xl" fontWeight="700">
                {t('footer:newbiesGettingStarted')}
              </Text>
              <Text fontSize="sm">{t('footer:getUSD')}</Text>
            </Box>
            <StyledBox ml={3}>
              <LinkButton
                text={t('openDemoAccount')}
                href="https://trader.wc012.com/registerMock"
                inMobile
                withBorder
              ></LinkButton>
            </StyledBox>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default FooterMiddle;
