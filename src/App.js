import React from 'react'
import Navbar from './Navbar'
import { Route } from 'react-router-dom'
import { Routes} from 'react-router-dom'
import SignUp from './SignUp'
import Home from './Home'
import Login from './Login'

export default function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}
