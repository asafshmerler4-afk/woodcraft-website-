import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import KitsSection from './KitsSection.jsx'
import WorkshopsSection from './WorkshopsSection.jsx'
import Footer from './Footer.jsx'
import './index.css'

const App = () => {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      <Navbar />
      <main>
        <KitsSection />
        <WorkshopsSection />
      </main>
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
