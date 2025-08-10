import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Christ the King Church</h3>
              <p className="anniversary-text">Celebrating 50 Years of Faith and Fellowship</p>
              <p>Founded in 1975, Christ the King Church has been a beacon of hope and love in our community for five decades.</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/history">Our History</Link></li>
                <li><Link to="/schedules">Service Times</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Community</h4>
              <ul>
                <li><Link to="/community-groups/sunday-school">Sunday School</Link></li>
                <li><Link to="/community-groups/youth-fellowship">Youth Fellowship</Link></li>
                <li><Link to="/community-groups/womens-fellowship">Women's Fellowship</Link></li>
                <li><Link to="/community-groups/choir">Choir</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p><strong>Address:</strong><br />361, 6th Main Rd, Bahubali Nagar,<br /> Jalahalli, Bengaluru, Karnataka 560013</p>
                <p><strong>Email:</strong><br />csictkc@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Christ the King Church. All rights reserved.</p>
              <p className="anniversary-footer">1975 - 2025 | Celebrating 50 Years</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          background-color: #2B2B2B;
          color: white;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 3rem 0 2rem;
        }

        .footer-section h3 {
          color: #E1C26C;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .footer-section h4 {
          color: #E1C26C;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .anniversary-text {
          color: #E1C26C;
          font-weight: 600;
          font-style: italic;
          margin-bottom: 1rem;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
          color: #cccccc;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-section ul li a:hover {
          color: #E1C26C;
        }

        .contact-info p {
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .footer-bottom {
          border-top: 1px solid #444;
          padding: 1.5rem 0;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .anniversary-footer {
          color: #E1C26C;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 0 1.5rem;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}

export default Footer