import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function BMWX5() {
  return (
    <>
      <header>
        <h1>BMW X5</h1>
        <Link to="/bmw" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/bmw_x5_1773284758773.png"
            alt="BMW X5"
            className="car-image"
          />
          <h2>BMW X5 Detailed Specs</h2>
          <p>A mid-size luxury SUV that delivers athletic handling.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>3.0L Turbo I6</td></tr>
                            <tr><th>Horsepower</th><td>375 hp</td></tr>
                            <tr><th>0-60 mph</th><td>5.3s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 96.00 Lakh</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default BMWX5
