import React from 'react';
import { siteConfig } from '../../content/site';
import { buildWhatsAppLink } from '../../lib/utils';
import { MessageCircle, Mail, MapPin, Heart } from 'lucide-react';
import { InstagramIcon } from '../ui/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-british-blue text-british-cream pt-16 pb-12 border-t-4 border-british-red relative overflow-hidden">
      {/* Decorative Union Jack subtle watermark background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #9E2A2B 15%, transparent 16%),
            linear-gradient(45deg, transparent 48%, rgba(244, 241, 234, 0.4) 49%, rgba(244, 241, 234, 0.4) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(244, 241, 234, 0.4) 49%, rgba(244, 241, 234, 0.4) 51%, transparent 52%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-british-blue-light/40">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-british-red flex items-center justify-center text-british-cream font-serif font-bold text-lg shadow-md">
                TG
              </div>
              <span className="font-serif font-black text-2xl tracking-tight text-british-cream">
                Teacher Gui
              </span>
            </div>
            <p className="text-british-cream/80 text-sm leading-relaxed">
              Real English. Real Connection. Aulas acolhedoras e dinâmicas de inglês britânico para destravar sua conversação no mundo real.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase bg-british-red/30 border border-british-red/50 text-british-cream px-3 py-1 rounded-full">
                <span>🇬🇧 British English Focus</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-british-camel mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-british-cream/80">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-british-camel transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-british-camel rounded"
                  >
                    <span>→</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div>
            <h3 className="font-serif font-bold text-lg text-british-camel mb-4">
              Canais Diretos
            </h3>
            <ul className="space-y-3 text-sm text-british-cream/80">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-british-camel transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-british-red group-hover:scale-110 transition-transform" />
                  <span>WhatsApp: {siteConfig.contacts.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-british-camel transition-colors group"
                >
                  <InstagramIcon className="w-4 h-4 text-british-camel group-hover:scale-110 transition-transform" />
                  <span>Instagram: {siteConfig.contacts.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="flex items-center gap-2.5 hover:text-british-camel transition-colors group"
                >
                  <Mail className="w-4 h-4 text-british-grey group-hover:scale-110 transition-transform" />
                  <span>{siteConfig.contacts.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-british-cream/60 pt-1">
                <MapPin className="w-4 h-4 text-british-camel shrink-0 mt-0.5" />
                <span>{siteConfig.contacts.locationPresencial}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Friendly Note & London Badge */}
          <div className="bg-british-blue-dark/50 p-6 rounded-editorial border border-british-blue-light/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-vintage text-british-camel block mb-2">
                A note from Gui
              </span>
              <p className="font-serif italic text-british-cream/90 text-sm leading-relaxed mb-4">
                "Fluência não é nunca errar. É não deixar o medo te impedir de conversar."
              </p>
            </div>
            <div className="pt-2 border-t border-british-blue-light/30 flex items-center justify-between text-xs text-british-cream/70 font-mono">
              <span>Made with patience</span>
              <span className="text-british-red flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-current" /> &amp; tea
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-british-cream/65">
          <p>
            © {currentYear} {siteConfig.teacher.nickname}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Privacidade &amp; LGPD: dados usados apenas para contato direto.</span>
          </div>
          <div className="font-serif italic text-british-camel text-sm tracking-wide">
            Cheers, mate! See you in class. 🇬🇧
          </div>
        </div>
      </div>
    </footer>
  );
};
