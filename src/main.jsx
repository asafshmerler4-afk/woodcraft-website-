import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center', direction: 'rtl' }}>
      <h1>האתר של Moku Woodcraft בדרך!</h1>
      <p>אם אתה רואה את זה, סימן שהחיבור ל-Vercel עובד.</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
