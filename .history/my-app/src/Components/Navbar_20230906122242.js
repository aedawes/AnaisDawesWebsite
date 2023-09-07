import { useState } from 'react';
import { Box, Center, Text, HStack, VStack, Divider, Button } from '@chakra-ui/react'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false); //state for the menu

    const toggle = () => setIsOpen(!isOpen); //function to toggle the menu

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
                display={{ base: 'block', lg: 'none' }} 
                backgroundColor='#618294' 
                h='40px'
                w='100vw'
                pos='absolute'
                >
                <Menu>
                    <MenuButton as={Button} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faChevronUp : faChevronDown} />
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={toggleMenu}>Home</MenuItem>
                        <MenuItem onClick={toggleMenu}>About</MenuItem>
                        <MenuItem onClick={toggleMenu}>Services</MenuItem>
                        <MenuItem onClick={toggleMenu}>Contact</MenuItem>
                    </MenuList>
                </Menu>
                {/* <button
                    style={{ 
                        position: 'absolute',
                        right: '5px',
                        top: '2px',
                        padding: '0',  // Remove padding if any
                        margin: '0',   // Remove margin if any
                    }}
                    onClick={toggle}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/icons8-menu.png`} 
                        alt="MenuIcon"
                        style={{ width: '35px', height: '35px' }}/>
                </button>

                {isOpen && (
                <VStack
                    backgroundColor='#618294'
                    pos='absolute'
                    top='40px' // Adjust the top position to avoid overlapping with the button
                    right='5px'
                    spacing='0' // Adjust the spacing as needed
                    fontFamily='Questrial'
                    zIndex={999}
                >
                    <Box w='100vw'>
                        <Button 
                            color='blues.100'
                            backgroundColor='blues.300'
                            fontSize='25px'
                            pl='15px'
                            pbt='15px'
                            w='110vw'
                            focusBoxShadow='blues.200'>
                                About Me
                        </Button>
                        <Divider h='1px'/>
                    </Box>
                    <Box w='100vw'>
                        <Button 
                            color='blues.100'
                            backgroundColor='blues.300'
                            fontSize='25px'
                            pl='15px'
                            pbt='15px'
                            w='110vw'
                            focusBoxShadow='blues.200'>
                                Resume
                        </Button>
                        <Divider/>
                    </Box>
                    <Box w='100vw'>
                        <Button 
                            color='blues.100'
                            backgroundColor='blues.300'
                            fontSize='25px'
                            pl='15px'
                            pbt='15px'
                            w='110vw'
                            focusBoxShadow='blues.200'>
                                Portfolio
                        </Button>
                        <Divider/>
                    </Box>
                    <Box w='100vw'>
                        <Button 
                            color='blues.100'
                            backgroundColor='blues.300'
                            fontSize='25px'
                            pl='15px'
                            pbt='15px'
                            w='110vw'
                            focusBoxShadow='blues.200'>
                                Contact
                        </Button>
                        <Divider/> */}
                    </Box>
                </VStack>
                )}
            </Box>
        </Box>
    );
}

export default NavBar;