import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';
import { StyledFlex } from '../Styled/Styled';

interface InfoButtonBaseProps {
  text: string;
  bgColor?: string;
  hoverBg?: string;
  withBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function InfoButtonBase({
  text,
  bgColor,
  hoverBg,
  withBorder = false,
  onClick
}: InfoButtonBaseProps) {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const widerButton =
    currentLang === 'id' || currentLang === 'ms' || currentLang === 'vi';
  return (
    <StyledFlex
      minH="40px"
      minW={widerButton ? '250px' : '200px'}
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
