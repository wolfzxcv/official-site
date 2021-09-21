import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLocationOn, MdMessage } from 'react-icons/md';
import { RiUserStarLine } from 'react-icons/ri';
import InfoButtonBase from '../../components/Common/InfoButtonBase';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import { StyledBoxTag } from '../../components/Styled/Styled';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';
import { openChatWindow } from '../../utils';

const regionalRepresentative: React.FC<{}> = () => {
  // const { t } = useTranslation(['forex']);
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
            <InfoTitle title="Regional representative" />
          </Flex>

          <Text my={10}>
            This is a unique opportunity for people who want to develop their
            businesses locally. Opening a WCG regional office will be a
            higher-level cooperation option. Manage your own agency company in
            your area to obtain stable income， and at the same time provide you
            with the best trading conditions and technology in the industry with
            our competitive advantages.
          </Text>
          <InfoButtonBase
            text="Representative application"
            onClick={openChatWindow}
          />
        </Box>
        <Image
          src="../assets/images/regionalRepresentative_banner.png"
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
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="Do not miss this opportunity!" />
          <Text>
            Set your own business model freely， your marketing plan， organize
            seminars， webinars， and activities that are beneficial or related
            to specific market needs. We will assist you to gain a stable and
            solid foundation in your local market.
          </Text>
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
            src="../assets/images/regionalRepresentative_1.png"
            alt="regional representative 1"
            width={{ base: '100%', lg: '35%' }}
            objectFit="cover"
          />
          <Flex
            width={{ base: '80vw', lg: '65%' }}
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: 'start', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle
              title="Brands that share a global reputation"
              size="20px"
            />
            <Text mb={5}>
              The support we provide to regional offices includes but not
              limited to meeting all the needs for local businesses development.
              WCG provides consulting services， promotional materials and
              marketing budget， as well as direct contact with customers for
              faster and more accurate support. We provide regional
              representatives with assistance in all technical matters，
              implementation and integration of local services (such as the most
              popular payment system in the region) to help optimizing their
              business performance.
            </Text>
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
            title="Sole regional representative"
            text="You will be the only representative in your area. Through the regional representative program of WCG， you will enjoy the exclusive right of agency in this specific area."
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
            withBorder
          />
          <InfoCard
            icon={<MdMessage fontSize="64px" />}
            title="Marketing assistance support"
            text="Provide comprehensive technical support to help optimizing network promotion， marketing materials and help record and manage your customers."
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
            withBorder
          />
          <InfoCard
            icon={<RiUserStarLine fontSize="64px" />}
            title="Competitive edge"
            text="We will provide your customers with competitive trading conditions and quickly enhance your trading advantages within your area."
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
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="Regional representative's income" />
          <Text>
            Your income includes the standard commission from each referrer’s
            transaction， as well as income from all of your downline accounts，
            and additional agency remuneration The specific amount of additional
            income can be determined after mutual agreement with the partner
          </Text>
          <Image
            src="../assets/images/regionalRepresentative_2.png"
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
        >
          <Box flex={1} position="relative">
            <Image
              src="../assets/images/regionalRepresentative_3.png"
              alt="regional representative 3"
              objectFit="cover"
            />
            <Box
              position="absolute"
              w="120%"
              fontWeight="bold"
              sx={{
                top: { base: '35%', xl: '50%' },
                left: '10%',
                transform: 'scale(0.5) translate(-50%, -50%)'
              }}
            >
              <StyledBoxTag />
              <Text color="white" fontSize="60px">
                Become your own boss
              </Text>
            </Box>
          </Box>
          <Box flex={1} position="relative">
            <Image
              src="../assets/images/regionalRepresentative_4.png"
              alt="regional representative 4"
              objectFit="cover"
            />
            <Box
              position="absolute"
              w="120%"
              fontWeight="bold"
              sx={{
                top: { base: '35%', xl: '50%' },
                left: '10%',
                transform: 'scale(0.5) translate(-50%, -50%)'
              }}
            >
              <StyledBoxTag />
              <Text color="blackAlpha.900" fontSize="60px">
                Become our partner
              </Text>
            </Box>
          </Box>
          <Box flex={1} position="relative">
            <Image
              src="../assets/images/regionalRepresentative_5.png"
              alt="regional representative 5"
              objectFit="cover"
            />
            <Box
              position="absolute"
              w="120%"
              fontWeight="bold"
              sx={{
                top: { base: '35%', xl: '50%' },
                left: '10%',
                transform: 'scale(0.5) translate(-50%, -50%)'
              }}
            >
              <StyledBoxTag />
              <Text color="white" fontSize="60px">
                Get technical support
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>

      {/* Become our regional representative */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '45vw' }}
          pb={6}
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="Become our regional representative" />
          <Text>
            WCG is currently undergoing rapid development， which means that we
            will continue to seek and develop new markets， and our customers
            are becoming part of our business model to grow with us.
          </Text>
        </Box>
        <Box>
          <InfoButtonBase text="Apply now" onClick={openChatWindow} />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async (props) => ({
  props: {
    ...(await serverSideTranslations(props.locale!, [
      'common',
      'footer',
      'header'
    ]))
  }
});

export default regionalRepresentative;
