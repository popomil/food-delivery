
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Card from './Components/Card'
import Checkout from './Components/Checkout'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import "./firebase"
function App() {


  return (
    <BrowserRouter>
    <div className="container">
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
