import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../content/site';
import { buildWhatsAppLink } from '../../lib/utils';
import { Menu, X, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Editorial Ticker Bar */}
      <div className="bg-british-blue text-british-cream text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 border-b border-british-blue-light/30">
        <span className="inline-block w-2 h-2 rounded-full bg-british-camel animate-pulse-subtle" />
        <span>Aulas de inglês britânico online & presenciais com o Teacher Gui</span>
        <span className="hidden sm:inline opacity-60">•</span>
        <span className="hidden sm:inline text-british-camel font-semibold">Real English. Real Connection.</span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-british-cream/95 backdrop-blur-md shadow-sm border-b border-british-blue/10 py-3.5'
            : 'bg-british-cream py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red rounded-lg p-1"
            aria-label="Teacher Gui - Início"
          >
            <div className="w-10 h-10 rounded-full bg-british-red flex items-center justify-center text-british-cream font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              TG
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-xl text-british-blue tracking-tight group-hover:text-british-red transition-colors">
                Teacher Gui
              </span>
              <span className="text-[10px] uppercase font-mono tracking-vintage text-british-grey">
                British English Tutor
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação Principal">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-british-blue hover:text-british-red transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red rounded"
              >
                {item.label}
                {item.badge && (
                  <span className="ml-1.5 text-[10px] font-mono uppercase bg-british-camel/20 text-british-blue px-1.5 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button variant="primary" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-british-red hover:bg-british-red/10 rounded-full"
              aria-label="Contato direto pelo WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-british-blue hover:text-british-red hover:bg-british-blue/5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-british-red"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-british-cream border-b border-british-blue/15 shadow-xl p-6 transition-all animate-fadeIn">
            <nav className="flex flex-col gap-4" aria-label="Menu Mobile">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between text-base font-semibold text-british-blue hover:text-british-red py-2 border-b border-british-blue/5"
                >
                  <span>{item.label}</span>
                  {item.badge ? (
                    <span className="text-xs font-mono uppercase bg-british-camel/20 text-british-blue px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 opacity-40" />
                  )}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <Button variant="primary" size="md" className="w-full gap-2 justify-center">
                    <MessageCircle className="w-4 h-4" />
                    <span>Falar com o Teacher Gui</span>
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
