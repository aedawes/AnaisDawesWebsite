import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faEllipsisVertical, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Box, Center, Text, HStack, VStack, Divider, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
      

    return (
        <Box>
            <Box display={{ base: 'none', lg: 'block' }}>
                <Center>
                    <HStack 
                        pos='absolute' 
                        top='4%' 
                        justifyContent='space-between' 
                        width='75%' 
                        fontFamily='Questrial' 
                        fontSize='23px'
                        color='blues.400'>
                        <Text class="menuItem">About Me</Text>
                        <Text class="menuItem">Resume</Text>
                        <Text class="menuItem">Portfolio</Text>
                        <Text class="menuItem">Contact</Text>
                    </HStack>
                </Center>
            </Box>


            <Box 
                display={{ base: 'block', lg: 'none'}}
                backgroundColor='blues.205' 
                h='40px'
                w='100vw'
                >
                <Box display='flex'
                    justifyContent='flex-end'>
                    <Menu>
                        <MenuButton 
                            as={Button} 
                            onClick={toggle}
                            backgroundColor='blues.205'>
                            <FontAwesomeIcon 
                                icon={isMenuOpen ? faEllipsisVertical : faEllipsis} 
                                color='white'/>
                        </MenuButton>
                        <MenuList>
                            <MenuItem>About Me</MenuItem>
                            <MenuItem>Resume</MenuItem>
                            <MenuItem>Portfolio</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
}

export default NavBar;