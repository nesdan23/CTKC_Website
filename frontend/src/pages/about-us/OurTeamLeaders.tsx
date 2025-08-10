import React from 'react'

const OurTeamLeaders: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Team Leaders</h1>
          <p className="page-subtitle">Dedicated leaders of our church ministries</p>
        </div>
      </div>

        
      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>Our church ministries are guided by a team of devoted leaders who serve with vision, compassion, and faith. Each one plays a vital role in nurturing our community, inspiring service, and helping us grow together in Christ’s love.</p>
            <div className="team-leader-grid">
              <div className="team-leader card">
                <h3>Mrs. Sudha Babu</h3>
                <p className="member-role">Sunday School</p>
              </div>
              <div className="team-leader card">
                <h3>Mr. Merwin Joel</h3>
                <p className="member-role">Youth Fellowship</p>
              </div>
              <div className="team-leader card">
                <h3>Mrs. Usha Ramesh</h3>
                <p className="member-role">Women's Fellowship</p>
              </div>
              <div className="team-leader card">
                <h3>Mr. Paul Mohan</h3>
                <p className="member-role">Senior Citizen's Fellowship</p>
              </div>
              <div className="team-leader card">
                <h3>Dr. Evangelin Geetha</h3>
                <p className="member-role">Choir Team</p>
              </div>
              <div className="team-leader card">
                <h3>Mr. R Prabhu</h3>
                <p className="member-role">Media Team</p>
              </div>
              <div className="team-leader card">
                <h3>Mr. Ruthvik Daniel Rajan K R</h3>
                <p className="member-role">Media Team</p>
              </div>
              <div className="team-leader card">
                <h3>Mr. Nesan Daniel A</h3>
                <p className="member-role">Media Team</p>
              </div>
              <div className="team-leader card">
                <h3>Mr. Hebu</h3>
                <p className="member-role">Decoration Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }
        .content-wrapper h2 {
          color: #3D4A9E;
          margin-top: 3rem;
          margin-bottom: 1rem;
        }
        .team-leader-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        .team-leader.card h3 {
          color: #3D4A9E;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .team-leader p{
          margin: 0;
          color: #b08d57;
          font-size: 0.98rem;
          font-weight: 500;
          text-align: center;
        }
        .member-role {
          color: #E1C26C;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        @media (max-width: 768px) {
          .team-leader-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default OurTeamLeaders