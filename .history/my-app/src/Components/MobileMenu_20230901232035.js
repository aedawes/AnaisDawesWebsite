import React from 'react';
import { HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function MobileMenu({ onToggle }) {
  return (
    <HStack spacing={4} display={['flex', 'none']}>
      <IconButton
        icon={<HamburgerIcon />}
        aria-label="Open Menu"
        onClick={onToggle}
      />
    </HStack>
  );
}

export default MobileMenu;