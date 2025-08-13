import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const presbyters = [
  { name: "Rev. S. Samuel", from: 1975, to: 1976 },
  { name: "Rev. Solomon Gnanaraj", from: 1976, to: 1980 },
  { name: "Rev. S. Samuel", from: 1980, to: 1981 },
  { name: "Rev. Jaypal Daniel", from: 1981, to: 1982 },
  { name: "Rev. Vincent Rajkumar", from: 1982, to: 1983 },
  { name: "Rev. Jaypal Daniel", from: 1983, to: 1984 },
  { name: "Rev. DGS Rodricks", from: 1983, to: 1984 },
  { name: "Rev. Henry", from: 1984, to: 1984 },
  { name: "Rev. Vincent Rajakumar", from: 1984, to: 1985 },
  { name: "Rev. Barnabas", from: 1984, to: 1985 },
  { name: "Rev. Henry", from: 1985, to: 1986 },
  { name: "Rev. J. Jacob", from: 1986, to: 1990 },
  { name: "Rev. Jayapal Chelliah", from: 1990, to: 1991 },
  { name: "Rev. DGS Rodricks", from: 1991, to: 1993 },
  { name: "Rev. David Rajan", from: 1993, to: 1997 },
  { name: "Rev. Joshua Inbakumar", from: 1997, to: 1999 },
  { name: "Rev. J. A. D. Selwyn", from: 1999, to: 2001 },
  { name: "Rev. Solomon Gnanaraj", from: 2001, to: 2005 },
  { name: "Rev. Robin Marshal", from: 2005, to: 2006 },
  { name: "Rev. D. M. Baskaran", from: 2005, to: 2006 },
  { name: "Rev. Mohanraj", from: 2006, to: 2008 },
  { name: "Rev. Jacob Ravinder", from: 2008, to: 2013 },
  { name: "Rev. Christy Rajakumar", from: 2013, to: 2021 },
  { name: "Rev. Robinson", from: 2015, to: 2016 },
  { name: "Rev. J. Jacob", from: 2018, to: 2020 },
  { name: "Rev. Christy Gnanadasan", from: 2021, to: 2021 },
  { name: "Rev. Justin Yesudas", from: 2021, to: 2022 },
  { name: "Rev. Princy Leoney", from: 2020, to: 2022 },
  { name: "Rev. Christopher Samuel", from: 2022, to: 2024 },
  { name: "Rev. Cyndrilla Martin", from: 2022, to: 2023 },
  { name: "Rev. Soniya", from: 2023, to: 2024 },
  { name: "Rev. Vedamary Jayanesan", from: 2024, to: 2025 },
  { name: "Rev. Christy Gananadasan", from: 2025, to: "present" },
]

const FormerPresbyters: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Former Presbyters & Deacons</h1>
          <p className="page-subtitle">Honoring those who have served our congregation since 1975</p>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="content-wrapper">
            <p>Throughout our 50-year history, Christ the King Church has been blessed with dedicated presbyters who have provided spiritual leadership and guidance to our congregation. We honor their service and the lasting impact they have made on our church community.</p>
            
          <div className="presbyters-list">
          {presbyters.map((pres, idx) => (
            <div
              className="presbyter-card card"
              key={pres.name + pres.from}
              data-aos="zoom-in"
              data-aos-delay={idx * 30}
            >
              <h3>{pres.name}</h3>
              <div className="tenure">
                {pres.from} {pres.to && <>- {pres.to}</>}
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </section>

      <style>{`
        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .presbyters-list {
          margin-top: 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .presbyter-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(61,74,158,0.07);
          padding: 1.5rem 1rem;
          text-align: center;
          transition: box-shadow 0.2s;
        }

        .presbyter-card:hover {
          box-shadow: 0 4px 16px rgba(61,74,158,0.13);
        }

        .presbyter-card h3 {
          color: #3D4A9E;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .tenure {
        margin-top: 0.5rem;
        font-size: 0.98rem;
        color: #b08d57;
        font-weight: 500;
        letter-spacing: 0.02em;
      }
      `}</style>
    </>
  )
}

export default FormerPresbyters