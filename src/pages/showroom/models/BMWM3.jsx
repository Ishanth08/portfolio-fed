import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function BMWM3() {
  return (
    <>
      <header>
        <h1>BMW M3</h1>
        <Link to="/bmw" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/bmw_m3_1773284701141.png"
            alt="BMW M3"
            className="car-image"
          />
          <h2>BMW M3 Detailed Specs</h2>
          <p>The BMW M3 represents the pinnacle of M performance.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>3.0L Twin-Turbo I6</td></tr>
                            <tr><th>Horsepower</th><td>473 hp</td></tr>
                            <tr><th>0-60 mph</th><td>4.1s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 1.47 Crore</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default BMWM3
