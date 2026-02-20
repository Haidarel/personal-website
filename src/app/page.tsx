import Navigation from "../components/navigation";
import HeroSection from "../components/hero";
import SerciveSection from "../components/layanan";
import ServiceCards from "../components/serviceSection";
import AboutSection from "../components/about";
import PortofolioSection from "../components/portofolio";
import ExperienceSection from "../components/experiences";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      {/* <section id="home" className="section">
        <h1>Home Section</h1>
      </section>

      <section id="about" className="section">
        <h1>About Section</h1>
      </section>

      <section id="projects" className="section">
        <h1>Projects Section</h1>
      </section>

      <section id="skills" className="section">
        <h1>Skills Section</h1>
      </section>

      <section id="contact" className="section">
        <h1>Contact Section</h1>
      </section> */}
      <main className="main-content">
        <HeroSection />
        <ServiceCards />
        <SerciveSection />
        <AboutSection />
        <PortofolioSection />
        <ExperienceSection />
        <Footer />
      </main>
    </>
  );
}
