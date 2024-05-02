import { Card, Text, Image, CardBody, Stack, Heading } from '@chakra-ui/react'

function ProjectCard({ image, projectName, projectDescription }) {
    return (
        <Card
            h='fit-content'
            w='17rem'
            minW='15rem'
            borderRadius='18px'
            backgroundColor='blues.400'
            mb='1.2rem'
        >
            <CardBody
                p='1.2rem'
                justifyItems='center'
            >
                <Image
                    src={image}
                    alt='Computer'
                    borderRadius='18px'
                    h='10rem'
                    w='14rem'
                    border='4px solid #0B0C21'
                />
                <Stack
                    mt='2vh'
                    spacing='1'>
                    <Heading
                        size='md'
                        fontSize='1.3rem'
                        fontFamily='poppins'
                        fontWeight='600'
                    >
                        {projectName}
                    </Heading>
                    <Text
                        size='sm'
                        fontSize='0.9rem'
                        fontFamily='poppins'
                        fontWeight='400'
                        lineHeight='1.2rem'
                    >
                        {projectDescription}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
