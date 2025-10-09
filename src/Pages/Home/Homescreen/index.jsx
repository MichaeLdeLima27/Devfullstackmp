import AboutMe from '../AboutMe'
import ContactMe from '../ContactMe'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import MyPortfolio from '../MyPortfolio'
import MySkills from '../MySkills'
import Testimonial from '../Testimonials'

export default function Home() {
  return (
    <>
      <section id="heroSection">
        <HeroSection />
      </section>

      <section id="MySkills">
        <MySkills />
      </section>

      <section id="AboutMe">
        <AboutMe />
      </section>

      <section id="MyPortfolio">
        <MyPortfolio />
      </section>

      <section id="faq">
        <Testimonial /> {/* Componente FAQ */}
      </section>

      <section id="Contact">
        <ContactMe />
      </section>

      <Footer />
    </>
  )
}
