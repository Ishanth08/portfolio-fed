import { Routes, Route } from 'react-router-dom'

// Portfolio pages
import PortfolioHome from './pages/portfolio/PortfolioHome'
import About from './pages/portfolio/About'
import Projects from './pages/portfolio/Projects'
import Contact from './pages/portfolio/Contact'

// Showroom pages
import MainPage from './pages/showroom/MainPage'
import BMW from './pages/showroom/BMW'
import Audi from './pages/showroom/Audi'
import Mercedes from './pages/showroom/Mercedes'

// BMW models
import BMWM3 from './pages/showroom/models/BMWM3'
import BMWX5 from './pages/showroom/models/BMWX5'
import BMWI4 from './pages/showroom/models/BMWI4'
import BMWZ4 from './pages/showroom/models/BMWZ4'

// Audi models
import AudiR8 from './pages/showroom/models/AudiR8'
import AudiQ7 from './pages/showroom/models/AudiQ7'
import AudiEtron from './pages/showroom/models/AudiEtron'
import AudiTT from './pages/showroom/models/AudiTT'

// Mercedes models
import MercedesCClass from './pages/showroom/models/MercedesCClass'
import MercedesEClass from './pages/showroom/models/MercedesEClass'
import MercedesSClass from './pages/showroom/models/MercedesSClass'
import MercedesGClass from './pages/showroom/models/MercedesGClass'

function App() {
  return (
    <Routes>
      {/* Portfolio */}
      <Route path="/"            element={<PortfolioHome />} />
      <Route path="/about"       element={<About />} />
      <Route path="/projects"    element={<Projects />} />
      <Route path="/contact"     element={<Contact />} />

      {/* Showroom */}
      <Route path="/mainpage"    element={<MainPage />} />
      <Route path="/bmw"         element={<BMW />} />
      <Route path="/audi"        element={<Audi />} />
      <Route path="/mercedes"    element={<Mercedes />} />

      {/* BMW models */}
      <Route path="/bmw/m3"      element={<BMWM3 />} />
      <Route path="/bmw/x5"      element={<BMWX5 />} />
      <Route path="/bmw/i4"      element={<BMWI4 />} />
      <Route path="/bmw/z4"      element={<BMWZ4 />} />

      {/* Audi models */}
      <Route path="/audi/r8"     element={<AudiR8 />} />
      <Route path="/audi/q7"     element={<AudiQ7 />} />
      <Route path="/audi/etron"  element={<AudiEtron />} />
      <Route path="/audi/tt"     element={<AudiTT />} />

      {/* Mercedes models */}
      <Route path="/mercedes/cclass" element={<MercedesCClass />} />
      <Route path="/mercedes/eclass" element={<MercedesEClass />} />
      <Route path="/mercedes/sclass" element={<MercedesSClass />} />
      <Route path="/mercedes/gclass" element={<MercedesGClass />} />
    </Routes>
  )
}

export default App
