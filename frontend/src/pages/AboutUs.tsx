import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p className="page-subtitle">Learning about CSI Christ the King Church and our community</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <p>Welcome to CSI Christ the King Church, a warm and welcoming Tamil-speaking congregation with a rich spiritual heritage. Since our founding on <strong>15th August 1975</strong>, we have been serving our community with love, faith, and dedication for over 50 years. Rooted in the love of Christ, our church family is committed to worship, fellowship, and service.</p>
              
              <h2>Our Church Family</h2>
              <p>We are a vibrant, medium-sized congregation of around 100 families, united in our mission to grow in Christ and serve with love. Our worship services include Holy Communion on the 2nd and 4th Sundays and Divine Worship on the 1st and 3rd Sundays of each month. Our church is open daily from 4:00 PM to 7:00 PM for personal prayer, offering a quiet space where all are welcome to find peace and experience God’s presence.</p>
              
              <h2>Our Ministries</h2>
              <p>We are blessed with active and dedicated ministries that nurture faith and fellowship across all ages:</p>
              <ul className='ministry-list'>
                <li>Sunday School Ministry</li>
                <li>Youth Fellowship Ministry</li>
                <li>Women Fellowship Ministry</li>
                <li>Senior Citizens’ Fellowship Ministry</li>
                <li>Choir Ministry</li>
              </ul>

              <p>Through these ministries, we worship God faithfully, grow together spiritually, and serve others with compassion.</p>
            
              <h2>Our Invitation</h2>
              <p>Whether you are new to the area or searching for a church family, we warmly invite you to join us on this journey of faith in Christ. Many who come here in faith leave with hearts uplifted and prayers answered. You are always welcome at CSI Christ the King Church.</p>
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