import { Locales } from '@/i18n/config';
import { Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Logo: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/" locale={currentLang}>
      <Image
        width={109}
        height={46}
        src="/../assets/images/logo.svg"
        alt="logo"
      />
    </NextLink>
  );
};

export default Logo;
