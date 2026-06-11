import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function AudiR8() {
  return (
    <>
      <header>
        <h1>Audi R8</h1>
        <Link to="/audi" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/audi_r8_1773284458126.png"
            alt="Audi R8"
            className="car-image"
          />
          <h2>Audi R8 Detailed Specs</h2>
          <p>An iconic supercar that perfectly combines performance and luxury.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>5.2L V10</td></tr>
                            <tr><th>Horsepower</th><td>602 hp</td></tr>
                            <tr><th>0-60 mph</th><td>3.1s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 2.72 Crore</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default AudiR8
