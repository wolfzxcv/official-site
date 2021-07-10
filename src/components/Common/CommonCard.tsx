import { Box, Center, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Locales } from '../../i18n/locales';

interface CommonCardProps {
  icon: JSX.Element;
  title: string;
  text: string;
  isTwo?: boolean;
}

const CommonCard: React.FC<CommonCardProps> = ({
  icon,
  title,
  text,
  isTwo = false
}: CommonCardProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'sa';

  return (
    <>
      <Box my={7} mx={{ base: 10, xl: 0 }} color="red.600">
        <Center>{icon}</Center>
      </Box>
      <Stack
        mx={10}
        mb={10}
        spacing={3}
        width={{ base: '80vw', xl: isTwo ? '40vw' : '30vw' }}
        textAlign={{ base: 'center', xl: isArabic ? 'right' : 'left' }}
      >
        <Text fontSize="24px" fontWeight="700">
          {title}
        </Text>
        <Text>{text}</Text>
      </Stack>
    </>
  );
};

export default CommonCard;
