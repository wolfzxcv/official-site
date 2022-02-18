import { links } from '@/assets/links';
import { openChatWindow } from '@/utils';
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
        <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight="700">
          {t('footer:provideYouWith')}
        </Text>
        <Text fontSize="sm">{t('footer:allTradesInvolveRisks')}</Text>

        <Flex direction={{ base: 'column', md: 'row' }} justify="space-evenly">
          <Flex align="center" justify="space-around">
            <Box
              textAlign="left"
              width={{ base: '50vw', md: '30vw', xxl: '20vw' }}
            >
              <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700">
                {t('footer:startRealFXTrading')}
              </Text>
            </Box>
            <StyledBox width={{ base: '30vw', md: '15vw' }}>
              <LinkButton
                text={t('common:openRealAccount')}
                href={links.registerReal}
                inMobile
                borderColor="#b81c22"
                isFooter
              ></LinkButton>
            </StyledBox>
          </Flex>
          <Flex align="center" justify="space-around">
            <Box
              textAlign="left"
              width={{ base: '50vw', md: '30vw', xxl: '20vw' }}
            >
              <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="700">
                {t('footer:newbiesGettingStarted')}
              </Text>
              <Text fontSize="sm">{t('footer:getUSD')}</Text>
            </Box>
            <StyledBox width={{ base: '30vw', md: '15vw' }}>
              <LinkButton
                text={t('common:openDemoAccount')}
                onClick={openChatWindow}
                inMobile
                borderColor="green"
                isFooter
              ></LinkButton>
            </StyledBox>
          </Flex>
        </Flex>
      </Stack>
    </Box>
  );
};

export default FooterMiddle;
