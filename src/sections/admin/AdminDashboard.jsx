import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { LayoutDashboard, Package, Users, Settings, LogOut, Coffee } from 'lucide-react'

function AdminDashboard() {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/', { replace: true })
  }

  return (
    <div className="admin-dashboard" style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Sidebar */}
      <div 
        className="sidebar bg-dark text-white p-0" 
        style={{ 
          width: '250px', 
          minHeight: '100vh',
          position: 'fixed',
          left: 0,
          top: 0
        }}
      >
        <div className="p-4 border-bottom border-secondary">
          <div className="d-flex align-items-center gap-2">
            <Coffee size={32} />
            <div>
              <h5 className="mb-0">Coffeeling Ka</h5>
              <small className="text-muted">Admin Panel</small>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="mb-3 p-3 bg-secondary rounded">
            <small className="text-muted">Logged in as</small>
            <div className="fw-bold">{user?.username}</div>
          </div>

          <nav className="nav flex-column gap-2">
            <NavLink
              to="/admin"
              end
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-2 rounded ${isActive ? 'bg-primary' : ''}`
              }
              style={{ padding: '0.75rem 1rem' }}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>
            
            <NavLink
              to="/admin/products"
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-2 rounded ${isActive ? 'bg-primary' : ''}`
              }
              style={{ padding: '0.75rem 1rem' }}
            >
              <Package size={20} />
              Products
            </NavLink>
            
            <NavLink
              to="/admin/customers"
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-2 rounded ${isActive ? 'bg-primary' : ''}`
              }
              style={{ padding: '0.75rem 1rem' }}
            >
              <Users size={20} />
              Customers
            </NavLink>
            
            <NavLink
              to="/admin/settings"
              className={({ isActive }) => 
                `nav-link text-white d-flex align-items-center gap-2 rounded ${isActive ? 'bg-primary' : ''}`
              }
              style={{ padding: '0.75rem 1rem' }}
            >
              <Settings size={20} />
              Settings
            </NavLink>
          </nav>
        </div>

        <div className="p-3 position-absolute bottom-0 w-100" style={{ width: '250px' }}>
          <button
            onClick={handleLogout}
            className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center gap-2"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: '250px', flex: 1, backgroundColor: '#f8f9fa' }}>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

