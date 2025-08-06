import React from 'react'

const FormerSextons: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Former Sextons</h1>
          <p className="page-subtitle">Caretakers who have maintained our sacred space</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>The sextons of Grace Church have been the faithful caretakers of our physical facilities, ensuring that our church building and grounds are maintained as a welcoming and sacred space for worship and fellowship. Their behind-the-scenes work has been essential to our church's ministry.</p>
            
            <div className="sextons-list">
              <div className="sexton-card card">
                <h3>[Name] (1974-1985)</h3>
                <p>Our first sexton who established maintenance routines and took pride in keeping our new church building in excellent condition during our early years.</p>
              </div>
              
              <div className="sexton-card card">
                <h3>[Name] (1985-1998)</h3>
                <p>Maintained our facilities through periods of expansion and renovation, adapting to new spaces and equipment with skill and dedication.</p>
              </div>
              
              <div className="sexton-card card">
                <h3>[Name] (1998-2012)</h3>
                <p>Known for attention to detail and going above and beyond in caring for our church property, creating a welcoming environment for all who entered.</p>
              </div>
              
              <div className="sexton-card card">
                <h3>[Name] (2012-2023)</h3>
                <p>Modernized our maintenance practices and energy efficiency while preserving the beauty and functionality of our church facilities.</p>
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

        .sextons-list {
          margin-top: 2rem;
        }

        .sexton-card {
          margin-bottom: 2rem;
        }

        .sexton-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}

export default FormerSextons