import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import React from 'react';

const SocialMediaLinks: React.FC<{}> = () => {
  const { t } = useTranslation('footer');
  return (
    <Flex alignItems="center">
      <Text mr={1}>{t('followUs')}</Text>
      <Box mx={1}>|</Box>

      <Link
        _hover={{
          bgColor: 'gray.500',
          color: 'gray.700'
        }}
        mx={1}
        href="https://www.facebook.com/WCG-109473260957040"
        isExternal
      >
        <Image
          minW="28px"
          height="28px"
          src="../assets/images/facebook.png"
          alt="Facebook"
        />
      </Link>
      <Link
        _hover={{
          bgColor: 'gray.500',
          color: 'gray.700'
        }}
        href="https://www.instagram.com/wcg_markets/"
        isExternal
      >
        <Image
          minW="28px"
          height="28px"
          src="../assets/images/instagram.png"
          alt="Instagram"
        />
      </Link>
    </Flex>
  );
};

export default SocialMediaLinks;
