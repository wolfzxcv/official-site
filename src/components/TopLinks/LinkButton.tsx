import { Box, Link } from '@chakra-ui/react';
import React from 'react';

interface LinkButtonProps {
  text: string;
  href: string;
  inMobile?: boolean;
  withBorder?: boolean;
  borderColor?: '#b81c22' | 'green' | 'inherit';
  isFooter?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  inMobile = false,
  withBorder = true,
  borderColor = 'inherit',
  isFooter = false
}: LinkButtonProps) => {
  return (
    <Link
      _hover={{
        textDecoration: 'none'
      }}
      href={href}
      isExternal
    >
      <Box
        border={withBorder ? '1px' : '0px'}
        borderColor={withBorder && borderColor ? borderColor : 'inherit'}
        as="button"
        display={{ base: inMobile ? 'inline' : 'none', md: 'inline' }}
        width={{ base: isFooter ? 'inherit' : '45vw', md: '15vw' }}
        minH="40px"
        minW="100px"
        mx={2}
        px={2}
        _hover={{
          bgColor: withBorder && borderColor ? borderColor : 'inherit',
          transition: '1s'
        }}
      >
        {text}
      </Box>
    </Link>
  );
};

export default LinkButton;
