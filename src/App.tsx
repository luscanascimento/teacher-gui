import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloatingCTA } from './components/layout/WhatsAppFloatingCTA';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-british-cream text-british-blue antialiased selection:bg-british-red selection:text-british-cream">
      <Header />
      <main className="flex-1">
        {/* Placeholder for subsequent stages */}
        <section className="bg-british-red text-british-cream py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-vintage bg-british-blue/30 px-3 py-1 rounded-full border border-british-cream/20">
              Teacher Gui • British English
            </span>
            <h1 className="font-serif font-black text-4xl sm:text-6xl tracking-tight">
              Your English starts here.
            </h1>
            <p className="text-british-cream/90 text-lg max-w-2xl mx-auto">
              Real English. Real Connection. Aulas acolhedoras e personalizadas.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloatingCTA />
    </div>
  );
};

export default App;
