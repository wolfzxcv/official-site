import { Box, Flex, Image, Stack } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import Slide from 'react-reveal/Slide';
import LinkButton from '../../components/TopLinks/LinkButton';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const about: React.FC<{}> = () => {
  const { t } = useTranslation(['about']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      <Flex
        height="600px"
        bg="gray.800"
        color="white"
        justify="center"
        paddingY={10}
      >
        <Stack
          textAlign={isArabic ? 'right' : 'left'}
          spacing={5}
          padding={10}
          width={{ base: '80vw', xl: '40vw' }}
        >
          <Box fontSize={{ base: '28px', md: '42px' }}>WCG</Box>
          <Box fontSize={{ base: '28px', md: '42px' }}>
            {t('buildTheWorldWithIntegrity')}
          </Box>
          <Box>{t('WCGHasASolidFoundation')}</Box>
          <LinkButton
            text={t('registerARealAccountNow')}
            href="https://trader.wc012.com/register"
            inMobile
            borderColor="#b81c22"
          ></LinkButton>

          <LinkButton
            text={t('registerADemoAccountNow')}
            href="https://trader.wc012.com/registerMock"
            inMobile
            borderColor="green"
          ></LinkButton>
        </Stack>
        <Box paddingX={20} display={{ base: 'none', xl: 'block' }}>
          <Slide bottom>
            <Image
              position="relative"
              top="120px"
              width={'90%'}
              src="../assets/images/about_1.png"
              alt="about_1"
            />
          </Slide>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'about',
      'common',
      'footer',
      'header'
    ]))
  }
});

export default about;
