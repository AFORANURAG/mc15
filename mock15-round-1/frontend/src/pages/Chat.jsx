import React,{useEffect,useContext,useState,useRef} from 'react'
import { socketContext } from '../contexts/socket.context';
// import 
export default function Chat() {
  const [content,setContent] = useState([]);
  const {friendsEmail,setFriendsEmail,socket} = useContext(socketContext);
  console.log(friendsEmail)
  let inputValue = useRef();

  function addMessage(){
    socket.emit("message",[inputValue.current.value,friendsEmail]);
    
    setContent((prev)=>{
        return [...prev,inputValue.current.value]
    })
  }
 return (
<>
<div>
    {content?.map((el)=>{
        return (<>
           <p>{el}</p> 
            </>)
    })}    
</div>
<input style={{border:"3px solid black"}} type="text" ref={inputValue} />
<button onClick={addMessage}>Send Message</button>
</>
)
}
