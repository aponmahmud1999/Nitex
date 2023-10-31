
import './App.css';
import Banner from './Components/Banner';
import Service from './Components/Service';
import Courses from './Components/Courses';
import Whychoose from './Components/Whychoose';
import Review from './Components/Review';
import Partner from './Components/Partner';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




function App() {
  useEffect(() => {
    AOS.init();
    }, [])
  return (
    <div className='bg-slate-300' >
  <Navbar/>
      <Banner/>
      <About/>
      <Service/>
      <Courses/>
      <Whychoose/>
      <Review/>
      <Partner/>
      <Contact/>
      <Footer/>
      
      
      
      
      
      
    
     
      
    </div>
  );
}

export default App;
