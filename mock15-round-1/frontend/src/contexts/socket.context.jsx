import { createContext,useState } from "react";
// import {io}  from "https://cdn.socket.io/4.5.4/socket.io.min.js"
import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
import { url } from "../../url";
const socket=io.connect(`${url}`)
export const socketContext = createContext();
export function SocketContextProvider({children}){
    const [token,setToken] = useState(()=>{
       return (localStorage.getItem("accessToken"))||null
    })
    
  const [email,setEmail] = useState(()=>{
    return localStorage.getItem("Email")||null;
  }) 
  const [friendsEmail,setFriendsEmail] = useState(()=>{
    return localStorage.getItem("friendsemail")||null;
  }) 
  
return (
<socketContext.Provider value={{socket,token,setToken,email,setEmail,friendsEmail,setFriendsEmail}}>
{children}
</socketContext.Provider>

) 
}