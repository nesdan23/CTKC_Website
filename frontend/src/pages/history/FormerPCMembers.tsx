import React from 'react'

const FormerPCMembers: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Former PC Members</h1>
          <p className="page-subtitle">Leaders who have guided our church community</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>The Pastorate Committee members throughout our history have provided essential leadership and guidance to Grace Church. These dedicated volunteers have given their time, wisdom, and energy to help shape our church's direction and ensure its continued growth and effectiveness.</p>
            
            <div className="members-grid">
              <div className="member-card card">
                <h3>1974-1980 Committee</h3>
                <ul>
                  <li>[Name] - Chairperson</li>
                  <li>[Name] - Secretary</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                </ul>
              </div>
              
              <div className="member-card card">
                <h3>1980-1990 Committee</h3>
                <ul>
                  <li>[Name] - Chairperson</li>
                  <li>[Name] - Secretary</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                </ul>
              </div>
              
              <div className="member-card card">
                <h3>1990-2000 Committee</h3>
                <ul>
                  <li>[Name] - Chairperson</li>
                  <li>[Name] - Secretary</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                </ul>
              </div>
              
              <div className="member-card card">
                <h3>2000-2010 Committee</h3>
                <ul>
                  <li>[Name] - Chairperson</li>
                  <li>[Name] - Secretary</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                </ul>
              </div>
              
              <div className="member-card card">
                <h3>2010-2020 Committee</h3>
                <ul>
                  <li>[Name] - Chairperson</li>
                  <li>[Name] - Secretary</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                  <li>[Name] - Member</li>
                </ul>
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

        .members-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .member-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        .member-card ul {
          list-style: none;
          padding: 0;
        }

        .member-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid #eee;
        }

        .member-card li:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .members-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default FormerPCMembers