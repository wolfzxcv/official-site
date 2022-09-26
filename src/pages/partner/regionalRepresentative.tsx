import Wrapper from '@/components/Base/Wrapper';
import InfoButtonBase from '@/components/Common/InfoButtonBase';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import { StyledBoxTag } from '@/components/Styled/Styled';
import { Locales } from '@/i18n/config';
import { openChatWindow } from '@/utils';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLocationOn, MdMessage } from 'react-icons/md';
import { RiUserStarLine } from 'react-icons/ri';

const regionalRepresentative: React.FC<{}> = () => {
  const { t } = useTranslation('regionalRepresentative');

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';
  return (
    <Wrapper>
      {/* Regional representative */}
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
            <InfoTitle title={t('regionalRepresentative')} />
          </Flex>

          <Text my={10}>{t('thisIsAUnique')}</Text>
          <InfoButtonBase
            text={t('representativeApplcation')}
            onClick={openChatWindow}
          />
        </Box>
        <Image
          src="/../assets/images/regionalRepresentative_banner.png"
          alt="regional representative"
          objectFit="cover"
          objectPosition={{ base: 'center', xl: 0 }}
          position="absolute"
          right="0"
          height="100%"
          width={{ base: '100vw', xl: '60vw' }}
        />
      </Flex>

      {/* Do not miss this opportunity */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '45vw' }}
          pb={6}
          textAlign={{ base: isArabic ? 'right' : 'left', xl: 'center' }}
        >
          <InfoTitle title={t('doNotMiss')} />
          <Text>{t('setYourOwn')}</Text>
        </Box>
      </Flex>

      {/* Brands that share a global reputation */}
      <Flex align="center" justifyContent="center" bgColor="gray.100">
        <Flex
          width={{ base: '100vw', lg: '80vw' }}
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'unset' }}
        >
          <Image
            src="/../assets/images/regionalRepresentative_1.png"
            alt="regional representative 1"
            width={{ base: '100%', lg: '35%' }}
            objectFit="cover"
          />
          <Flex
            width={{ base: '80vw', lg: '65%' }}
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: isArabic ? 'right' : 'left', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle title={t('brandsThatSahre')} size="20px" />
            <Text mb={5}>{t('theSupportWe')}</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Excellent agency experience */}
      <Flex direction="column" align="center" py={20}>
        <Flex
          w={{ base: 'inherit', xl: '80vw' }}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-between"
        >
          <InfoCard
            icon={<MdLocationOn fontSize="64px" />}
            title={t('soleRegional')}
            text={t('youWillBe')}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
            withBorder
          />
          <InfoCard
            icon={<MdMessage fontSize="64px" />}
            title={t('marketingAssistance')}
            text={t('provideComprehensive')}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
            withBorder
          />
          <InfoCard
            icon={<RiUserStarLine fontSize="64px" />}
            title={t('competitiveEdge')}
            text={t('weWillProvide')}
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
            withBorder
          />
        </Flex>
      </Flex>

      {/* Regional representative's income */}
      <Flex direction="column" align="center" py={20} bgColor="gray.100">
        <Box
          w={{ base: '80vw', lg: '80vw' }}
          pb={6}
          textAlign={{ base: isArabic ? 'right' : 'left', xl: 'center' }}
        >
          <InfoTitle title={t('regionalRepresentativeIsIncome')} />
          <Text>
            {t('yourIncomeIncludes')}
            {t('theSpecificAmount')}
          </Text>
          <Image
            src="/../assets/images/regionalRepresentative_2.png"
            alt="regional representative 2"
            width={{ base: '80vw', md: '50vw', xl: '40vw' }}
            mx="auto"
            mt={16}
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* Become your own boss */}
      <Flex align="center" justifyContent="center">
        <Flex
          width={{ base: '100vw', lg: '80vw' }}
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'unset' }}
          justifyContent="space-between"
          textAlign={isArabic ? 'right' : 'left'}
        >
          <Box flex={1} position="relative">
            <Image
              src="/../assets/images/regionalRepresentative_3.png"
              alt="regional representative 3"
              objectFit="cover"
            />
            <Box
              position="absolute"
              fontWeight="bold"
              w="max-content"
              sx={{
                top: { base: '35%', xl: '50%' },
                left: '10%',
                transform: 'scale(0.5) translate(-50%, -50%)'
              }}
            >
              <StyledBoxTag />
              <Text color="white" fontSize="60px">
                {t('become')}
                <br />
                {t('yourOwnBoss')}
              </Text>
            </Box>
          </Box>
          <Box flex={1} position="relative">
            <Image
              src="/../assets/images/regionalRepresentative_4.png"
              alt="regional representative 4"
              objectFit="cover"
            />
            <Box
              position="absolute"
              fontWeight="bold"
              w="max-content"
              sx={{
                top: { base: '35%', xl: '50%' },
                left: '10%',
                transform: 'scale(0.5) translate(-50%, -50%)'
              }}
            >
              <StyledBoxTag />
              <Text color="blackAlpha.900" fontSize="60px">
                {t('become1')}
                <br />
                {t('ourPartner')}
              </Text>
            </Box>
          </Box>
          <Box flex={1} position="relative">
            <Image
              src="/../assets/images/regionalRepresentative_5.png"
              alt="regional representative 5"
              objectFit="cover"
            />
            <Box
              position="absolute"
              fontWeight="bold"
              w="max-content"
              sx={{
                top: { base: '35%', xl: '45%' },
                left: '10%',
                transform: 'scale(0.5) translate(-50%, -50%)'
              }}
            >
              <StyledBoxTag />
              <Text color="white" fontSize="60px">
                {t('get')}
                <br />
                {t('technicalSupport')}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>

      {/* Become our regional representative */}
      <Flex direction="column" align="center" py={20}>
        <Box w={{ base: '80vw', lg: '45vw' }} pb={10} textAlign="center">
          <InfoTitle title={t('becomeOurRegional')} />
          <Text>{t('wCGIsCurrently')}</Text>
        </Box>
        <Box>
          <InfoButtonBase text={t('applyNow')} onClick={openChatWindow} />
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
      'regionalRepresentative'
    ]))
  }
});

export default regionalRepresentative;
