import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function MercedesGClass() {
  return (
    <>
      <header>
        <h1>Mercedes-Benz G-Class</h1>
        <Link to="/mercedes" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/mercedes_gclass_1773285210240.png"
            alt="Mercedes-Benz G-Class"
            className="car-image"
          />
          <h2>Mercedes-Benz G-Class Detailed Specs</h2>
          <p>Iconic luxury off-road SUV.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>4.0L V8 Biturbo</td></tr>
                            <tr><th>Horsepower</th><td>416 hp</td></tr>
                            <tr><th>0-60 mph</th><td>5.6s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 2.55 Crore</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default MercedesGClass
