import { IProduct } from '@/assets/productsData';
import { Locales } from '@/i18n/config';
import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import InfoButtonBase from './InfoButtonBase';

type InfoButtonProps = {
  text: string;
  href: string;
  option?: IProduct['category'];
  bgColor?: string;
  hoverBg?: string;
  withBorder?: boolean;
  isExternal?: boolean;
};

const InfoButton: React.FC<InfoButtonProps> = ({
  text,
  href,
  option,
  withBorder = false,
  bgColor,
  hoverBg,
  isExternal = false
}: InfoButtonProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  return isExternal ? (
    <Link
      isExternal
      href={href}
      _hover={{
        textDecoration: 'none'
      }}
    >
      <InfoButtonBase
        text={text}
        withBorder={withBorder}
        bgColor={bgColor}
        hoverBg={hoverBg}
      />
    </Link>
  ) : (
    <NextLink
      passHref={true}
      href={
        option
          ? {
              pathname: href,
              query: { option }
            }
          : href
      }
      locale={currentLang}
    >
      <InfoButtonBase
        text={text}
        withBorder={withBorder}
        bgColor={bgColor}
        hoverBg={hoverBg}
      />
    </NextLink>
  );
};

export default InfoButton;
