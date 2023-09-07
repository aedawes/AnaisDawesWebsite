import React from 'react';
import { HStack, IconButton, useDisclosure, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

function MobileMenu({ onToggle }) {
  return (
    <HStack spacing={4} display={['flex', 'none']}>
      <Button
        aria-label="Open Menu"
        onClick={onToggle}
        color={'white'}
      > Menu </Button>
    </HStack>
  );
}

export default MobileMenu;