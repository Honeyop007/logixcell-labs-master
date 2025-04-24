// App.js
import './App.css';

import Hero from './components/Hero';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
 
  return (
    <div className="App">
      {/* Brackets Animation Background */}
    
<Navbar/>
      {/* Hero Section */}
    <Hero/>
      {/* Services Section - Full Page Slider */}
    <Service/>

      {/* Portfolio Section - Simplified */}
     <Portfolio/>

      {/* About Section - Simplified */}
<About/>

      {/* Contact Section - Simplified */}
    <Contact/>

      {/* Footer */}
   <Footer/>
    </div>
  );
}

export default App;