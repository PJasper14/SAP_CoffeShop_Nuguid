import React from 'react'
import { Coffee, Sparkles, Home as HomeIcon } from 'lucide-react'

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <h1 className="display-2 fw-bold mb-4 animate-fade-in">Welcome to Coffeeling Ka</h1>
                <p className="lead mb-5 fs-4">
                  Experience the finest coffee crafted with passion and precision. 
                  Every cup tells a story of quality and excellence.
                </p>
                <div className="hero-buttons">
                  <button 
                    className="btn btn-primary btn-lg me-3 px-5 py-3"
                    onClick={() => scrollToSection('menu')}
                  >
                    <i className="bi bi-cup-hot me-2"></i>View Menu
                  </button>
                  <button 
                    className="btn btn-outline-light btn-lg px-5 py-3"
                    onClick={() => scrollToSection('about')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Why Choose Us</h2>
            <p className="text-muted">Discover what makes Coffeeling Ka special</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card feature-card h-100 border-0 shadow-lg">
                <div className="feature-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop" 
                    alt="Organic Coffee Beans"
                    className="feature-image"
                  />
                </div>
                <div className="card-body text-center p-4">
                  <div className="feature-icon-badge mb-3">
                    <Coffee size={40} strokeWidth={2} />
                  </div>
                  <h3 className="card-title h4 mb-3">Organic Beans</h3>
                  <p className="card-text text-muted">
                    We source only the finest organic coffee beans from sustainable farms around the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card h-100 border-0 shadow-lg">
                <div className="feature-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1507915135761-41a0a222c709?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171" 
                    alt="Expert Barista"
                    className="feature-image"
                  />
                </div>
                <div className="card-body text-center p-4">
                  <div className="feature-icon-badge mb-3">
                    <Sparkles size={40} strokeWidth={2} />
                  </div>
                  <h3 className="card-title h4 mb-3">Expert Baristas</h3>
                  <p className="card-text text-muted">
                    Our skilled baristas craft each cup with precision, care, and years of experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card feature-card h-100 border-0 shadow-lg">
                <div className="feature-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop" 
                    alt="Cozy Cafe Interior"
                    className="feature-image"
                  />
                </div>
                <div className="card-body text-center p-4">
                  <div className="feature-icon-badge mb-3">
                    <HomeIcon size={40} strokeWidth={2} />
                  </div>
                  <h3 className="card-title h4 mb-3">Cozy Atmosphere</h3>
                  <p className="card-text text-muted">
                    Relax in our warm and welcoming coffee shop environment, perfect for work or relaxation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

