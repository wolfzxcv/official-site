import { Box } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { StyledFlex } from '../Styled/Styled';

interface InfoButtonBaseProps {
  text: string;
  bgColor?: string;
  hoverBg?: string;
  withBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const InfoButtonBase = forwardRef<HTMLDivElement, InfoButtonBaseProps>(
  (
    {
      text,
      bgColor,
      withBorder,
      hoverBg,
      onClick,
      ...rest
    }: InfoButtonBaseProps,
    ref
  ) => {
    return (
      <StyledFlex
        ref={ref}
        {...rest}
        minH="40px"
        w="max-content"
        px={2}
        bgColor={bgColor ? bgColor : 'red.600'}
        justify="space-around"
        align="center"
        fontWeight={'600'}
        color={'white'}
        border={withBorder ? '1px' : 'none'}
        borderColor="inherit"
        _hover={{
          bgColor: hoverBg ? hoverBg : 'red.700',
          transition: '1s',
          cursor: 'pointer'
        }}
        onClick={onClick}
      >
        <Box>{text}</Box>
        <Box>{'>'}</Box>
      </StyledFlex>
    );
  }
);

InfoButtonBase.displayName = 'InfoButtonBase';

export default InfoButtonBase;
