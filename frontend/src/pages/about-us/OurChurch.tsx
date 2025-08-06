import React from 'react'

const OurChurch: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Church</h1>
          <p className="page-subtitle">The heart and soul of Christ the King Church</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>CSI Christ the King Church is a warm and welcoming Tamil-speaking congregation with a rich spiritual heritage. Established on 15th August 1975, we have been a vibrant community of faith for over 50 years—rooted in the love of Christ and committed to worship, fellowship, and service.</p>
            
            <p>We are a medium-sized congregation of around 100 families, united in our mission to grow in Christ and serve with love. Our worship services include Holy Communion on the 2nd and 4th Sundays and Divine Worship on the 1st and 3rd Sundays of each month.</p>
            
            <p>Our church is blessed with active ministries, including:</p>
            <ul className="ministry-list">
              <li>Sunday School Ministry</li>
              <li>Women’s Fellowship</li>
              <li>Youth Fellowship</li>
              <li>Senior Citizens’ Fellowship</li>
              <li>Choir Ministry</li>
            </ul>
            <p>Through these communities, we seek to worship God faithfully, grow together spiritually, and serve others with compassion.</p>

            <p>The church is open daily from <strong>4:00 PM to 7:00 PM</strong> for personal prayer. All are welcome to walk in, find peace, and experience the divine presence. Many who come here in faith leave with hearts uplifted and prayers answered.</p>
            <p>Whether you are new to the area or searching for a church family, we warmly invite you to join us on this journey of faith in Christ.</p>
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
        
        .ministry-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0 2rem 0;
        }

        .ministry-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1.2rem;
          font-size: 1.08rem;
          color: #333;
          line-height: 1.6;
          background: none;
        }

        .ministry-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 8px;
          height: 8px;
          background: #E1C26C;
          border-radius: 50%;
          box-shadow: 0 0 0 2px #fff;
        }
      `}</style>
    </>
  )
}

export default OurChurch