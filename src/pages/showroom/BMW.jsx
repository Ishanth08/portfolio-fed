import { Link } from 'react-router-dom'
import '../../styles/style.css'

function BMW() {
  return (
    <>
      <header>
        <h1>BMW Collection</h1>
        <Link to="/mainpage" className="back-link">&larr; Back to Brands</Link>
      </header>
      <nav className="grid-layout" aria-label="BMW Models">
        <Link to="/bmw/m3" className="model-card"><h3>BMW M3</h3></Link>
        <Link to="/bmw/x5" className="model-card"><h3>BMW X5</h3></Link>
        <Link to="/bmw/i4" className="model-card"><h3>BMW i4</h3></Link>
        <Link to="/bmw/z4" className="model-card"><h3>BMW Z4</h3></Link>
      </nav>
    </>
  )
}

export default BMW
