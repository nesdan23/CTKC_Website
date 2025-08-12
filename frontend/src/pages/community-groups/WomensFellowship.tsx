import React from 'react'

const WomensFellowship: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Women's Fellowship</h1>
          <p className="page-subtitle">Connecting, growing, and supporting one another</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>Our Women’s Fellowship is a vital ministry within our diocese, aiming to unite, empower, and equip women for meaningful Christian witness. It offers a supportive platform for women to grow spiritually, nurturing the spiritual growth of families, children, and society, build lasting sisterhood, and engage in ministry and charitable service. They gather on the third Sunday of every month after the church service to share in fellowship and faith</p>
            
            <h2 className='content-section-title'>Main Focus</h2>
            <ul className='ministry-list'>
              <li><strong>Nurturing faith</strong> – Encouraging women to grow spiritually and live as devoted disciples of Christ.</li>
              <li><strong>Spiritual development</strong> – Organizing retreats, Bible studies and devotional gatherings to strengthen their faith.</li>
              <li><strong>Unity in Christ</strong> – Promoting unity among women from all backgrounds within the church.</li>
              <li><strong>Service and outreach</strong> – Participating in community outreach, charity work, and mission activities.</li>
              <li><strong>Living the Gospel</strong> – Being a living witness of the Gospel through both words and actions.</li>
            </ul>

            <h2 className='content-section-title'>Our Women Fellowship Office bearers</h2>
            <ul className='ministry-list'>
              <li>Mrs. Rainka Christy - President</li>
              <li>Mrs. Usha Ramesh - Secretary</li>
              <li>Mrs. Beryl Richard - Treasurer</li>
              <li>Mrs. Anasuya - Member</li>
              <li>Mrs. Preethi - Member</li>
            </ul>

            <h2>Our Gatherings</h2>
            <p>Each meeting includes prayer, Bible study, fellowship time, and often features guest speakers or special activities. We create an atmosphere where women can share their experiences, seek guidance, and build meaningful relationships.</p>
            
            <h2>Activities & Programs</h2>
            <div className="programs-grid">
              <div className="program-card card">
                <h3>Bible Study</h3>
                <p>Monthly studies of biblical women, Christian living topics, and current issues from a faith perspective.</p>
              </div>
              
              <div className="program-card card">
                <h3>Prayer Ministry</h3>
                <p>Dedicated time for prayer requests, intercession, and supporting one another through challenges and celebrations.</p>
              </div>
              
              <div className="program-card card">
                <h3>Service Projects</h3>
                <p>Community outreach including care packages, meal preparation for families in need, and support for local charities.</p>
              </div>
              
              <div className="program-card card">
                <h3>Special Events</h3>
                <p>Annual retreat, holiday celebrations, and special guest speakers on topics relevant to women's lives and faith.</p>
              </div>
            </div>
            
            <h2>All Women Welcome</h2>
            <p>Whether you're a new mother, working professional, or retiree, you'll find a place in our fellowship. We celebrate the diversity of women's experiences and believe that each person brings unique gifts and perspectives to our community.</p>
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

        .programs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .program-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .programs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default WomensFellowship