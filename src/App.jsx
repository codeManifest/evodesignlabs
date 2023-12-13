


// import { BrowserRouter as Router  } from 'react-router-dom';

import {BrowserRouter,Routes,Route } from "react-router-dom";
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Homepage from './pages/Homepage'
import Terms from './pages/Terms'
import Notfound from "./pages/Notfound";
import Footer from "./pages/Footer";



import Nav from './nav/Nav'
export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      
    <Routes>
<Route path='/'element={<Homepage/>} />
<Route path='/Contact' element={<Contactus/>} />
<Route path='/About' element={<Aboutus/>} />
<Route path='/About' element={<Aboutus/>} />
<Route path='/Terms' element={<Terms/>} />
<Route path='*' element={<Notfound/>} />

    </Routes>
    <Footer/>

    </BrowserRouter>
  )
}