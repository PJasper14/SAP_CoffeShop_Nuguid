import React from 'react'
import { TrendingUp, DollarSign, ShoppingBag, Users } from 'lucide-react'

function Overview() {
  const stats = [
    { title: 'Total Revenue', value: '₱45,230', change: '+12.5%', icon: DollarSign, color: '#28a745' },
    { title: 'Orders Today', value: '34', change: '+8.2%', icon: ShoppingBag, color: '#007bff' },
    { title: 'Total Customers', value: '1,234', change: '+15.3%', icon: Users, color: '#6f42c1' },
    { title: 'Growth', value: '23.5%', change: '+5.2%', icon: TrendingUp, color: '#fd7e14' }
  ]

  return (
    <div>
      <h2 className="mb-4 fw-bold">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="row g-4 mb-5">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <p className="text-muted mb-1 small">{stat.title}</p>
                    <h3 className="mb-0 fw-bold">{stat.value}</h3>
                  </div>
                  <div 
                    className="p-3 rounded"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <stat.icon size={24} color={stat.color} />
                  </div>
                </div>
                <span className="badge bg-success">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title fw-bold mb-4">Recent Orders</h5>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD-001</td>
                  <td>John Doe</td>
                  <td>Cappuccino, Croissant</td>
                  <td>₱445</td>
                  <td><span className="badge bg-success">Completed</span></td>
                </tr>
                <tr>
                  <td>#ORD-002</td>
                  <td>Jane Smith</td>
                  <td>Latte, Muffin</td>
                  <td>₱475</td>
                  <td><span className="badge bg-warning">Pending</span></td>
                </tr>
                <tr>
                  <td>#ORD-003</td>
                  <td>Mike Johnson</td>
                  <td>Mocha Frappe</td>
                  <td>₱320</td>
                  <td><span className="badge bg-success">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview

