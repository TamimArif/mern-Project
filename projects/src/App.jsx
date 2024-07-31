// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignupSignin from './components/Signup/SignupSignin'
import Signin from './components/Signin/Signin'
import Footer from './components/Footer/Footer'
import TermsandCond from './components/Termsandcondition/Termsandcond'
import Privandpol from './components/Privacyandpolicies/Privandpol'
import Bloodacceptor from './components/Bloodacceptor/Bloodacceptor'
// import FAQ from './components/FAQ'
// import Footer from './components/Footer'

function App() {
 return (
  <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup" element={<SignupSignin/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
    </Routes>
    </BrowserRouter>
    <TermsandCond/>
    <Privandpol/>
    <Bloodacceptor/>
    <Footer/>
    </>
 )
}

export default App