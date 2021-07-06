import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
  href: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, text }: MenuItemProps) => {
  return (
    <Box
      fontSize="1.2rem"
      _hover={{ color: 'gray.300', textDecoration: 'underline' }}
    >
      <Link href={href}>{text}</Link>
    </Box>
  );
};

export default MenuItem;
