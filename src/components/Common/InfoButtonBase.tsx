import { Locales } from '@/i18n/config';
import { Box, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { forwardRef } from 'react';

type InfoButtonBaseProps = {
  text: string;
  bgColor?: string;
  hoverBg?: string;
  withBorder?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

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
    const router = useRouter();
    const currentLang = router.locale as Locales;
    const widerButton =
      currentLang === 'id' || currentLang === 'ms' || currentLang === 'vi';
    return (
      <Flex
        ref={ref}
        {...rest}
        minH="40px"
        minW={widerButton ? '250px' : '200px'}
        w="max-content"
        px={2}
        bgColor={bgColor ? bgColor : 'red.600'}
        justify="space-between"
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
      </Flex>
    );
  }
);

InfoButtonBase.displayName = 'InfoButtonBase';

export default InfoButtonBase;
