import { Box, Flex, Link } from '@chakra-ui/layout';
import React from 'react';
import { StyledBox } from '../Styled/Styled';

interface LicenseCardProps {
  image: JSX.Element;
  text: string;
  button?: string;
  link?: string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({
  image,
  text,
  button,
  link
}: LicenseCardProps) => {
  return (
    <Flex
      w={{ base: '80%', lg: '40%' }}
      direction="column"
      align="center"
      border="1px"
      borderColor="gray.400"
      p={{ base: 5, lg: 10 }}
      m={10}
    >
      <Flex height="255px" width="100%" justify="center" align="center">
        {image}
      </Flex>
      <Box my={10}>{text}</Box>
      {button && link && (
        <Link
          _hover={{
            textDecoration: 'none'
          }}
          href={link}
          isExternal
        >
          <StyledBox
            mt={{ base: 10, lg: 0 }}
            p={2}
            bg="gray.700"
            color="white"
            fontSize="22px"
            textAlign="center"
            width="250px"
            _hover={{
              bgColor: 'gray.600',
              cursor: 'pointer',
              transition: '1s'
            }}
          >
            {button}
          </StyledBox>
        </Link>
      )}
    </Flex>
  );
};

export default LicenseCard;
