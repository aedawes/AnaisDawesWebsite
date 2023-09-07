import './Navbar.css';
import { Box, Center, Text, HStack, Button } from '@chakra-ui/react'

function NavBar() {
  return (
    <Box>
        <Box display={{ base: 'none', lg: 'block' }}>
            <Center>
                <HStack pos='absolute' top='7%' justifyContent='space-between' width='75%' fontFamily='Questrial'>
                    <Text class="menuItem">About Me</Text>
                    <Text class="menuItem">Resume</Text>
                    <Text class="menuItem">Portfolio</Text>
                    <Text class="menuItem">Contact</Text>
                </HStack>
            </Center>
        </Box>
        <Box 
            display={{ base: 'block', lg: 'none' }} 
            backgroundColor='blues.100' 
            h='60px'
            pos='absolute'>
            <Button 
                leftIcon={<img 
                    src={`${process.env.PUBLIC_URL}/icons8-menu.png`} 
                    alt="Menu Icon" 
                    style={{ width: '45px', height: '45px' }}/>} 
                backgroundColor='blues.200'
                />
        </Box>
    </Box>
    );
}

export default NavBar;