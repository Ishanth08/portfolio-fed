import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function BMWI4() {
  return (
    <>
      <header>
        <h1>BMW i4</h1>
        <Link to="/bmw" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/bmw_i4_1773284796310.png"
            alt="BMW i4"
            className="car-image"
          />
          <h2>BMW i4 Detailed Specs</h2>
          <p>All-electric Gran Coupe offering thrilling dynamics.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Range</th><td>Up to 301 miles</td></tr>
                            <tr><th>Horsepower</th><td>281 hp</td></tr>
                            <tr><th>0-60 mph</th><td>5.8s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 73.90 Lakh</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default BMWI4
