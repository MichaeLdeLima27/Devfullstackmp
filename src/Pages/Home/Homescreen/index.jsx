import HeroSection from '../HeroSection';
import MySkills from '../MySkills';
import AboutMe from '../AboutMe';
import MyPortfolio from '../MyPortfolio';
import Testimonial from '../Testimonials';
import ContactMe from '../ContactMe';
import Footer from '../Footer';

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

