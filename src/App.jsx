import useLenis from './hooks/useLenis'
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
  useLenis()

  return (
    <div className="relative w-full">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Legacy />
        <Retreat />
        <HealingJourney />
        <HealingGoals />
        <Programs />
        <Experience />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
