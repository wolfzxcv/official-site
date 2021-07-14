import { Box, Flex, Image } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React from 'react';
import InfoTitle from '../../components/Common/InfoTitle';
import InfoTitleSub from '../../components/Common/InfoTitleSub';
import DownloadButton from '../../components/Platform/DownloadButton';
import Wrapper from '../../components/Wrapper';
import { Locales } from '../../i18n/locales';

interface MT4PCDownloadProps {}

const MT4PCDownload: React.FC<MT4PCDownloadProps> = () => {
  const { t } = useTranslation(['platform']);
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isChinese = currentLang === 'cn' || currentLang === 'hk';

  return (
    <Wrapper>
      <Flex
        minH="500px"
        justify="center"
        align="center"
        py={20}
        px={{ base: 0, xl: 20 }}
        background={{
          base: 'gray.600',
          xl: 'linear-gradient(to bottom right, #4A5568, #4A5568 75%, transparent 30% , transparent);'
        }}
      >
        <Box width={{ base: '80vw', md: '60vw' }} px={{ base: 0, xl: 20 }}>
          <Flex color="white" align="center" mb={5}>
            <Image
              boxSize="40px"
              mr={5}
              src="../assets/images/mt4pcdownload_pc.png"
              alt="pc"
            />

            <InfoTitle title={t('MT4PcVersion')} />
          </Flex>
          <InfoTitleSub title={t('MetaTrader4IsTheMostPopular')} />

          <Box
            mt={20}
            width={{ base: 'auto', xl: isChinese ? '200px' : '400px' }}
          >
            <DownloadButton
              href="https://download.mql5.com/cdn/web/17749/mt4/wenchuangloballtd4setup.exe"
              text={t('downloadImmediately')}
            />
          </Box>
        </Box>
        <Box width={{ base: '0', xl: '40vw' }}>
          <Image src="../assets/images/mt4pcdownload_1.png" alt="pc" />
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
      'header',
      'platform'
    ]))
  }
});

export default MT4PCDownload;
