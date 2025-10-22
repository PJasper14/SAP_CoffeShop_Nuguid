import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee')
  const navigate = useNavigate()

  // Helper function to convert name to URL-friendly ID
  const getItemId = (name) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  const menuItems = {
    coffee: [
      { name: 'Espresso', price: '₱195', description: 'Rich and bold single shot', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop' },
      { name: 'Americano', price: '₱225', description: 'Espresso with hot water', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop' },
      { name: 'Cappuccino', price: '₱250', description: 'Espresso with steamed milk and foam', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop' },
      { name: 'Latte', price: '₱265', description: 'Espresso with steamed milk', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300&h=200&fit=crop' },
      { name: 'Mocha', price: '₱280', description: 'Espresso, chocolate, and steamed milk', image: 'https://images.unsplash.com/photo-1618576230663-9714aecfb99a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' },
      { name: 'Caramel Macchiato', price: '₱295', description: 'Vanilla, espresso, milk, and caramel', image: 'https://images.unsplash.com/photo-1570517130750-10c67ffdde09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688' }
    ],
    coldBrew: [
      { name: 'Caramel Frappe', price: '₱310', description: 'Blended coffee with caramel swirl', image: 'https://www.thereciperebel.com/wp-content/uploads/2022/05/caramel-frappuccino-TRR-1200-26-of-26.jpg' },
      { name: 'Mocha Frappe', price: '₱320', description: 'Chocolate blended with coffee and ice', image: 'https://lemonsandzest.com/wp-content/uploads/2021/01/Mocha-Frappuccino-12.jpg' },
      { name: 'Vanilla Frappe', price: '₱295', description: 'Sweet vanilla with iced coffee blend', image: 'https://delightfulemade.com/wp-content/uploads/2022/07/Starbucks-Vanilla-Bean-Frappuccino-recipe-feat2.jpg' },
      { name: 'Java Chip Frappe', price: '₱335', description: 'Coffee blended with chocolate chips', image: 'https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Java-Chip-Frappuccino---Feb-2023.jpeg' },
      { name: 'Matcha Frappe', price: '₱310', description: 'Green tea blended with ice and milk', image: 'https://tse2.mm.bing.net/th/id/OIP.faPLWTVRXKS7iwOq6MseRQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3' },
      { name: 'Cookies & Cream Frappe', price: '₱350', description: 'Blended with crushed cookies', image: 'https://www.ibcsimply.com/wp-content/uploads/2021/03/Cookies_Cream_Frappe_3-scaled.jpg' }
    ],
    pastries: [
      { name: 'Croissant', price: '₱195', description: 'Buttery and flaky', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=200&fit=crop' },
      { name: 'Blueberry Muffin', price: '₱210', description: 'Fresh baked daily', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop' },
      { name: 'Chocolate Chip Cookie', price: '₱140', description: 'Warm and gooey', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop' },
      { name: 'Banana Bread', price: '₱225', description: 'Homemade recipe', image: 'https://www.simplyrecipes.com/thmb/MII1aVy2UVqyROO3d-XTwUxJ7Wo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-66837beab63c495292d89743c6767171.jpg' },
      { name: 'Cinnamon Roll', price: '₱240', description: 'Glazed with cream cheese frosting', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=300&h=200&fit=crop' },
      { name: 'Apple Danish', price: '₱210', description: 'Flaky pastry with apple filling', image: 'https://cdn.brandfolder.io/T9MH2EKS/at/p7xffnrqh96s2wt4kvv58w7/02405464_Filling_Apple_Supreme_Diced_3519-1200x1200-bd93c0f.jpg?format=jpg&quality=70' }
    ]
  }

  // Programmatic navigation function
  const handleItemClick = (item, category) => {
    const itemId = getItemId(item.name)
    navigate(`/menu/${category}/${itemId}`)
  }

  return (
    <section id="menu" className="menu-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Our Menu</h1>
          <p className="lead">Discover our carefully curated selection</p>
        </div>

        {/* Category Tabs */}
        <div className="menu-categories mb-5">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button 
              className={`btn ${activeCategory === 'coffee' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveCategory('coffee')}
            >
              Hot Coffee
            </button>
            <button 
              className={`btn ${activeCategory === 'coldBrew' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveCategory('coldBrew')}
            >
              Frappe
            </button>
            <button 
              className={`btn ${activeCategory === 'pastries' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setActiveCategory('pastries')}
            >
              Pastries
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="row g-4">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="card menu-card h-100 border-0 shadow"
                onClick={() => handleItemClick(item, activeCategory)}
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="menu-item-image-container">
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <div className="menu-item-overlay">
                    <span className="price-badge">{item.price}</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2">{item.name}</h5>
                  <p className="card-text text-muted small mb-0">{item.description}</p>
                  <div className="mt-2">
                    <small className="text-primary">Click to view details →</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu

