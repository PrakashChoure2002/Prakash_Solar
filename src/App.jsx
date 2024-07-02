import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from './shared/Navbar'
import Home from './home/Home'
import AboutUs from './about/AboutUs'
import OurClient from './client/OurClient'
import OurService from './services/ourServices'
import ContactUs from './contact us/ContactUs'
import Footer from './shared/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Scrolltop from './shared/Scrolltop'
import Navbar1 from './shared/NavBar1'
// import Test1 from './shared/Test1'



function App() {
 

  return (
   
    <Router>
       <Navbar/>
       {/* <Navbar1/> */}
       {/* <Test1/> */}
       <Scrolltop/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/ourclient' element={<OurClient/>}/>
        <Route path='/ourservice' element={<OurService/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="/output.html" element={<output/>} />
      </Routes>
      <Footer/>
     
      
    </Router>
  )
}

export default App
