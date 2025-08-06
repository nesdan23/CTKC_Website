import React from 'react'

const FormerTreasurers: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Former Treasurers</h1>
          <p className="page-subtitle">Faithful stewards of our church resources</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>The treasurers of Grace Church have been faithful stewards of our financial resources, ensuring transparency, accountability, and wise management of the funds entrusted to our care. Their dedication has enabled our church to grow and serve effectively.</p>
            
            <div className="treasurers-list">
              <div className="treasurer-card card">
                <h3>[Name] (1974-1988)</h3>
                <p>Our founding treasurer who established financial systems and procedures that provided a strong foundation for the church's fiscal management.</p>
              </div>
              
              <div className="treasurer-card card">
                <h3>[Name] (1988-2001)</h3>
                <p>Managed church finances during significant building projects and expansion, ensuring careful stewardship of resources during growth periods.</p>
              </div>
              
              <div className="treasurer-card card">
                <h3>[Name] (2001-2015)</h3>
                <p>Modernized our financial systems and reporting, implementing new technologies while maintaining the highest standards of accountability.</p>
              </div>
              
              <div className="treasurer-card card">
                <h3>[Name] (2015-2022)</h3>
                <p>Guided the church through challenging economic times with wisdom and careful planning, ensuring continued ministry effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .treasurers-list {
          margin-top: 2rem;
        }

        .treasurer-card {
          margin-bottom: 2rem;
        }

        .treasurer-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}

export default FormerTreasurers