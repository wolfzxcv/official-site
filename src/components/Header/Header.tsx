import {
  Box,
  Collapse,
  Flex,
  useColorModeValue,
  useDisclosure,
  useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [isDesktop] = useMediaQuery('(min-width: 832px)');

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}
      >
        {isDesktop ? (
          <DesktopHeader />
        ) : (
          <MobileHeader onToggle={onToggle} isOpen={isOpen} />
        )}
      </Flex>

      {!isDesktop && (
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      )}
    </Box>
  );
};

export default Header;
