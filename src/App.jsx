import { useState, useEffect } from 'react'
import useLenis from './hooks/useLenis'
import ContactProvider from './context/ContactProvider'
import ContactModal from './components/ContactModal'
import WelcomePopup from './components/WelcomePopup'
import PasswordGate from './components/PasswordGate'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Introduction from './sections/Introduction'
import Legacy from './sections/Legacy'
import Retreat from './sections/Retreat'
import HealingJourney from './sections/HealingJourney'
import HealingGoals from './sections/HealingGoals'
import Programs from './sections/Programs'
import Experience from './sections/Experience'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return (
        sessionStorage.getItem('shantara_auth') === 'true' ||
        localStorage.getItem('shantara_auth') === 'true'
      )
    } catch {
      return false
    }
  })

  useLenis()

  // Handle hash scroll after page load to prevent auto-scroll on reload
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ')
      window.scrollTo(0, 0)
    }
  }, [])

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <ContactProvider>
      <div className="relative w-full min-h-screen bg-cream text-ink">
        {/* Global Contact & Intake Modal */}
        <ContactModal />

        {/* Brand Welcome Popup */}
        <WelcomePopup />

        {/* Fixed Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero isLoaded={true} />
          <Introduction />
          <Legacy />
          <Retreat />
          <HealingJourney />
          <HealingGoals />
          <Programs />
          <Experience />
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ContactProvider>
  )
}

