import { Link } from 'react-router-dom'
import BookingForm from '../../../components/BookingForm'
import '../../../styles/style.css'

function MercedesSClass() {
  return (
    <>
      <header>
        <h1>Mercedes-Benz S-Class</h1>
        <Link to="/mercedes" className="back-link">&larr; Back to Models</Link>
      </header>
      <main className="model-details">
        <section className="details-section">
          <img
            src="/mercedes_sclass_1773285057473.png"
            alt="Mercedes-Benz S-Class"
            className="car-image"
          />
          <h2>Mercedes-Benz S-Class Detailed Specs</h2>
          <p>The pinnacle of luxury and innovation.</p>
          <table className="specs-table">
            <tbody>
                            <tr><th>Engine</th><td>4.0L V8 Biturbo</td></tr>
                            <tr><th>Horsepower</th><td>496 hp</td></tr>
                            <tr><th>0-60 mph</th><td>4.4s</td></tr>
                            <tr><th>Starting Price</th><td>₹ 1.76 Crore</td></tr>
            </tbody>
          </table>
        </section>
      </main>
      <BookingForm />
    </>
  )
}

export default MercedesSClass
