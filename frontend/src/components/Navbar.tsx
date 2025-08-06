import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="/public/Clogo.png" alt="Christ the King Church Logo" className="logo-image" />
                {/* <span className="anniversary">50th Anniversary</span> */}
              </Link>
            </div>
            
            <nav className="desktop-nav">
              <ul className="nav-list">
                <li><Link to="/" className={isActive('/') && location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                
                <li className="dropdown">
                  <Link to="/about-us" className={isActive('/about-us') ? 'active' : ''}>
                    About Us <span className="dropdown-icon">▼</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/about-us/our-church">Our Church</Link></li>
                    <li><Link to="/about-us/our-diocese">Our Diocese</Link></li>
                    <li><Link to="/about-us/our-presbyter-in-charge">Our Presbyter In-Charge</Link></li>
                    <li><Link to="/about-us/our-pastorate-committee">Our Pastorate Committee</Link></li>
                  </ul>
                </li>
                
                <li className="dropdown">
                  <Link to="/history" className={isActive('/history') ? 'active' : ''}>
                    History <span className="dropdown-icon">▼</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/history/our-church">Our Church</Link></li>
                    <li><Link to="/history/former-presbyters">Former Presbyters</Link></li>
                    <li><Link to="/history/former-secretaries">Former Secretaries</Link></li>
                    <li><Link to="/history/former-treasurers">Former Treasurers</Link></li>
                    <li><Link to="/history/former-pc-members">Former PC Members</Link></li>
                    <li><Link to="/history/former-sextons">Former Sextons</Link></li>
                  </ul>
                </li>
                
                <li className="dropdown">
                  <Link to="/community-groups" className={isActive('/community-groups') ? 'active' : ''}>
                    Community Groups <span className="dropdown-icon">▼</span>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/community-groups/sunday-school">Sunday School</Link></li>
                    <li><Link to="/community-groups/youth-fellowship">Youth Fellowship</Link></li>
                    <li><Link to="/community-groups/womens-fellowship">Women's Fellowship</Link></li>
                    <li><Link to="/community-groups/senior-citizens-fellowship">Senior Citizen's Fellowship</Link></li>
                    <li><Link to="/community-groups/choir">Choir</Link></li>
                  </ul>
                </li>
                
                <li><Link to="/schedules" className={isActive('/schedules') ? 'active' : ''}>Schedules</Link></li>
                <li><Link to="/news-and-events" className={isActive('/news-and-events') ? 'active' : ''}>News & Events</Link></li>
                <li><Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link></li>
                <li><Link to="/contact-us" className={isActive('/contact-us') ? 'active' : ''}>Contact Us</Link></li>
              </ul>
            </nav>
            
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        
        <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li>
              <button 
                className={`mobile-dropdown-toggle ${activeDropdown === 'about' ? 'active' : ''}`}
                onClick={() => toggleMobileDropdown('about')}
              >
                About Us
              </button>
              <ul className={`mobile-dropdown ${activeDropdown === 'about' ? 'active' : ''}`}>
                <li><Link to="/about-us/our-church" onClick={() => setMobileMenuOpen(false)}>Our Church</Link></li>
                <li><Link to="/about-us/our-diocese" onClick={() => setMobileMenuOpen(false)}>Our Diocese</Link></li>
                <li><Link to="/about-us/our-presbyter-in-charge" onClick={() => setMobileMenuOpen(false)}>Our Presbyter In-Charge</Link></li>
                <li><Link to="/about-us/our-pastorate-committee" onClick={() => setMobileMenuOpen(false)}>Our Pastorate Committee</Link></li>
              </ul>
            </li>
            <li>
              <button 
                className={`mobile-dropdown-toggle ${activeDropdown === 'history' ? 'active' : ''}`}
                onClick={() => toggleMobileDropdown('history')}
              >
                History
              </button>
              <ul className={`mobile-dropdown ${activeDropdown === 'history' ? 'active' : ''}`}>
                <li><Link to="/history/our-church" onClick={() => setMobileMenuOpen(false)}>Our Church</Link></li>
                <li><Link to="/history/former-presbyters" onClick={() => setMobileMenuOpen(false)}>Former Presbyters</Link></li>
                <li><Link to="/history/former-secretaries" onClick={() => setMobileMenuOpen(false)}>Former Secretaries</Link></li>
                <li><Link to="/history/former-treasurers" onClick={() => setMobileMenuOpen(false)}>Former Treasurers</Link></li>
                <li><Link to="/history/former-pc-members" onClick={() => setMobileMenuOpen(false)}>Former PC Members</Link></li>
                <li><Link to="/history/former-sextons" onClick={() => setMobileMenuOpen(false)}>Former Sextons</Link></li>
              </ul>
            </li>
            <li>
              <button 
                className={`mobile-dropdown-toggle ${activeDropdown === 'community' ? 'active' : ''}`}
                onClick={() => toggleMobileDropdown('community')}
              >
                Community Groups
              </button>
              <ul className={`mobile-dropdown ${activeDropdown === 'community' ? 'active' : ''}`}>
                <li><Link to="/community-groups/sunday-school" onClick={() => setMobileMenuOpen(false)}>Sunday School</Link></li>
                <li><Link to="/community-groups/youth-fellowship" onClick={() => setMobileMenuOpen(false)}>Youth Fellowship</Link></li>
                <li><Link to="/community-groups/womens-fellowship" onClick={() => setMobileMenuOpen(false)}>Women's Fellowship</Link></li>
                <li><Link to="/community-groups/senior-citizens-fellowship" onClick={() => setMobileMenuOpen(false)}>Senior Citizen's Fellowship</Link></li>
                <li><Link to="/community-groups/choir" onClick={() => setMobileMenuOpen(false)}>Choir</Link></li>
              </ul>
            </li>
            <li><Link to="/schedules" onClick={() => setMobileMenuOpen(false)}>Schedules</Link></li>
            <li><Link to="/news-and-events" onClick={() => setMobileMenuOpen(false)}>News & Events</Link></li>
            <li><Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <style>{`
        .navbar {
          background-color: #3D4A9E;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo a {
          display: flex;
          flex-direction: column;
          color: white;
          text-decoration: none;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .anniversary {
          font-size: 0.75rem;
          color: #E1C26C;
          font-weight: 500;
        }

        .desktop-nav {
          display: none;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-list a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-list a:hover,
        .nav-list a.active {
          color: #E1C26C;
        }

        .dropdown {
          position: relative;
        }

        .dropdown-icon {
          font-size: 0.75rem;
          margin-left: 0.25rem;
          transition: transform 0.3s ease;
        }

        .dropdown:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 250px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          padding: 0.5rem 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          list-style: none;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu a {
          color: #2B2B2B;
          padding: 0.75rem 1.5rem;
          display: block;
          border-bottom: 1px solid #f0f0f0;
        }

        .dropdown-menu a:hover {
          background-color: #f8f9fa;
          color: #3D4A9E;
        }

        .dropdown-menu li:last-child a {
          border-bottom: none;
        }

        .mobile-menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background-color: white;
          transition: all 0.3s ease;
        }

        .mobile-nav {
          display: none;
          background-color: #3D4A9E;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav.active {
          display: block;
        }

        .mobile-nav-list {
          list-style: none;
          padding: 1rem 0;
        }

        .mobile-nav-list > li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-list a,
        .mobile-dropdown-toggle {
          display: block;
          padding: 1rem;
          color: white;
          text-decoration: none;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          font-size: 1rem;
          cursor: pointer;
        }

        .mobile-dropdown-toggle:after {
          content: '▼';
          float: right;
          transition: transform 0.3s ease;
        }

        .mobile-dropdown-toggle.active:after {
          transform: rotate(180deg);
        }

        .mobile-dropdown {
          display: none;
          list-style: none;
          background-color: rgba(0, 0, 0, 0.1);
        }

        .mobile-dropdown.active {
          display: block;
        }

        .mobile-dropdown a {
          padding-left: 2rem;
          font-size: 0.9rem;
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: block;
          }
          
          .mobile-menu-toggle {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar