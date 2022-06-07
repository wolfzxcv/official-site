import { links } from '@/assets/links';
import { Locales } from '@/i18n/config';
import { openChatWindow, scrollToTop } from '@/utils';
import { Box, Flex, Tooltip } from '@chakra-ui/react';
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
import { StyledIconButton } from '../Styled/Styled';

const BackToTopDesktop: React.FC<{}> = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Box zIndex={101} position="fixed" bottom={'50px'} right="3">
      <Flex direction={'column'} color="white">
        <DesktopBaseButton
          label={t('online')}
          onClick={openChatWindow}
          icon={<AiOutlineMessage fontSize="32px" />}
        />

        <DesktopBaseButton
          label={t('whatsApp')}
          href={links.whatsApp}
          icon={<AiOutlineWhatsApp fontSize="32px" />}
        />

        <DesktopBaseButton
          label={t('line')}
          href={links.line}
          icon={<FaLine fontSize="32px" />}
        />

        <DesktopBaseButton
          label={t('telegram')}
          href={links.telegram}
          icon={<FaTelegramPlane fontSize="32px" />}
        />

        <DesktopBaseButton
          label={t('clientPortal')}
          href={links.registerReal}
          icon={<BsPencilSquare fontSize="32px" />}
        />

        <DesktopBaseButton
          label={t('downloadMT4')}
          href={`/${currentLang}/platform/MT4Overview`}
          icon={<AiOutlineCloudDownload fontSize="32px" />}
        />

        <DesktopBaseButton
          label={t('top')}
          onClick={scrollToTop}
          icon={<BiArrowToTop fontSize="32px" />}
        />
      </Flex>
    </Box>
  );
};

type DesktopBaseButtonProps = {
  label: string;
  icon: JSX.Element;
  onClick?: () => void | boolean;
  href?: string;
};

const DesktopBaseButton: React.FC<DesktopBaseButtonProps> = ({
  label,
  icon,
  onClick,
  href
}: DesktopBaseButtonProps) => {
  return (
    <Tooltip label={label} aria-label={label} placement="left">
      <StyledIconButton
        onClick={onClick}
        href={href}
        as={href ? 'a' : 'button'}
        target={href && href.includes('http') ? '_blank' : ''}
        mb={3}
        borderRadius="50%"
        aria-label={label}
        aria-hidden
        icon={icon}
        bgColor="gray.700"
        borderColor="white"
        border="1px"
        _hover={{
          bgColor: 'red.600',
          transition: '1s',
          transform: 'scale(1.5)'
        }}
      />
    </Tooltip>
  );
};

export default BackToTopDesktop;
