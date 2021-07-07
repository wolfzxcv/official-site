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
  withBorder = false
}: LinkButtonProps) => {
  return (
    <Box
      border={withBorder ? '1px' : '0px'}
      as="button"
      mx={withBorder ? '0' : '10'}
      display={{ base: inMobile ? 'inline' : 'none', md: 'inline' }}
      height="50px"
      minW="100px"
      px={2}
      _hover={{
        bgColor: 'gray.100',
        color: 'gray.700'
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
