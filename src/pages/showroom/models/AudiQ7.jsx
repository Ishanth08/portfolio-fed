import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function AudiQ7() {
  return (
    <>
      <header>
        <h1>Audi Q7</h1>
        <Link to="/audi" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/audi_q7_1773284500346.png"
            alt="Audi Q7"
            className="car-image"
          />
          <h2>Audi Q7 Detailed Specs</h2>
          <p>Premium 7-seater SUV loaded with advanced technology.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>3.0L Turbo V6</td></tr>
                            <tr><th>Horsepower</th><td>335 hp</td></tr>
                            <tr><th>0-60 mph</th><td>5.7s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 86.92 Lakh</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default AudiQ7
