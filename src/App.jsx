
import './App.css'
import { Hero } from './componet/hero-section/Hero'
import { NavBar } from './componet/navBar/NavBar'
import { Main } from './componet/main/Main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Trackers } from './componet/tracker/Trackers';
import { TrackingResult} from './componet/tracking-result/Tracking-result';
import Footer from './componet/footer/Footer';
import Services from './componet/serve/Service';


// import { Trackingresult } from './componet/tracking-result/Tracking-result'

function App() {


  return (
    <Router>
    <NavBar /> 
    
    <Hero />
    <Main />
    <Services />
    <Trackers />
    <Routes>
     
      <Route path="/" element={<></>} /> 
      <Route path="/track-package" element={<Trackers />} />
      <Route path="/tracking-result/:trackingNumber" element={<TrackingResult />} />
      
      
    </Routes>

    <Footer />
  </Router>
  )
}

export default App
