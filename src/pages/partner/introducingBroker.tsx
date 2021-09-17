import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Select,
  Text
} from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineProfile } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';
import { ImProfile, ImTree } from 'react-icons/im';
import { RiListSettingsLine, RiRefund2Line } from 'react-icons/ri';
import InfoButtonBase from '../../components/Common/InfoButtonBase';
import InfoCard from '../../components/Common/InfoCard';
import InfoTitle from '../../components/Common/InfoTitle';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';
import { openChatWindow } from '../../utils';

const introducingBroker: React.FC<{}> = () => {
  // const { t } = useTranslation(['forex']);
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
            <InfoTitle title="Introducing Broker (IB)" />
          </Flex>

          <Text my={10}>
            WCGs IB plan is people-oriented. Whether you are an individual or a
            company with dozens or even hundreds of employees， we understand
            what your business needs for growth. Our IB plan offers a variety of
            rebate options， a flexible agent back office， and a professional
            management team， ready to provide you and your customers with
            considerate and meticulous services at any time..
          </Text>
          <InfoButtonBase text="IB Application" onClick={openChatWindow} />
        </Box>
        <Image
          src="../assets/images/introducingBroker_banner.png"
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
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="Exclusive IB plan" />
          <Text>
            Whether you are a trading educator， signal provider， sales，
            marketer， or someone who can provide other added value to traders，
            we can provide you with solutions..
          </Text>
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
            src="../assets/images/introducingBroker_1.png"
            alt="introducing broker 1"
            width={{ base: '100%', lg: '50%' }}
            objectFit="cover"
          />
          <Flex
            width={{ base: '80vw', lg: '50%' }}
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: 'start', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle title="Introducing Brokers" size="20px" />
            <Text mb={5}>
              Our unique IB plan pays commissions to agents of all sizes and
              provides you with a better commission system. Through continuous
              introduction of traders to generate trading commissions， we will
              bring you endless profits! At the same time， you can view
              customer transaction reports and various data at any time through
              the agent background..
            </Text>
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
            textAlign={{ base: 'start', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle title="Fully competitive" size="20px" />
            <Text mb={5}>
              Customize a commission structure that suits you. Every time a
              customer opens a trading account through a dedicated introducing
              agent， the new customer will automatically be assigned to that
              agents name. You can also identify and cultivate your star
              customers through the return terms and the number of transactions
              within a specific period.
            </Text>
          </Flex>
          <Image
            src="../assets/images/introducingBroker_2.png"
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
              src="../assets/images/introducingBroker_3.png"
              alt="introducing broker 3"
              objectFit="cover"
            />
          </Box>
          <Flex
            width={{ base: '80vw', lg: '50%' }}
            flexDirection="column"
            justifyContent="center"
            textAlign={{ base: 'start', lg: 'center' }}
            py={8}
            px={{ base: 0, lg: 8 }}
          >
            <InfoTitle title="Boost your IB performance" size="20px" />
            <Text mb={5}>
              As the agent of WCG， the clients you introduce will receive the
              best service. We guarantee that the entire process of inputting
              customer information， from account opening to safe and fast
              depositing will be fully taken care of. Let you have no worries
              and devote yourself to the recommended customers..
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Excellent agency experience */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', xl: '60vw' }}
          textAlign={{ base: 'inherit', xl: 'center' }}
          mb={8}
        >
          <InfoTitle title="Excellent agency experience" />
          <Text>
            We treat you as our vvip， with intuitive and optimized agency
            experience， provide you with a wide range of customized products
            and services to meet your needs..
          </Text>
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
            title="Efficient and instant rebate system"
            text="According to the transaction volume of the clients you referred， you will get very competitive rebates in real time."
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<ImTree fontSize="64px" />}
            title="Multi-level agency settings"
            text="With a variety of agency-specific settings， the profits obtained can grow with different levels."
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<RiListSettingsLine fontSize="64px" />}
            title="A variety of commission setting options"
            text="The rebate can be set according to different customers and transaction volumes， effectively handle distribution needs."
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<RiRefund2Line fontSize="64px" />}
            title="Flexible Funds Settlement"
            text="Receive commissions according to the payment method you choose， and transfer them to your designated account as soon as possible."
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<AiOutlineProfile fontSize="64px" />}
            title="Transparent and clear agency structure"
            text="Highly transparent agency system， all setting items are clear at a glance."
            minH={isChinese ? '280px' : '306px'}
          />
          <InfoCard
            icon={<ImProfile fontSize="64px" />}
            title="View customer profile data"
            text="Get customer transaction reports， income statements， transaction volume and other statistical data at any time."
            minH={isChinese ? '280px' : '306px'}
          />
        </Flex>
      </Flex>

      {/* How much can I profit */}
      <Flex direction="column" align="center" py={20} bg="gray.100">
        <InfoTitle title="How much can I profit?" />
        <Flex
          w="80vw"
          p={8}
          borderWidth="1px"
          borderColor="gray.600"
          borderRadius="xl"
        >
          <FormControl id="account-type">
            <FormLabel htmlFor="account-type">
              Account type of your client
            </FormLabel>
            <Select>
              <option>標準</option>
            </Select>
          </FormControl>
          <FormControl id="volume">
            <FormLabel htmlFor="volume">
              Your clients transaction volume
            </FormLabel>
            <Select>
              <option>0</option>
              <option>50</option>
              <option>100</option>
              <option>500</option>
              <option>1000</option>
              <option>5000</option>
              <option>10000</option>
              <option>50000</option>
              <option>100000</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Commission per lot</FormLabel>
            <Text>$500</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Your total commission</FormLabel>
            <Text>$500</Text>
          </FormControl>
        </Flex>
      </Flex>

      {/* Earn commissions instantly */}
      <Flex direction="column" align="center" py={20}>
        <Box
          w={{ base: '80vw', lg: '45vw' }}
          pb={6}
          textAlign={{ base: 'inherit', xl: 'center' }}
        >
          <InfoTitle title="Earn commissions instantly" />
          <Text>
            Becoming an agent / broker will be the easiest way to increase your
            income because there is no registration cost. You can work anywhere
            and even promote your services through the website. At the same
            time， you can directly refer clients to WCG， guide them through
            the real account opening process， and explain all the benefits of
            becoming a WCG client.
          </Text>
        </Box>
        <Box>
          <InfoButtonBase
            text="I want to be an agent"
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

export default introducingBroker;
