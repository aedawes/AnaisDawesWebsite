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
import { listOfProjects } from './database.js';

function Home() {

  const projects = listOfProjects();

  return (
    <div className="app">
      <NavBar />
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
            fontFamily='poppins'
            color='blues.205'
            fontStyle='900'>
            NICE TO MEET YOU
          </Heading>
          <VStack
            textAlign='center'
            pos='absolute'>
            <Heading
              fontSize={{ base: '2rem', md: '3.5vw', lg: '3.5vw' }}
              textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
              minWidth='min-content'
              fontFamily='poppins'
              color='oranges.100'
              className='outlinedHeader'
            >
              Anais Dawes
            </Heading>
            <Heading
              fontSize={{ base: '1.5rem', md: '3vw', lg: '3vw' }}
              minWidth='min-content'
              letterSpacing='5px'
              fontFamily='poppins'
              color='blues.100'>
              Software Engineer
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
            fontFamily='poppins'
            p={{ base: '40px', lg: '76px', md: '60px', sm: '40px' }}
            pb='0'
            fontSize={{ base: '1.2rem', md: '1.5rem', lg: '2.2rem' }}
            textAlign={{ base: 'center', sm: 'center', md: 'center', lg: 'left' }}>
            My Projects
          </Heading>
        </Box>
        <Box>
          <Grid
            templateColumns={{
              base: '1fr',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
              "2xl": 'repeat(5, 1fr)',
            }}
            justifyItems='center'
            gap={4}
            p={12}
            pt='0'
            pb='123px'
          >
            {projects.map((project) => (
              (
                <GridItem>
                  <ProjectCard image={project.image} projectName={project.name} projectDescription={project.description} />
                </GridItem>
              )
            ))}
          </Grid>
        </Box>
      </Box>
      <Box
        backgroundColor='#567D91'
        h='30rem'
        w='100vw'
      >
        <Center p='3rem'>
          <HStack
            justifyContent='space-between'
            w='90vw'
            spacing={20}
          >
            <Box
              backgroundColor='#8DA8B8'
              w='100%'
              p='2rem'
              borderRadius='1rem'
            >
              <VStack>
                <Text
                  alignSelf='flex-start'
                  size='md'
                  fontSize='2rem'
                  fontFamily='poppins'
                  fontWeight='600'
                  color='#0B0C21'
                  pb='1rem'
                >
                  Hello There!
                </Text>
                <HStack>
                  <Image
                    src='/AnaisProfile.png'
                    borderRadius='18px'
                    h='12rem'
                    w='16rem'
                    mr='1.5rem'
                    border='1.5px solid #0B0C21'
                  />
                  <VStack
                    alignSelf='flex-start'
                    justifyContent='space-between'
                  >
                    <Text
                      fontSize='1.2rem'
                      color='#0B0C21'
                    >
                      I’m a software developer with a love for front-end web development!  Learn more about me by clicking the button below!
                    </Text>
                    <Button
                      alignSelf='flex-start'
                      left='0rem'
                      bottom='0rem'
                    >Learn More</Button>
                  </VStack>
                </HStack>
              </VStack>
            </Box>
            <Box
              backgroundColor='#8DA8B8'
              w='100%'
              p='2rem'
              borderRadius='1rem'
            >
              <VStack>
                <Text>Contact Me</Text>
                <Button>Email</Button>
                <Button>Github</Button>
                <Button>LinkedIn</Button>
              </VStack>
            </Box>
          </HStack>
        </Center>
      </Box>
    </div>
  );
}

export default Home;

