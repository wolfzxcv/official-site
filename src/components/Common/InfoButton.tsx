import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';
import { StyledFlex } from '../Styled/Styled';

interface InfoButtonProps {
  text: string;
  href: string;
}

const InfoButton: React.FC<InfoButtonProps> = ({
  text,
  href
}: InfoButtonProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink href={href} locale={currentLang}>
      <StyledFlex
        minH="40px"
        width="200px"
        bgColor="red.600"
        justify="space-around"
        align="center"
        fontWeight={'600'}
        color={'white'}
        _hover={{
          bgColor: 'red.700',
          transform: 'scale(1.1)',
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
