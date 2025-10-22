import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, ShoppingCart, Star, Coffee } from 'lucide-react'

function MenuItemDetail() {
  const { category, itemName } = useParams()
  const navigate = useNavigate()

  // All menu items data
  const allMenuItems = {
    coffee: [
      { id: 'espresso', name: 'Espresso', price: '₱195', description: 'Rich and bold single shot', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop', details: 'Our signature espresso is crafted from premium Arabica beans, roasted to perfection. A concentrated shot of pure coffee excellence.', rating: 4.8, reviews: 127 },
      { id: 'americano', name: 'Americano', price: '₱225', description: 'Espresso with hot water', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=200&fit=crop', details: 'Smooth and balanced, our Americano combines rich espresso with hot water for a classic coffee experience.', rating: 4.6, reviews: 95 },
      { id: 'cappuccino', name: 'Cappuccino', price: '₱250', description: 'Espresso with steamed milk and foam', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop', details: 'Perfectly balanced espresso, steamed milk, and velvety microfoam. A true Italian classic.', rating: 4.9, reviews: 203 },
      { id: 'latte', name: 'Latte', price: '₱265', description: 'Espresso with steamed milk', image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300&h=200&fit=crop', details: 'Creamy and smooth, our latte features a double shot of espresso topped with silky steamed milk.', rating: 4.7, reviews: 156 },
      { id: 'mocha', name: 'Mocha', price: '₱280', description: 'Espresso, chocolate, and steamed milk', image: 'https://images.unsplash.com/photo-1618576230663-9714aecfb99a?w=300&h=200&fit=crop', details: 'Indulgent combination of premium chocolate, rich espresso, and creamy steamed milk.', rating: 4.8, reviews: 178 },
      { id: 'caramel-macchiato', name: 'Caramel Macchiato', price: '₱295', description: 'Vanilla, espresso, milk, and caramel', image: 'https://images.unsplash.com/photo-1570517130750-10c67ffdde09?w=300&h=200&fit=crop', details: 'Layered perfection with vanilla syrup, steamed milk, espresso, and a caramel drizzle.', rating: 4.9, reviews: 234 }
    ],
    coldBrew: [
      { id: 'caramel-frappe', name: 'Caramel Frappe', price: '₱310', description: 'Blended coffee with caramel swirl', image: 'https://www.thereciperebel.com/wp-content/uploads/2022/05/caramel-frappuccino-TRR-1200-26-of-26.jpg', details: 'Refreshing blended coffee with smooth caramel swirls and topped with whipped cream.', rating: 4.7, reviews: 189 },
      { id: 'mocha-frappe', name: 'Mocha Frappe', price: '₱320', description: 'Chocolate blended with coffee and ice', image: 'https://lemonsandzest.com/wp-content/uploads/2021/01/Mocha-Frappuccino-12.jpg', details: 'Rich chocolate and coffee blended with ice for the ultimate frozen treat.', rating: 4.8, reviews: 167 },
      { id: 'vanilla-frappe', name: 'Vanilla Frappe', price: '₱295', description: 'Sweet vanilla with iced coffee blend', image: 'https://delightfulemade.com/wp-content/uploads/2022/07/Starbucks-Vanilla-Bean-Frappuccino-recipe-feat2.jpg', details: 'Smooth vanilla flavor blended with premium coffee and ice, topped with whipped cream.', rating: 4.6, reviews: 142 },
      { id: 'java-chip-frappe', name: 'Java Chip Frappe', price: '₱335', description: 'Coffee blended with chocolate chips', image: 'https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Java-Chip-Frappuccino---Feb-2023.jpeg', details: 'Coffee and chocolate chips blended to perfection with a chocolatey drizzle on top.', rating: 4.9, reviews: 221 },
      { id: 'matcha-frappe', name: 'Matcha Frappe', price: '₱310', description: 'Green tea blended with ice and milk', image: 'https://tse2.mm.bing.net/th/id/OIP.faPLWTVRXKS7iwOq6MseRQAAAA?rs=1&pid=ImgDetMain', details: 'Premium matcha green tea blended with milk and ice for a refreshing experience.', rating: 4.5, reviews: 98 },
      { id: 'cookies-cream-frappe', name: 'Cookies & Cream Frappe', price: '₱350', description: 'Blended with crushed cookies', image: 'https://www.ibcsimply.com/wp-content/uploads/2021/03/Cookies_Cream_Frappe_3-scaled.jpg', details: 'Decadent blend of crushed cookies, coffee, and cream. A cookies and cream lover\'s dream.', rating: 4.8, reviews: 187 }
    ],
    pastries: [
      { id: 'croissant', name: 'Croissant', price: '₱195', description: 'Buttery and flaky', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=300&h=200&fit=crop', details: 'Authentic French croissant, baked fresh daily with layers of buttery, flaky perfection.', rating: 4.7, reviews: 134 },
      { id: 'blueberry-muffin', name: 'Blueberry Muffin', price: '₱210', description: 'Fresh baked daily', image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300&h=200&fit=crop', details: 'Moist and fluffy muffin loaded with fresh blueberries and a hint of lemon zest.', rating: 4.6, reviews: 112 },
      { id: 'chocolate-chip-cookie', name: 'Chocolate Chip Cookie', price: '₱140', description: 'Warm and gooey', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300&h=200&fit=crop', details: 'Classic chocolate chip cookie with premium chocolate chunks. Soft, chewy, and irresistible.', rating: 4.9, reviews: 267 },
      { id: 'banana-bread', name: 'Banana Bread', price: '₱225', description: 'Homemade recipe', image: 'https://www.simplyrecipes.com/thmb/MII1aVy2UVqyROO3d-XTwUxJ7Wo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Banana-Bread-LEAD-2-66837beab63c495292d89743c6767171.jpg', details: 'Moist banana bread made from our secret family recipe with walnuts and a touch of cinnamon.', rating: 4.8, reviews: 156 },
      { id: 'cinnamon-roll', name: 'Cinnamon Roll', price: '₱240', description: 'Glazed with cream cheese frosting', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=300&h=200&fit=crop', details: 'Soft, warm cinnamon roll swirled with cinnamon sugar and topped with rich cream cheese frosting.', rating: 4.9, reviews: 198 },
      { id: 'apple-danish', name: 'Apple Danish', price: '₱210', description: 'Flaky pastry with apple filling', image: 'https://cdn.brandfolder.io/T9MH2EKS/at/p7xffnrqh96s2wt4kvv58w7/02405464_Filling_Apple_Supreme_Diced_3519-1200x1200-bd93c0f.jpg?format=jpg&quality=70', details: 'Light and flaky Danish pastry filled with sweet apple filling and a touch of vanilla glaze.', rating: 4.7, reviews: 123 }
    ]
  }

  // Find the specific item
  const categoryItems = allMenuItems[category] || []
  const item = categoryItems.find(i => i.id === itemName)

  // If item not found, show error
  if (!item) {
    return (
      <div className="container py-5" style={{ minHeight: '80vh' }}>
        <div className="text-center">
          <h2>Item not found</h2>
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-primary mt-3"
          >
            <ArrowLeft size={20} className="me-2" />
            Back to Menu
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="menu-item-detail py-5" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-outline-secondary mb-4"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={20} />
          Back to Menu
        </button>

        <div className="row g-5">
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img 
                src={item.image} 
                alt={item.name} 
                className="img-fluid rounded shadow-lg"
                style={{ width: '100%', height: '500px', objectFit: 'cover' }}
              />
              <div 
                className="position-absolute top-0 end-0 m-3 px-3 py-2 rounded"
                style={{ background: 'rgba(255,255,255,0.95)', fontWeight: 'bold', fontSize: '1.5rem' }}
              >
                {item.price}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-2 mb-2">
              <Coffee size={24} color="#6c757d" />
              <span className="text-muted text-uppercase" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                {category === 'coffee' ? 'Hot Coffee' : category === 'coldBrew' ? 'Frappe' : 'Pastries'}
              </span>
            </div>

            <h1 className="display-4 fw-bold mb-3">{item.name}</h1>

            {/* Rating */}
            <div className="d-flex align-items-center gap-2 mb-4">
              <div className="d-flex align-items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < Math.floor(item.rating) ? "#ffc107" : "none"}
                    color="#ffc107"
                  />
                ))}
              </div>
              <span className="fw-bold">{item.rating}</span>
              <span className="text-muted">({item.reviews} reviews)</span>
            </div>

            <p className="lead mb-3">{item.description}</p>
            <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              {item.details}
            </p>

            {/* Action Buttons */}
            <div className="d-flex gap-3 mb-5">
              <button 
                className="btn btn-primary btn-lg d-flex align-items-center gap-2"
                onClick={() => alert(`Added ${item.name} to cart! (Demo only)`)}
                style={{ flex: 1 }}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button 
                className="btn btn-outline-primary btn-lg"
                onClick={() => navigate('/#menu')}
              >
                View All Menu
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-top pt-4">
              <h5 className="fw-bold mb-3">Product Information</h5>
              <ul className="list-unstyled">
                <li className="mb-2">✓ Made with premium ingredients</li>
                <li className="mb-2">✓ Freshly prepared daily</li>
                <li className="mb-2">✓ Customization available</li>
                <li className="mb-2">✓ Available for dine-in and takeout</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-5 pt-5 border-top">
          <h3 className="fw-bold mb-4">More from this category</h3>
          <div className="row g-4">
            {categoryItems.filter(i => i.id !== itemName).slice(0, 3).map((relatedItem) => (
              <div key={relatedItem.id} className="col-md-4">
                <div 
                  className="card h-100 shadow-sm" 
                  style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                  onClick={() => navigate(`/menu/${category}/${relatedItem.id}`)}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <img 
                    src={relatedItem.image} 
                    alt={relatedItem.name} 
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{relatedItem.name}</h5>
                    <p className="card-text text-muted small">{relatedItem.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold text-primary">{relatedItem.price}</span>
                      <span className="text-muted small">View Details →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuItemDetail

