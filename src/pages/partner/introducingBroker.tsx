import { links } from '@/assets/links';
import Wrapper from '@/components/Base/Wrapper';
import InfoButton from '@/components/Common/InfoButton';
import InfoCard from '@/components/Common/InfoCard';
import InfoTitle from '@/components/Common/InfoTitle';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineProfile } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';
import { ImProfile, ImTree } from 'react-icons/im';
import { RiListSettingsLine, RiRefund2Line } from 'react-icons/ri';

const introducingBroker: React.FC<{}> = () => {
  const { t } = useTranslation('iBBroker');
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'zh';
  const isArabic = currentLang === 'ar';

  return (
    <Wrapper>
      {/* Introducing Broker */}
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
            <InfoTitle title={t('introducingBroker')} />
          </Flex>

          <Text my={10}>{t('WCGsIBPlanIsPeopleOriented')}</Text>
          <InfoButton text={t('IBApplication')} href={links.majkf} isExternal />
        </Box>
        <Image
          src="/../assets/images/introducingBroker_banner.png"
          alt="introducing broker"
          objectFit="cover"
          objectPosition={{ base: 'center', xl: 0 }}
          position="absolute"
          right="0"
          height="100%"
          width={{ base: '100vw', xl: '60vw' }}
        />
      </Flex>

      {/* Exclusive IB plan */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '45vw' }}
          pb={6}
          textAlign={{ base: isArabic ? 'right' : 'left', xl: 'center' }}
        >
          <InfoTitle title={t('exclusiveIBPlan')} />
          <Text>{t('whetherYouAreATrading')}</Text>
        </Box>
      </Flex>

      {/* Introducing Brokers */}
      <Flex align="center" justifyContent="center" bgColor="gray.100">
        <Flex
          width={{ base: '100vw', lg: '80vw' }}
          flexDir={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'unset' }}
        >
          <Image
            src="/../assets/images/introducingBroker_1.png"
            alt="introducing broker 1"
            width={{ base: '100%', lg: '50%' }}
            objectFit="cover"
          />
          <Flex
            width={{ base: '80vw', lg: '50%' }}
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: isArabic ? 'right' : 'left', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle title={t('introducingBrokers')} size="20px" />
            <Text mb={5}>{t('ourUniqueIBPlanPays')}</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Fully competitive */}
      <Flex align="center" justifyContent="center" bgColor="gray.100">
        <Flex
          width={{ base: '100vw', lg: '80vw' }}
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'unset' }}
        >
          <Flex
            width={{ base: '80vw', lg: '50%' }}
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: isArabic ? 'right' : 'left', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle title={t('fullyCompetitive')} size="20px" />
            <Text mb={5}>{t('customizeACommission')}</Text>
          </Flex>
          <Image
            src="/../assets/images/introducingBroker_2.png"
            alt="introducing broker 2"
            width={{ base: '100%', lg: '50%' }}
            objectFit="cover"
          />
        </Flex>
      </Flex>

      {/* Boost your IB performance */}
      <Flex align="center" justifyContent="center" pt={{ base: 0, lg: 20 }}>
        <Flex
          width={{ base: '100vw', lg: '80vw' }}
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          alignItems={{ base: 'center', lg: 'unset' }}
        >
          <Box
            alignSelf="center"
            width={{ base: '100%', lg: '50%' }}
            px={{ base: 8, lg: 0 }}
            position="relative"
            _before={{
              content: "''",
              position: 'absolute',
              left: { base: 0, lg: '-10vw' },
              top: { base: 'unset', lg: '81%' },
              bottom: { base: '-11%', lg: 'unset' },
              width: '100vw',
              height: '30%',
              backgroundColor: 'gray.100',
              zIndex: '-1'
            }}
          >
            <Image
              src="/../assets/images/introducingBroker_3.png"
              alt="introducing broker 3"
              objectFit="cover"
            />
          </Box>
          <Flex
            width={{ base: '80vw', lg: '50%' }}
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: isArabic ? 'right' : 'left', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle title={t('boostYourIBPerformance')} size="20px" />
            <Text mb={5}>{t('asTheAgentOfWCG')}</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Excellent agency experience */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', xl: '60vw' }}
          textAlign={{ base: isArabic ? 'right' : 'left', xl: 'center' }}
          my={16}
        >
          <InfoTitle title={t('excellentAgencyExperience')} />
          <Text>{t('weTreatYouAsOurVip')}</Text>
        </Box>
        <Flex
          px={8}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-evenly"
          align="center"
          flexWrap="wrap"
        >
          <InfoCard
            icon={<GiReceiveMoney fontSize="64px" />}
            title={t('efficientAndInstant')}
            text={t('accordingToTheTransaction')}
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<ImTree fontSize="64px" />}
            title={t('multiLevelAgencySettings')}
            text={t('withAVarietyOfAgency')}
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<RiListSettingsLine fontSize="64px" />}
            title={t('aVarietyOfCommission')}
            text={t('theRebateCanBeSet')}
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<RiRefund2Line fontSize="64px" />}
            title={t('flexibleFundsSettlement')}
            text={t('receiveCommissions')}
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<AiOutlineProfile fontSize="64px" />}
            title={t('transparentAndClear')}
            text={t('highlyTransparentAgency')}
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<ImProfile fontSize="64px" />}
            title={t('viewCustomerProfile')}
            text={t('getCustomerTransaction')}
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
      </Flex>

      {/* Earn commissions instantly */}
      <Flex direction="column" align="center" py={20}>
        <Box w={{ base: '80vw', lg: '45vw' }} pb={10} textAlign="center">
          <InfoTitle title={t('earnCommissionsInstantly')} />
          <Text>{t('becomingAnAgentBroker')}</Text>
        </Box>
        <Box>
          <InfoButton
            text={t('iWantToBeAnAgent')}
            href={links.majkf}
            isExternal
          />
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
      'iBBroker'
    ]))
  }
});

export default introducingBroker;
