import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <div className="hero-text">
              <h1>Celebrating 50 Years of Faith</h1>
              <p className="hero-subtitle">Christ the King Church: A Legacy of Love, Service, and Community</p>
              <p className="hero-description">Join us as we celebrate five decades of God's faithfulness, community service and spiritual growth. Since 1975, Christ the King Church has been a beacon of hope and love in our community.</p>
              <div className="hero-buttons">
                <Link to="/about-us" className="btn btn-primary">Learn About Us</Link>
                <Link to="/schedules" className="btn btn-secondary">Service Times</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="welcome-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Welcome to Christ the King Church</h2>
            <p>Where Faith Meets Fellowship</p>
          </div>
          
          <div className="welcome-grid">
            <div className="welcome-card card">
              <h3>Our Mission</h3>
              <p>To proclaim the love of Christ, nurture spiritual growth, serve the community with compassion, and build a fellowship rooted in faith, hope, and unity.</p>
            </div>
            
            <div className="welcome-card card">
              <h3>Our Vision</h3>
              <p>To be a Christ-centered community that reflects God’s love, empowers every generation in faith, and transforms lives through service, worship, and witness.</p>
            </div>
            
            <div className="welcome-card card">
              <h3>Our Values</h3>
              <p>Love, Faith, Community, Service, and Integrity guide everything we do. We believe in the power of prayer, the importance of fellowship, and the call to serve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Service Times</h2>
            <p>Join us for worship and fellowship</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card card">
              <h3>Divine Service</h3>
              <p>1st & 3rd Sundays</p>
              <p className="service-time">8:00 AM onwards</p>
              <p>Traditional worship service with choir, prayers, and inspirational message.</p>
              
            </div>
            
            <div className="service-card card">
              <h3>Holy Communion Service</h3>
              <p>2nd & 4th Sundays</p>
              <p className="service-time">8:00 AM onwards</p>
              <p>Holy Communion service with sharing of the Lord’s Supper in remembrance of Christ’s sacrifice.</p>
            </div>
            
            <div className="service-card card">
              <h3>First of Every Month</h3>
              <p>Holy Communion Service</p>
              <p className="service-time">6:30 PM onwards </p>
              <p>Holy Communion service with scripture, prayers, and the sharing of the Lord’s Supper.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="anniversary-section">
        <div className="container">
          <div className="anniversary-content">
            <div className="anniversary-text">
              <h2>50 Years of Faith and Fellowship</h2>
              <p className="anniversary-subtitle">1975 - 2025</p>
              <p>For five decades, Christ the King Church has been a cornerstone of faith in our community. From our humble beginnings to our thriving congregation today, we have witnessed countless blessings, baptisms, weddings, and celebrations of life.</p>
              <p>Our journey has been marked by faithful service, community outreach, and the unwavering love of God that binds us together as one family in Christ.</p>
              <Link to="/history" className="btn btn-primary">Explore Our History</Link>
            </div>
            
            <div className="anniversary-stats">
              <div className="anniversary-logo">
                <img src="/h1.png" alt="Church Logo" className="logo-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 90.5vh;
          background: linear-gradient(135deg, #111111ff 0%, #5265AD 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/Altar.JPG') center/cover;
          opacity: 0.8;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(74, 60, 116, 0.4);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-text {
          max-width: 600px;
          color: white;
          text-align: left;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #E1C26C;
          margin-bottom: 1rem;
        }

        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .welcome-section,
        .services-section {
          padding: 4rem 0;
        }

        .anniversary-section {
          padding: 4rem 0;
          background: white;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: #3D4A9E;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          font-size: 1.1rem;
          color: #666;
          text-align: center;
        }

        .welcome-grid,
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .service-grid p{
          margin: 0;
          color: #b08d57;
          font-size: 0.98rem;
          font-weight: 500;
          text-align: center;
        }

        .service-time {
          font-size: 1.5rem;
          font-weight: 700;
          color: #E1C26C;
          margin-bottom: 1rem;
        }

        .anniversary-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .anniversary-text h2 {
          color: #3D4A9E;
          margin-bottom: 0.5rem;
        }

        .anniversary-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: #E1C26C;
          margin-bottom: 1.5rem;
        }

        .anniversary-stats {
          display: grid;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: #f8f9fa;
          border-radius: 12px;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #3D4A9E;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hero-text h1 {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .btn {
            text-align: center;
          }
          
          .anniversary-logo {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            min-height: 180px;
            background: #f8f9fa;
            border-radius: 12px;
            padding: 1.5rem;
            max-width: 100%;
            /* Make sure it fills the grid cell but doesn't overflow */
          }

          .logo-img {
            max-width: 220px;
            max-height: 180px;
            width: 100%;
            height: auto;
            object-fit: contain;
            display: block;
          }
            
          .anniversary-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .anniversary-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
          
          .stat-item {
            padding: 1rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Home