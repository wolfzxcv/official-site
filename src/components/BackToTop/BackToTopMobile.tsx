import { links } from '@/assets/links';
import { Locales } from '@/i18n/config';
import { scrollToTop } from '@/utils';
import {
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';
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
import { GiTalk } from 'react-icons/gi';
import { StyledIconButton } from '../Styled/Styled';

const BackToTopMobile: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const liveChat = currentLang === 'vi' ? links.liveChatVi : links.liveChat;

  const [isDesktop] = useMediaQuery('(min-width: 832px)');

  if (isDesktop && isOpen) {
    onClose();
  }

  return (
    <>
      {/* widget bottom */}
      <Box position="fixed" zIndex={1} bottom="50" left="0">
        <MobileBaseButton
          isRound={false}
          label={t('contactUs')}
          onClick={onOpen}
          icon={<GiTalk fontSize="40px" />}
        />

        {/* to top bottom */}
        <Box position="fixed" zIndex={1} bottom="0" left="0">
          <MobileBaseButton
            isRound={false}
            label={t('top')}
            onClick={scrollToTop}
            icon={<BiArrowToTop fontSize="40px" />}
          />
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        closeOnOverlayClick={true}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">{t('contactUs')}</ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody pb={6}>
            <Flex color="white" justify="space-around">
              <MobileBaseButton
                bg="twitter.500"
                label={t('Miduoke')}
                href={links.majkf}
                icon={
                  <Image
                    width="30px"
                    height="30px"
                    src="/../assets/images/Miduoke.svg"
                    alt="Miduoke"
                  />
                }
              />

              <MobileBaseButton
                label={t('LiveChat')}
                href={liveChat}
                icon={<AiOutlineMessage fontSize="32px" />}
              />

              <MobileBaseButton
                bg="whatsapp.600"
                label={t('whatsApp')}
                href={links.whatsApp}
                icon={<AiOutlineWhatsApp fontSize="36px" />}
              />

              <MobileBaseButton
                bg="twitter.500"
                label={t('telegram')}
                href={links.telegram}
                icon={<FaTelegramPlane fontSize="36px" />}
              />

              <MobileBaseButton
                bg="whatsapp.600"
                label={t('line')}
                href={links.line}
                icon={<FaLine fontSize="36px" />}
              />

              <MobileBaseButton
                bg="purple.600"
                label={t('clientPortal')}
                href={links.register}
                icon={<BsPencilSquare fontSize="36px" />}
              />

              <MobileBaseButton
                bg="red.600"
                label={t('downloadMT4')}
                href={`/${currentLang}/platform/MT4Overview`}
                icon={<AiOutlineCloudDownload fontSize="32px" />}
              />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

type MobileBaseButtonProps = {
  bg?: string;
  label: string;
  icon: JSX.Element;
  onClick?: () => void | boolean;
  href?: string;
  isRound?: boolean;
};

const MobileBaseButton: React.FC<MobileBaseButtonProps> = ({
  bg = 'gray.600',
  label,
  icon,
  onClick,
  href,
  isRound = true
}: MobileBaseButtonProps) => {
  return (
    <StyledIconButton
      onClick={onClick}
      as={href ? 'a' : 'button'}
      href={href}
      isRound={isRound}
      target={href && href.includes('http') ? '_blank' : ''}
      size="lg"
      bg={bg}
      _hover={{
        bgColor: { bg }
      }}
      color="white"
      title={label}
      aria-label={label}
      icon={icon}
    />
  );
};

export default BackToTopMobile;
