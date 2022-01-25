import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

type InfoCardSmProps = {
  icon?: JSX.Element;
  image?: JSX.Element;
  text: string;
};

const InfoCardSm: React.FC<InfoCardSmProps> = ({
  icon,
  image,
  text
}: InfoCardSmProps) => {
  return (
    <Box p={10}>
      <Box my={5} color="red.600">
        {icon && <Center>{icon}</Center>}
        {image && <Center>{image && image}</Center>}
      </Box>
      <Text>{text}</Text>
    </Box>
  );
};

export default InfoCardSm;
