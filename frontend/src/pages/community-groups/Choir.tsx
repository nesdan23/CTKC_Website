import React from 'react'

const Choir: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Choir</h1>
          <p className="page-subtitle">Lifting voices in praise and worship</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>The Grace Church Choir is an integral part of our worship services, leading the congregation in praise and enhancing our spiritual experience through music. We welcome singers of all skill levels who have a heart for worship.</p>
            
            <h2>Rehearsals & Performances</h2>
            <p>Our choir rehearses every Saturday at 4:00 PM in the church sanctuary. We perform during Sunday morning worship services and special events throughout the year, including Christmas and Easter celebrations.</p>
            
            <h2>Musical Style</h2>
            <p>We perform a variety of musical styles including traditional hymns, contemporary Christian music, and classical sacred pieces. Our repertoire is chosen to complement our worship services and enhance the spiritual experience of our congregation.</p>
            
            <h2>No Audition Required</h2>
            <p>We believe that every voice is a gift from God. No audition is required to join our choir - just a love for music and a desire to serve God through song. Our choir director works with singers of all abilities to help them grow and contribute to our musical ministry.</p>
            
            <h2>Special Performances</h2>
            <div className="performances-grid">
              <div className="performance-card card">
                <h3>Christmas Concert</h3>
                <p>Annual Christmas presentation featuring traditional carols and contemporary Christmas music.</p>
              </div>
              
              <div className="performance-card card">
                <h3>Easter Cantata</h3>
                <p>Special Easter musical presentation celebrating the resurrection of Christ.</p>
              </div>
              
              <div className="performance-card card">
                <h3>Anniversary Celebration</h3>
                <p>Special musical presentations for church anniversary and milestone celebrations.</p>
              </div>
            </div>
            
            <h2>Join Our Musical Ministry</h2>
            <p>If you're interested in joining our choir, simply attend a Saturday rehearsal or speak with our choir director after Sunday service. We provide music and welcome new members throughout the year.</p>
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

        .performances-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .performance-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .performances-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Choir