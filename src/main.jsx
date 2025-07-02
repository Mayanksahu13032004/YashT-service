import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import BrandsSection from './components/BrandsSection.jsx'
import PhilosophySection from './components/PhilosophySection.jsx'
import VisionSection from './components/VisionSection.jsx'
import Footer from './components/Footer.jsx'
import Secondpage from './components/Secondpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
      <Secondpage/>
     <BrandsSection/>
      <PhilosophySection/>
       <VisionSection/>
         <Footer/>
    <App />
  </StrictMode>,
)


