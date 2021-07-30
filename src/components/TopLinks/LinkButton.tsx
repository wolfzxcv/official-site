import { Box, Link } from '@chakra-ui/react';
import React from 'react';

interface LinkButtonProps {
  text: string;
  href: string;
  inMobile?: boolean;
  withBorder?: boolean;
  borderColor?: 'red' | 'green' | 'inherit';
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
    <Box
      border={withBorder ? '1px' : '0px'}
      borderColor={withBorder && borderColor ? borderColor : 'inherit'}
      as="button"
      display={{ base: inMobile ? 'inline' : 'none', md: 'inline' }}
      width={{ base: isFooter ? 'inherit' : '45vw', md: '15vw' }}
      height="70px"
      minW="100px"
      mx={2}
      px={2}
      _hover={{
        bgColor: 'gray.600',
        transform: 'scale(1.1)',
        fontWeight: '600'
      }}
    >
      <Link
        width="100%"
        _hover={{
          textDecoration: 'none'
        }}
        href={href}
        isExternal
      >
        {text}
      </Link>
    </Box>
  );
};

export default LinkButton;
