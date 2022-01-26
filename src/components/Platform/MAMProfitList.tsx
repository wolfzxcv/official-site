import { Locales } from '@/i18n/config';
import { Box, Center, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { CgArrowsExchangeAlt } from 'react-icons/cg';

type MAMProfitListProps = {
  left: string;
  right: string;
  bg: string;
  percentage: string;
};

const MAMProfitList: React.FC<MAMProfitListProps> = ({
  left,
  right,
  bg,
  percentage
}: MAMProfitListProps) => {
  const router = useRouter();
  const currentLang = router.locale as Locales;
  const isArabic = currentLang === 'ar';

  return (
    <Flex
      direction={{ base: 'column', md: isArabic ? 'row-reverse' : 'row' }}
      my={5}
    >
      <Flex px={5}>
        {left} <CgArrowsExchangeAlt fontSize="26px" />
        {right}
      </Flex>
      <Box
        ml={{ base: 0, md: 10 }}
        mt={{ base: 2, md: 0 }}
        bg={bg}
        color="white"
        py={1}
        px={5}
        borderRadius={'15px'}
      >
        <Center>{percentage}</Center>
      </Box>
    </Flex>
  );
};

export default MAMProfitList;
