import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import { CgArrowsExchangeAlt } from 'react-icons/cg';

interface MAMProfitListProps {
  left: string;
  right: string;
  bg: string;
  percentage: string;
}

const MAMProfitList: React.FC<MAMProfitListProps> = ({
  left,
  right,
  bg,
  percentage
}: MAMProfitListProps) => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} my={5}>
      <Flex>
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
