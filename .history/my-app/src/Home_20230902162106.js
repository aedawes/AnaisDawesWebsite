import './Home.css';
import { Box, Center, Heading, Text, VStack, Button} from '@chakra-ui/react'
import NavBar from './Components/Navbar.js';
import MobileMenu from './Components/MobileMenu';

function Home() {
  return (
    <div className="App">
      <NavBar />
      <Box className='niceToMeetYou'>
        <Center id="center-content">
          <Heading id='bgText'> NICE TO MEET YOU </Heading>
          <VStack id="center-title">
            <Heading id='name'> Anaïs Dawes </Heading>
            <Heading id='job'> Software Developer </Heading>
          </VStack>
        </Center>
      </Box>
      {/* <Box h='600px'>
        <div class="flexbox-container">
          <Box id="photoOfMe"></Box>
          <div id="aboutDiv">
            <Heading class="aboutMeTitle"> About Me </Heading>
            <Text id="aboutMeText"> Learn about me from my career to my favourite weekend activities!</Text>
            <Button id="aboutMeBtn">Learn More</Button>
          </div>
        </div>
      </Box>
      <Box h='600px' bgColor='#A9C7D9'> */}

      {/* </Box> */}
    </div>
  );
}

export default Home;
