import React, { useState } from 'react';
import { pronunciationWords } from '../../../content/pronunciation';
import { playPronunciation } from '../../../lib/utils';
import { Badge } from '../../ui/Badge';
import { Volume2, VolumeX, Sparkles, Globe2, Info } from 'lucide-react';
import { BritishFlagIcon } from '../../ui/Icons';

export const Pronunciation: React.FC = () => {
  const [selectedWordIndex, setSelectedWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<'GB' | 'US' | null>(null);
  const [speechError, setSpeechError] = useState<string | null>(null);

  const activeWord = pronunciationWords[selectedWordIndex];

  const handlePlayAudio = (variant: 'en-GB' | 'en-US') => {
    setSpeechError(null);
    setIsPlaying(variant === 'en-GB' ? 'GB' : 'US');

    const success = playPronunciation(
      activeWord.word,
      variant,
      () => setIsPlaying(null),
      (err) => {
        setIsPlaying(null);
        setSpeechError(err);
      }
    );

    if (!success) {
      setIsPlaying(null);
    }
  };

  return (
    <section
      id="pronuncia"
      className="py-24 sm:py-32 bg-british-cream text-british-blue relative overflow-hidden"
      aria-label="Laboratório de pronúncia em inglês"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="red">Hear It. Say It. Own It.</Badge>
          <h2 className="font-serif font-black text-3xl sm:text-5xl text-british-blue tracking-tight">
            English is meant <br />
            <span className="italic font-serif text-british-red">to be spoken.</span>
          </h2>
          <p className="text-base sm:text-lg text-british-blue/80 leading-relaxed font-medium">
            Nem toda palavra soa exatamente como parece no papel. E é aí que a prática e os ouvidos atentos começam.
          </p>
        </div>

        {/* Word Selection Carousel / Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {pronunciationWords.map((item, index) => {
            const isSelected = selectedWordIndex === index;
            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedWordIndex(index);
                  setSpeechError(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-serif font-bold text-sm sm:text-base transition-all shrink-0 border ${
                  isSelected
                    ? 'bg-british-red text-british-cream border-british-red shadow-lg scale-105'
                    : 'bg-white hover:bg-british-cream text-british-blue border-british-blue/15 shadow-xs'
                }`}
              >
                {item.word}
              </button>
            );
          })}
        </div>

        {/* Active Word Interactive Studio Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-editorial border border-british-blue/10 max-w-4xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left Column: Word & Audio Trigger */}
            <div className="md:col-span-5 space-y-6 text-center md:text-left border-b md:border-b-0 md:border-r border-british-blue/10 pb-6 md:pb-0 md:pr-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-vintage text-british-camel font-bold block mb-1">
                  Palavra em Destaque
                </span>
                <h3 className="font-serif font-black text-4xl sm:text-5xl text-british-blue tracking-tight">
                  {activeWord.word}
                </h3>
                <p className="text-sm text-british-grey mt-1 font-medium">
                  Significado: {activeWord.meaning}
                </p>
              </div>

              {/* Audio Listen Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => handlePlayAudio('en-GB')}
                  disabled={isPlaying !== null}
                  className={`w-full py-3.5 px-4 rounded-xl flex items-center justify-center gap-3 font-semibold text-sm transition-all cursor-pointer ${
                    isPlaying === 'GB'
                      ? 'bg-british-red text-british-cream animate-pulse'
                      : 'bg-british-red/10 text-british-red hover:bg-british-red hover:text-british-cream border border-british-red/30'
                  }`}
                  aria-label={`Ouvir pronúncia britânica da palavra ${activeWord.word}`}
                >
                  <BritishFlagIcon className="w-5 h-3" />
                  <Volume2 className="w-4 h-4" />
                  <span>Ouvir Britânico (en-GB)</span>
                </button>

                {activeWord.hasSignificantDifference && (
                  <button
                    onClick={() => handlePlayAudio('en-US')}
                    disabled={isPlaying !== null}
                    className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 font-medium text-xs transition-all cursor-pointer ${
                      isPlaying === 'US'
                        ? 'bg-british-blue text-british-cream animate-pulse'
                        : 'bg-british-cream hover:bg-british-blue hover:text-british-cream text-british-blue border border-british-blue/15'
                    }`}
                    aria-label={`Comparar com pronúncia americana da palavra ${activeWord.word}`}
                  >
                    <Globe2 className="w-4 h-4 text-british-grey" />
                    <span>Comparar com Americano (en-US)</span>
                  </button>
                )}
              </div>

              {/* Honest Web Speech synthesis indicator */}
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] text-british-grey">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Áudio via Web Speech API do seu navegador</span>
              </div>

              {speechError && (
                <div className="p-2.5 bg-red-50 text-red-600 rounded-lg text-xs flex items-center gap-2">
                  <VolumeX className="w-4 h-4 shrink-0" />
                  <span>{speechError}</span>
                </div>
              )}
            </div>

            {/* Right Column: Phonetics & Teaching Insights */}
            <div className="md:col-span-7 space-y-6">
              {/* British IPA Card */}
              <div className="bg-british-cream/60 rounded-2xl p-4 sm:p-5 border border-british-camel/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase text-british-red font-bold flex items-center gap-1.5">
                    <BritishFlagIcon className="w-4 h-2.5" />
                    <span>Pronúncia Britânica (IPA)</span>
                  </span>
                  <span className="font-mono text-sm font-bold bg-white px-2.5 py-0.5 rounded border border-british-camel/40 text-british-blue">
                    {activeWord.britishIPA}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-british-blue/90 leading-relaxed">
                  {activeWord.britishNote}
                </p>
              </div>

              {/* American IPA Card if different */}
              {activeWord.hasSignificantDifference && activeWord.americanIPA && (
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-british-blue/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase text-british-blue font-bold flex items-center gap-1.5">
                      <Globe2 className="w-4 h-4 text-british-grey" />
                      <span>Pronúncia Americana (IPA)</span>
                    </span>
                    <span className="font-mono text-sm font-bold bg-british-cream px-2.5 py-0.5 rounded border border-british-blue/15 text-british-blue">
                      {activeWord.americanIPA}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-british-blue/80 leading-relaxed">
                    {activeWord.americanNote}
                  </p>
                </div>
              )}

              {/* Sample Sentence in Real Context */}
              <div className="bg-british-blue text-british-cream rounded-2xl p-4 sm:p-5">
                <span className="text-[10px] font-mono uppercase tracking-vintage text-british-camel font-bold block mb-1">
                  Exemplo na Prática
                </span>
                <p className="font-serif italic text-base text-british-cream mb-1">
                  "{activeWord.sampleSentence}"
                </p>
                <p className="text-xs text-british-cream/70 font-mono">
                  {activeWord.sentenceTranslation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Didactic Teacher Note */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-british-blue/70 leading-relaxed flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-british-camel shrink-0" />
            <span>
              Sotaque perfeito não é imitar robô, é se comunicar com clareza e ritmo natural!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
