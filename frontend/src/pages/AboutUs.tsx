import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p className="page-subtitle">Learning about Grace Church and our community</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <p>Welcome to Grace Church, where we have been serving our community with love, faith, and dedication for 50 years. Our church family is united in our commitment to worship God, serve others, and grow together in faith.</p>
              
              <p>Since our founding in 1974, we have been blessed to witness countless lives transformed by the grace of God. Our congregation is a diverse and welcoming community where people from all walks of life come together to worship, learn, and serve.</p>
              
              <h2>Our Church Family</h2>
              <p>Grace Church is more than just a building - we are a family bound together by our shared faith and love for one another. Our congregation includes families, young professionals, students, and seniors, all working together to build God's kingdom here on earth.</p>
              
              <h2>Our Commitment</h2>
              <p>We are committed to being a church that makes a difference in our community and beyond. Through our various ministries, outreach programs, and community partnerships, we strive to be the hands and feet of Jesus in our world.</p>
            </div>
            
            <div className="sidebar">
              <div className="card">
                <h3>Quick Links</h3>
                <ul className="link-list">
                  <li><Link to="/about-us/our-church">Our Church</Link></li>
                  <li><Link to="/about-us/our-diocese">Our Diocese</Link></li>
                  <li><Link to="/about-us/our-presbyter-in-charge">Our Presbyter In-Charge</Link></li>
                  <li><Link to="/about-us/our-pastorate-committee">Our Pastorate Committee</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .main-content h2 {
          color: #3D4A9E;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .sidebar .card {
          margin-bottom: 2rem;
        }

        .link-list {
          list-style: none;
          padding: 0;
        }

        .link-list li {
          border-bottom: 1px solid #eee;
        }

        .link-list li:last-child {
          border-bottom: none;
        }

        .link-list a {
          display: block;
          padding: 0.75rem 0;
          color: #3D4A9E;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .link-list a:hover {
          color: #E1C26C;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default AboutUs