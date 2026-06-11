import { Link } from 'react-router-dom'
import '../../styles/style.css'

function Audi() {
  return (
    <>
      <header>
        <h1>Audi Collection</h1>
        <Link to="/mainpage" className="back-link">&larr; Back to Brands</Link>
      </header>
      <nav className="grid-layout" aria-label="Audi Models">
        <Link to="/audi/r8"    className="model-card"><h3>Audi R8</h3></Link>
        <Link to="/audi/q7"    className="model-card"><h3>Audi Q7</h3></Link>
        <Link to="/audi/etron" className="model-card"><h3>Audi e-tron</h3></Link>
        <Link to="/audi/tt"    className="model-card"><h3>Audi TT</h3></Link>
      </nav>
    </>
  )
}

export default Audi
