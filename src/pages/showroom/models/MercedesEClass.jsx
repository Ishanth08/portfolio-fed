import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function MercedesEClass() {
  return (
    <>
      <header>
        <h1>Mercedes-Benz E-Class</h1>
        <Link to="/mercedes" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/mercedes_eclass_1773284954820.png"
            alt="Mercedes-Benz E-Class"
            className="car-image"
          />
          <h2>Mercedes-Benz E-Class Detailed Specs</h2>
          <p>The standard for mid-size luxury sedans.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>3.0L Inline-6 Turbo</td></tr>
                            <tr><th>Horsepower</th><td>362 hp</td></tr>
                            <tr><th>0-60 mph</th><td>4.9s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 76.05 Lakh</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default MercedesEClass
