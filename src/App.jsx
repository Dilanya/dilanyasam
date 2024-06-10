import {BrowserRouter} from 'react-router-dom';
import {About, Contact, Education, Certifications, Hero, Navbar,
 Works, StarsCanvas , Tech, Experience} from './components';



const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        
        <Experience/>
        <Education/>
        <Certifications/>
        <Tech/>
        <Works/>
        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>
    </div>
    </BrowserRouter>
  )
}

export default App
