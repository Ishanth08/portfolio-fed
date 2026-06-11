import { useState } from 'react'
import '../styles/style.css'

function BookingForm() {
  const [name, setName]   = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Success!\n\nYour test drive has been booked. We will contact you shortly.')
    setName('')
    setEmail('')
  }

  return (
    <section className="contact-section">
      <h2>Book a Test Drive</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Submit Request</button>
      </form>
    </section>
  )
}

export default BookingForm
