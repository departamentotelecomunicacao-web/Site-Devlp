import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import NewCollection from './components/NewCollection'
import Editorial from './components/Editorial'
import BrandStatement from './components/BrandStatement'
import FeaturedProducts from './components/FeaturedProducts'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="grain-overlay">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <NewCollection />
        <Editorial />
        <BrandStatement />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
