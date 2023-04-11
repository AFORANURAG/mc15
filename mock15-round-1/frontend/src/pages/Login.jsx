import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { url } from '../../url';
  import { useState,useContext } from 'react';
  import { socketContext } from '../contexts/socket.context';
  import { useNavigate } from 'react-router-dom';
  export default function Login() {
    const [credentials,setCredentials] =useState({email:"",password:""});
const {token,setToken} = useContext(socketContext);
    const navigate = useNavigate();
    function handleChange(e){
console.log(e.target)
const {name,value}=e.target
setCredentials({...credentials,[name]:value})
// setCredentials((obj)=>{
//     return {...obj,[name]:value}
// })
//    
 }
 async function Login(){
    try {
        let res = await fetch(`${url}/auth/login`,{
          method: 'POST',
          body:JSON.stringify(credentials),
          headers:{
            "Content-Type":"application/json"
          }
        });
        const data = await res.json();
        console.log(data);
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        if(data){
       console.log("login successfull")
       navigate("/contact")
        }
       } catch (error) {
        console.log(`error while registering the user`,error)
       }
    }


    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={credentials.email} onChange={handleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={credentials.password} name="password" onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={Login}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }