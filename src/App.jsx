import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Createdata from './components/Createdata'
import AllData from './components/AllData'
import NavbarComp from './components/Navbar'
import Update from './components/Update'

function App() {
  return (
    <>
    <NavbarComp/>
    <Routes>
      <Route path='/' element={<Createdata/>}/>
      <Route path='/alldata' element={<AllData/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </>
  )
}

export default App