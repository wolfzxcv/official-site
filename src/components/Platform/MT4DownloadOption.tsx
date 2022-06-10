import { Box, Center, Link, Text } from '@chakra-ui/react';
import React from 'react';

type MT4DownloadOptionProps = {
  icon?: JSX.Element;
  image?: JSX.Element;
  text: string;
  href: string;
  inMobile?: boolean;
};

const MT4DownloadOption: React.FC<MT4DownloadOptionProps> = ({
  icon,
  image,
  text,
  href,
  inMobile = false
}: MT4DownloadOptionProps) => {
  return (
    <Link
      href={href}
      isExternal
      w={{ base: '30vw', md: '20vw' }}
      my={10}
      p={5}
      display={{ base: inMobile ? 'block' : 'none', md: 'block' }}
      _hover={{
        bgColor: 'gray.200'
      }}
    >
      <Box color="red.600" mb={10}>
        {icon && <Center>{icon}</Center>}
        {image && <Center>{image && image}</Center>}
      </Box>
      <Text textAlign="center" fontWeight="600">
        {text}
      </Text>
    </Link>
  );
};

export default MT4DownloadOption;
