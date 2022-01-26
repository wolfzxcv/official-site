import { Locales } from '@/i18n/config';
import { openChatWindow, scrollToTop } from '@/utils';
import {
  Box,
  Flex,
  IconButton,
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
import { GiTalk } from 'react-icons/gi';

const BackToTopMobile: React.FC<{}> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = router.locale as Locales;

  const [isDesktop] = useMediaQuery('(min-width: 832px)');

  if (isDesktop && isOpen) {
    onClose();
  }

  const handleClose = () => {
    onClose();
    openChatWindow();
  };

  return (
    <>
      {/* right bottom */}
      <Box position="fixed" zIndex={1} bottom="0" right="0">
        <IconButton
          size="lg"
          bg="gray.600"
          _hover={{
            bgColor: 'gray.600'
          }}
          color="white"
          title={t('top')}
          onClick={scrollToTop}
          aria-label={t('top')}
          icon={<BiArrowToTop fontSize="40px" />}
        />
      </Box>

      {/* left bottom */}
      <Box position="fixed" zIndex={1} bottom="0" left="0">
        <IconButton
          size="lg"
          bg="gray.600"
          _hover={{
            bgColor: 'gray.600'
          }}
          color="white"
          title={t('contactUs')}
          onClick={onOpen}
          aria-label={t('contactUs')}
          icon={<GiTalk fontSize="40px" />}
        />
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
              <IconButton
                size="lg"
                onClick={handleClose}
                borderRadius="50%"
                aria-label={t('online')}
                aria-hidden
                icon={<AiOutlineMessage fontSize="36px" />}
                bg="gray.600"
                _hover={{
                  bgColor: 'gray.600'
                }}
              />
              <IconButton
                size="lg"
                as="a"
                href="https://api.whatsapp.com/message/2CCAPQTYUPV6P1"
                target="_blank"
                borderRadius="50%"
                aria-label={t('whatsApp')}
                aria-hidden
                icon={<AiOutlineWhatsApp fontSize="36px" />}
                bg="whatsapp.600"
                _hover={{
                  bgColor: 'whatsapp.600'
                }}
              />

              <IconButton
                size="lg"
                as="a"
                href="https://t.me/WCGMarketsLtd"
                target="_blank"
                borderRadius="50%"
                aria-label={t('telegram')}
                aria-hidden
                icon={<FaTelegramPlane fontSize="36px" />}
                bg="twitter.500"
                _hover={{
                  bgColor: 'twitter.500'
                }}
              />

              <IconButton
                size="lg"
                as="a"
                href="https://page.line.me/?accountId=739zqmre&openerPlatform=native&openerKey=talkroom%3Amessage"
                target="_blank"
                borderRadius="50%"
                aria-label={t('line')}
                aria-hidden
                icon={<FaLine fontSize="36px" />}
                bg="whatsapp.600"
                _hover={{
                  bgColor: 'whatsapp.600'
                }}
              />
              <IconButton
                size="lg"
                as="a"
                href="https://trader.wc012.com/register"
                target="_blank"
                borderRadius="50%"
                aria-label={t('clientPortal')}
                aria-hidden
                icon={<BsPencilSquare fontSize="36px" />}
                bg="purple.600"
                _hover={{
                  bgColor: 'purple.600'
                }}
              />
              <NextLink href="/platform/MT4Overview" locale={currentLang}>
                <IconButton
                  size="lg"
                  as="a"
                  borderRadius="50%"
                  aria-label={t('downloadMT4')}
                  aria-hidden
                  icon={<AiOutlineCloudDownload fontSize="36px" />}
                  bg="red.600"
                  _hover={{
                    bgColor: 'red.600'
                  }}
                />
              </NextLink>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BackToTopMobile;
