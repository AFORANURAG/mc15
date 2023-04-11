import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
// import './App.css'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import HomePage from "./components/Homepage";
import Contact from './pages/Contact'
import {SocketContextProvider } from './contexts/socket.context'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
    <ChakraProvider>
    <SocketContextProvider>
    <Navbar/>
    <Routes>
    <Route path='/contact'  element={<Contact/>} />
    <Route path='/'  element={<HomePage/>} />
    <Route path={'/login'}  element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    </Routes>
    </SocketContextProvider>
    
    </ChakraProvider>

    </div>
  )
}

export default App
