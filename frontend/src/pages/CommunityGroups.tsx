import React from 'react'
import { Link } from 'react-router-dom'

const CommunityGroups: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Community Groups</h1>
          <p className="page-subtitle">Find your place in our church family</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="intro-section">
            <p>At Grace Church, we believe that meaningful relationships are essential for spiritual growth and community connection. Our various community groups provide opportunities for fellowship, learning, service, and support in a smaller, more intimate setting.</p>
          </div>
          
          <div className="groups-grid">
            <div className="group-card card">
              <h3>Sunday School</h3>
              <p className="group-time">Sundays at 9:00 AM</p>
              <p>Bible study and fellowship for all ages. We offer classes for children, youth, and adults, each designed to engage participants in meaningful discussion and spiritual growth.</p>
              <Link to="/community-groups/sunday-school" className="group-link">Learn More →</Link>
            </div>
            
            <div className="group-card card">
              <h3>Youth Fellowship</h3>
              <p className="group-time">Fridays at 6:00 PM</p>
              <p>A vibrant community for teenagers and young adults featuring games, worship, biblical teaching, and service projects. Building friendships and faith together.</p>
              <Link to="/community-groups/youth-fellowship" className="group-link">Learn More →</Link>
            </div>
            
            <div className="group-card card">
              <h3>Women's Fellowship</h3>
              <p className="group-time">2nd Saturday at 10:00 AM</p>
              <p>A monthly gathering for women to connect, pray, study scripture, and support one another through life's joys and challenges. All women are welcome.</p>
              <Link to="/community-groups/womens-fellowship" className="group-link">Learn More →</Link>
            </div>
            
            <div className="group-card card">
              <h3>Senior Citizens Fellowship</h3>
              <p className="group-time">3rd Thursday at 2:00 PM</p>
              <p>Monthly fellowship for our senior members featuring guest speakers, activities, fellowship meals, and opportunities to share wisdom and experiences.</p>
              <Link to="/community-groups/senior-citizens-fellowship" className="group-link">Learn More →</Link>
            </div>
            
            <div className="group-card card">
              <h3>Choir</h3>
              <p className="group-time">Saturdays at 4:00 PM</p>
              <p>Join our church choir and use your musical talents to enhance our worship services. No audition required - just a love for music and worship.</p>
              <Link to="/community-groups/choir" className="group-link">Learn More →</Link>
            </div>
            
            <div className="group-card card">
              <h3>Bible Study Groups</h3>
              <p className="group-time">Various Times</p>
              <p>Small group Bible studies meet throughout the week in homes and at the church. These intimate settings allow for deeper discussion and personal growth.</p>
              <Link to="/contact-us" className="group-link">Contact Us →</Link>
            </div>
          </div>
          
          <div className="join-section">
            <div className="join-card card">
              <h2>Ready to Get Involved?</h2>
              <p>We'd love to help you find the right community group for your interests and schedule. Whether you're new to faith or have been walking with Christ for years, there's a place for you in our church family.</p>
              <div className="join-buttons">
                <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
                <Link to="/schedules" className="btn btn-secondary">View All Schedules</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .intro-section {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .groups-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .group-card h3 {
          color: #3D4A9E;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }

        .group-time {
          color: #E1C26C;
          font-weight: 700;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .group-link {
          color: #3D4A9E;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-block;
          margin-top: 1rem;
        }

        .group-link:hover {
          color: #E1C26C;
        }

        .join-section {
          margin-top: 4rem;
        }

        .join-card {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .join-card h2 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        .join-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .groups-grid {
            grid-template-columns: 1fr;
          }
          
          .join-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .join-buttons .btn {
            min-width: 200px;
          }
        }
      `}</style>
    </>
  )
}

export default CommunityGroups