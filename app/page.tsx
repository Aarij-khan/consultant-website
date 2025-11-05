import AboutSection from "./components/about-section";
import AboutSection2 from "./components/about-section-2";
import Banner from "./components/banner";
import ContactForm from "./components/contact-form";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import InfoBoxes from "./components/info-boxes";
import Insights from "./components/insights";
import Service from "./components/service";
import Stats from "./components/stats";
import Testimonial from "./components/testimonial";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <InfoBoxes />
      <AboutSection />
      <Banner />
      <Service />
      <AboutSection2 />
      <Testimonial />
      <Insights />
      <ContactForm />
      <Footer />
    </div>
  );
}
