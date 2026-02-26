import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Trainers from './pages/Trainers'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/Repone/" element={<Home />} />
      <Route path="/Repone/about" element={<About />} />
      <Route path="/Repone/pricing" element={<Pricing />} />
      <Route path="/Repone/trainers" element={<Trainers />} />
      <Route path="/Repone/contact" element={<Contact />} />
    </Routes>
  )
}

export default App