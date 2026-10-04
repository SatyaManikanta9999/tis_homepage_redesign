import { useTheme } from './hooks/useTheme'
import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import WhyTIS from './components/sections/WhyTIS'
import CampusLife from './components/sections/CampusLife'
import Testimonials from './components/sections/Testimonials'
import AdmissionsCTA from './components/sections/AdmissionsCTA'

export default function App() {
  const [dark, toggleTheme] = useTheme()
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <WhyTIS />
        <CampusLife />
        <Testimonials />
        <AdmissionsCTA />
      </main>
      <Footer />
    </>
  )
}
