import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineCloudDownload, AiOutlineWhatsApp } from 'react-icons/ai';
import { BiArrowToTop } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { FaLine, FaTelegramPlane } from 'react-icons/fa';
import { Locales } from '../../i18n/locales';
import { scrollToTop } from '../../utils';

const BackToTopMobile: React.FC<{}> = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Box zIndex={1} position="fixed" bottom={1} left={1}>
      <Flex direction={{ base: 'row', md: 'column' }} color="white">
        <IconButton
          as="a"
          href="https://api.whatsapp.com/message/2CCAPQTYUPV6P1"
          target="_blank"
          ml={3}
          borderRadius="50%"
          aria-label={t('whatsApp')}
          aria-hidden
          icon={<AiOutlineWhatsApp fontSize="32px" />}
          bgColor="gray.600"
          _hover={{
            bgColor: 'gray.600'
          }}
        />

        <IconButton
          as="a"
          href="https://page.line.me/?accountId=739zqmre&openerPlatform=native&openerKey=talkroom%3Amessage"
          target="_blank"
          ml={3}
          borderRadius="50%"
          aria-label={t('line')}
          aria-hidden
          icon={<FaLine fontSize="32px" />}
          bgColor="gray.600"
          _hover={{
            bgColor: 'gray.600'
          }}
        />

        <IconButton
          as="a"
          href="https://t.me/WCGMarketsLtd"
          target="_blank"
          ml={3}
          borderRadius="50%"
          aria-label={t('telegram')}
          aria-hidden
          icon={<FaTelegramPlane fontSize="32px" />}
          bgColor="gray.600"
          _hover={{
            bgColor: 'gray.600'
          }}
        />

        <IconButton
          as="a"
          href="https://trader.wc012.com/register"
          target="_blank"
          ml={3}
          borderRadius="50%"
          aria-label={t('clientPortal')}
          aria-hidden
          icon={<BsPencilSquare fontSize="32px" />}
          bgColor="gray.600"
          _hover={{
            bgColor: 'gray.600'
          }}
        />

        <NextLink href="/platform/MT4Overview" locale={currentLang}>
          <IconButton
            as="a"
            ml={3}
            borderRadius="50%"
            aria-label={t('downloadMT4')}
            aria-hidden
            icon={<AiOutlineCloudDownload fontSize="32px" />}
            bgColor="gray.600"
            _hover={{
              bgColor: 'gray.600',
              cursor: 'pointer'
            }}
          />
        </NextLink>

        <IconButton
          ml={3}
          borderRadius="50%"
          onClick={scrollToTop}
          aria-label={t('top')}
          icon={<BiArrowToTop fontSize="32px" />}
          bgColor="gray.600"
          _hover={{
            bgColor: 'gray.600'
          }}
        />
      </Flex>
    </Box>
  );
};

export default BackToTopMobile;
