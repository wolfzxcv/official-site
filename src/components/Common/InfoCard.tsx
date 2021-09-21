import { Box, Center, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { StyledBoxTag } from '../Styled/Styled';

interface InfoCardProps {
  icon?: JSX.Element;
  image?: JSX.Element;
  title?: string;
  text: string;
  minH?: string | object;
  bigW?: string;
  pt?: string;
  withBorder?: boolean;
  withTag?: boolean;
  node?: React.ReactElement;
}

// a row with 2-4 cards
const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  image,
  title,
  text,
  minH = 'auto',
  bigW,
  pt,
  withBorder = false,
  withTag = true,
  node
}: InfoCardProps) => {
  return (
    <Box
      border={withBorder ? '1px' : '0px'}
      m={withBorder ? 3 : 0}
      minH={minH ? minH : withBorder ? '280px' : 'auto'}
    >
      <StyledBoxTag display={withTag && withBorder ? 'inherit' : 'none'} />

      <Box
        my={withBorder ? 2 : 7}
        mx={{ base: 10, xl: 0 }}
        color="red.600"
        pt={pt ? pt : 0}
      >
        {icon && <Center>{icon}</Center>}
        {image && <Center>{image && image}</Center>}
      </Box>

      <Stack
        mx={withBorder ? 0 : 'auto'}
        my={10}
        px={withBorder ? 5 : 0}
        spacing={3}
        width={{ base: '80vw', xl: bigW ? bigW : '30vw' }}
        textAlign={'center'}
      >
        <Text fontSize="24px" fontWeight="700">
          {title}
        </Text>
        <Text>{text}</Text>
        {node}
      </Stack>
    </Box>
  );
};

export default InfoCard;
