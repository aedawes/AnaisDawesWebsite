import { 
  Box, 
  Center, 
  Heading,
  VStack, 
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  Button,
   } from '@chakra-ui/react'
import NavBar from './Components/Navbar.js';
import ProjectCard from './Components/ProjectCard.js';
import LinkButton from './Components/LinkButton.js';

function Home() {
  return (
    <div className="App">
      <NavBar/>
      <Box 
        h='fit-content'
        minH='20rem'
        w='100vw'
        display='flex'
        alignItems='center'
        backgroundColor='blues.200'>
        <Center 
          pt='8.5%'
          pb='5.5%'>
          <Heading 
            textAlign='center'
            lineHeight='100%'
            fontSize='18vw'
            color='blues.205'
            fontStyle='900'> 
            NICE TO MEET YOU 
          </Heading>
          <VStack 
            textAlign='center'
            pos='absolute'>
            <Heading 
              fontSize={{base: '2.5rem', md: '4vw', lg: '4vw'}}
              minWidth='min-content'
              letterSpacing='5px'
              color='oranges.100'
              textShadow='0.3vw 0.3vw #0B0C21'> 
              Anaïs Dawes 
            </Heading>
            <Heading 
              fontSize={{base: '2.5rem', md: '4vw', lg: '4vw'}}
              minWidth='min-content'
              letterSpacing='5px'
              fontWeight ='600'
              color='blues.100'> 
              Software Developer 
            </Heading>
          </VStack>
        </Center>
      </Box>
      <Box
        h='fit-content'
        w='100vw'
        backgroundColor='blues.100'>
          <Box>
            <Heading
              color='blues.400'
              p={{ base: '60px', lg: '96px', md: '80px', sm: '60px' }}
              pb='0'
              fontSize={{ base: '2rem', md: '2.2rem', lg: '3rem' }}
              textAlign={{base: 'center', sm: 'center', md: 'center', lg: 'left'}}>
              My Projects
            </Heading>
          </Box>
          <Box>
          <Grid
              templateColumns={{
                base: '1fr',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
                xl: 'repeat(3, 1fr)',
                "2xl": 'repeat(4, 1fr)',
              }}
              justifyItems='center'
              gap={4}
              p={12}
              pt='0'
              pb='123px'>
              <GridItem>
                <ProjectCard/>
              </GridItem>
              <GridItem>
                <ProjectCard/>
              </GridItem>
              <GridItem>
                <ProjectCard/>
              </GridItem>
              <GridItem>
                <ProjectCard/>
              </GridItem>
          </Grid>
          </Box>
      </Box>
      <Box
        backgroundColor='blues.200'
        p='96px'
        >
        <VStack spacing='6rem'>
          <HStack 
            spacing='10rem'
            textAlign='left'>
            <Image
                src='/pepper.png'
                alt='Pepper the horse'
                borderRadius='18px'
                h='22rem'
                w='30rem'
                border='4px solid #0B0C21'
            />
            <VStack 
              align="flex-start"
              spacing='2rem'>
              <Heading
                color='blues.400'>
                Hello There!
              </Heading>
              <Text
                color='blues.400'
                fontSize='1.2rem'
                w='30rem'>
                I'm a software developer with a love for front-end web development!  Learn more about me by clicking
                the button below!
              </Text>
              <Button
                backgroundColor='oranges.100'
                borderRadius='5rem'
                borderWidth='0.15rem'
                borderColor='blues.100'
                fontSize='0.9rem'
                w='12rem'
                h='2rem'>
                Learn More
              </Button>
            </VStack>
          </HStack>
          <Box
            backgroundColor='blues.100'
            borderRadius='1rem'
            >
            <HStack>
              <Heading
                color='blues.400'
                py='10rem'
                px='8rem'
                fontSize={{ base: '2rem', md: '2.2rem', lg: '3rem' }}
                textAlign={{base: 'center', sm: 'center', md: 'center', lg: 'left'}}>
                Contact Me
              </Heading>
              <VStack spacing='5' px='3rem'>
                <LinkButton/>
                <LinkButton/>
                <LinkButton/>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </div>
  );
}

export default Home;