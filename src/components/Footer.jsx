import React from 'react'
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react'

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-4">
          {/* About Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-column">
              <h3 className="footer-title">
                Coffeeling Ka
              </h3>
              <p className="footer-text">
                Your destination for exceptional coffee experiences. We serve premium coffee 
                crafted with passion, precision, and a commitment to sustainability.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-column">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu') }}>
                    Our Menu
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery') }}>
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-column">
              <h4 className="footer-subtitle">Contact Info</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={16} />
                  <span>123 Coffee Street<br/>Brew City, BC 12345</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </li>
                <li>
                  <Mail size={16} />
                  <span>hello@coffeelingka.com</span>
                </li>
                <li>
                  <Clock size={16} />
                  <span>Mon-Fri: 7AM-8PM<br/>Sat-Sun: 8AM-9PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="footer-copyright mb-0">
                &copy; {new Date().getFullYear()} Coffeeling Ka. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-bottom-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="/terms-of-service">Terms of Service</a>
                <span className="separator">|</span>
                <a href="/cookies">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

