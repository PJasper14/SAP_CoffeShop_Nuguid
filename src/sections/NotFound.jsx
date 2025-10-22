import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Coffee, AlertCircle } from 'lucide-react'

function NotFound() {
  return (
    <section className="not-found-section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div style={{ 
              background: 'white', 
              borderRadius: '20px', 
              padding: '3rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}>
              <div style={{ 
                fontSize: '120px', 
                fontWeight: 'bold', 
                color: '#667eea',
                lineHeight: '1',
                marginBottom: '1rem'
              }}>
                404
              </div>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <AlertCircle size={64} color="#764ba2" />
              </div>
              
              <h1 style={{ 
                fontSize: '2.5rem', 
                marginBottom: '1rem',
                color: '#333'
              }}>
                Oops! Page Not Found
              </h1>
              
              <p style={{ 
                fontSize: '1.2rem', 
                color: '#666',
                marginBottom: '2rem',
                maxWidth: '500px',
                margin: '0 auto 2rem'
              }}>
                We couldn't brew up the page you're looking for. 
                It might have been removed, renamed, or doesn't exist yet.
              </p>
              
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <Link 
                  to="/" 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontWeight: '600',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                  }}
                >
                  <Home size={20} />
                  Back to Home
                </Link>
                
                <a 
                  href="/#menu" 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    background: 'white',
                    color: '#667eea',
                    textDecoration: 'none',
                    borderRadius: '50px',
                    fontWeight: '600',
                    border: '2px solid #667eea',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#667eea'
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'white'
                    e.currentTarget.style.color = '#667eea'
                  }}
                >
                  <Coffee size={20} />
                  View Menu
                </a>
              </div>
              
              <div style={{ 
                marginTop: '2rem', 
                paddingTop: '2rem', 
                borderTop: '1px solid #eee' 
              }}>
                <p style={{ 
                  color: '#999', 
                  fontSize: '0.9rem',
                  margin: 0
                }}>
                  Error Code: 404 | Page Not Found
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound

