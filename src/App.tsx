import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CallBanner } from './components/CallBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServiceAreas } from './components/ServiceAreas';
import { EmergencyCTA } from './components/EmergencyCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CallBanner />
        <WhyChooseUs />
        <ServiceAreas />
        <EmergencyCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;