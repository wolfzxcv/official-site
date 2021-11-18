import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import LicenseCard from '../../components/About/LicenseCard';
import Wrapper from '../../components/Base/Wrapper';
import InfoButton from '../../components/Common/InfoButton';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import LinkButton from '../../components/TopLinks/LinkButton';
import { Locales } from '../../i18n/locales';

const about: React.FC<{}> = () => {
  const { t } = useTranslation(['about']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const tallerBanner = currentLang === 'id' || currentLang === 'ms';
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
          <Image
            position="relative"
            top={tallerBanner ? '185px' : '120px'}
            width={'90%'}
            src="../assets/images/about_1.png"
            alt="about_1"
          />
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
          <Image src="../assets/images/about_2.png" alt="about_2" />
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
      <Flex p={20} align="center" direction="column">
        <Flex
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
        >
          <InfoCard
            image={
              <Image src="../assets/images/about_icon5.png" alt="about_icon5" />
            }
            title={t('yearsOfCredibility')}
            text={t('adheringToTheOriginalIntention')}
            withBorder
          />

          <InfoCard
            image={
              <Image src="../assets/images/about_icon6.png" alt="about_icon6" />
            }
            title={t('abundantResources')}
            text={t('fullyProvideCustomers')}
            withBorder
          />
          <InfoCard
            image={
              <Image src="../assets/images/about_icon7.png" alt="about_icon7" />
            }
            title={t('qualityService')}
            text={t('ourSalesTeam')}
            withBorder
          />
        </Flex>
      </Flex>

      {/* License introduction */}
      <Flex py={20} wrap="wrap" justify="center">
        <Box mb={5} w="100%" textAlign="center">
          <InfoTitle title={t('licenseIntroduction')} />
        </Box>
        <LicenseCard
          image={
            <Image src="../assets/images/about_license_1.png" alt="license_1" />
          }
          text={t('WCGMarketsLtdIsAuthorized')}
        />
        <LicenseCard
          image={
            <>
              <Image
                src="../assets/images/about_license_2.png"
                alt="license_2"
              />
              <Image
                ml={2}
                src="../assets/images/about_license_2-1.png"
                alt="license_2-1"
              />
            </>
          }
          text={t('WCGMarketsLtdIsRegistered')}
        />
        <LicenseCard
          image={
            <Image src="../assets/images/about_license_3.png" alt="license_3" />
          }
          text={t('HongKongIsThe')}
          textHeight={isChinese ? '240px' : '432px'}
          button={t('view')}
          link="http://www.cgse.com.hk/chines/en/cgse-recognized-e-trading-member-list"
        />
        <LicenseCard
          image={
            <>
              <Image
                src="../assets/images/about_license_4.png"
                alt="license_4"
              />
              <Image
                ml={2}
                src="../assets/images/about_license_4-1.png"
                alt="license_4-1"
              />
            </>
          }
          text={t('WCGMarketsLtdIsSupervised')}
          textHeight={isChinese ? '240px' : '432px'}
          button={t('view')}
          link="http://www.cgse.com.hk/chines/en/cgse-recognized-e-trading-member-list"
        />
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
