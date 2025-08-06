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
              <p>Our Sunday School program provides biblical education and fellowship opportunities for learners of all ages. Every Sunday at 9:00 AM, our church comes alive with the sound of learning, discussion, and growing faith as classes meet throughout our building.</p>
            </div>
            
            <div className="classes-grid">
              <div className="class-card card">
                <h3>Children's Classes (Ages 3-12)</h3>
                <p><strong>Time:</strong> 9:00 AM - 9:45 AM</p>
                <p><strong>Location:</strong> Children's Wing, Rooms 1-3</p>
                <p>Age-appropriate Bible stories, crafts, songs, and activities help young learners discover God's love in fun and engaging ways. Our experienced teachers create a safe, nurturing environment where children can ask questions and grow in their faith.</p>
                <ul>
                  <li>Preschool (Ages 3-5): Room 1</li>
                  <li>Elementary (Ages 6-8): Room 2</li>
                  <li>Intermediate (Ages 9-12): Room 3</li>
                </ul>
              </div>
              
              <div className="class-card card">
                <h3>Youth Class (Ages 13-18)</h3>
                <p><strong>Time:</strong> 9:00 AM - 9:45 AM</p>
                <p><strong>Location:</strong> Youth Room</p>
                <p>Our teen class addresses real-life issues through a biblical lens, encouraging open discussion and personal application. Topics include relationships, peer pressure, future planning, and developing a personal relationship with Christ.</p>
                <ul>
                  <li>Interactive discussions</li>
                  <li>Relevant biblical applications</li>
                  <li>Peer mentorship opportunities</li>
                  <li>Monthly service projects</li>
                </ul>
              </div>
              
              <div className="class-card card">
                <h3>Adult Classes</h3>
                <p><strong>Time:</strong> 9:00 AM - 9:45 AM</p>
                <p><strong>Location:</strong> Various Classrooms</p>
                <p>Multiple adult classes offer different teaching styles and topics to meet diverse learning preferences and life stages.</p>
                <ul>
                  <li><strong>New Members Class:</strong> Introduction to Grace Church and basic Christian beliefs</li>
                  <li><strong>Bible Study Class:</strong> In-depth study of scripture with discussion</li>
                  <li><strong>Life Application Class:</strong> Practical Christian living for everyday situations</li>
                  <li><strong>Senior Saints:</strong> Fellowship and study designed for our mature members</li>
                </ul>
              </div>
            </div>
            
            <div className="additional-info">
              <div className="info-card card">
                <h2>Getting Started</h2>
                <p>New to Sunday School? No problem! Simply arrive at 9:00 AM and stop by the welcome desk in the main lobby. Our friendly volunteers will help you find the right class for your age and interests.</p>
                
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