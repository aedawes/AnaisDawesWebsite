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
        <Box display={{ base: 'block', lg: 'none' }}>
            <Button leftIcon={<img src="./Icons/icons8-menu.png" alt="Download Icon" />}/>
        </Box>
    </Box>
    );
}

export default NavBar;