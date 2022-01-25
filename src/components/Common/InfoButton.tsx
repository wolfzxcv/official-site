import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/config';
import { IProduct } from '../Product/productsData';
import InfoButtonBase from './InfoButtonBase';

type InfoButtonProps = {
  text: string;
  href: string;
  option?: IProduct['category'];
  bgColor?: string;
  hoverBg?: string;
  withBorder?: boolean;
};

const InfoButton: React.FC<InfoButtonProps> = ({
  text,
  href,
  option,
  withBorder = false,
  bgColor,
  hoverBg
}: InfoButtonProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  return (
    <NextLink
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
