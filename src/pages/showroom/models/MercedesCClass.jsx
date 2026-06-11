import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function MercedesCClass() {
  return (
    <>
      <header>
        <h1>Mercedes-Benz C-Class</h1>
        <Link to="/mercedes" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/mercedes_cclass_1773284898706.png"
            alt="Mercedes-Benz C-Class"
            className="car-image"
          />
          <h2>Mercedes-Benz C-Class Detailed Specs</h2>
          <p>A compact executive car with elegant styling and advanced tech.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>2.0L Inline-4 Turbo</td></tr>
                            <tr><th>Horsepower</th><td>255 hp</td></tr>
                            <tr><th>0-60 mph</th><td>6.0s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 61.85 Lakh</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default MercedesCClass
