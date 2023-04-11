import React,{useEffect,useContext,useState,useRef} from 'react'
import { socketContext } from '../contexts/socket.context';
// import 
import { useNavigate } from 'react-router-dom';
export default function Chat() {
  const [content,setContent] = useState([]);
  const {friendsEmail,setFriendsEmail,socket} = useContext(socketContext);
  const navigate = useNavigate()
  console.log(friendsEmail)
  let inputValue = useRef();
useEffect(()=>{
if(!friendsEmail){
navigate("/contact")
}
},[friendsEmail])


useEffect(()=>{
socket.on("reply",(data)=>{
  console.log(data);
  setContent((prevdata)=>{return [...prevdata,data]})
},[socket])

  
},[socket])
function LeaveChat(){
setFriendsEmail(null)

}

  function addMessage(){
    socket.emit("message",[inputValue.current.value,friendsEmail]);
    setContent((prev)=>{
        return [...prev,inputValue.current.value]
    })
  }
 return (
<>
<div style={{height:"300px",width:"80%",margin:"auto",marginTop:"2rem" ,boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
    {content?.map((el)=>{
        return (<>
           <p>{el}</p> 
            </>)
    })}    
</div>

<div style={{textAlign:"center",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
<input style={{border:"3px solid black",marginTop:"20px"}} placeholder='Enter you message to Here ' type="text" ref={inputValue} />
<button style={{display:"block",backgroundColor:"black",color:"white",margin:"auto",marginTop:"20px",borderRadius:"10px",padding:"10px"}} onClick={addMessage}>Send Message</button>
<button style={{display:"block",backgroundColor:"black",color:"white",margin:"auto",marginTop:"20px",borderRadius:"10px",padding:"10px"}} onClick={LeaveChat}>Leave Chat</button>
</div>

</>
)
}
