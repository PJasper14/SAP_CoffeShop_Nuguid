import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Lock, User, AlertCircle, Coffee } from 'lucide-react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const success = login(username, password)
    
    if (success) {
      // Programmatic navigation - navigate to admin dashboard
      navigate('/admin', { replace: true })
    } else {
      setError('Invalid credentials. Try admin/admin123')
    }
  }

  return (
    <section className="login-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '3rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
            }}>
              {/* Logo/Header */}
              <div className="text-center mb-4">
                <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                  <Coffee size={40} color="#667eea" />
                  <h2 className="mb-0 fw-bold">Coffeeling Ka</h2>
                </div>
                <h4 className="text-muted">Admin Login</h4>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
                  <AlertCircle size={20} />
                  {error}
                </div>
              )}

              {/* Demo Credentials Info */}
              <div className="alert alert-info mb-4">
                <strong>Demo Credentials:</strong><br />
                Username: <code>admin</code><br />
                Password: <code>admin123</code>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label fw-bold">
                    <User size={16} className="me-2" />
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label fw-bold">
                    <Lock size={16} className="me-2" />
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 mb-3"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none'
                  }}
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="btn btn-outline-secondary w-100"
                >
                  Back to Home
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login

