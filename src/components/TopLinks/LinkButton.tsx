import { isIOS } from '@/utils';
import { Box, Link } from '@chakra-ui/react';
import React from 'react';

type LinkButtonProps = {
  text: string;
  href?: string;
  inMobile?: boolean;
  withBorder?: boolean;
  borderColor?: '#b81c22' | 'green' | 'inherit';
  mdWidth?: string;
  isFooter?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  inMobile = false,
  withBorder = true,
  borderColor = 'inherit',
  mdWidth,
  isFooter = false,
  onClick,
  style
}: LinkButtonProps) => {
  return (
    <>
      {href ? (
        <Link
          _hover={{
            textDecoration: 'none'
          }}
          href={href}
          isExternal
        >
          <BaseLinkButton
            text={text}
            inMobile={inMobile}
            withBorder={withBorder}
            borderColor={borderColor}
            mdWidth={mdWidth}
            isFooter={isFooter}
            style={style}
          />
        </Link>
      ) : (
        <BaseLinkButton
          text={text}
          inMobile={inMobile}
          withBorder={withBorder}
          borderColor={borderColor}
          mdWidth={mdWidth}
          isFooter={isFooter}
          onClick={onClick}
          style={style}
        />
      )}
    </>
  );
};

const BaseLinkButton = ({
  text,
  inMobile = false,
  withBorder = true,
  borderColor = 'inherit',
  mdWidth,
  isFooter = false,
  onClick,
  style
}: LinkButtonProps) => {
  const reduceSize =
    (text.length > 20 || (isIOS() && text.length >= 20)) && inMobile;
  return (
    <Box
      border={withBorder ? '1px' : '0px'}
      borderColor={withBorder && borderColor ? borderColor : 'inherit'}
      as="button"
      display={{ base: inMobile ? 'inline' : 'none', md: 'inline' }}
      width={{
        base: isFooter ? 'auto' : '45vw',
        md: mdWidth ? mdWidth : '15vw'
      }}
      minH="40px"
      minW="100px"
      fontSize={reduceSize ? '14px' : 'auto'}
      mx={2}
      px={reduceSize ? 1 : 2}
      _hover={{
        bgColor: withBorder && borderColor ? borderColor : 'inherit',
        transition: '1s'
      }}
      onClick={onClick}
      style={style}
    >
      {text}
    </Box>
  );
};

export default LinkButton;
