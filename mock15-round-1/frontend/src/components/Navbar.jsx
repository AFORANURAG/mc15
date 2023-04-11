import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { socketContext } from '../contexts/socket.context';
import { useContext,useEffect,useState } from 'react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
const Links = ['Contacts'];

const NavLink1 = ({ children,link} ) => (
  <Link
  as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
  textDecoration={"none"}
    to={link}>
    {children}
  </Link>
);
const NavLink = ({ children,link} ) => (
    <Link
    as={RouterLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to={link}>
      {children}
    </Link>
  );

export default function Navbar() {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {token,setToken} = useContext(socketContext);
const [logout,setLogout]=useState(false);
  
useEffect(()=>{
  if(logout){
  setToken(null);
  
}

  },[logout])

useEffect(()=>{
if(!token){
navigate("/login");
}
},[token])

  function Logout(){
  localStorage.removeItem("accessToken");
  localStorage.removeItem("Email");
  localStorage.removeItem("")
  setLogout(true)  
  
  }
  console.log(token)
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
          </HStack>
          <Flex alignItems={'center'}>
          {token?(<>
            <Button
              as={'nav'}
              variant={'solid'}
          colorScheme={'blackAlpha'}
          size={'sm'}
          mr={4}
              spacing={4}
              >
              
                <NavLink key={123123} link={`/contact`}>Contact</NavLink>
             
            </Button>
            <Button
            variant={'solid'}
            colorScheme={'blackAlpha'}
            size={'sm'}
            mr={4}
            onClick={Logout}
            leftIcon={<AddIcon />}>
           Logout
          </Button>
          </>):
          <>
          <Button
          variant={'solid'}
          colorScheme={'blackAlpha'}
          size={'sm'}
          mr={4}
          leftIcon={<AddIcon />}>
          <NavLink1 link={"/login"} >
          Login
          </NavLink1>
        </Button>
        
        <Button
        variant={'solid'}
        colorScheme={'blackAlpha'}
        size={'sm'}
        mr={4}
        leftIcon={<AddIcon />}>
        <NavLink1 link={"/Signup"} >
        Signup
        </NavLink1>
      </Button>
          </>}
         

          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}