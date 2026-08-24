import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Accreditation from './sections/Accreditation';
import Services from './sections/Services';
import Sectors from './sections/Sectors';
import EsgSection from './components/EsgSection';
import ComplianceSimulator from './components/ComplianceSimulator';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './sections/Footer';

function App() {

  return (
    <div className="bg-brand-snow min-h-screen text-brand-gray-dark antialiased">
      {/* Navigation Navbar Bar */}
      <Navigation />

      {/* Main Scientific Narrative Sections */}
      <main className="relative">
        
        {/* Section 1: Hero monumental dark theme (Navy & Teal) */}
        <Hero />

        {/* Section 2: Trust Acreditation ISO 17025 (Light surgical grey) */}
        <Accreditation />

        {/* Section 3: Solutions Grid (Staggered light theme) */}
        <Services />

        {/* Section 4: Economic Sectors (Swiss Typography Grid) */}
        <Sectors />

        {/* Section 5: ESG & Sustainable UN ODS (Interactive dashboard) */}
        <EsgSection />

        {/* Section 6: Interactive Compliance Simulator (Surprise WOW Factor) */}
        <ComplianceSimulator />

        {/* Section 7: Central FAQ (High performance legal accordions) */}
        <FAQ />

        {/* Section 8: Pricing / technical proposal ContactForm */}
        <ContactForm />

      </main>

      {/* Rodapé Científico */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511933334444"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer group border border-white/20"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulsing glow effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none pointer-events-none" />
        
        {/* WhatsApp SVG Icon */}
        <svg className="w-7 h-7 text-white fill-current" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.004 2c-5.518 0-9.986 4.47-9.986 9.988 0 1.761.459 3.479 1.332 5.006L2 22l5.185-1.362c1.472.802 3.125 1.226 4.814 1.228h.004c5.518 0 9.986-4.47 9.986-9.988C22 7.47 17.52 2 12.004 2zm5.352 14.288c-.245.69-1.225 1.26-1.74 1.348-.475.082-.93.155-2.984-.668-2.63-1.053-4.305-3.765-4.437-3.94-.13-.174-1.077-1.442-1.077-2.752 0-1.31.678-1.954.92-2.217.242-.263.53-.328.708-.328.177 0 .354.004.508.012.16.008.375-.06.586.447.218.523.743 1.815.807 1.947.065.13.109.283.022.457-.087.174-.13.283-.26.436-.13.152-.275.34-.392.456-.13.13-.268.272-.116.533.152.26.674 1.113 1.446 1.802.996.887 1.83 1.163 2.09 1.293.26.13.412.109.564-.065.152-.174.654-.761.828-1.02.174-.26.347-.217.586-.13.24.087 1.517.718 1.777.848.26.13.434.196.499.305.065.11.065.63-.18 1.32z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
