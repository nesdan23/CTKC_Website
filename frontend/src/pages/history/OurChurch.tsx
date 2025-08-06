import React from 'react'

const OurChurch: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Church History</h1>
          <p className="page-subtitle">The story of Christ the King Church through the decades</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">

            <h2 className="content-section-title">The Early Years</h2>
            <p>CSI Christ the King Church, Jalahalli, has a rich and inspiring history rooted in faith, perseverance, and community spirit. Originally known as CSI Tamil Church, its journey began on 15th August 1975 with a small group of 30 families gathering for worship in a classroom within the Bharat Electronics Limited (BEL) premises.</p>
            <p>Recognizing the growing spiritual needs of the congregation, the Church was formally accredited as a Pastorate in February 1976 under the leadership of Bishop Rt. Rev. K.E. Gill, with regular Sunday services continuing faithfully.</p>
            
            <h2 className="content-section-title">Growth and Infrastructure</h2>
            <p>To establish a permanent place of worship, two plots of land were purchased in Jalahalli—one in 1977 (measuring 50 ft x 120 ft) and another in 1980 (34 ft x 47 ft). After years of prayerful planning and dedicated efforts by <strong>Rev. Jayapal Daniel</strong>, a modest church building (28 ft x 40 ft) was constructed and dedicated on 21st August 1983 by <strong>Bishop Rt. Rev. Dr. C.D. Jathanna.</strong></p>
            <p>In a significant milestone, the church was renamed CSI Christ the King Church on 15th August 1989, with a steadily growing congregation of 55 families. Over the years, the church witnessed continued expansion and development:</p>
            
            <ul className="milestone-list">
              <li>On 6th September 1991, a third plot of land (measuring 30 ft x 40 ft), located in front of the church, was purchased through the dedicated efforts of the Pastorate Committee.</li>
              <li>Recognizing the need for a more spacious sanctuary, the altar was enlarged and the renovated structure was re-dedicated on 18th December 1994 by Bishop Rt. Rev. W.V. Karl.</li>
              <li>A Sunday School Hall was constructed with the support of the Diocese and was dedicated on 13th December 1998 by Bishop Rt. Rev. Dr. Vasanta Kumar.</li>
              <li>Further additions, including a Bell Tower, Office Room, and Youth Fellowship Room, were completed and dedicated by Mr. King Das, Diocesan Treasurer, on 18th May 2003.</li>
            </ul>

            <h2 className="content-section-title">Rebuilding for the Future</h2>
            <p>As the original structure, made with mud walls and asbestos roofing, began to deteriorate, it became clear that renovation was no longer viable. The Pastorate Committee, under the visionary leadership of <strong>Rev. Christy Raja Kumar</strong>, resolved to construct a new building.</p>
            <p>The old church was demolished, and on 1st November 2017, the foundation stone for the new church was laid by Bishop Rt. Rev. Dr. P.K. Samuel. In just eight months, a beautiful and modern church building was completed, featuring enhanced facilities to serve the growing congregation. The new structure was dedicated on 29th July 2018, again by <strong>Bishop Dr. P.K. Samuel.</strong></p>
            <p>The new church is fully equipped with all the essential facilities expected of a modern place of worship, including:</p>
            <ul className="milestone-list">
              <li>A powerful audio system for clear sound during services</li>
              <li>Projector for displaying hymns, scripture, and multimedia presentations</li>
              <li>Camera system to support live streaming and recordings</li>
              <li>High-quality lighting for a well-illuminated worship environment</li> 
              <li>Adequate number of CCTV cameras for enhanced security</li>
              <li>3KV power backup to ensure uninterrupted services</li>
              <li>Sufficient benches to comfortably seat the congregation</li>
              <li>Dedicated choir benches to support organized worship</li>
              <li>A Sunday School hall for children's spiritual education</li>
              <li>A sexton house to accommodate the caretaker</li>
            </ul>
            <h2 className="content-section-title">A Living Beacon of Faith</h2>
            <p>Today, CSI Christ the King Church stands as a vibrant beacon of God’s love and grace in Jalahalli, with a thriving congregation of over 100 families. The Church continues to serve not only its members but also the larger community, offering a sacred space for worship, fellowship, and blessings.</p>
            <p>With a foundation built on faith, the Church looks to the future with hope, ever committed to its mission of glorifying God and serving His people.</p>
            
          </div>
        </div>
      </section>

      <style>{`
        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
          text-align: justify;
        }

        .content-wrapper h2 {
          color: #3D4A9E;
          margin-top: 3rem;
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .content-wrapper h2:first-of-type {
          margin-top: 2rem;
        }

        .milestone-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0 2rem 0;
        }

        .milestone-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 1.2rem;
          font-size: 1.08rem;
          color: #333;
          line-height: 1.6;
          background: none;
        }

        .milestone-list li::before {
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