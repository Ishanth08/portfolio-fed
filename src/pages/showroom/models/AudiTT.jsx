import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function AudiTT() {
  return (
    <>
      <header>
        <h1>Audi TT RS</h1>
        <Link to="/audi" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/audi_tt_1773284630244.png"
            alt="Audi TT RS"
            className="car-image"
          />
          <h2>Audi TT RS Detailed Specs</h2>
          <p>Compact sports coupe with thrilling acceleration.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>2.5L Turbo I5</td></tr>
                            <tr><th>Horsepower</th><td>394 hp</td></tr>
                            <tr><th>0-60 mph</th><td>3.6s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 65.43 Lakh</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default AudiTT
