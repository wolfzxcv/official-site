import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';
import { IProduct } from '../Product/productsData';
import { StyledFlex } from '../Styled/Styled';

interface InfoButtonProps {
  text: string;
  href: string;
  option?: IProduct['category'];
  bgColor?: string;
  hoverBg?: string;
  withBorder?: boolean;
}

const InfoButton: React.FC<InfoButtonProps> = ({
  text,
  href,
  option,
  withBorder = false,
  bgColor,
  hoverBg
}: InfoButtonProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const widerButton =
    currentLang === 'in' || currentLang === 'ms' || currentLang === 'vi';

  return (
    <NextLink
      href={
        option
          ? {
              pathname: href,
              query: { option }
            }
          : href
      }
      locale={currentLang}
    >
      <StyledFlex
        minH="40px"
        width={widerButton ? '250px' : '200px'}
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
      >
        <Box>{text}</Box>
        <Box>{'>'}</Box>
      </StyledFlex>
    </NextLink>
  );
};

export default InfoButton;
