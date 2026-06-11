import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortfolioNav from '../../components/PortfolioNav'
import '../../styles/pstyle.css'

function PortfolioHome() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Beginner Web Developer'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <PortfolioNav />
      <header className="hero">
        <div>
          <h1>Ishanth</h1>
          <p>{typedText}</p>
          <Link to="/projects" className="btn">View Projects</Link>
        </div>
      </header>
      <footer className="portfolio-footer">
        <p>2026 Portfolio | Ishanth</p>
      </footer>
    </>
  )
}

export default PortfolioHome
