import React, { useState, useEffect } from 'react'
import { Coffee } from 'lucide-react'

function Header() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'contact', 'gallery']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header-section">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
            <Coffee size={24} className="me-2" style={{ display: 'inline-block', verticalAlign: 'middle' }} /> Coffeeling Ka
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollToSection('home') }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
                  href="#menu"
                  onClick={(e) => { e.preventDefault(); scrollToSection('menu') }}
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
                  href="#gallery"
                  onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link btn btn-outline-light ms-lg-2"
                  href="/login"
                  style={{ borderRadius: '20px', padding: '0.375rem 1rem' }}
                >
                  Admin Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

