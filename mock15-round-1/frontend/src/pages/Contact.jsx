import React, { useState,useEffect,useContext } from 'react'
import { url } from '../../url';
import { socketContext } from '../contexts/socket.context';
// import {  } from 'react';
import { Card, CardHeader, CardBody, CardFooter,Heading,Text,Button,SimpleGrid } from '@chakra-ui/react'
export default function Contact() {
  let [contacts,setContacts] = useState([]);
 
 useEffect(()=>{
getallContacts()
 },[])
 
 async function getallContacts(){
try {
let data  = await fetch(`${url}/auth`)
let res = await data.json();
console.log(res);
setContacts(res)
} catch (error) {
console.log(`error while getting all the users`,error)    
}
 }

function Chat(){
    console.log(`lets Chat`)
}

// useEffect(()=>{
// io.emit("updatesocketid",)
// },)
const {io,token,setToken} = useContext(socketContext);
    return (
<div>
<SimpleGrid columns={2} spacing={10}>
{contacts?.map((el)=>{
return(<div key={el._id} className='card'>
<Card>
    <CardHeader>
      <Heading size='md'> {el.name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{el.email}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick = {Chat} >Chat</Button>
    </CardFooter>
  </Card>
</div>

)

})}    
</SimpleGrid>

    </div>
  )
}
