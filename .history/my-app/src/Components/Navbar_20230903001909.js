import { useState } from 'react';
import { Box, Center, Text, HStack, VStack, Divider } from '@chakra-ui/react'

function NavBar() {

    const [isOpen, setIsOpen] = useState(false); //state for the menu

    const toggle = () => setIsOpen(!isOpen); //function to toggle the menu

    return (
        <Box>
            <Box display={{ base: 'none', lg: 'block' }}>
                <Center>
                    <HStack pos='absolute' top='4%' justifyContent='space-between' width='75%' fontFamily='Questrial'>
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
                <button
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
                    spacing='2' // Adjust the spacing as needed
                    fontFamily='Questrial'
                >
                    <Box w='100vw'>
                        <Text 
                            color='blues.400'
                            fontSize='25px'>
                                About Me
                        </Text>
                        <Divider/>
                    </Box>
                    <Box w='100vw'>
                        <Text color='blues.400'>Resume</Text>
                    </Box>
                    <Box w='100vw'>
                        <Text color='blues.400'>Portfolio</Text>
                    </Box>
                    <Box w='100vw'>
                        <Text color='blues.400'>Contact</Text>
                    </Box>
                </VStack>
                )}
            </Box>
        </Box>
    );
}

export default NavBar;