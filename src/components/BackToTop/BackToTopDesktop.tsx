import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';
import {
  AiOutlineCloudDownload,
  AiOutlineMail,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { BiArrowToTop } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { FaLine, FaTelegramPlane } from 'react-icons/fa';

const BackToTopDesktop: React.FC<{}> = () => {
  const { t } = useTranslation(['common']);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box position="fixed" bottom="30%" right="0">
      <Flex direction="column">
        <IconButton
          as="a"
          href="/about/contactUs"
          mb={3}
          title={t('contactUs')}
          borderRadius="50%"
          aria-label={t('contactUs')}
          aria-hidden
          icon={<AiOutlineMail fontSize="32px" />}
        />
        <IconButton
          as="a"
          href="https://api.whatsapp.com/message/2CCAPQTYUPV6P1"
          target="_blank"
          mb={3}
          title={t('whatsApp')}
          borderRadius="50%"
          aria-label={t('whatsApp')}
          aria-hidden
          icon={<AiOutlineWhatsApp fontSize="32px" />}
        />
        <IconButton
          as="a"
          href="https://page.line.me/?accountId=739zqmre&openerPlatform=native&openerKey=talkroom%3Amessage"
          target="_blank"
          mb={3}
          title={t('line')}
          borderRadius="50%"
          aria-label={t('line')}
          aria-hidden
          icon={<FaLine fontSize="32px" />}
        />
        <IconButton
          as="a"
          href="https://t.me/WCGMarketsLtd"
          target="_blank"
          mb={3}
          title={t('telegram')}
          borderRadius="50%"
          aria-label={t('telegram')}
          aria-hidden
          icon={<FaTelegramPlane fontSize="32px" />}
        />
        <IconButton
          as="a"
          href="https://trader.wc012.com/register"
          target="_blank"
          mb={3}
          title={t('clientPortal')}
          borderRadius="50%"
          aria-label={t('clientPortal')}
          aria-hidden
          icon={<BsPencilSquare fontSize="32px" />}
        />
        <IconButton
          as="a"
          href="/platform/MT4PCDownload"
          mb={3}
          title={t('downloadMT4')}
          borderRadius="50%"
          aria-label={t('downloadMT4')}
          aria-hidden
          icon={<AiOutlineCloudDownload fontSize="32px" />}
        />
        <IconButton
          title={t('top')}
          borderRadius="50%"
          onClick={scrollToTop}
          aria-label={t('top')}
          icon={<BiArrowToTop fontSize="32px" />}
        />
      </Flex>
    </Box>
  );
};

export default BackToTopDesktop;
