import { useDisclosure } from '@chakra-ui/hooks';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay
} from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

interface PopUpProps {
  title: string;
  content: JSX.Element;
}

const PopUp: React.FC<PopUpProps> = ({ title, content }: PopUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

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
        size="xl"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader
            fontSize="24px"
            fontWeight="bold"
            bg="red.600"
            color="white"
            textAlign="center"
            py={1}
          >
            {title}
          </AlertDialogHeader>
          <AlertDialogCloseButton color="white" size="lg" top={1} />
          <AlertDialogBody>{content}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PopUp;
