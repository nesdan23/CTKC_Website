import React from 'react'

const SundaySchool: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Sunday School</h1>
          <p className="page-subtitle">Bible study and fellowship for all ages</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <div className="intro-section">
              <p>Our Sunday school ministry is committed to helping our children an early understanding of God's love for them through Jesus Christ, as well as their personal responsibility to Him.</p>
              <p>Our aim is to raise a generation of young people passionate about Jesus and follow Him as their Lord and Savior. We attempt to teach biblical truths and nurture children in how these truths can apply to their everyday life via interactive learning. This ministry serves children from ages 2 to 17.</p>
            </div>
            
            <div className="classes-grid">
              <div className="class-card card">
                <h3>Schedules</h3>
                <p><strong>Time:</strong> 8:30 AM onwards</p>
                <p><strong>Location:</strong> Sunday School Hall</p>
                <p>To meet the unique spiritual and learning needs of every age group, our Sunday school is organized into the following age-specific classes</p>
                <ul>
                  <li>Tiny Tots: 2 - 3 years</li>
                  <li>Beginners: 4 - 5 years</li>
                  <li>Primary: 6 - 8 years</li>
                  <li>Juniors: 9 - 11 years</li>
                  <li>Intermediates: 12 - 14 years</li>
                  <li>Seniors: 15 - 17 years</li>
                </ul>
              </div>
            </div>

            <h2 className='content-section-title'>Main Focus</h2>
            
            <p>We offer age-appropriate Bible lessons, hands-on activities, and creative crafts to help children learn about God and understand key biblical truths. Our primary goal is to nurture spiritual growth by teaching God’s Word in a way that encourages a lasting relationship with Jesus Christ.</p>
             <p>Our dedicated Sunday school teachers create opportunities for children to discover and express their God-given gifts through singing, storytelling, scripture memorization, drama, and more.</p>
              <p>In addition to biblical instruction, we emphasize the development of Christian character, building a sense of community, and encouraging children to live out their faith through practical and engaging experiences.</p>
              <p>Ultimately, our Sunday school exists to equip children with the spiritual foundation, values, and life skills they need to face challenges, positively impact the world around them, and continue growing in their walk with Christ.</p>
              
            <h2 className='content-section-title'>Our Teachers</h2>
            <div className="teachers-grid">
              <div className="teacher-card card">
                <h4>Mrs. Sudha Babu</h4>
                <p>Superintendent</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Rosy Samson</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Preethi James</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Prema Harish</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Jeba Jim</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Priya Moses</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Shiny Giftson</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Victoria Solomon</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Sheela Moban</h4>
                <p>Teacher</p>
              </div>
              <div className="teacher-card card">
                <h4>Mrs. Pearline Clara</h4>
                <p>Teacher</p>
              </div>
            </div>
            <div className="additional-info">
              <div className="info-card card">
                <h2>Getting Started</h2>
                <p>New to Sunday School? No problem! Simply arrive at 8:30 AM and stop by the Sunday School Hall. Our friendly volunteers will help you find the right class for your age and interests.</p>
                <h3>What to Expect</h3>
                <ul>
                  <li>Warm, welcoming atmosphere</li>
                  <li>Bible-based teaching and discussion</li>
                  <li>Opportunities to ask questions</li>
                  <li>Fellowship with other believers</li>
                  <li>Age-appropriate activities and materials</li>
                </ul>
                
                <h3>Teaching Opportunities</h3>
                <p>Interested in teaching or assisting with Sunday School? We're always looking for dedicated volunteers who have a heart for sharing God's word. Contact our Christian Education Director for more information about training and opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }

        .intro-section {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .classes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .class-card h3 {
          color: #3D4A9E;
          margin-bottom: 1rem;
          font-size: 1.4rem;
        }

        .class-card p {
          margin-bottom: 1rem;
        }

        .class-card ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .class-card li {
          margin-bottom: 0.5rem;
        }

        .additional-info {
          max-width: 800px;
          margin: 0 auto;
        }

        .info-card h2 {
          color: #3D4A9E;
          margin-bottom: 1rem;
        }

        .info-card h3 {
          color: #3D4A9E;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .info-card ul {
          padding-left: 1.5rem;
        }

        .info-card li {
          margin-bottom: 0.5rem;
        }

        .teachers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        .teacher-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(61,74,158,0.07);
          padding: 1.2rem 1rem;
          text-align: center;
          transition: box-shadow 0.2s;
        }
        .teacher-card h4 {
          margin: 0 0 0.5rem 0;
          color: #3D4A9E;
          font-size: 1.08rem;
          font-weight: 600;
        }
        .teacher-card p {
          margin: 0;
          color: #b08d57;
          font-size: 0.98rem;
          font-weight: 500;
          text-align: center;
        }

        @media (max-width: 768px) {
          .classes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default SundaySchool