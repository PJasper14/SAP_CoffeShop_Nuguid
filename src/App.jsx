import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './sections/Home'
import About from './sections/About'
import Menu from './sections/Menu'
import Contact from './sections/Contact'
import Gallery from './sections/Gallery'
import NotFound from './sections/NotFound'
import MenuItemDetail from './sections/MenuItemDetail'
import Login from './sections/Login'
import AdminDashboard from './sections/admin/AdminDashboard'
import Overview from './sections/admin/Overview'
import Products from './sections/admin/Products'
import Customers from './sections/admin/Customers'
import AdminSettings from './sections/admin/AdminSettings'

function MainContent() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Menu />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<MainContent />} />
          
          {/* Dynamic Route - Menu Item Detail */}
          <Route path="/menu/:category/:itemName" element={<MenuItemDetail />} />
          
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected Admin Routes with Nested Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            {/* Nested Routes inside Admin Dashboard */}
            <Route index element={<Overview />} />
            <Route path="products" element={<Products />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
          
          {/* 404 Not Found - Catch all routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

