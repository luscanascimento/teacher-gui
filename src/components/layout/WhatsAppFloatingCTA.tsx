import React, { useState } from 'react';
import { buildWhatsAppLink } from '../../lib/utils';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingCTA: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Friendly Speech Bubble Tooltip */}
      {showTooltip && (
        <div className="bg-white text-british-blue px-3.5 py-2 rounded-2xl shadow-card border border-british-blue/10 text-xs font-medium flex items-center gap-2 animate-bounce-subtle max-w-[210px]">
          <span>Dúvidas sobre as aulas? Fale comigo!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-british-grey hover:text-british-blue p-0.5 rounded"
            aria-label="Fechar mensagem flutuante"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-editorial hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 group"
        aria-label="Iniciar conversa com o Teacher Gui no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
