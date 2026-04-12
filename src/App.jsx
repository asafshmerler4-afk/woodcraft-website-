import Navbar from './Navbar'
import Hero from './Hero'
import Products from './Products'
import Workshops from './Workshops'
import Footer from './Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Products />
      <Workshops />
      <Footer />
    </div>
  )
}
