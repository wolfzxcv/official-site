import { links } from '@/assets/links';
import Wrapper from '@/components/Base/Wrapper';
import InfoButton from '@/components/Common/InfoButton';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import { StyledBoxTag } from '@/components/Styled/Styled';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { FcSupport } from 'react-icons/fc';
import { GrUserManager } from 'react-icons/gr';
import { SiOpenaccess } from 'react-icons/si';

const whiteLabelCooperation: React.FC<{}> = () => {
  const { t } = useTranslation('whiteLabelCooperation');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';
  return (
    <Wrapper>
      {/* White label cooperation */}
      <Flex
        position="relative"
        minH="500px"
        justify={{ base: 'center', xl: 'flex-start' }}
        align="center"
        py={20}
        pl={{ base: 0, xl: 20 }}
        background={{
          base: 'gray.600'
        }}
      >
        <Box
          width={{ base: '80vw', xl: '60vw' }}
          px={{ base: 0, xl: 20 }}
          color="white"
          textAlign={isArabic ? 'right' : 'left'}
          zIndex={1}
        >
          <Flex my={10}>
            <InfoTitle title={t('whiteLabel')} />
          </Flex>

          <Text my={10}>{t('wCGsWhite')}</Text>
          <InfoButton text={t('applyFor')} href={links.majkf} isExternal />
        </Box>
        <Image
          src="/../assets/images/whiteLabelCooperation_banner.png"
          alt="white label cooperation"
          objectFit="cover"
          objectPosition={{ base: 'center', xl: 0 }}
          position="absolute"
          right="0"
          height="100%"
          width={{ base: '100vw', xl: '60vw' }}
        />
      </Flex>

      {/* WCG White Label Strategy */}
      <Flex align="center" justifyContent="center" bgColor="gray.100">
        <Flex
          width={{ base: '100vw', lg: '100vw' }}
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'unset' }}
          mt={{ base: 0, lg: 40 }}
        >
          <Image
            src="/../assets/images/whiteLabelCooperation_1.png"
            alt="white label cooperation 1"
            width={{ base: '100%', lg: '50%' }}
            objectFit="cover"
          />
          <Flex
            width={{ base: '80vw', lg: '50%' }}
            flexDirection="column"
            justifyContent="center"
            position="relative"
            left={{ base: 0, lg: '-10%' }}
            mt={{ base: 0, lg: 40 }}
            py={16}
            px={{ base: 0, lg: 24 }}
            bg="gray.100"
            textAlign={isArabic ? 'right' : 'left'}
          >
            <StyledBoxTag />
            <InfoTitle title={t('wCGWhite')} />
            <Text mb={5}>{t('asALeading')}</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Advanced equipment and attractive offers */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '60vw' }}
          pb={6}
          textAlign={{ base: isArabic ? 'right' : 'left', xl: 'center' }}
        >
          <InfoTitle title={t('advancedEquipment')} />
          <Text>
            {t('weWill')}
            {t('youFormulate')}
          </Text>
        </Box>
        <Flex
          w={{ base: '100vw', xl: '80vw' }}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-between"
        >
          <InfoCard
            image={
              <Image
                src="/../assets/images/whiteLabelCooperation_2.png"
                alt="white label cooperation 2"
                w="95%"
                objectFit="cover"
              />
            }
            title={t('extremelyLow')}
            text={t('weExclusively')}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            image={
              <Image
                src="/../assets/images/whiteLabelCooperation_3.png"
                alt="white label cooperation 3"
                w="95%"
                objectFit="cover"
              />
            }
            title={t('veryLow')}
            text={t('startYour')}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            image={
              <Image
                src="/../assets/images/whiteLabelCooperation_4.png"
                alt="white label cooperation 4"
                w="95%"
                objectFit="cover"
              />
            }
            title={t('basedOn')}
            text={t('youCanCheck')}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
      </Flex>

      {/* Create your own brand */}
      <Flex
        direction="column"
        align="center"
        py={20}
        h="460px"
        bgImage="/../assets/images/whiteLabelCooperation_5.png"
        justifyContent="center"
      >
        <Box
          w={{ base: '50vw', lg: '50vw', xl: '30vw' }}
          pb={6}
          color="gray.100"
          position="relative"
        >
          <InfoTitle title={t('createYourOwn')} />
          <Text
            textAlign={isArabic ? 'right' : 'left'}
            _after={{
              content: "''",
              position: 'absolute',
              left: '-30%',
              top: 0,
              height: 24,
              width: 10,
              bg: 'red.500'
            }}
          >
            {t('ourWhiteLabel')}
          </Text>
        </Box>
      </Flex>

      {/* High-quality trading platform */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '60vw' }}
          pb={6}
          textAlign={{ base: isArabic ? 'right' : 'left', xl: 'center' }}
        >
          <InfoTitle title={t('highQuality')} />
          <Text>{t('wcgHasLongTerm')}</Text>
        </Box>
        <Flex
          w={{ base: '90vw', xl: '80vw' }}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-between"
        >
          <InfoCard
            icon={<SiOpenaccess fontSize="64px" />}
            title={t('fullAccess')}
            text={`${t('realTime')}\n${t('customizedBackendSystem')}`}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<GrUserManager fontSize="64px" />}
            title={t('dedicated')}
            text={`${t('assignADedicated')}\n${t('assistYourWork')}`}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<FcSupport fontSize="64px" />}
            title={t('customerSupport')}
            text={`${t('provideDevelopment')}\n${t('achieveBrandIntegration')}`}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
        <Box>
          <InfoButton text={t('applyForWhite')} href={links.majkf} isExternal />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, [
      'common',
      'footer',
      'header',
      'whiteLabelCooperation'
    ]))
  }
});

export default whiteLabelCooperation;
