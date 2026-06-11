import { Link } from 'react-router-dom'
import '../../styles/style.css'

function Mercedes() {
  return (
    <>
      <header>
        <h1>Mercedes-Benz Collection</h1>
        <Link to="/mainpage" className="back-link">&larr; Back to Brands</Link>
      </header>
      <nav className="grid-layout" aria-label="Mercedes-Benz Models">
        <Link to="/mercedes/cclass" className="model-card"><h3>Mercedes C-Class</h3></Link>
        <Link to="/mercedes/eclass" className="model-card"><h3>Mercedes E-Class</h3></Link>
        <Link to="/mercedes/sclass" className="model-card"><h3>Mercedes S-Class</h3></Link>
        <Link to="/mercedes/gclass" className="model-card"><h3>Mercedes G-Class</h3></Link>
      </nav>
    </>
  )
}

export default Mercedes
