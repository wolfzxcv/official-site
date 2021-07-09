import { Box, Center, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface CommonCardProps {
  icon: JSX.Element;
  title: string;
  text: string;
  isTwo?: boolean;
}

const CommonCard: React.FC<CommonCardProps> = ({
  icon,
  title,
  text,
  isTwo = false
}: CommonCardProps) => {
  return (
    <>
      <Box my={7} mx={{ base: 10, xl: 0 }} color="red.600">
        <Center>{icon}</Center>
      </Box>
      <Stack
        mx={10}
        mb={10}
        spacing={3}
        width={{ base: '80vw', xl: isTwo ? '40vw' : '30vw' }}
        textAlign={{ base: 'center', xl: 'left' }}
      >
        <Text fontSize="24px" fontWeight="700">
          {title}
        </Text>
        <Text>{text}</Text>
      </Stack>
    </>
  );
};

export default CommonCard;
