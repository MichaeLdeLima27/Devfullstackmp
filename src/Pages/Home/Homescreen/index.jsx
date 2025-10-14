import HeroSection from '../HeroSection.jsx';
import MySkills from '../MySkills.jsx';
import AboutMe from '../AboutMe.jsx';
import MyPortfolio from '../MyPortfolio.jsx';
import Testimonial from '../Testimonials.jsx';
import ContactMe from '../ContactMe.jsx';
import Footer from '../Footer.jsx';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="heroSection">
        <HeroSection />
      </section>

      {/* Skills Section */}
      <section id="mySkills">
        <MySkills />
      </section>

      {/* About Me Section */}
      <section id="aboutMe">
        <AboutMe />
      </section>

      {/* Portfolio Section */}
      <section id="myPortfolio">
        <MyPortfolio />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonial />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactMe />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

