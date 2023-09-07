import './Navbar.css';
import { Box, Center, Text, HStack } from '@chakra-ui/react'

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
    </Box>
    );
}

export default NavBar;