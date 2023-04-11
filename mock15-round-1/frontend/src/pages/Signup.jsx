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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login() {
  const [credentials,setCredentials] =useState({email:"",password:"",name:""});
  function handleChange(e){
console.log(e.target)
const {name,value}=e.target
setCredentials({...credentials,[name]:value})
// setCredentials((obj)=>{
//     return {...obj,[name]:value}
// })
//    
}
const navigate = useNavigate();

async function register(){
  console.log(credentials)
 try {
  let res = await fetch(`${url}/auth/signup`,{
    method: 'POST',
    body:JSON.stringify(credentials),
    headers:{
      "Content-Type":"application/json"
    }
  });
  const data = await res.json();
  console.log(data);
  if(data){
   navigate("/login") 
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

          <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" name='name' value={credentials.name} onChange={handleChange}/>
        </FormControl>

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
                onClick={register}
                >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}