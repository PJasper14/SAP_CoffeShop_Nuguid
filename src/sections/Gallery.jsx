import React from 'react'

function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Fresh Espresso', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop', description: 'Perfect shot every time' },
    { id: 2, title: 'Latte Art', image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=400&h=300&fit=crop', description: 'Beautiful designs in every cup' },
    { id: 3, title: 'Coffee Beans', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop', description: 'Premium quality beans' },
    { id: 4, title: 'Cozy Interior', image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop', description: 'Warm and inviting space' },
    { id: 5, title: 'Fresh Pastries', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop', description: 'Baked fresh daily' },
    { id: 6, title: 'Barista at Work', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop', description: 'Crafting your perfect drink' },
    { id: 7, title: 'Cold Brew', image: 'https://fedandfit.com/wp-content/uploads/2020/05/cold-brew-coffee-3.png', description: 'Smooth and refreshing' },
    { id: 8, title: 'Coffee Plants', image: 'https://cdn11.bigcommerce.com/s-2drwt2az/images/stencil/1000x1000/products/25099/70042/apinzygs9__66831.1592322808.jpg?c=2', description: 'Sustainably sourced' },
    { id: 9, title: 'Café Ambiance', image: 'https://static.vecteezy.com/system/resources/previews/030/594/958/large_2x/ai-generative-image-of-cozy-ambience-of-cafe-free-photo.jpg', description: 'Perfect atmosphere' }
  ]

  return (
    <section id="gallery" className="gallery-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Gallery</h1>
          <p className="lead">A visual journey through Coffeeling Ka</p>
        </div>

        <div className="row g-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="card gallery-card h-100 border-0 shadow-sm">
                <div className="gallery-image-wrapper">
                  <img src={item.image} alt={item.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <h5 className="text-white mb-2">{item.title}</h5>
                      <p className="text-white-50 small mb-0">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-3">
                  <h5 className="card-title h6 mb-1">{item.title}</h5>
                  <p className="card-text text-muted small mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="cta-card p-5">
            <h2 className="display-6 fw-bold mb-3">Visit Us Today!</h2>
            <p className="lead mb-4">
              Come experience the magic of Coffeeling Ka in person. 
            </p>
            <button 
              className="btn btn-lg btn-cta px-5 py-3"
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery

