import { Button, HStack, Box, Text} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function LinkButton() {
    return (
        <Button 
                backgroundColor='oranges.100'
                color='blues.100'
                borderRadius='5rem'
                w='15rem'
                h='2rem'>
                <HStack
                  spacing='5rem'
                >
                  <Box
                    w='4rem'
                    display='flex'
                    justifyContent='left'
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </Box>
                  <Box
                    w='4rem'
                    display='flex'
                    justifyContent='right'
                  >
                    <Text>Email</Text>
                  </Box>
                </HStack>
              </Button>
    );
}
export default LinkButton;