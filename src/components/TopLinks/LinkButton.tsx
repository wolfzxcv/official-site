import { Box, Link } from '@chakra-ui/react';
import React from 'react';

interface LinkButtonProps {
  text: string;
  href: string;
  inMobile?: boolean;
  withBorder?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  inMobile = false,
  withBorder = true
}: LinkButtonProps) => {
  return (
    <Box
      border={withBorder ? '1px' : '0px'}
      as="button"
      display={{ base: inMobile ? 'inline' : 'none', md: 'inline' }}
      width={{ base: '45vw', md: '15vw' }}
      minH="40px"
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
