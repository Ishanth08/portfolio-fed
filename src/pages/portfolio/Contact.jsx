import { useState } from 'react'
import PortfolioNav from '../../components/PortfolioNav'
import '../../styles/pstyle.css'

function Contact() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! Thank you for reaching out.')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <PortfolioNav />
      <div className="container">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input type="submit" value="Send Message" />
        </form>
      </div>
      <footer className="portfolio-footer">
        <p>2026 Portfolio | Ishanth</p>
      </footer>
    </>
  )
}

export default Contact
