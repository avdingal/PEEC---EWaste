import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScopeDefinition from './components/ScopeDefinition';
import RootCauses from './components/RootCauses';
import RealWorldImpacts from './components/RealWorldImpacts';
import ActionDropOff from './components/ActionDropOff';
import Footer from './components/Footer';
import PledgeModal from './components/PledgeModal';

export default function App() {
  const [isPledgeModalOpen, setIsPledgeModalOpen] = useState(false);

  const handleOpenPledge = () => setIsPledgeModalOpen(true);
  const handleClosePledge = () => setIsPledgeModalOpen(false);

  return (
    <div className="min-h-screen bg-[#EAE7E2] text-[#22201D] font-sans selection:bg-[#9E7B66] selection:text-white flex flex-col">
      {/* Sticky Header Navbar */}
      <Navbar onOpenPledge={handleOpenPledge} />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        <Hero onOpenPledge={handleOpenPledge} />
        <ScopeDefinition />
        <RootCauses />
        <RealWorldImpacts />
        <ActionDropOff onOpenPledge={handleOpenPledge} />
      </main>

      {/* Footer & Citations */}
      <Footer />

      {/* Interactive Pledge Modal */}
      <PledgeModal 
        isOpen={isPledgeModalOpen} 
        onClose={handleClosePledge} 
      />
    </div>
  );
}
