import React from 'react'

const YouthFellowship: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Youth Fellowship</h1>
          <p className="page-subtitle">Building friendships and faith together</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>Our Youth Fellowship is a vibrant group of boys and girls (typically ages 15–35) who gather on 1st and 3rd Sundays after the morning service. They come together for praise & worship, share testimonies, conduct outreach programs and hear a meaningful message from one of our own or a guest believer. We guide them to pray for the needy, sick, missionaries and their work, our church, and for our youth spiritual life</p>

            <h2 className='content-section-title'>Main Focus</h2>
            <ul className='ministry-list'>
              <li><strong>Cultivate faith</strong> – Aim to draw youth into a deeper relationship with Jesus and integrate them into the wider church family.</li>
              <li><strong>Spiritual growth</strong> – Through regular worship, Bible study, prayer, and fellowship, they help young people mature in their faith and discover their gifts.</li>
              <li><strong>Unity in Christ</strong> – Promoting unity among youths from all backgrounds within the church.</li>
              <li><strong>Equip for service</strong> – They encourage spiritual leadership by providing opportunities for youth to lead worship, give messages, and serve during special services.</li>
            </ul>

            <h2 className='content-section-title'>Our Youth Fellowship Office bearers</h2>
            <ul className='ministry-list'>
              <li>Mr. Merwin Joel - Secretary</li>
              <li>Ms. Nadiya Isaccson - Treasurer</li>
            </ul>
            <div className="activities-grid">
              <div className="activity-card card">
                <h3>Weekly Gatherings</h3>
                <p>Each gathering includes worship, games, biblical teaching, and fellowship time. Our meetings are designed to be engaging, relevant, and fun while addressing real-life issues that young people face.</p>
              </div>
              
              <div className="activity-card card">
                <h3>Service Projects</h3>
                <p>Monthly community service opportunities help our youth put their faith into action. From food drives to community clean-up projects, we believe in making a positive impact.</p>
              </div>
              
              <div className="activity-card card">
                <h3>Special Events</h3>
                <p>Throughout the year, we organize retreats, camps, and other special activities that strengthen bonds and create lasting memories.</p>
              </div>
            </div>


            <h2 className='content-section-title'>Join Us</h2>
            <p>We warmly invite you to join us and discover the joy of walking with the Lord as part of our church’s next generation</p>
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

        .activities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .activity-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .activities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default YouthFellowship