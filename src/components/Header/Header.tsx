import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import React from 'react';
import Logo from './Logo';
import MobileNav from './MobileNav';

const LangSelector = dynamic(() => import('./LangSelector'), { ssr: false });
const DesktopNav = dynamic(() => import('./DesktopNav'), { ssr: false });

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

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
        {/* mobile layout */}
        <Flex
          flex="1"
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
          justify="space-between"
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
          <Logo />
          <LangSelector />
        </Flex>

        {/* desktop layout */}
        <Flex
          width="100vw"
          mx={5}
          justify="space-between"
          align={'center'}
          display={{ base: 'none', md: 'flex' }}
        >
          <Logo />

          <Flex mx={10}>
            <DesktopNav />
          </Flex>

          <LangSelector />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
