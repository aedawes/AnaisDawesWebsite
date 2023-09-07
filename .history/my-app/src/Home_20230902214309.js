import './Home.css';
import { Box, Center, Heading, Text, VStack, Button} from '@chakra-ui/react'
import NavBar from './Components/Navbar.js';
import MobileMenu from './Components/MobileMenu';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Box id='niceToMeetYou' backgroundColor='blues.200'>
        <Center id="center-content">
          <Heading id='bgText' fontFamily='Poppins'> NICE TO MEET YOU </Heading>
          <VStack id="center-title">
            <Heading 
              id='name'
              fontFamily='Questrial'
              color='blues.400'> 
              Anaïs Dawes 
            </Heading>
            <Heading 
              id='job'
              fontFamily='Questrial'
              color='oranges.100'> 
              Software Developer 
            </Heading>
          </VStack>
        </Center>
      </Box>
    </div>
  );
}

export default Home;
