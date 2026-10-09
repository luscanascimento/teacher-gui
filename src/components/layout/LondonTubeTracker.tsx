import React, { useState, useEffect } from 'react';
import { LondonUndergroundRoundel } from '../ui/Icons';

interface TubeStation {
  id: string;
  label: string;
  zone: string;
}

const stations: TubeStation[] = [
  { id: 'sobre', label: 'About Gui', zone: 'Zone 1' },
  { id: 'modalidades', label: 'Classes', zone: 'Zone 1' },
  { id: 'ingles-real', label: 'Real English', zone: 'Zone 1' },
  { id: 'cultura', label: 'Culture & Tea', zone: 'Zone 1' },
  { id: 'pronuncia', label: 'Pronunciation', zone: 'Zone 2' },
  { id: 'quiz', label: 'London Quiz', zone: 'Zone 2' },
  { id: 'faq', label: 'Got Questions?', zone: 'Zone 2' },
  { id: 'contato', label: 'Let\'s Talk (Terminus)', zone: 'Zone 1' },
];

export const LondonTubeTracker: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [activeStation, setActiveStation] = useState<string>('sobre');

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, scrolled)));
      }

      // Check which section is currently active
      const scrollY = window.scrollY + 200;
      for (let i = stations.length - 1; i >= 0; i--) {
        const el = document.getElementById(stations[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveStation(stations[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeStationObj = stations.find((s) => s.id === activeStation) || stations[0];

  return (
    <>
      {/* Top Mobile Tube Progress Strip */}
      <div className="fixed top-[52px] sm:top-[57px] inset-x-0 z-30 pointer-events-none lg:hidden">
        <div className="h-1 bg-british-blue/15 w-full overflow-hidden">
          <div
            className="h-full bg-british-red transition-all duration-150 ease-out"
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
      </div>

      {/* Desktop Floating Right-Side London Underground Station Map */}
      <nav
        aria-label="Mapa de Estações London Underground"
        className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end pointer-events-auto"
      >
        <div className="bg-british-cream/90 backdrop-blur-md p-4 rounded-3xl border border-british-blue/15 shadow-editorial">
          {/* Header Badge */}
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-british-blue/10">
            <LondonUndergroundRoundel className="w-5 h-5" label="TUBE" />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold uppercase tracking-vintage text-british-red">
                Central Line
              </span>
              <span className="text-[9px] font-mono text-british-grey">
                {activeStationObj.label}
              </span>
            </div>
          </div>

          {/* Vertical Tube Track Line with Stations */}
          <div className="relative pl-3 space-y-4">
            {/* Red Central Line Bar */}
            <div className="absolute left-[7px] top-1 bottom-1 w-1 bg-british-red rounded-full" />

            {stations.map((st) => {
              const isActive = activeStation === st.id;
              return (
                <a
                  key={st.id}
                  href={`#${st.id}`}
                  className="group flex items-center gap-3 relative text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-british-red rounded"
                >
                  {/* Station Interchange Dot */}
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all relative z-10 ${
                      isActive
                        ? 'bg-british-red border-white ring-2 ring-british-red scale-125'
                        : 'bg-white border-british-blue group-hover:scale-110'
                    }`}
                  />
                  <div className="flex flex-col">
                    <span
                      className={`text-xs font-serif transition-colors leading-tight ${
                        isActive
                          ? 'font-bold text-british-red'
                          : 'text-british-blue/70 group-hover:text-british-blue'
                      }`}
                    >
                      {st.label}
                    </span>
                    <span className="text-[8px] font-mono text-british-grey uppercase">
                      {st.zone}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
