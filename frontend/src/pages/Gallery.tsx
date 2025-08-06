import React from 'react'

const Gallery: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p className="page-subtitle">Moments of faith, fellowship, and celebration</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="gallery-intro">
            <p>Our gallery captures the beautiful moments that make up the life of Grace Church. From worship services and special events to community outreach and fellowship activities, these images tell the story of our church family over the years.</p>
          </div>
          
          <div className="gallery-categories">
            <div className="category-card card">
              <h2>Worship Services</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/8468103/pexels-photo-8468103.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Sunday morning worship service" />
                  <div className="gallery-overlay">
                    <p>Sunday Morning Worship</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/7434806/pexels-photo-7434806.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Choir performance" />
                  <div className="gallery-overlay">
                    <p>Choir Performance</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/8468164/pexels-photo-8468164.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Prayer gathering" />
                  <div className="gallery-overlay">
                    <p>Prayer Gathering</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-card card">
              <h2>Community Events</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Community meal" />
                  <div className="gallery-overlay">
                    <p>Community Fellowship Meal</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Youth activity" />
                  <div className="gallery-overlay">
                    <p>Youth Fellowship Activity</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/6995253/pexels-photo-6995253.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Community service" />
                  <div className="gallery-overlay">
                    <p>Community Service Project</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-card card">
              <h2>Special Celebrations</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/8468099/pexels-photo-8468099.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Christmas service" />
                  <div className="gallery-overlay">
                    <p>Christmas Service</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/8468105/pexels-photo-8468105.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Easter celebration" />
                  <div className="gallery-overlay">
                    <p>Easter Celebration</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/8034700/pexels-photo-8034700.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Anniversary celebration" />
                  <div className="gallery-overlay">
                    <p>Anniversary Celebration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="category-card card">
              <h2>Church Life</h2>
              <div className="gallery-grid">
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/7434844/pexels-photo-7434844.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Bible study group" />
                  <div className="gallery-overlay">
                    <p>Bible Study Group</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/8468016/pexels-photo-8468016.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Children's ministry" />
                  <div className="gallery-overlay">
                    <p>Children's Ministry</p>
                  </div>
                </div>
                <div className="gallery-item">
                  <img src="https://images.pexels.com/photos/8468181/pexels-photo-8468181.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2" alt="Fellowship gathering" />
                  <div className="gallery-overlay">
                    <p>Fellowship Gathering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .gallery-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .gallery-categories {
          display: grid;
          gap: 3rem;
        }

        .category-card h2 {
          color: #3D4A9E;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          color: white;
          padding: 2rem 1rem 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          transform: translateY(0);
        }

        .gallery-overlay p {
          margin: 0;
          font-weight: 600;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
          
          .gallery-categories {
            gap: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Gallery