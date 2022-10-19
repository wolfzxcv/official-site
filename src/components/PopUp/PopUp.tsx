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
  title: string | JSX.Element;
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

  // const HEADER_SIZE = isDesktop ? '24px' : '20px';

  const longTitle = title.valueOf.length > 30;
  let closeTop = 0;
  if (longTitle) {
    // HEADER_SIZE = isDesktop ? '16px' : '12px';
    closeTop = 4;
  }

  const titleType = typeof title;

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
          top={titleType == 'string' ? closeTop : isDesktop ? 1 : 0}
        />
        <ModalBody p={0} border={useBorder ? '1px' : '0'} borderColor="white">
          {content}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
