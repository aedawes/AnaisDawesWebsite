import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Box, Center, Text, HStack, VStack, Image, Link, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <Box
            position={isSticky ? 'sticky' : 'absolute'}
            top='0'
            w='100vw'
            px='1.5rem'
            py='0.2rem'
            zIndex={2}
            backgroundColor='#567D91'
        >
            <Box display={{ base: 'none', lg: 'block' }}>
                <HStack justifyContent='space-between'>
                    <Image h='4rem' src="/mainlogo.png" alt="logo" />
                    <HStack
                        justifyContent='space-between'
                        width='35%'
                        fontSize='1.5rem'
                    >
                        <VStack spacing={0}>
                            <Link
                                onClick={() => handleItemClick('Projects')}
                                _hover={{ color: 'white' }}
                                color={selectedItem === 'Projects' ? 'blues.400' : 'blues.100'}>
                                <Text>Projects</Text>
                            </Link>
                            {selectedItem === 'Projects' && (
                                <Image w='5rem' src="./SquigglyLine.png" alt="underline" ml="-0.4" />
                            )}
                        </VStack>
                        <VStack spacing={0}>
                            <Link
                                onClick={() => handleItemClick('Contact')}
                                _hover={{ color: 'white' }}
                                color={selectedItem === 'Contact' ? 'blues.400' : 'blues.100'}>
                                <Text>Contact</Text>
                            </Link>
                            {selectedItem === 'Contact' && (
                                <Image w='5rem' src="./SquigglyLine.png" alt="underline" ml="-0.4" />
                            )}
                        </VStack>
                        <VStack spacing={0}>
                            <Link
                                onClick={() => handleItemClick('About Me')}
                                _hover={{ color: 'white' }}
                                color={selectedItem === 'About Me' ? 'blues.400' : 'blues.100'}>
                                <Text>About Me</Text>
                            </Link>
                            {selectedItem === 'About Me' && (
                                <Image w='5rem' src="./SquigglyLine.png" alt="underline" ml="-0.4" />
                            )}
                        </VStack>
                        <VStack spacing={0}>
                            <Link
                                onClick={() => handleItemClick('Resume')}
                                _hover={{ color: 'white' }}
                                color='blues.100'>
                                <Text>Resume</Text>
                            </Link>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>

                </HStack>
                {/* <Center>
                    <HStack 
                        pos='absolute' 
                        top='2%' 
                        justifyContent='space-between' 
                        width='75%' 
                        fontFamily='poppins' 
                        fontWeight='600'
                        fontSize='1.5rem'
                        color='blues.400'>
                        <VStack>
                            <Link 
                                onClick={() => handleItemClick('Projects')}
                                _hover={{ color: 'white' }}
                                color={selectedItem === 'Projects' ? 'blues.400' : 'blues.100'}>
                                <Text>Projects</Text>
                            </Link>
                            {selectedItem === 'Projects' && (
                                <Image src="./SquigglyLine.png" alt="underline" ml="-0.4" />
                            )}
                        </VStack>
                        <VStack>
                            <Link 
                                onClick={() => handleItemClick('Contact')}
                                _hover={{ color: 'white' }}
                                color={selectedItem === 'Contact' ? 'blues.400' : 'blues.100'}>
                                <Text>Contact</Text>
                            </Link>
                            {selectedItem === 'Contact' && (
                                <Image src="./SquigglyLine.png" alt="underline" ml="-0.4" />
                            )}
                        </VStack>
                        <VStack>
                            <Link 
                                onClick={() => handleItemClick('About Me')}
                                _hover={{ color: 'white' }}
                                color={selectedItem === 'About Me' ? 'blues.400' : 'blues.100'}>
                                <Text>About Me</Text>
                            </Link>
                            {selectedItem === 'About Me' && (
                                <Image src="./SquigglyLine.png" alt="underline" ml="-0.4" />
                            )}
                        </VStack>
                        <VStack>
                            <Link 
                                onClick={() => handleItemClick('Resume')}
                                _hover={{ color: 'white' }}
                                color='blues.100'>
                                <Text>Resume</Text>
                            </Link>
                        </VStack>
                    </HStack>
                </Center>
            </Box>


            <Box 
                display={{ base: 'block', lg: 'none'}}
                backgroundColor='blues.100' 
                h='40px'
                w='100vw'
                position='absolute'
                >
                <Box display='flex'
                    justifyContent='flex-end'>
                    <Menu>
                        <MenuButton 
                            as={Button} 
                            onClick={toggle}
                            _hover={{ color: 'blues.100' }}
                            _active={{ color: 'blues.100' }}
                            backgroundColor='blues.100'>
                            <FontAwesomeIcon 
                                icon={isMenuOpen ? faChevronUp : faChevronDown} 
                                color='#ED8957'/>
                        </MenuButton>
                        <MenuList
                            backgroundColor='blues.100'
                            color='oranges.100'
                        >
                            <MenuItem backgroundColor='blues.100'>About Me</MenuItem>
                            <MenuItem backgroundColor='blues.100'>Resume</MenuItem>
                            <MenuItem backgroundColor='blues.100'>Portfolio</MenuItem>
                            <MenuItem backgroundColor='blues.100'>Contact</MenuItem>
                        </MenuList>
                    </Menu>
                </Box> */}
            </Box>
        </Box>
    );
}

export default NavBar;