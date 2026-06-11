import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function AudiEtron() {
  return (
    <>
      <header>
        <h1>Audi e-tron GT</h1>
        <Link to="/audi" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/audi_etron_1773284560403.png"
            alt="Audi e-tron GT"
            className="car-image"
          />
          <h2>Audi e-tron GT Detailed Specs</h2>
          <p>Fully electric grand tourer.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Range</th><td>238 miles</td></tr>
                            <tr><th>Horsepower</th><td>522 hp</td></tr>
                            <tr><th>0-60 mph</th><td>3.9s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 1.70 Crore</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default AudiEtron
