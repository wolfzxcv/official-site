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

type PopUpProps = {
  title: string;
  content: JSX.Element;
};

const PopUp: React.FC<PopUpProps> = ({ title, content }: PopUpProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [isDesktop] = useMediaQuery('(min-width: 832px)');

  useEffect(() => {
    openPopUp();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        size="lg"
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader
            fontSize={isDesktop ? '24px' : '20px'}
            fontWeight="bold"
            bg="black"
            color="white"
            textAlign="center"
            py={isDesktop ? 1 : 2}
          >
            {title}
          </AlertDialogHeader>
          <AlertDialogCloseButton
            color="white"
            size="lg"
            top={isDesktop ? 1 : 0}
          />
          <AlertDialogBody p={0} border="1px" borderColor="white">
            {content}
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PopUp;
