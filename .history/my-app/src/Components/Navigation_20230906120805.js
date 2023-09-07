import React, { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          onClick={toggleMenu}
          rightIcon={isMenuOpen ? 'chevron-up' : 'chevron-down'}
        >
          Navigation
        </MenuButton>
        <MenuList>
          <MenuItem onClick={toggleMenu}>Home</MenuItem>
          <MenuItem onClick={toggleMenu}>About</MenuItem>
          <MenuItem onClick={toggleMenu}>Services</MenuItem>
          <MenuItem onClick={toggleMenu}>Contact</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Navigation;