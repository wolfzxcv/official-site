import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React from 'react';
import LangSelector from './LangSelector';
import Logo from './Logo';

type MobileHeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({
  isOpen,
  onToggle
}: MobileHeaderProps) => {
  return (
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

      <LangSelector from="mobile" />
    </Flex>
  );
};

export default MobileHeader;
