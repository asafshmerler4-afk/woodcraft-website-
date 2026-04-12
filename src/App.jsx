import { useState } from 'react'
import { translations } from './translations'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import KitsSection from './components/KitsSection.js'
import WorkshopsSection from './components/WorkshopsSection.js'
import Footer from './components/Footer.js'

export default function App() {
  const [lang, setLang] = useState('he')
  const t = translations[lang]
  const isRtl = lang === 'he'

  const toggleLang = () => setLang(prev => prev === 'he' ? 'en' : 'he')

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ minHeight: '100vh' }}>
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} />
      <Hero t={t} />
      <KitsSection t={t} />
      <WorkshopsSection t={t} />
      <Footer t={t} />
    </div>
  )
}
