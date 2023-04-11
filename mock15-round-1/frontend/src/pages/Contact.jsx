import React, { useState,useEffect,useContext } from 'react'
import { url } from '../../url';
import { socketContext } from '../contexts/socket.context';
import ContactCard from '../components/Card';
import {SimpleGrid } from '@chakra-ui/react'
export default function Contact() {
  let [contacts,setContacts] = useState([]);

const {email,setEmail,socket} = useContext(socketContext);
useEffect(()=>{
getallContacts()
updateSocketId(email)
 },[])
 
function updateSocketId(email){
console.log(`here is the email id `,email);
socket.emit("updatesocketid",email);
}

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

// useEffect(()=>{
// io.emit("updatesocketid",)
// },)
    return (
<div>
<SimpleGrid columns={2} spacing={10}>
{contacts?.map((el)=>{
return(
<ContactCard  key={el._id} {...el} className='card'/>


)

})}    
</SimpleGrid>

    </div>
  )
}
