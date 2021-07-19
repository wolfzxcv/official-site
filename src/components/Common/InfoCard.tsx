import { Box, Center, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';
import { StyledBoxTag } from '../Styled/Styled';

interface InfoCardProps {
  icon?: JSX.Element;
  image?: JSX.Element;
  title: string;
  text: string;
  minH?: string;
  bigW?: string;
  withBorder?: boolean;
  allCenter?: boolean;
}

// a row with 2 or 3 cards
const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  image,
  title,
  text,
  minH = 'auto',
  bigW,
  withBorder = false,
  allCenter = false
}: InfoCardProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'sa';

  return (
    <Box
      border={withBorder ? '1px' : '0px'}
      m={withBorder ? 3 : 0}
      minH={minH ? minH : withBorder ? '280px' : 'auto'}
    >
      <StyledBoxTag display={withBorder ? 'inherit' : 'none'} />

      <Box my={withBorder ? 2 : 7} mx={{ base: 10, xl: 0 }} color="red.600">
        {icon && <Center>{icon}</Center>}
        {image && <Center>{image && image}</Center>}
      </Box>

      <Stack
        mx={withBorder ? 0 : 5}
        my={10}
        px={withBorder ? 5 : 0}
        spacing={3}
        width={{ base: '80vw', xl: bigW ? bigW : '30vw' }}
        textAlign={{
          base: 'center',
          xl: withBorder
            ? 'center'
            : allCenter
            ? 'center'
            : isArabic
            ? 'right'
            : 'left'
        }}
      >
        <Text fontSize="24px" fontWeight="700">
          {title}
        </Text>
        <Text>{text}</Text>
      </Stack>
    </Box>
  );
};

export default InfoCard;
