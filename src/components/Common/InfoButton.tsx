import { Box } from '@chakra-ui/react';
import React from 'react';
import { StyledFlex } from '../Styled/Styled';

interface InfoButtonProps {
  text: string;
  href: string;
}

const InfoButton: React.FC<InfoButtonProps> = ({
  text,
  href
}: InfoButtonProps) => {
  return (
    <StyledFlex
      as="a"
      minH="40px"
      width="200px"
      bgColor="red.600"
      justify="space-around"
      align="center"
      fontWeight={'600'}
      color={'white'}
      href={href}
      _hover={{
        bgColor: 'red.700',
        transform: 'scale(1.1)',
        cursor: 'pointer'
      }}
    >
      <Box>{text}</Box>
      <Box>{'>'}</Box>
    </StyledFlex>
  );
};

export default InfoButton;
