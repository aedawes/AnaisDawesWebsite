import './Home.css';
import { Box, Center, Heading, Text, VStack, Button} from '@chakra-ui/react'
import NavBar from './Components/Navbar.js';


function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Box 
        h='fit-content'
        w='100vw'
        backgroundColor='blues.200'>
        <Center 
          pt='8.5%'
          pb='5.5%'>
          <Heading 
            textAlign='center'
            lineHeight='100%'
            fontSize='18vw'
            color='blues.205'
            fontFamily='Poppins'> 
            NICE TO MEET YOU 
          </Heading>
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
