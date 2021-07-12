import { Box, Flex, IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledBox = styled(Box)`
  transition: 1 all;
`;

export const StyledFlex = styled(Flex)`
  transition: 1 all;
`;

export const StyledIconButton = styled(IconButton)`
  &:hover {
    transform: scale(1.5);
  }
`;
