import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import MapSection from './components/MapSection'
import AboutProject from './components/AboutProject'
import Governance from './components/Governance'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <MapSection />
        <AboutProject />
        <Governance />
      </main>
      <Footer />
    </>
  )
}
