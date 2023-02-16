import { links } from '@/assets/links';
import Wrapper from '@/components/Base/Wrapper';
import InfoTitle from '@/components/Common/InfoTitle';
import InfoTitleSub from '@/components/Common/InfoTitleSub';
import { IField } from '@/components/Form/SubmitForm';
import { Locales } from '@/i18n/config';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

const SubmitForm = dynamic(() => import('@/components/Form/SubmitForm'), {
  ssr: false
});

const contactUs: React.FC<{}> = () => {
  const { t } = useTranslation('contactUs');

  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  const data: IField[] = [
    {
      label: t('firstName'),
      name: 'firstName',
      initialValue: '',
      rule: Yup.string()
        .min(2, t('tooShort'))
        .max(50, t('tooLong'))
        .required(t('required'))
    },
    {
      label: t('lastName'),
      name: 'lastName',
      initialValue: '',
      rule: Yup.string()
        .min(1, t('tooShort'))
        .max(50, t('tooLong'))
        .required(t('required'))
    },
    {
      label: t('contactNumber'),
      name: 'mobile',
      initialValue: '',
      rule: Yup.string()
        .min(8, t('tooShort'))
        .max(15, t('tooLong'))
        .required(t('required'))
    },
    {
      label: t('emailAddress'),
      name: 'email',
      initialValue: '',
      rule: Yup.string().email(t('invalidFormat')).required(t('required'))
    },
    {
      label: t('area'),
      name: 'area',
      initialValue: '',
      rule: Yup.string()
        .min(2, t('tooShort'))
        .max(50, t('tooLong'))
        .required(t('required'))
    },
    {
      label: t('category'),
      name: 'type',
      type: 'select',
      options: [
        t('pleaseSelectAnItem'),
        t('generalInquiry'),
        t('disputesComplaints'),
        t('partner')
      ],
      initialValue: '',
      rule: Yup.string().required(t('required'))
    },
    {
      label: t('yourAccount'),
      name: 'login',
      initialValue: '',
      rule: Yup.string()
        .min(3, t('tooShort'))
        .max(20, t('tooLong'))
        .notRequired()
    },
    {
      label: t('leaveAMessage'),
      name: 'content',
      type: 'textarea',
      initialValue: '',
      rule: Yup.string().notRequired()
    }
  ];

  return (
    <Wrapper>
      {/* contact us */}
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
          <Flex my={10} flexDirection="column">
            <InfoTitle title={t('contactUs')} />
            <InfoTitleSub title={t('ifYouNeed')} />
            <Text>
              {`${t('customerService')}: `}

              <Link
                _hover={{ cursor: 'pointer' }}
                href={`tel:${links.tel}`}
                isExternal
              >
                {links.tel}
              </Link>
              {', '}
              <Link
                _hover={{ cursor: 'pointer' }}
                href={`tel:${links.tel2}`}
                isExternal
              >
                {links.tel2}
              </Link>
            </Text>
            <Text>
              {`${t('customerServiceEmail')}: `}

              <Link
                _hover={{ cursor: 'pointer' }}
                href={`mailto:${links.email}`}
                isExternal
              >
                {links.email}
              </Link>
            </Text>
          </Flex>
        </Box>
        <Image
          src="/../assets/images/contactUs_banner.png"
          alt="contactUs"
          objectFit="cover"
          objectPosition="0"
          position="absolute"
          right="0"
          height="100%"
          width={{ base: '100vw', xl: '60vw' }}
        />
      </Flex>

      {/* WCG is always by your side */}
      <Flex justify="center" py={{ base: 10, md: 20 }}>
        <Box w={{ base: '80vw', md: '700px' }}>{t('WCGIsAlways')}</Box>
      </Flex>

      {/* Form */}
      <Flex justify="center" pb={{ base: 10, md: 20 }}>
        <Box w={{ base: '80vw', md: '700px' }}>
          <SubmitForm
            data={data}
            agreement={t('iAgreeTo')}
            submit={t('submit')}
            afterSubmit={t('weWillContactYou')}
            api="/contact"
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
      'contactUs'
    ]))
  }
});

export default contactUs;
