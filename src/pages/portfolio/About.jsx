import PortfolioNav from '../../components/PortfolioNav'
import '../../styles/pstyle.css'

function About() {
  return (
    <>
      <PortfolioNav />
      <div className="container">
        <div className="about-grid">
          <div>
            <h2>About Me</h2>
            <p>Hello! I'm Ishanth, passionate about web development.</p>
            <p>I enjoy building modern websites using HTML and CSS.</p>
          </div>
          <div>
            <h2>Skills</h2>
            <div className="skill-box">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">Basic Java</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="portfolio-footer">
        <p>2026 Portfolio | Ishanth</p>
      </footer>
    </>
  )
}

export default About
