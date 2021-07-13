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

export const StyledBoxTag = styled(Box)`
  width: 0;
  height: 0;
  position: relative;
  top: -13px;
  right: 3px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #c53030;
  transform: rotate(45deg);
`;
