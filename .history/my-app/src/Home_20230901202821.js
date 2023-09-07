import './Home.css';
import './Components/Navbar.js'
import { Box, Center, Heading, Text, VStack, Button} from '@chakra-ui/react'

function Home() {
  return (
    <div className="App">
      {/* <Box>
        <Center>
          <HStack pos='absolute' top='50px'>
            <Text class="menuItem">About Me</Text>
            <Text class="menuItem">Resume</Text>
            <Text class="menuItem">Portfolio</Text>
            <Text class="menuItem">Contact</Text>
          </HStack>
        </Center>
      </Box> */}
      <Box className='niceToMeetYou'>
        <Center>
          <Heading id='bgText'> NICE TO MEET YOU </Heading>
        </Center>
        <Center>
          <VStack id="center-title">
            <Heading id='name'> Anaïs Dawes </Heading>
            <Heading id='job'> Software Developer </Heading>
        </VStack>
        </Center>
      </Box>
      <Box h='600px'>
        <div class="flexbox-container">
          <Box id="photoOfMe"></Box>
          <div id="aboutDiv">
            <Heading class="aboutMeTitle"> About Me </Heading>
            <Text id="aboutMeText"> Learn about me from my career to my favourite weekend activities!</Text>
            <Button id="aboutMeBtn">Learn More</Button>
          </div>
        </div>
      </Box>
      <Box h='600px' bgColor='#A9C7D9'>

      </Box>
    </div>
  );
}

export default Home;
