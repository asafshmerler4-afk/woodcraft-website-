import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.js' // או .jsx, תלוי איך קראת להם בתיקייה
import KitsSection from './KitsSection.js'
import WorkshopsSection from './WorkshopsSection.js'
import Footer from './Footer.js'
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
