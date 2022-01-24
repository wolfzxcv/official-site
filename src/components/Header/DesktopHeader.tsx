import { Flex } from '@chakra-ui/react';
import React from 'react';
import DesktopNav from './DesktopNav';
import LangSelector from './LangSelector';
import Logo from './Logo';

const DesktopHeader: React.FC<{}> = () => {
  return (
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

      <LangSelector from="desktop" />
    </Flex>
  );
};

export default DesktopHeader;
