import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function BMWZ4() {
  return (
    <>
      <header>
        <h1>BMW Z4</h1>
        <Link to="/bmw" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/bmw_z4_1773284819621.png"
            alt="BMW Z4"
            className="car-image"
          />
          <h2>BMW Z4 Detailed Specs</h2>
          <p>A classic sports roadster driving experience.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>2.0L Turbo I4</td></tr>
                            <tr><th>Horsepower</th><td>255 hp</td></tr>
                            <tr><th>0-60 mph</th><td>5.2s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 90.90 Lakh</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default BMWZ4
