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
                <p>CSI Christ the King Church, Jalahalli, has a rich and inspiring history rooted in faith, perseverance, and community spirit. From humble beginnings in 1975, we have grown into a thriving congregation, blessed with God’s grace every step of the way.</p>
              </div>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">1975</div>
                  <div className="timeline-content">
                    <h3>Church Founded</h3>
                    <p>On 15th August 1975, a small group of 30 families began gathering for worship in a classroom within Bharat Electronics Limited (BEL). Originally called CSI Tamil Church, this marked the start of a journey rooted in God’s grace.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1976</div>
                  <div className="timeline-content">
                    <h3>Becoming a Pastorate</h3>
                    <p>Formally accredited as a Pastorate in February 1976 under Bishop Rt. Rev. K.E. Gill, the church began regular Sunday services that have continued faithfully to this day.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1977 - 1980</div>
                  <div className="timeline-content">
                    <h3>Land Purchased</h3>
                    <p>Two plots of land were purchased in Jalahalli — the first in 1977 (50 ft × 120 ft) and the second in 1980 (34 ft × 47 ft) — to establish a permanent place of worship.</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1983</div>
                  <div className="timeline-content">
                    <h3>First Church Building Dedicated</h3>
                    <p>Under the leadership of Rev. Jayapal Daniel, a modest 28 ft × 40 ft church was built and dedicated on 21st August 1983 by Bishop Rt. Rev. Dr. C.D. Jathanna.</p>                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">1989</div>
                  <div className="timeline-content">
                    <h3>Renamed CSI Christ the King Church</h3>
                    <p>On 15th August 1989, the church was renamed to CSI Christ the King Church as the congregation grew to 55 families.</p>                  
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">1991 - 1998</div>
                  <div className="timeline-content">
                    <h3>Expansion & New Facilities</h3>
                    <ul className='ministry-list'>
                      <li><strong>6th September 1991:</strong> A third plot (30 ft × 40 ft) purchased.</li>
                      <li><strong>18th December 1994:</strong> Enlarged altar and renovated structure re-dedicated by Bishop Rt. Rev. W.V. Karl.</li>
                      <li><strong>13th December 1998:</strong> Sunday School Hall dedicated by Bishop Rt. Rev. Dr. Vasanta Kumar.</li>
                    </ul>
                    <p>On 15th August 1989, the church was renamed to CSI Christ the King Church as the congregation grew to 55 families.</p>                  
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2003</div>
                  <div className="timeline-content">
                    <h3>Bell Tower & Additional Rooms</h3>
                    <p>A Bell Tower, Office Room, and Youth Fellowship Room were completed and dedicated on 18th May 2003 by Mr. King Das, Diocesan Treasurer.</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">2017 – 2018</div>
                  <div className="timeline-content">
                    <h3>Rebuilding for the Future</h3>
                    <p>With the old mud-walled, asbestos-roofed building deteriorating, the Pastorate Committee, led by Rev. Christy Raja Kumar, initiated the construction of a new church.</p>
                    <ul className='ministry-list'>
                      <li><strong>1st November 2017:</strong> Foundation stone laid by Bishop Rt. Rev. Dr. P.K. Samuel.</li>
                      <li><strong>29th July 2018:</strong> Beautiful new church dedicated by Bishop Dr. P.K. Samuel, equipped with modern facilities: audio system, projector, live-stream camera, high-quality lighting, CCTV, power backup, seating, choir benches, Sunday School hall, and sexton house.</li>
                    </ul>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-year">Today</div>
                  <div className="timeline-content">
                    <h3>A Thriving Congregation</h3>
                    <p>Now home to over 100 families, CSI Christ the King Church stands as a beacon of God’s love in Jalahalli — a place of worship, fellowship, and service, looking ahead with faith and hope.</p>                  
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
                  {/* <li><Link to="/history/former-secretaries">Former Secretaries</Link></li>
                  <li><Link to="/history/former-treasurers">Former Treasurers</Link></li>
                  <li><Link to="/history/former-pc-members">Former PC Members</Link></li>
                  <li><Link to="/history/former-sextons">Former Sextons</Link></li> */}
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