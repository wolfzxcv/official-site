import { Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';

const Logo: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink href="/" locale={currentLang}>
      <Link>
        <Image
          maxW={'80%'}
          h="auto"
          src="../assets/images/logo.png"
          alt="logo"
        />
      </Link>
    </NextLink>
  );
};

export default Logo;
