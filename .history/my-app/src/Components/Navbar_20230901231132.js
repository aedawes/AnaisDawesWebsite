import './Navbar.css';
import { Box, Center, Text, HStack } from '@chakra-ui/react'

function NavBar() {
  return (
    <Box>
        <Center>
            <HStack pos='absolute' top='7%'>
                <Text class="menuItem">About Me</Text>
                <Text class="menuItem">Resume</Text>
                <Text class="menuItem">Portfolio</Text>
                <Text class="menuItem">Contact</Text>
            </HStack>
        </Center>
    </Box>
    );
}

export default NavBar;