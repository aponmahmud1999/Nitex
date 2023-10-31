
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




function App() {
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
      
      
      
      
      
      
    
     
      
    </div>
  );
}

export default App;
