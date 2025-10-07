import { About } from '@/components/home/About'
import { FAQ } from '@/components/home/FAQ'
import { Features } from '@/components/home/Features'
import { Hero } from '@/components/home/Hero'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Services } from '@/components/home/Services'
import { Sponsors } from '@/components/home/Sponsors'
import { Team } from '@/components/home/Team'
import { Testimonials } from '@/components/home/Testimonials'

function App() {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Testimonials />
      <Team />
      <FAQ />
    </>
  )
}

export default App
