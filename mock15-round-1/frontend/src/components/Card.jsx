import React,{useContext, useEffect, useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Text,Button} from '@chakra-ui/react'
import { socketContext } from '../contexts/socket.context'
import { useNavigate } from 'react-router-dom';
export default function ContactCard({name,email,id}) {
const {friendsEmail,setFriendsEmail} = useContext(socketContext);
const navigate = useNavigate()

useEffect(()=>{
   if(friendsEmail){
     
  } 
},[friendsEmail])

function Chat(){
  setFriendsEmail(()=>{
    return email  
  });
  navigate("/chat")

}

  return (
    <div>
    <Card>
    <CardHeader>
      <Heading size='md'> {name}</Heading>
    </CardHeader>
    <CardBody>
      <Text>{email}</Text>
    </CardBody>
    <CardFooter>
      <Button onClick = {Chat} >Chat</Button>
    </CardFooter>
  </Card>
    </div>
  )
}
