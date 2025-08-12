import React, { useState } from 'react'

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      alert('There was an error. Please try again later.');
    }
  } catch (error) {
    alert('There was an error. Please try again later.');
  }
};

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">We'd love to hear from you</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-card card">
                <h2>Get In Touch</h2>
                <p>Whether you're a longtime member or visiting for the first time, we'd love to connect with you. Feel free to reach out with any questions about our services, programs, or how to get involved.</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <h3>Address</h3>
                    <p>321, 6th Main Road,</p>
                        <pre className='address'>Bahubali Nagar,
                        Jalahalli,
                        Bangalore – 560 013
                        </pre>
                        <div className="map-embed" style={{ marginTop: "2rem" }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8614027501917!2d77.54975857532094!3d13.044492787277616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d24af2c3efb%3A0xceffa825b7209893!2sC.S.I%20Christ%20The%20King%20Church%20(Tamil)!5e0!3m2!1sen!2sin!4v1753176000533!5m2!1sen!2sin"
                          width="100%"
                          height="300"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Church Location"
                        />
                      </div>
                  </div>
                  
                  <div className="contact-item">
                    <h3>Email</h3>
                    <p>csictkc.jalahalli@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="form-card card">
                <h2>Send Us a Message</h2>
                <form className="contact-form-element" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="general">General Information</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="ministry">Ministry Involvement</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }

        .info-card h2,
        .form-card h2 {
          color: #3D4A9E;
          margin-bottom: 1.5rem;
        }

        .contact-details {
          margin-top: 2rem;
        }

        .contact-item {
          margin-bottom: 1.5rem;
        }

        .contact-item h3 {
          color: #3D4A9E;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .contact-item p {
          margin: 0;
          line-height: 1.5;
        }

        .map-embed {
          width: 100%;
          max-width: 100%;
          margin-top: 2rem;
        }
        .map-embed iframe {
          width: 100%;
          border-radius: 12px;
          min-height: 250px;
          box-shadow: 0 2px 8px rgba(61, 74, 158, 0.08);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #2B2B2B;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3D4A9E;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .address {
          white-space: pre-wrap;
          margin: 0;
          margin-bottom: 1rem;
          line-height: 1.6;
          text-align: justify;
          font-family: 'Inter';
        }

        .btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default ContactUs