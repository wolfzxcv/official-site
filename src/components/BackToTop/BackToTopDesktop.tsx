import { Flex, Tooltip } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React from 'react';
import {
  AiOutlineCloudDownload,
  AiOutlineMessage,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { BiArrowToTop } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
import { FaLine, FaTelegramPlane } from 'react-icons/fa';
import { Locales } from '../../i18n/locales';
import { openChatWindow, scrollToTop } from '../../utils';
import { StyledBox, StyledIconButton } from '../Styled/Styled';

const BackToTopDesktop: React.FC<{}> = () => {
  const { t } = useTranslation(['common']);
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <StyledBox zIndex={1} position="fixed" bottom={'30%'} right="3">
      <Flex direction={'column'} color="white">
        <Tooltip label={t('online')} aria-label={t('online')} placement="left">
          <StyledIconButton
            onClick={openChatWindow}
            mb={3}
            borderRadius="50%"
            aria-label={t('online')}
            aria-hidden
            icon={<AiOutlineMessage fontSize="32px" />}
            bgColor="gray.700"
            borderColor="white"
            border="1px"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>
        <Tooltip
          label={t('whatsApp')}
          aria-label={t('whatsApp')}
          placement="left"
        >
          <StyledIconButton
            as="a"
            href="https://api.whatsapp.com/message/2CCAPQTYUPV6P1"
            target="_blank"
            mb={3}
            borderRadius="50%"
            aria-label={t('whatsApp')}
            aria-hidden
            icon={<AiOutlineWhatsApp fontSize="32px" />}
            bgColor="gray.700"
            borderColor="white"
            border="1px"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>
        <Tooltip label={t('line')} aria-label={t('line')} placement="left">
          <StyledIconButton
            as="a"
            href="https://page.line.me/?accountId=739zqmre&openerPlatform=native&openerKey=talkroom%3Amessage"
            target="_blank"
            mb={3}
            borderRadius="50%"
            aria-label={t('line')}
            aria-hidden
            icon={<FaLine fontSize="32px" />}
            bgColor="gray.700"
            borderColor="white"
            border="1px"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>
        <Tooltip
          label={t('telegram')}
          aria-label={t('telegram')}
          placement="left"
        >
          <StyledIconButton
            as="a"
            href="https://t.me/WCGMarketsLtd"
            target="_blank"
            mb={3}
            borderRadius="50%"
            aria-label={t('telegram')}
            aria-hidden
            icon={<FaTelegramPlane fontSize="32px" />}
            bgColor="gray.700"
            borderColor="white"
            border="1px"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>
        <Tooltip
          label={t('clientPortal')}
          aria-label={t('clientPortal')}
          placement="left"
        >
          <StyledIconButton
            as="a"
            href="https://trader.wc012.com/register"
            target="_blank"
            mb={3}
            borderRadius="50%"
            aria-label={t('clientPortal')}
            aria-hidden
            icon={<BsPencilSquare fontSize="32px" />}
            bgColor="gray.700"
            borderColor="white"
            border="1px"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>

        <Tooltip
          label={t('downloadMT4')}
          aria-label={t('downloadMT4')}
          placement="left"
        >
          <StyledIconButton
            as="a"
            href={`/${currentLang}/platform/MT4Overview`}
            mb={3}
            borderRadius="50%"
            aria-label={t('downloadMT4')}
            aria-hidden
            icon={<AiOutlineCloudDownload fontSize="32px" />}
            bgColor="gray.700"
            borderColor="white"
            border="1px"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>

        <Tooltip label={t('top')} aria-label={t('top')} placement="left">
          <StyledIconButton
            borderRadius="50%"
            onClick={scrollToTop}
            aria-label={t('top')}
            icon={<BiArrowToTop fontSize="32px" />}
            bgColor="gray.700"
            borderColor="white"
            border="1px"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>
      </Flex>
    </StyledBox>
  );
};

export default BackToTopDesktop;
