import React from 'react'

const SeniorCitizensFellowship: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Senior Citizens Fellowship</h1>
          <p className="page-subtitle">Wisdom, fellowship, and continued growth</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>Our Church Senior Citizen Fellowships aim to provide a supportive environment for older adults in the church, allowing them to connect with one another, share life experiences, and grow in their faith. Our gatherings focus on building community and fostering spiritual growth.</p>
            <p>Our Senior Citizen Fellowships often include a variety of activities, such as Bible study and prayer, Fellowship meals and Special events like celebrating birth days, wedding days etc. Our senior citizens Fellowship gather on every 1st Sunday after the morning service.</p>

            <h2 className='content-section-title'>Main Focus</h2>
            <ul className='ministry-list'>
              <li><strong>Reduced isolation</strong> – Providing opportunities for social interaction and reducing feelings of loneliness.</li>
              <li><strong>Spiritual growth</strong> – Deepening their faith through Bible study, prayer, and other spiritual activities.</li>
              <li><strong>Community involvement</strong> – Encouraging continued engagement with the church and its activities.</li>
              <li><strong>Sense of purpose</strong> – Providing opportunities to share their knowledge and experience with others.</li>
              <li><strong>Living the Gospel</strong> – Being a living witness of the Gospel through both words and actions.</li>
            </ul>
            <h2 className='content-section-title'>Our Senior Citizens Fellowship Office bearers</h2>
            <ul className='ministry-list'>
              <li>Mr. Paul Mohan - Coordinator</li>
            </ul>
            <p>Each meeting features a time of fellowship, prayer, and often includes guest speakers, musical performances, or special presentations. We also enjoy sharing meals together and celebrating birthdays and special occasions.</p>
            
            <h2>Activities & Programs</h2>
            <div className="activities-grid">
              <div className="activity-card card">
                <h3>Guest Speakers</h3>
                <p>Monthly presentations on topics of interest including health and wellness, local history, travel experiences, and spiritual growth.</p>
              </div>
              
              <div className="activity-card card">
                <h3>Fellowship Meals</h3>
                <p>Shared meals that provide opportunities for conversation, laughter, and building deeper relationships within our church family.</p>
              </div>
              
              <div className="activity-card card">
                <h3>Outings & Trips</h3>
                <p>Organized trips to local attractions, restaurants, and places of interest, providing opportunities for adventure and fellowship.</p>
              </div>
              
              <div className="activity-card card">
                <h3>Service Opportunities</h3>
                <p>Ways to share wisdom and experience through mentoring, volunteering, and supporting church ministries.</p>
              </div>
            </div>
            
            <h2>Celebrating Life Experience</h2>
            <p>We believe that our senior members are treasures of wisdom and experience. Our fellowship provides opportunities to share stories, offer guidance to younger generations, and continue growing in faith and friendship.</p>

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
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

export default SeniorCitizensFellowship