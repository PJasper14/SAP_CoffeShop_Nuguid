import React from 'react'
import { Mail, Phone } from 'lucide-react'

function Customers() {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-0101', orders: 12, spent: '₱5,340' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '555-0102', orders: 8, spent: '₱3,720' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '555-0103', orders: 15, spent: '₱7,250' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '555-0104', orders: 6, spent: '₱2,890' }
  ]

  return (
    <div>
      <h2 className="mb-4 fw-bold">Customer Management</h2>

      <div className="row g-4">
        {customers.map((customer) => (
          <div key={customer.id} className="col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                    style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}
                  >
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="mb-0 fw-bold">{customer.name}</h5>
                    <small className="text-muted">Customer #{customer.id}</small>
                  </div>
                </div>

                <div className="mb-2">
                  <Mail size={16} className="me-2 text-muted" />
                  <small>{customer.email}</small>
                </div>
                <div className="mb-3">
                  <Phone size={16} className="me-2 text-muted" />
                  <small>{customer.phone}</small>
                </div>

                <div className="border-top pt-3 mt-3">
                  <div className="row text-center">
                    <div className="col-6">
                      <div className="fw-bold">{customer.orders}</div>
                      <small className="text-muted">Orders</small>
                    </div>
                    <div className="col-6">
                      <div className="fw-bold">{customer.spent}</div>
                      <small className="text-muted">Total Spent</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Customers

