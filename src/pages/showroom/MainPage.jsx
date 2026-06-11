import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/style.css'

function MainPage() {
  const [showBrands, setShowBrands] = useState(false)
  const [opacity, setOpacity]       = useState(0)

  const handleExplore = () => {
    setShowBrands(true)
    setTimeout(() => setOpacity(1), 10)
  }

  return (
    <>
      <header>
        <h1>Premium Auto Collection</h1>
        <p>Select a brand to explore our exclusive models</p>
      </header>

      {!showBrands && (
        <section className="intro-section" id="intro-section">
          <h2>Welcome to the Ultimate Driving Experience</h2>
          <p>
            Discover a curated selection of the world's most luxurious and
            high-performance vehicles. Experience the precision engineering of
            our premium brands.
          </p>
          <button className="explore-btn" onClick={handleExplore}>
            Explore Brands
          </button>
        </section>
      )}

      {showBrands && (
        <div style={{ opacity, transition: 'opacity 0.5s ease-in-out' }}>
          <main className="grid-layout">
            <Link to="/bmw" className="brand-card">
              <img src="/bmw_logo_1773285440302.png" alt="BMW Logo" className="brand-logo" />
              <h2>BMW</h2>
            </Link>
            <Link to="/audi" className="brand-card">
              <img src="/audi_logo_1773285412802.png" alt="Audi Logo" className="brand-logo" />
              <h2>Audi</h2>
            </Link>
            <Link to="/mercedes" className="brand-card">
              <img src="/mercedes_logo_1773285502358.png" alt="Mercedes-Benz Logo" className="brand-logo" />
              <h2>Mercedes-Benz</h2>
            </Link>
          </main>
        </div>
      )}
    </>
  )
}

export default MainPage
