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
            <p>Our Church Choir has been formed in March 2013 with the support and guidance of <strong>Mr. Job Jesudian</strong>, Director of Shepherd’s symphony and dedicated by <strong>Rev. Jacob Ravindran</strong>. Our Choir plays a vital role in leading the congregation in worship and enriching the spiritual life of the church through music.</p>
            <p>Rooted in the tradition of the Church of South India, our choir is dedicated to offering heartfelt praise to God through hymns, Lyrics, and special songs during Sunday services and special occasions.</p>

            <h2 className='content-section-title'>Main Focus</h2>
            <ul className='ministry-list'>
              <li><strong>Leading Worship Music</strong> - Support the congregation in singing hymns, gospel songs and liturgical music during church service.</li>
              <li><strong>Music Selection and Planning</strong> - Choosing appropriate songs aligned with the liturgical calendar and sermon theme.</li>
              <li><strong>Rehearsals</strong> - Regular choir rehearsals to learn new songs and prepare for services.</li>
              <li><strong>Preserve Tradition</strong> - Uphold the rich musical heritage of the CSI Church while embracing new expressions of worship.</li>
              <li><strong>Glorify God</strong> - Use their voices and talents to honor and glorify God.</li>
              <li><strong>Nurturing the Fellowship</strong> - Build unity and fellowship among members through music.</li>
            </ul> 

            <h2 className="content-section-title">Our Choir Members</h2>
            <div className="choir-grid">
              <div className="choir-card card">
                <h4>Dr. Evangelin Vincilin</h4>
                <p>In-Charge</p>
              </div>
              <div className="choir-card card">
                <h4>Mr. Merwin Joel</h4>
                <p>Organist</p>
              </div>
              <div className="choir-card card">
                <h4>Mr. Nesan Daniel</h4>
                <p>Associate Organist</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Augusta Arul</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Gnana Jeeva Hebu</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Ms. Gracy Milchial</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Irene George</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Irene Jebin</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Ms. Jemimah</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Jessie John</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Lizzy Paul</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mr. Melwyn John</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Merlin Wilson</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mr. Ponraj</h4>
                <p>Member</p>
              </div>
              <div className="choir-card card">
                <h4>Mrs. Usha Ramesh</h4>
                <p>Member</p>
              </div>
            </div>
            <h2>Rehearsals & Performances</h2>
            <p>Our choir rehearses every Saturday at 6:00 PM in the church sanctuary. We perform during Sunday morning worship services and special events throughout the year, including Christmas and Easter celebrations.</p>
            
            <h2>Musical Style</h2>
            <p>We perform a variety of musical styles including traditional hymns, contemporary Christian music, and classical sacred pieces. Our repertoire is chosen to complement our worship services and enhance the spiritual experience of our congregation.</p>
            
            <h2>No Audition Required</h2>
            <p>We believe that every voice is a gift from God. No audition is required to join our choir - just a love for music and a desire to serve God through song. Our choir in-charge works with singers of all abilities to help them grow and contribute to our musical ministry.</p>
            
            <h2>Special Performances</h2>
            <div className="performances-grid">
              <div className="performance-card card">
                <h3>Choir Sunday</h3>
                <p>Special musical presentation celebrating the gift of music in worship.</p>
              </div>
              
              <div className="performance-card card">
                <h3>Anniversary Celebration</h3>
                <p>Special musical presentations for church anniversary and milestone celebrations.</p>
              </div>
            </div>
          
            <p>If you're interested in joining our choir, simply attend a Saturday rehearsal or speak with our choir in-charge after Sunday service. We provide music and welcome new members throughout the year.</p>
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

        .choir-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;

        }
        .choir-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(61,74,158,0.07);
          padding: 1.2rem 1rem;
          text-align: center;
          transition: box-shadow 0.2s;
        }
        .choir-card h4 {
          margin: 0 0 0.5rem 0;
          color: #3D4A9E;
          font-size: 1.08rem;
          font-weight: 600;
        }
        .choir-card p {
          margin: 0;
          color: #b08d57;
          font-size: 0.98rem;
          font-weight: 500;
          text-align: center;
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