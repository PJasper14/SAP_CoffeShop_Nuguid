import React from 'react'
import { Leaf, Award, Users, Lightbulb } from 'lucide-react'

function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 fw-bold mb-4">About Coffeeling Ka</h1>
            <p className="lead">
              Your destination for exceptional coffee experiences since 2025
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-lg-6">
            <h2 className="mb-4 display-6 fw-bold">Our Story</h2>
            <p className="lead text-muted mb-3">
              Coffeeling Ka was born from a simple passion: to share the world's 
              finest coffee with our community. What started as a small dream 
              has grown into a beloved local gathering place.
            </p>
            <p className="text-muted">
              We believe that coffee is more than just a beverage—it's an experience, 
              a moment of peace, and a way to connect with others. Every cup we serve 
              is crafted with dedication to quality and sustainability.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop" 
                alt="Coffeeling Ka Interior"
                className="about-main-image img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12">
            <h2 className="mb-5 text-center display-6 fw-bold">Our Values</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="value-card p-4 h-100">
                  <div className="value-icon mb-3">
                    <Leaf size={48} strokeWidth={2} />
                  </div>
                  <h4 className="mb-3">Sustainability</h4>
                  <p className="text-muted mb-0">
                    We partner with farms that practice sustainable farming 
                    and fair trade principles, ensuring ethical sourcing.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="value-card p-4 h-100">
                  <div className="value-icon mb-3">
                    <Award size={48} strokeWidth={2} />
                  </div>
                  <h4 className="mb-3">Quality</h4>
                  <p className="text-muted mb-0">
                    From bean selection to brewing, we maintain the highest 
                    standards in everything we do to deliver excellence.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="value-card p-4 h-100">
                  <div className="value-icon mb-3">
                    <Users size={48} strokeWidth={2} />
                  </div>
                  <h4 className="mb-3">Community</h4>
                  <p className="text-muted mb-0">
                    We're more than a coffee shop—we're a gathering place for 
                    friends, families, and neighbors to connect.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="value-card p-4 h-100">
                  <div className="value-icon mb-3">
                    <Lightbulb size={48} strokeWidth={2} />
                  </div>
                  <h4 className="mb-3">Innovation</h4>
                  <p className="text-muted mb-0">
                    We continuously explore new brewing methods and flavors to 
                    delight our customers with unique experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

