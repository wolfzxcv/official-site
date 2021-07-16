import { Flex, Tooltip } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
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
    <StyledBox
      zIndex={1}
      position="fixed"
      bottom={{ base: '10%', md: '30%' }}
      right="3"
    >
      <Flex direction="column" color="white">
        <Tooltip label={t('online')} aria-label={t('online')} placement="left">
          <StyledIconButton
            onClick={openChatWindow}
            mb={3}
            // title={t('online')}
            borderRadius="50%"
            aria-label={t('online')}
            aria-hidden
            icon={<AiOutlineMessage fontSize="32px" />}
            bgColor="gray.600"
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
            // title={t('whatsApp')}
            borderRadius="50%"
            aria-label={t('whatsApp')}
            aria-hidden
            icon={<AiOutlineWhatsApp fontSize="32px" />}
            bgColor="gray.600"
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
            // title={t('line')}
            borderRadius="50%"
            aria-label={t('line')}
            aria-hidden
            icon={<FaLine fontSize="32px" />}
            bgColor="gray.600"
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
            // title={t('telegram')}
            borderRadius="50%"
            aria-label={t('telegram')}
            aria-hidden
            icon={<FaTelegramPlane fontSize="32px" />}
            bgColor="gray.600"
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
            // title={t('clientPortal')}
            borderRadius="50%"
            aria-label={t('clientPortal')}
            aria-hidden
            icon={<BsPencilSquare fontSize="32px" />}
            bgColor="gray.600"
            _hover={{
              bgColor: 'red.600'
            }}
          />
        </Tooltip>

        <NextLink href="/platform/MT4Overview" locale={currentLang}>
          <Tooltip
            label={t('downloadMT4')}
            aria-label={t('downloadMT4')}
            placement="left"
          >
            <StyledIconButton
              as="a"
              mb={3}
              // title={t('downloadMT4')}
              borderRadius="50%"
              aria-label={t('downloadMT4')}
              aria-hidden
              icon={<AiOutlineCloudDownload fontSize="32px" />}
              bgColor="gray.600"
              _hover={{
                bgColor: 'red.600'
              }}
            />
          </Tooltip>
        </NextLink>

        <Tooltip label={t('top')} aria-label={t('top')} placement="left">
          <StyledIconButton
            // title={t('top')}
            borderRadius="50%"
            onClick={scrollToTop}
            aria-label={t('top')}
            icon={<BiArrowToTop fontSize="32px" />}
            bgColor="gray.600"
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
