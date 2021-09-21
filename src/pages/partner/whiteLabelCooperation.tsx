import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { FcSupport } from 'react-icons/fc';
import { GrUserManager } from 'react-icons/gr';
import { SiOpenaccess } from 'react-icons/si';
import InfoButtonBase from '../../components/Common/InfoButtonBase';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import { StyledBoxTag } from '../../components/Styled/Styled';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';
import { openChatWindow } from '../../utils';

const whiteLabelCooperation: React.FC<{}> = () => {
  // const { t } = useTranslation(['forex']);
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
            <InfoTitle title="White label cooperation" />
          </Flex>

          <Text my={10}>
            WCGs white label cooperation program allows you to create a personal
            (or company) brand in the foreign exchange industry. This is a
            solution that allows you to use your own identity and website to run
            the brokerage business. We can provide you with high-quality
            products， fully functional trading platforms， cutting-edge
            technology and competitive conditions to meet all your customers
            needs.
          </Text>
          <InfoButtonBase
            text="Apply for cooperation"
            onClick={openChatWindow}
          />
        </Box>
        <Image
          src="../assets/images/whiteLabelCooperation_banner.png"
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
            src="../assets/images/whiteLabelCooperation_1.png"
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
          >
            <StyledBoxTag />
            <InfoTitle title="WCG White Label Strategy" />
            <Text mb={5}>
              As a leading broker， we are ready to provide you with everything
              you need to start a new business， from the creation of a website
              (if needed) to extensive back-office support and management
              activities. We provide a full set of products and services for
              your free use. To further support your business， we provide
              specialized training， customer support and first-class guidance.
              Our trading platform is fully customizable and can be named after
              your company name and trademark. You can choose between various
              income and remuneration models to maximize your benefits.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Advanced equipment and attractive offers */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '80vw' }}
          pb={6}
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="Advanced equipment and attractive offers" />
          <Text>
            We will authorize your customers to use a variety of financial
            products and conduct transactions through the most internationally
            recognized desktop and mobile platforms. We can help you formulate
            your business development strategy， including formulating major
            work processes and preventing foreseeable problems.
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
                src="../assets/images/whiteLabelCooperation_2.png"
                alt="white label cooperation 2"
                w="95%"
                objectFit="cover"
              />
            }
            title="Extremely low spreads and high yields"
            text="We exclusively provide customized margin requirements to generate a competitive low-spread price feed."
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            image={
              <Image
                src="../assets/images/whiteLabelCooperation_3.png"
                alt="white label cooperation 3"
                w="95%"
                objectFit="cover"
              />
            }
            title="Very low start-up costs"
            text="Start your own foreign exchange white label brokerage business from anywhere in the world， with low risk and low cost."
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            image={
              <Image
                src="../assets/images/whiteLabelCooperation_4.png"
                alt="white label cooperation 4"
                w="95%"
                objectFit="cover"
              />
            }
            title="Based on the profit of each customer's transaction"
            text="you can check in real time how much revenue the customer generates for you， as well as their commissions and customer transaction volume and other statistics."
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
        backgroundImage="url('../assets/images/whiteLabelCooperation_5.png')"
        justifyContent="center"
      >
        <Box
          w={{ base: '50vw', lg: '50vw', xl: '30vw' }}
          pb={6}
          color="gray.100"
          position="relative"
        >
          <InfoTitle title="Create your own brand" />
          <Text
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
            Our white label cooperation solution is powerful. You can rely on
            our powerful platform to build your own trading community， provide
            your customers with a fair and transparent trading environment， use
            competitive spreads and take advantage of subsidy plans in order to
            maximize benefits.
          </Text>
        </Box>
      </Flex>

      {/* High-quality trading platform */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '60vw' }}
          pb={6}
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="High-quality trading platform" />
          <Text>
            WCG has long-term experience in foreign exchange trading， as well
            as an in-depth understanding of the market and customer needs，
            which will ensure that you successfully operate your own brokerage
            company through white label services. Our advanced and mature
            technology will help you to create your own development strategy，
            marketing strategy and business operation process.
          </Text>
        </Box>
        <Flex
          w={{ base: '90vw', xl: '80vw' }}
          direction={{ base: 'column', xl: isArabic ? 'row-reverse' : 'row' }}
          justify="space-between"
        >
          <InfoCard
            icon={<SiOpenaccess fontSize="64px" />}
            title="Full access"
            text="Real-time monitoring function Customized backend system"
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<GrUserManager fontSize="64px" />}
            title="Dedicated"
            text="Assign a dedicated manager to assist your work at any time"
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<FcSupport fontSize="64px" />}
            title="Customer support"
            text="Provide development support to achieve brand integration purpose"
            bigW="25vw"
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
        <Box>
          <InfoButtonBase
            text="Apply for white label cooperation"
            onClick={openChatWindow}
          />
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

export default whiteLabelCooperation;
