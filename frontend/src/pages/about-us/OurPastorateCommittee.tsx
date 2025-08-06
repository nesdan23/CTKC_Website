import React from 'react'

const OurPastorateCommittee: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Pastorate Committee</h1>
          <p className="page-subtitle">Dedicated leaders serving our church community</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>The Pastorate Committee is an elected body in accordance with the guidelines of the CSI Constitution. The Presbyter-in-charge serves as the Chairperson, presiding over meetings and overseeing all church-related matters.</p>
            <p>This committee is responsible for the administration of the church, including financial management and key decision-making. It is composed of lay members from the congregation, representing a range of age groups and professional backgrounds.</p>
            <p>The committee meets regularly, usually on a monthly basis, to review and discuss church affairs. Minutes of each meeting are recorded and circulated to ensure transparency and accountability.</p>
            <p>Members of the Pastorate Committee are expected to practice faithful stewardship and handle church finances with integrity.</p>
            <p>The primary objective of the committee is to serve the congregation and ensure the smooth and effective functioning of the church.</p>

            <h2 className="content-section-title">Our Pastorate committee Members for the Triennium 2024- 2027</h2>
            <div className="committee-grid">
              <div className="committee-member card">
                <img src="/samplePortrait.jpg" alt="Rev. Christy Gnanadasan" className="committee-photo" />
                <h3>Rev. Christy Gnanadasan</h3>
                <p className="member-role">Presbyter In-Charge/Chairperson</p>
              </div>
              
              <div className="committee-member card">
                <h3>Mr. Paul Mohan</h3>
                <p className="member-role">Honarable Secretary</p>
              </div>
              
              <div className="committee-member card">
                <h3>Mr. D Ramesh</h3>
                <p className="member-role">Honarable Treasurer</p>
              </div>

              <div className="committee-member card">
                <h3>Mr. D Hebu</h3>
                <p className="member-role">Diocesan Council Member</p>
              </div>

              <div className="committee-member card">
                <h3>Mr. R Prabhu</h3>
                <p className="member-role">Diocesan Council Member - Substitute</p>
              </div>
              
              <div className="committee-member card">
                <h3>Mr. Daniel Sathiyaraj</h3>
                <p className="member-role">Steward</p>
              </div>

              <div className="committee-member card">
                <h3>Mrs. Ebenzer Augusta</h3>
                <p className="member-role">Member</p>
              </div>

              <div className="committee-member card">
                <h3>Mrs. Sumathi</h3>
                <p className="member-role">Area Council Member</p>
              </div>

              <div className="committee-member card">
                <h3>Mrs. Swarnalatha</h3>
                <p className="member-role">Area Council Member - Substitute</p>
              </div>

              <div className="committee-member card">
                <h3>Mr. Moses Jebakumar</h3>
                <p className="member-role">Youth's Representative</p>
              </div>

              <div className="committee-member card">
                <h3>Ms. Gracy Milchial</h3>
                <p className="member-role">Youth's Representative</p>
              </div>
            </div>

            <h2 className="content-section-title">Our Team Leaders</h2>
            <div className="team-leader-grid">
              <div className="team-leader card">
                <img src="/samplePortrait.jpg" alt="Rev. Christy Gnanadasan" className="team-leader-photo" />
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

        .committee-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .team-leader-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .committee-member h3 {
          color: #3D4A9E;
          margin-bottom: 0.5rem;
        }

        .committee-photo {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 1rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 2px 8px rgba(61, 74, 158, 0.08);
      }

      .team-leader-photo {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 1rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 2px 8px rgba(61, 74, 158, 0.08);
}
        .member-role {
          color: #E1C26C;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .committee-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default OurPastorateCommittee