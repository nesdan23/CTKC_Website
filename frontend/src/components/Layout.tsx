import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      
      <style>{`
        .page-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .main-content {
          flex: 1;
        }
      `}</style>
    </div>
  )
}

export default Layout