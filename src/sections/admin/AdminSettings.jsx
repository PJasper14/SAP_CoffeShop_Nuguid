import React, { useState } from 'react'
import { Save, Bell, Lock, Globe } from 'lucide-react'

function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'Coffeeling Ka',
    email: 'admin@coffeelingka.com',
    notifications: true,
    maintenance: false
  })

  const handleSave = () => {
    alert('Settings saved successfully!')
  }

  return (
    <div>
      <h2 className="mb-4 fw-bold">Settings</h2>

      <div className="row g-4">
        {/* General Settings */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4 d-flex align-items-center gap-2">
                <Globe size={20} />
                General Settings
              </h5>

              <div className="mb-3">
                <label className="form-label fw-bold">Site Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  value={settings.email}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                />
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="maintenance"
                  checked={settings.maintenance}
                  onChange={(e) => setSettings({ ...settings, maintenance: e.target.checked })}
                />
                <label className="form-check-label" htmlFor="maintenance">
                  Maintenance Mode
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="col-lg-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4 d-flex align-items-center gap-2">
                <Bell size={20} />
                Notifications
              </h5>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="notifications"
                  checked={settings.notifications}
                  onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                />
                <label className="form-check-label" htmlFor="notifications">
                  Email Notifications
                </label>
              </div>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="orderNotif"
                />
                <label className="form-check-label" htmlFor="orderNotif">
                  New Order Alerts
                </label>
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="stockNotif"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="stockNotif">
                  Low Stock Alerts
                </label>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4 d-flex align-items-center gap-2">
                <Lock size={20} />
                Security
              </h5>

              <button className="btn btn-outline-primary w-100 mb-2">
                Change Password
              </button>
              <button className="btn btn-outline-secondary w-100">
                Two-Factor Authentication
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-4">
        <button 
          className="btn btn-primary btn-lg d-flex align-items-center gap-2"
          onClick={handleSave}
        >
          <Save size={20} />
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default AdminSettings

