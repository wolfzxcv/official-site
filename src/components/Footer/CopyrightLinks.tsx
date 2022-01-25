import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

type CopyrightLinksProps = {
  text: string;
  href: string;
};

const CopyrightLinks: React.FC<CopyrightLinksProps> = ({
  text,
  href
}: CopyrightLinksProps) => {
  return (
    <Box
      mx={1}
      _hover={{
        bgColor: 'gray.100',
        color: 'gray.700'
      }}
    >
      <Link href={href}>{text}</Link>
    </Box>
  );
};

export default CopyrightLinks;
