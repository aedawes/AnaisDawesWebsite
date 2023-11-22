import { Card, Text, Image, CardBody, Stack, Heading} from '@chakra-ui/react'

function ProjectCard() {
    return (
        <Card
            h='fit-content'
            w= '20rem'
            minW='20rem'
            borderRadius='18px'
            backgroundColor='blues.400'
            mb='1.2rem'
            >
            <CardBody
                p='1.2rem'
                justifyItems='center'
            >
                <Image
                    src='/websitePlaceholder.png'
                    alt='Pepper the horse'
                    borderRadius='18px'
                    h='12rem'
                    w='18rem'
                    border='4px solid #0B0C21'
                />
                <Stack
                    mt='2vh'
                    spacing='1'>
                    <Heading 
                        size='md'
                        fontSize='1.5rem'
                        fontFamily='poppins'
                        fontWeight='600'> 
                        Project Name 
                    </Heading>
                    <Text
                        size='sm'
                        fontSize='1rem'
                        fontFamily='poppins'
                        fontWeight='400'
                        lineHeight='1.5rem'
                    > 
                        Short Description of the project sdfjhs skjdfhk kfhkje ksjalhfk euuronsk eiro
                        sjkjd ekjfks kdjllfe jkfsj eufijkjls ksjkl
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
