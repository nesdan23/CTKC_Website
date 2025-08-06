import React from 'react'

const NewsAndEvents: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>News & Events</h1>
          <p className="page-subtitle">Stay connected with what's happening at Grace Church</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              <div className="news-section">
                <h2>Latest News</h2>
                
                <article className="news-item card">
                  <div className="news-date">January 15, 2024</div>
                  <h3>50th Anniversary Celebration Planning</h3>
                  <p>We are excited to announce that planning is underway for our 50th Anniversary celebration! Join the planning committee meetings every second Sunday after service to help make this milestone celebration memorable.</p>
                  <a href="#" className="read-more">Read More →</a>
                </article>
                
                <article className="news-item card">
                  <div className="news-date">January 8, 2024</div>
                  <h3>New Bible Study Series Begins</h3>
                  <p>Starting this Wednesday, we'll begin a new Bible study series on "Walking in Faith." All are welcome to join us at 7:00 PM in the fellowship hall for this inspiring journey through scripture.</p>
                  <a href="#" className="read-more">Read More →</a>
                </article>
                
                <article className="news-item card">
                  <div className="news-date">January 1, 2024</div>
                  <h3>Youth Fellowship Fundraiser Success</h3>
                  <p>Thanks to everyone who supported our youth fellowship's fundraising dinner! We raised $2,500 for their upcoming mission trip. The youth are grateful for the community's generous support.</p>
                  <a href="#" className="read-more">Read More →</a>
                </article>
              </div>
            </div>
            
            <div className="sidebar">
              <div className="events-section card">
                <h2>Upcoming Events</h2>
                
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">FEB</span>
                    <span className="day">14</span>
                  </div>
                  <div className="event-details">
                    <h4>Valentine's Fellowship Dinner</h4>
                    <p>Join us for a special Valentine's dinner and fellowship.</p>
                    <span className="event-time">6:00 PM</span>
                  </div>
                </div>
                
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">FEB</span>
                    <span className="day">25</span>
                  </div>
                  <div className="event-details">
                    <h4>Community Service Day</h4>
                    <p>Volunteer opportunities in our local community.</p>
                    <span className="event-time">9:00 AM</span>
                  </div>
                </div>
                
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">MAR</span>
                    <span className="day">10</span>
                  </div>
                  <div className="event-details">
                    <h4>Women's Fellowship Retreat</h4>
                    <p>A day of prayer, fellowship, and spiritual growth.</p>
                    <span className="event-time">10:00 AM</span>
                  </div>
                </div>
                
                <div className="event-item">
                  <div className="event-date">
                    <span className="month">MAR</span>
                    <span className="day">31</span>
                  </div>
                  <div className="event-details">
                    <h4>Easter Sunday Service</h4>
                    <p>Special Easter celebration and worship service.</p>
                    <span className="event-time">10:00 AM</span>
                  </div>
                </div>
              </div>
              
              <div className="announcements card">
                <h3>Quick Announcements</h3>
                <ul>
                  <li>Church office will be closed on Monday, January 21st for MLK Day</li>
                  <li>New member orientation classes start February 4th</li>
                  <li>Choir practice moved to Saturdays at 4:00 PM</li>
                  <li>Food pantry needs donations of canned goods</li>
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

        .news-section h2,
        .events-section h2 {
          color: #3D4A9E;
          margin-bottom: 1.5rem;
        }

        .news-item {
          margin-bottom: 2rem;
        }

        .news-date {
          color: #E1C26C;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .news-item h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        .read-more {
          color: #3D4A9E;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .read-more:hover {
          color: #E1C26C;
        }

        .events-section {
          margin-bottom: 2rem;
        }

        .event-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eee;
        }

        .event-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .event-date {
          background: #3D4A9E;
          color: white;
          border-radius: 8px;
          padding: 0.5rem;
          text-align: center;
          min-width: 60px;
          height: fit-content;
        }

        .event-date .month {
          display: block;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .event-date .day {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .event-details h4 {
          color: #3D4A9E;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .event-details p {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .event-time {
          color: #E1C26C;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .announcements h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        .announcements ul {
          list-style: none;
          padding: 0;
        }

        .announcements li {
          margin-bottom: 0.75rem;
          padding-left: 1rem;
          position: relative;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .announcements li::before {
          content: '•';
          color: #E1C26C;
          position: absolute;
          left: 0;
          font-weight: bold;
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

export default NewsAndEvents