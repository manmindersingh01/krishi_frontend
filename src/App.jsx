import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatPage from './pages/ChatPage'
 

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/chat' element={ChatPage}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
