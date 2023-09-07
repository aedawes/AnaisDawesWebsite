import React, { useState } from 'react';
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="teal.500"
      color="white"
    >
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          onClick={toggleMenu}
          aria-label="Open menu"
        />
      </Box>
      <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
        <Flex align="center" justify={{ base: 'center', md: 'flex-start' }}>
          <Box>
            <a href="/">Home</a>
          </Box>
          <Box ml={4}>
            <a href="/about">About</a>
          </Box>
          <Box ml={4}>
            <a href="/services">Services</a>
          </Box>
          <Box ml={4}>
            <a href="/contact">Contact</a>
          </Box>
        </Flex>
      </Box>
      <Spacer />
      <Box display={{ base: 'none', md: 'block' }}>
        <Flex align="center">
          <a href="/login">Login</a>
          <Box ml={4}>
            <a href="/signup">Sign Up</a>
          </Box>
        </Flex>
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton />
          <MenuList>
            <MenuItem>
              <a href="/">Home</a>
            </MenuItem>
            <MenuItem>
              <a href="/about">About</a>
            </MenuItem>
            <MenuItem>
              <a href="/services">Services</a>
            </MenuItem>
            <MenuItem>
              <a href="/contact">Contact</a>
            </MenuItem>
            <MenuItem>
              <a href="/login">Login</a>
            </MenuItem>
            <MenuItem>
              <a href="/signup">Sign Up</a>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default MobileMenu;
