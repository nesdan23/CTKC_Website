import React from 'react'

const YouthFellowship: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Youth Fellowship</h1>
          <p className="page-subtitle">Building friendships and faith together</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>Our Youth Fellowship is a vibrant community for teenagers and young adults (ages 13-25) that meets every Friday at 6:00 PM. We create a safe, fun environment where young people can explore their faith, build lasting friendships, and develop leadership skills.</p>
            
            <h2>What We Do</h2>
            <div className="activities-grid">
              <div className="activity-card card">
                <h3>Weekly Gatherings</h3>
                <p>Every Friday evening includes worship, games, biblical teaching, and fellowship time. Our meetings are designed to be engaging, relevant, and fun while addressing real-life issues that young people face.</p>
              </div>
              
              <div className="activity-card card">
                <h3>Service Projects</h3>
                <p>Monthly community service opportunities help our youth put their faith into action. From food drives to community clean-up projects, we believe in making a positive impact.</p>
              </div>
              
              <div className="activity-card card">
                <h3>Special Events</h3>
                <p>Throughout the year, we organize retreats, camps, movie nights, and other special activities that strengthen bonds and create lasting memories.</p>
              </div>
            </div>
            
            <h2>Leadership Development</h2>
            <p>We believe in empowering our youth to become leaders. Older teens have opportunities to mentor younger members, lead activities, and participate in planning events. This helps develop confidence, responsibility, and leadership skills.</p>
            
            <h2>Join Us</h2>
            <p>All teenagers and young adults are welcome, regardless of their background or level of faith. Come as you are and discover a community that will support you, challenge you, and help you grow.</p>
          </div>
        </div>
      </section>

      <style>{`
        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .content-wrapper h2 {
          color: #3D4A9E;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .activity-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default YouthFellowship