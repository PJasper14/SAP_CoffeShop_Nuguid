import React from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'

function Products() {
  const products = [
    { id: 1, name: 'Espresso', category: 'Hot Coffee', price: '₱195', stock: 50 },
    { id: 2, name: 'Cappuccino', category: 'Hot Coffee', price: '₱250', stock: 45 },
    { id: 3, name: 'Caramel Frappe', category: 'Cold Brew', price: '₱310', stock: 30 },
    { id: 4, name: 'Croissant', category: 'Pastries', price: '₱195', stock: 25 },
    { id: 5, name: 'Mocha', category: 'Hot Coffee', price: '₱280', stock: 40 }
  ]

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Products Management</h2>
        <button className="btn btn-primary d-flex align-items-center gap-2">
          <Plus size={20} />
          Add New Product
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>#{product.id}</td>
                    <td className="fw-bold">{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>
                      <span className={`badge ${product.stock > 30 ? 'bg-success' : 'bg-warning'}`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        <Edit size={16} />
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

