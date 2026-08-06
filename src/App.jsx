import React, { useState } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ResearchSection from './components/ResearchSection';
import UseCasesSection from './components/UseCasesSection';
import Footer from './components/Footer';
import StartBuildingModal from './components/StartBuildingModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#051A21] text-white font-sans selection:bg-[#44EAE5] selection:text-[#051A21]">
      {/* Top Banner */}
      <TopBanner />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection onStartBuilding={() => setModalOpen(true)} />
        <FeaturesSection />
        <ResearchSection />
        <UseCasesSection onStartBuilding={() => setModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Developer Quickstart Modal */}
      <StartBuildingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
