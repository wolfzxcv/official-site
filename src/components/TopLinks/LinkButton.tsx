import { Box, Link } from '@chakra-ui/react';
import React from 'react';
import { isIOS } from '../../utils';

interface LinkButtonProps {
  text: string;
  href?: string;
  inMobile?: boolean;
  withBorder?: boolean;
  borderColor?: '#b81c22' | 'green' | 'inherit';
  mdWidth?: string;
  isFooter?: boolean;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  inMobile = false,
  withBorder = true,
  borderColor = 'inherit',
  mdWidth,
  isFooter = false,
  onClick
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
  onClick
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
        base: isFooter ? 'inherit' : '45vw',
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
    >
      {text}
    </Box>
  );
};

export default LinkButton;
