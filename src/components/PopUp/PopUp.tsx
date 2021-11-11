import { useDisclosure } from '@chakra-ui/hooks';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  useMediaQuery
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

interface PopUpProps {
  title: string;
  content: JSX.Element;
}

const PopUp: React.FC<PopUpProps> = ({ title, content }: PopUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [isNotMobile] = useMediaQuery('(min-width: 832px)');

  useEffect(() => {
    openPopUp();
  }, []);

  const openPopUp = () => {
    onOpen();
  };

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        size="md"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader
            fontSize={isNotMobile ? '24px' : '20px'}
            fontWeight="bold"
            bg="black"
            color="white"
            textAlign="center"
            py={isNotMobile ? 1 : 2}
          >
            {title}
          </AlertDialogHeader>
          <AlertDialogCloseButton
            color="white"
            size="lg"
            top={isNotMobile ? 1 : 0}
          />
          <AlertDialogBody>{content}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PopUp;
