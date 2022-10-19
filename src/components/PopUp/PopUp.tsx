import { useDisclosure } from '@chakra-ui/hooks';
import {
  AlertDialogOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  useMediaQuery
} from '@chakra-ui/react';
import React, { useEffect } from 'react';

type PopUpProps = {
  title: string;
  content: JSX.Element;
  useBorder?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

const PopUp: React.FC<PopUpProps> = ({
  title,
  content,
  useBorder = true,
  size = 'xl'
}: PopUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isDesktop] = useMediaQuery('(min-width: 832px)');

  useEffect(() => {
    openPopUp();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const openPopUp = () => {
    onOpen();
  };

  let HEADER_SIZE = isDesktop ? '24px' : '20px';

  const longTitle = title.length > 30;

  if (longTitle) {
    HEADER_SIZE = isDesktop ? '16px' : '12px';
  }

  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="inside"
      isCentered
      size={size}
    >
      <AlertDialogOverlay />

      <ModalContent>
        <ModalHeader
          fontSize={HEADER_SIZE}
          fontWeight="bold"
          bg="black"
          color="white"
          textAlign="center"
          py={isDesktop ? 1 : 2}
        >
          {title}
        </ModalHeader>
        <ModalCloseButton
          color="white"
          size="lg"
          top={longTitle ? 4 : isDesktop ? 1 : 0}
        />
        <ModalBody p={0} border={useBorder ? '1px' : '0'} borderColor="white">
          {content}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
