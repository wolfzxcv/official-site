import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import InfoButton from '../../components/Common/InfoButton';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import LinkButton from '../../components/TopLinks/LinkButton';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

const about: React.FC<{}> = () => {
  const { t } = useTranslation(['about']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const tallerBanner = currentLang === 'in' || currentLang === 'ms';
  const tallerInfoCard =
    tallerBanner || currentLang === 'en' || currentLang === 'vi';
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* WCG Build the world with integrity， win the future steadily */}
      <Flex
        minH={{ base: '300px', xl: '600px' }}
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
            mdWidth="300px"
          ></LinkButton>

          <LinkButton
            text={t('registerADemoAccountNow')}
            href="https://trader.wc012.com/registerMock"
            inMobile
            borderColor="green"
            mdWidth="300px"
          ></LinkButton>
        </Stack>
        <Box paddingX={20} display={{ base: 'none', xl: 'block' }}>
          {/* <Slide bottom> */}
          <Image
            position="relative"
            top={tallerBanner ? '185px' : '120px'}
            width={'90%'}
            src="../assets/images/about_1.png"
            alt="about_1"
          />
          {/* </Slide> */}
        </Box>
      </Flex>

      {/* 4 blocks: Platform has won many awards */}
      <Box py={20}>
        <Flex
          direction={{
            base: 'column',
            xl: isArabic ? 'row-reverse' : 'row'
          }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={<Image src="../assets/images/about_icon1.png" alt="icon1" />}
            title={t('platformHasWonManyAwards')}
            text={t('basedOnTheBasicPrinciples')}
            withTag={false}
            bigW="30vw"
            minH={{
              base: isChinese ? '200px' : '300px',
              xl: tallerInfoCard ? '376px' : '300px'
            }}
            pt="10"
            withBorder
          />

          <InfoCard
            image={<Image src="../assets/images/about_icon2.png" alt="icon2" />}
            title={t('multiPartySystemSupport')}
            text={t('fullSupport')}
            withTag={false}
            bigW="30vw"
            minH={{
              base: isChinese ? '200px' : '300px',
              xl: tallerInfoCard ? '376px' : '300px'
            }}
            pt="10"
            withBorder
          />
        </Flex>

        <Flex
          direction={{
            base: 'column',
            xl: isArabic ? 'row-reverse' : 'row'
          }}
          justify="space-evenly"
          align="center"
        >
          <InfoCard
            image={<Image src="../assets/images/about_icon3.png" alt="icon3" />}
            title={t('rapidTransaction')}
            text={t('globallyRecognizedLiquidity')}
            withTag={false}
            bigW="30vw"
            minH={{
              base: isChinese ? '200px' : '300px',
              xl: tallerInfoCard ? '376px' : '300px'
            }}
            pt="10"
            withBorder
          />

          <InfoCard
            image={<Image src="../assets/images/about_icon4.png" alt="icon4" />}
            title={t('excellentCustomerService')}
            text={t('provideServices')}
            withTag={false}
            bigW="30vw"
            minH={{
              base: isChinese ? '200px' : '300px',
              xl: tallerInfoCard ? '376px' : '300px'
            }}
            pt="10"
            withBorder
          />
        </Flex>
      </Box>

      {/* Strictly regulated and trustworthy */}
      <Stack bg="red.600" color="white" p={20} spacing={5} textAlign="center">
        <InfoTitle size="28px" title={t('strictlyRegulatedAndTrustworthy')} />
        <Text>{t('WCGInternational')}</Text>
        <Flex justify="center" mt={10}>
          <Box m={5}>
            <InfoButton
              text={t('tradingProducts')}
              href="/products"
              withBorder
            />
          </Box>
          <Box m={5}>
            <InfoButton
              text={t('tradingPlatform')}
              href="/platform/MT4Overview"
              withBorder
              bgColor="gray.800"
              hoverBg="gray.700"
            />
          </Box>
        </Flex>
      </Stack>

      {/* Diversified products， create the future */}
      <Flex p={{ base: 10, md: 20 }} direction="column" align="center">
        <InfoTitle title={t('diversifiedProducts')} />
        <InfoTitleSub title={t('WCGProvides24Hours')} />
      </Flex>

      {/* WCG is always your wise choice */}
      <Flex paddingY={20} bg="gray.800" color="white" justify="center">
        <Box paddingX={20} display={{ base: 'none', xl: 'block' }}>
          {/* <Slide bottom> */}
          <Image src="../assets/images/about_2.png" alt="about_2" />
          {/* </Slide> */}
        </Box>

        <Flex
          paddingX={20}
          width={{ base: '80vw', xl: '60vw' }}
          flexDirection="column"
          align={{ base: 'center', xl: isArabic ? 'flex-end' : 'flex-start' }}
        >
          <Box fontSize={{ base: '28px', md: '42px' }}>
            {t('WCGIsAlwaysYourWiseChoice')}
          </Box>
          <Box paddingY={5}>{t('WCGKeepsAdvancingWithTimes')}</Box>

          <InfoButton
            text={t('tradingPlatform')}
            href="/platform/MT4Overview"
            withBorder
            bgColor="gray.800"
            hoverBg="gray.700"
          />
        </Flex>
      </Flex>

      {/* 3 red/white blocks: Years of credibility */}
      <Flex
        direction={{ base: 'column', xl: 'row' }}
        justify="space-around"
        align="center"
        m={10}
      >
        <Box width={{ base: '80vw', xl: '28vw' }} my={3}>
          <Flex
            direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
            minH={{ base: 'auto', xl: isChinese ? '200px' : '280px' }}
            align="center"
          >
            <Box m={5} color="red.600">
              <Image
                minW="28px"
                height="28px"
                src="../assets/images/about_icon5.png"
                alt="icon5"
              />
            </Box>
            <Stack
              p={2}
              spacing={3}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <Box fontSize="24px" fontWeight="700">
                {t('yearsOfCredibility')}
              </Box>
              <Box
                minH={{
                  base: 'auto',
                  xl: tallerInfoCard || isArabic ? '168px' : 'auto'
                }}
              >
                {t('adheringToTheOriginalIntention')}
              </Box>
            </Stack>
          </Flex>
        </Box>

        <Box width={{ base: '80vw', xl: '28vw' }} my={3}>
          <Flex
            direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
            minH={{ base: 'auto', xl: isChinese ? '200px' : '280px' }}
            align="center"
          >
            <Box m={5} color="red.600">
              <Image
                minW="28px"
                height="28px"
                src="../assets/images/about_icon6.png"
                alt="icon6"
              />
            </Box>
            <Stack
              p={2}
              spacing={3}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <Box fontSize="24px" fontWeight="700">
                {t('abundantResources')}
              </Box>
              <Box
                minH={{
                  base: 'auto',
                  xl: tallerInfoCard || isArabic ? '168px' : 'auto'
                }}
              >
                {t('fullyProvideCustomers')}
              </Box>
            </Stack>
          </Flex>
        </Box>

        <Box width={{ base: '80vw', xl: '28vw' }} my={3}>
          <Flex
            direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
            minH={{ base: 'auto', xl: isChinese ? '200px' : '280px' }}
            align="center"
          >
            <Box m={5} color="red.600">
              <Image
                minW="28px"
                height="28px"
                src="../assets/images/about_icon7.png"
                alt="icon7"
              />
            </Box>
            <Stack
              p={2}
              spacing={3}
              textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
            >
              <Box fontSize="24px" fontWeight="700">
                {t('qualityService')}
              </Box>
              <Box
                minH={{
                  base: 'auto',
                  xl: tallerInfoCard || isArabic ? '168px' : 'auto'
                }}
              >
                {t('ourSalesTeam')}
              </Box>
            </Stack>
          </Flex>
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
