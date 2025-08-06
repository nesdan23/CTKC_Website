import React from 'react'

const FormerSecretaries: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Former Secretaries</h1>
          <p className="page-subtitle">Recognizing dedicated administrative service</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>The secretaries of Grace Church have played a vital role in maintaining our church records, supporting our pastoral staff, and ensuring smooth operations throughout our 50-year history. We gratefully acknowledge their faithful service.</p>
            
            <div className="secretaries-list">
              <div className="secretary-card card">
                <h3>[Name] (1974-1982)</h3>
                <p>Our first church secretary who established many of the administrative systems and procedures that continue to serve us today.</p>
              </div>
              
              <div className="secretary-card card">
                <h3>[Name] (1982-1995)</h3>
                <p>Served during a period of significant growth, managing increased correspondence and member records with dedication and care.</p>
              </div>
              
              <div className="secretary-card card">
                <h3>[Name] (1995-2008)</h3>
                <p>Modernized our record-keeping systems and helped transition the church into the digital age while maintaining personal touch in communications.</p>
              </div>
              
              <div className="secretary-card card">
                <h3>[Name] (2008-2020)</h3>
                <p>Provided exceptional administrative support and became a beloved member of our church family through years of faithful service.</p>
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

        .secretaries-list {
          margin-top: 2rem;
        }

        .secretary-card {
          margin-bottom: 2rem;
        }

        .secretary-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}

export default FormerSecretaries