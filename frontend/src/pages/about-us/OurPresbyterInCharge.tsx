import React from 'react'

const OurPresbyterInCharge: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Presbyter In-Charge</h1>
          <p className="page-subtitle">Spiritual leadership and guidance</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="pastor-profile">
              <div className="pastor-info">
                <h2>Rev. [Pastor Name]</h2>
                <p className="pastor-title">Presbyter In-Charge</p>
                
                <p>Rev. Christy Gnanadasan has been serving as our Presbyter In-Charge since 2025, bringing [number] years of ministry experience to our congregation. His passionate preaching, compassionate pastoral care, and visionary leadership have been instrumental in our church's growth and spiritual development.</p>
                
                <h3>Education & Background</h3>
                <p>Rev. Christy Gnanadasan holds a [Degree] from [Seminary/University] and has served in ministry for [number] years. Prior to joining Grace Church, he/she served at [Previous Church/Organization].</p>
                
                <h3>Ministry Philosophy</h3>
                <p>"My calling is to shepherd God's people with love, teach His Word with clarity, and lead our congregation in worship and service. I believe in the power of community, the importance of discipleship, and the transformative love of Christ."</p>
                
                <h3>Personal Life</h3>
                <p>Rev. [Pastor Name] is married to [Spouse Name] and they have [number] children. In his/her free time, he/she enjoys [hobbies/interests].</p>
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

        .pastor-profile {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .pastor-info h2 {
          color: #3D4A9E;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .pastor-title {
          color: #E1C26C;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .pastor-info h3 {
          color: #3D4A9E;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}

export default OurPresbyterInCharge