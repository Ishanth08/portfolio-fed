import { Link } from 'react-router-dom'
import PortfolioNav from '../../components/PortfolioNav'
import '../../styles/pstyle.css'

function Projects() {
  return (
    <>
      <PortfolioNav />
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-container">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Designed using HTML & CSS with Grid layout.</p>
          </div>
          <div className="card">
            <h3>Car Showroom Website</h3>
            <p><Link to="/mainpage">Click here to check out</Link></p>
          </div>
          <div className="card">
            <h3>Endless Runner Game</h3>
            <p><a href="https://endless-game-two.vercel.app" target="_blank" rel="noopener noreferrer">Click here to check out</a></p>
          </div>
          <div className="card">
            <h3>Gravity flip runner</h3>
            <p><a href="https://game-fliprunner-o8er.vercel.app" target="_blank" rel="noopener noreferrer">Click here to check out</a></p>
          </div>
        </div>
      </div>
      <footer className="portfolio-footer">
        <p>2026 Portfolio | Ishanth</p>
      </footer>
    </>
  )
}

export default Projects
