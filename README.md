# Coffee Haven - Single Page Application

A beautiful and functional Coffee Shop website built with React for the ITP110 Midterm Laboratory 2.

## 🎯 Objectives Completed

✅ Build a Single Page Application (SPA) using React  
✅ Navigate between sections without reloading the browser  
✅ Implement smooth scrolling to different sections  
✅ Create interactive components with state management  

## 📋 Features

- **5 Main Sections:**
  - 🏠 **Home** - Welcome page with hero section and features showcase
  - ℹ️ **About** - Company story and core values
  - 📋 **Menu** - Interactive menu with category tabs (Hot Coffee, Cold Brew, Pastries)
  - 📧 **Contact** - Functional contact form with business information
  - 🖼️ **Gallery** - Visual showcase of the coffee shop

- **Additional Features:**
  - Responsive Header component with smooth scroll navigation
  - Comprehensive Footer with social links, newsletter, and quick links
  - Active section highlighting as you scroll
  - Programmatic scrolling using buttons
  - Dynamic menu filtering with category tabs
  - Interactive contact form with validation
  - Newsletter subscription in footer
  - Bootstrap styling with custom CSS
  - Fully mobile-responsive design
  - Smooth scroll animations
  - Single-page architecture (all sections on one page)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd D:\xampp\htdocs\ITP110_MLAB2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🛠️ Technologies Used

- **React** 18.2.0 - JavaScript library for building user interfaces
- **Bootstrap** 5.3.2 - CSS framework for responsive design
- **Vite** 5.0.8 - Fast build tool and dev server
- **CSS3** - Smooth scrolling and animations

## 📁 Project Structure

```
ITP110_MLAB2/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header with scroll detection
│   │   └── Footer.jsx          # Footer with social links & newsletter
│   ├── sections/
│   │   ├── Home.jsx            # Home section with hero
│   │   ├── About.jsx           # About section
│   │   ├── Menu.jsx            # Menu section with filtering
│   │   ├── Contact.jsx         # Contact section with form
│   │   └── Gallery.jsx         # Gallery section
│   ├── styles/
│   │   └── App.css             # Custom styles with smooth scroll
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Application entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                    # Project documentation
```

## 🎨 Key Features Implemented

### 1. Single Page Application
- All 5 sections rendered on a single scrollable page
- No page reloads when navigating
- Smooth scrolling between sections

### 2. Navigation
- Sticky header that stays visible while scrolling
- Active section highlighting based on scroll position
- Anchor links with smooth scroll behavior
- Click navigation for seamless UX

### 3. Component Architecture
- Reusable Header component with scroll detection
- Separate section components for clean organization
- Functional components with React Hooks
- State management for forms and menus

### 4. Styling
- Bootstrap 5 for responsive grid and components
- Custom CSS with smooth scroll behavior
- Beautiful animations and transitions
- Mobile-first responsive design

### 5. Interactive Features
- Contact form with state management and validation
- Menu category filtering using useState
- Programmatic scrolling with buttons
- Form submission feedback messages
- Scroll-based active link highlighting

## 📱 Sections

All sections are accessible via smooth scrolling:

- **#home** - Hero section with call-to-action buttons
- **#about** - Company story and values
- **#menu** - Interactive menu with category tabs
- **#contact** - Contact form and business info
- **#gallery** - Photo gallery showcase

## 🎓 Learning Outcomes

This project demonstrates:
- Building SPAs with React
- Smooth scroll navigation
- Component-based architecture
- State management with React Hooks
- Responsive web design with Bootstrap
- Form handling in React
- Event handling and user interactions
- CSS animations and transitions

## 🌟 How to Use

1. **Navigation**: Click any link in the header to smoothly scroll to that section
2. **Home Buttons**: Use "View Menu" and "Learn More" buttons for quick navigation
3. **Menu Tabs**: Click category tabs to filter menu items
4. **Contact Form**: Fill out and submit the contact form
5. **Scroll Detection**: Watch the active link highlight as you scroll through sections

## 👨‍💻 Author

Created for ITP110 - Web Technologies Midterm Laboratory 2

## 📄 License

This project is for educational purposes.
