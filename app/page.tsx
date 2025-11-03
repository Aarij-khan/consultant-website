import AboutSection from "./components/about-section";
import Banner from "./components/banner";
import Header from "./components/header";
import Hero from "./components/hero";
import InfoBoxes from "./components/info-boxes";
import Stats from "./components/stats";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <InfoBoxes />
      <AboutSection />
      <Banner />
    </>
  );
}
