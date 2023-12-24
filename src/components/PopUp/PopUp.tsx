import { useDisclosure } from '@chakra-ui/hooks';
import {
  AlertDialogOverlay,
  Box,
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

  let HEADER_SIZE = isDesktop ? '24px' : '20px';

  const titleIsString = typeof title === 'string';

  const longTitle = titleIsString && title.length > 30;

  if (longTitle || !titleIsString) {
    HEADER_SIZE = '14px';
  }

  return (
    <Modal
      motionPreset="slideInBottom"
      onClose={onClose}
      isOpen={isOpen}
      scrollBehavior="inside"
      blockScrollOnMount={false}
      isCentered
      size={size}
    >
      <AlertDialogOverlay />

      <ModalContent maxH="100%">
        <ModalHeader
          fontWeight="bold"
          fontSize={HEADER_SIZE}
          bg="black"
          color="white"
          textAlign="center"
          py={isDesktop ? 1 : 2}
        >
          {typeof title === 'string' ? <Box>{title}</Box> : title}
        </ModalHeader>
        <ModalCloseButton
          color="white"
          size="lg"
          top={!titleIsString || longTitle ? 4 : isDesktop ? 1 : 0}
        />
        <ModalBody p={0} border={useBorder ? '1px' : '0'} borderColor="white">
          {content}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
