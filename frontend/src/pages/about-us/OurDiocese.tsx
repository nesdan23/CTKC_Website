import React from 'react'

const OurDiocese: React.FC = () => {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Our Diocese</h1>
          <p className="page-subtitle">Part of a larger community of faith</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>Christ the King Church is proud to be part of Karnataka Central Diocese, a vibrant community of churches working together to spread the Gospel and serve our communities. Our diocese provides support, guidance, and fellowship opportunities that strengthen our individual churches and collective mission.</p>
            <br />
            <p>The Karnataka Central Diocese is one of the 24 dioceses of the Church of South India (CSI), a united Protestant church that was formed in 1947 by the merger of several Anglican, Methodist, Presbyterian, Congregational and Reformed churches in South India. The diocese covers the central and northern regions of the state of Karnataka, with its headquarters in Bangalore. The diocese has about 150 congregations, 100 pastors, 50 evangelists and 15 institutions, serving a population of about 150,000 people.</p>
            <p>Karnataka Central diocese is divided into four regions for better administration.</p>
            <ul className="diocese-regions">
              <li>Bangalore Civil Area</li>
              <li>Bangalore City Area</li>
              <li>Tumkur Area</li>
              <li>KGF Area</li>
            </ul>
            <h2 className="content-section-title">Contact Details</h2>
            <p>Address: # 20, 3rd cross, Mission Compound, Bangalore – 560 027</p>
            <p>Email: contact@csikarnatakacentraldiocese.org</p>
            <p>Telephone: 080-2222 3766</p>
            <p>For more details about Karnataka Central Diocese: <a href="https://csikarnatakacentraldiocese.org/brief-history-karnataka-central-diocese" target='_blank'>click here</a></p>
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
        .diocese-regions {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0rem;
          font-weight: 700;
        }
          
      `}</style>
    </>
  )
}

export default OurDiocese