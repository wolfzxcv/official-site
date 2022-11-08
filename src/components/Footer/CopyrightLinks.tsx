import { Locales } from '@/i18n/config';
import { Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import React from 'react';

type CopyrightLinksProps = {
  text: string;
  href: string;
};

const CopyrightLinks: React.FC<CopyrightLinksProps> = ({
  text,
  href
}: CopyrightLinksProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <Box
      mx={1}
      _hover={{
        bgColor: 'gray.100',
        color: 'gray.700'
      }}
    >
      <NextLink passHref={true} href={href} locale={currentLang}>
        {text}
      </NextLink>
    </Box>
  );
};

export default CopyrightLinks;
