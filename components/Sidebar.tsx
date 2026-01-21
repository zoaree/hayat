
import React, { useRef, useState, useEffect } from 'react';

interface SidebarProps {
  currentProduct: string;
  onSelectProduct: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentProduct, onSelectProduct, isOpen, onToggle }) => {
  const products = [
    { id: 'home', name: 'Akademi Ana Sayfa', icon: '🏠' },
    { id: 'comparison', name: 'Ürün Kıyaslama', icon: '⚖️' },
    { id: 'recommendation', name: 'Ürün Seçim Sihirbazı', icon: '🪄' },
    { id: 'turuncu-elma', name: 'Turuncu Elma Hayat', icon: '🍎' },
    { id: 'rop-80-20', name: 'ROP 80+20 Hayat', icon: '💰' },
    { id: 'rop-80-20-ferdi-kaza', name: 'ROP 80+20 Ferdi Kazalı Hayat', icon: '🛡️' },
    { id: 'rop-80-20-karma', name: 'ROP 80+20 Karma Hayat', icon: '🔄' },
    { id: 'rop-80-20-karma-ferdi-kaza', name: 'ROP 80+20 Karma Ferdi Kazalı', icon: '💎' },
    { id: 'rop-80-20-ferdi-kaza-maluliyet', name: 'ROP 80+20 Ferdi Kazalı Maluliyetli', icon: '♿' },
    { id: 'rop-80-20-karma-ferdi-kaza-maluliyet', name: 'ROP 80+20 Karma Ferdi Kazalı Maluliyetli', icon: '🌟' },
    { id: 'rop-80-20-kritik-hastalik', name: 'ROP 80+20 Kritik Hastalıklı', icon: '🩺' },
    { id: 'rop-60-20-bes-yillik-karma', name: 'ROP 60+20 5 Yıllık Karma', icon: '⚡' },
    { id: 'guvencem-mehmedim-standart', name: 'Güvencem Mehmedim Standart', icon: '🪖' },
    { id: 'guvencem-mehmedim-karma', name: 'Güvencem Mehmedim Karma', icon: '🔄' },
    { id: 'yigit-boruler-standart', name: 'Yiğit Börüler Standart', icon: '👮' },
    { id: 'yigit-boruler-karma', name: 'Yiğit Börüler Karma', icon: '🔄' },
    { id: 'karma-dovize-endeksli-birikim', name: 'Karma Dövize Endeksli Birikim', icon: '📈' },
    { id: 'dovize-endeksli-birikim', name: 'Dövize Endeksli Birikim', icon: '📊' },
    { id: 'odullu-egitim', name: 'Ödüllü Eğitim Hayat', icon: '🎓' },
    { id: 'tek-prim-odullu', name: 'Tek Prim Ödemeli Ödüllü', icon: '💵' },
    { id: 'kuponlu-tek-prim-odullu', name: 'Kuponlu Tek Prim Ödüllü', icon: '🧧' },
    { id: 'kuponlu-tek-prim', name: 'Kuponlu Tek Prim', icon: '🎟️' },
    { id: 'rop-80-40-azalan', name: 'ROP 80+40 Azalan Teminatlı', icon: '📉' },
    { id: 'rop-80-50-azalan', name: 'ROP 80+50 Azalan Teminatlı', icon: '🔥' },
    { id: 'isveren-rop-80-20-karma-ferdi-kaza-maluliyet', name: 'İşveren ROP 80+20 Karma F.K.M.', icon: '🏢' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setShowTopArrow(scrollTop > 0);
      setShowBottomArrow(scrollTop + clientHeight < scrollHeight - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onToggle}
      />

      {/* Sidebar Container */}
      <div className={`
        fixed left-0 top-0 h-full w-72 bg-slate-900 text-slate-300 z-50 transform transition-transform duration-300 ease-in-out border-r border-slate-800 flex flex-col shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:shadow-none lg:w-72
      `}>
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2 tracking-tight">
                Hayat Sigortaları
              </h1>
              <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-[0.2em] font-bold">Danışman Portalı</p>
            </div>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Navigation Arrows & List */}
        {showTopArrow && (
          <button
            onClick={scrollUp}
            className="w-full py-1 bg-slate-800/50 hover:bg-slate-800 text-orange-500 flex justify-center items-center transition-colors cursor-pointer border-b border-slate-800"
          >
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}

        <nav
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex-1 overflow-y-auto py-2 no-scrollbar scroll-smooth"
        >
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                onSelectProduct(p.id);
                if (window.innerWidth < 1024) onToggle();
              }}
              className={`w-full text-left px-6 py-3.5 flex items-center gap-4 transition-all border-l-4 group relative overflow-hidden ${currentProduct === p.id
                ? 'border-orange-500 bg-gradient-to-r from-orange-500/10 to-transparent text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'
                : 'border-transparent text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
            >
              <span className={`text-xl transition-transform duration-300 group-hover:scale-110 ${currentProduct === p.id ? 'scale-110' : ''}`}>{p.icon}</span>
              <span className="text-xs font-bold leading-snug uppercase tracking-wide">{p.name}</span>

              {/* Active Indicator Glow */}
              {currentProduct === p.id && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_2px_rgba(249,115,22,0.5)] mr-4"></div>
              )}
            </button>
          ))}
        </nav>

        {showBottomArrow && (
          <button
            onClick={scrollDown}
            className="w-full py-1 bg-slate-800/50 hover:bg-slate-800 text-orange-500 flex justify-center items-center transition-colors cursor-pointer border-t border-slate-800"
          >
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}

        {/* Footer */}
        <div className="p-4 bg-slate-950 text-center border-t border-slate-800">
          <p className="text-xs text-slate-500 font-medium">Abdulkadir Ünsal</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
