import { useState } from 'react';
import { ParticleCanvas } from './components/background/ParticleCanvas';
import { AmbientGlow } from './components/background/AmbientGlow';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Domains } from './components/domains/Domains';
import { Events } from './components/events/Events';
import { Projects } from './components/projects/Projects';
import { Roadmap } from './components/roadmap/Roadmap';
import { Team } from './components/team/Team';
import { Resources } from './components/resources/Resources';
import { Contact } from './components/contact/Contact';
import { CommunityCTA } from './components/cta/CommunityCTA';
import { Footer } from './components/layout/Footer';
import { JoinModal } from './components/ui/JoinModal';
import { ToastContainer, type ToastMessage } from './components/ui/Toast';

export function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description?: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, title, description, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleJoinSuccess = (name: string, domain: string) => {
    addToast(
      `Welcome to XeTech, ${name}!`,
      `Your application for the ${domain} cohort was recorded. Orientation details sent to your email.`,
      'success'
    );
  };

  const handleEventRegistered = (attendee: string, eventTitle: string) => {
    addToast(
      `Registration email prepared for ${attendee}`,
      `An email draft for "${eventTitle}" was opened. Send it to contact@xetech.dev to submit your request.`,
      'success'
    );
  };

  const handleResourceNotice = (resourceTitle: string) => {
    addToast(
      'Resource Access Prepared',
      `Direct link to "${resourceTitle}" is staged for your browser.`,
      'info'
    );
  };

  const handleContactSent = (sender: string) => {
    addToast(
      'Transmission Dispatched',
      `Thank you, ${sender}. A member of the XeTech student team will respond within 24 hours.`,
      'success'
    );
  };

  return (
    <div className="relative min-h-screen bg-[#06020e] text-[#f3f4f6] selection:bg-fuchsia-600 selection:text-white overflow-x-hidden">
      {/* Background Animated Atmosphere */}
      <AmbientGlow />
      <ParticleCanvas />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />

      {/* Main Single Page Content */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 2. About Section */}
        <About />

        {/* 3. Technology Domains */}
        <Domains onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 4. Events & Workshops (CloudForge Featured) */}
        <Events onSuccessToast={handleEventRegistered} />

        {/* 5. Student Projects Showcase */}
        <Projects />

        {/* 6. Learning Roadmap */}
        <Roadmap />

        {/* 7. Team & Mentors */}
        <Team onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 8. Developer Resources */}
        <Resources onCopyNotice={handleResourceNotice} />

        {/* 9. High-Energy Community CTA */}
        <CommunityCTA onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* 10. Contact & FAQ */}
        <Contact onSendMessage={handleContactSent} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        onSuccess={handleJoinSuccess}
      />

      {/* Toast Notification Layer */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}

export default App;
