import React from 'react'
import { Link } from 'react-router-dom'

const History: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our History</h1>
          <p className="page-subtitle">50 years of faith, fellowship, and service</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="history-intro">
                <p>Grace Church was founded in 1974 with a vision to create a welcoming community where people could grow in faith, find fellowship, and serve others. Over the past five decades, we have witnessed God's faithfulness through seasons of growth, challenge, and celebration.</p>
              </div>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1974</div>
                  <div className="timeline-content">
                    <h3>Church Founded</h3>
                    <p>Grace Church was established with a small but dedicated group of founding members who shared a vision for community ministry.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1980</div>
                  <div className="timeline-content">
                    <h3>First Building Expansion</h3>
                    <p>As our congregation grew, we expanded our facilities to include additional classrooms and a larger fellowship hall.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1995</div>
                  <div className="timeline-content">
                    <h3>Community Outreach Programs</h3>
                    <p>Launched our first major community outreach initiatives, including food pantry and youth programs.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2010</div>
                  <div className="timeline-content">
                    <h3>Sanctuary Renovation</h3>
                    <p>Completed a major renovation of our sanctuary, improving accessibility and updating our worship space.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h3>50th Anniversary Celebration</h3>
                    <p>Celebrating five decades of faithful service and looking forward to the future God has in store for us.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="card">
                <h3>Historical Archives</h3>
                <ul className="link-list">
                  <li><Link to="/history/our-church">Our Church History</Link></li>
                  <li><Link to="/history/former-presbyters">Former Presbyters</Link></li>
                  <li><Link to="/history/former-secretaries">Former Secretaries</Link></li>
                  <li><Link to="/history/former-treasurers">Former Treasurers</Link></li>
                  <li><Link to="/history/former-pc-members">Former PC Members</Link></li>
                  <li><Link to="/history/former-sextons">Former Sextons</Link></li>
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

        .history-intro {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          margin-bottom: 3rem;
        }

        .timeline {
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 100px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #E1C26C;
        }

        .timeline-item {
          display: flex;
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-year {
          width: 80px;
          font-size: 1.2rem;
          font-weight: 700;
          color: #3D4A9E;
          text-align: right;
          padding-right: 2rem;
          flex-shrink: 0;
        }

        .timeline-year::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 6px;
          width: 12px;
          height: 12px;
          background: #E1C26C;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px #E1C26C;
        }

        .timeline-content {
          flex: 1;
          padding-left: 2rem;
        }

        .timeline-content h3 {
          color: #3D4A9E;
          margin-bottom: 0.5rem;
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
          
          .timeline::before {
            left: 60px;
          }
          
          .timeline-year {
            width: 60px;
            font-size: 1rem;
            padding-right: 1rem;
          }
          
          .timeline-content {
            padding-left: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default History