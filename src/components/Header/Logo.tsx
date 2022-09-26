import { Locales } from '@/i18n/config';
import { Image, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Logo: React.FC<{}> = () => {
  const router = useRouter();
  const currentLang = router.locale as Locales;

  return (
    <NextLink passHref={true} href="/" locale={currentLang}>
      <Link>
        <Image
          width={109}
          height={46}
          src="/../assets/images/logo.svg"
          alt="logo"
        />
      </Link>
    </NextLink>
  );
};

export default Logo;
