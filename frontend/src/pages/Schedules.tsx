import React from 'react'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'

const Schedules: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Service Schedules</h1>
          <p className="page-subtitle">Join us for worship, fellowship, and spiritual growth</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="schedules-grid">
            <div className="schedule-card card">
              <h2>Sunday Services</h2>
              <div className="service-item">
                <h3>Divine Services</h3>
                <p className="service-time">8:00 AM onwards</p>
                <p className='service-day'>1st and 3rd Sundays</p>
                <p>Regular Sunday worship service with choir, prayers, and inspiring message.</p>
              </div>
              <div className="service-item">
                <h3>Holy Communion Service</h3>
                <p className="service-time">8:00 AM onwards</p>
                <p className='service-day'>2nd and 4th Sundays</p>
                <p className='service-day'>First of Every Month (6:30 PM onwards)</p>
                <p>Celebration of the Holy Communion with prayers and worship.</p>
              </div>
              
              <h2>Special Services</h2>
              <div className="service-item">
                <h3>Special Events</h3>
                <p className="service-time">Time would be updated prior to the events scheduled.</p>
                <p>Christmas, Easter, and other special celebration services throughout the year.</p>
              </div>
            </div>

            {/* <div className="schedule-card card">
              <h2>Weekday Services</h2>
              <div className="service-item">
                <h3>Wednesday Prayer Meeting</h3>
                <p className="service-time">7:00 PM</p>
                <p>Midweek gathering for prayer, Bible study, and spiritual encouragement.</p>
              </div>
              <div className="service-item">
                <h3>Friday Youth Fellowship</h3>
                <p className="service-time">6:00 PM</p>
                <p>Weekly youth gathering with games, worship, and biblical teaching.</p>
              </div>
            </div> */}


            <div className="schedule-card card">
              <h2>Community Programs</h2>
              <div className="service-item">
                <h3>Sunday School</h3>
                <p className="service-time">Every Sunday - 8:30 AM</p>
                <p>Weekly gathering for children to learn about the Bible.</p>
              </div>
              <div className="service-item">
                <h3>Youth Fellowship</h3>
                <p className="service-time">2nd and 4th Sundays - After the service</p>
                <p>Gathering for the youth to gather, pray, and study together.</p>
              </div>
              <div className="service-item">
                <h3>Women's Fellowship</h3>
                <p className="service-time">1st and 3rd Sundays - After the service</p>
                <p>Gathering for women to fellowship, pray, and study together.</p>
              </div>
              <div className="service-item">
                <h3>Senior Citizens Fellowship</h3>
                <p className="service-time">Every 1st Sunday - After the service</p>
                <p>Gathering for our senior members with fellowship and activities.</p>
              </div>
              <div className="service-item">
                <h3>Choir Practice</h3>
                <p className="service-time">Saturday - 6:00 PM</p>
                <p>Weekly choir rehearsal preparing music for Sunday worship.</p>
              </div>
              <div className="service-item">
                <h3>Prayer Meeting</h3>
                <p className="service-time">Saturday - 5:00 PM <strong>(Online and In-person)</strong></p>
                <p>Weekly choir rehearsal preparing music for Sunday worship.</p>
              </div>
            </div>
          </div>

          <div className="additional-info">
            <div className="info-card card">
              <h2>Important Information</h2>
              <ul>

                <li><strong>Contact:</strong> For questions about our services, call (555) 123-4567 or <Link to="/contact-us">click here.</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .schedules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .schedule-card h2 {
            color: #3D4A9E;
            border-bottom: 2px solid #3D4A9E;
            padding-bottom: 0.5rem;
            display: inline-block;
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }

        .content-section-title h2{
          color: #3D4A9E;
          border-bottom: 2px solid #3D4A9E;
          padding-bottom: 0.5rem;
          display: inline-block;
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
      }

        .service-item {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .service-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .service-item h3 {
          color: #2B2B2B;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }

        .service-time {
          color: #E1C26C;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .service-day {
          color: #2B2B2B;
          font-weight: 700;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .additional-info {
          max-width: 800px;
          margin: 0 auto;
        }

        .info-card h2 {
          color: #3D4A9E;
          margin-bottom: 1.5rem;
        }

        .info-card ul {
          list-style: none;
          padding: 0;
        }

        .info-card li {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .info-card li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #E1C26C;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .schedules-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Schedules