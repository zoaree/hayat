
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProductView from './components/ProductView';
import { turuncuElmaData } from './data/turuncuElma';
import { rop8020Data } from './data/rop8020';
import { rop8020FerdiKazaData } from './data/rop8020FerdiKaza';
import { rop8020KarmaData } from './data/rop8020Karma';
import { rop8020KarmaFerdiKazaData } from './data/rop8020KarmaFerdiKaza';
import { rop8020FerdiKazaMaluliyetData } from './data/rop8020FerdiKazaMaluliyet';
import { rop8020KarmaFerdiKazaMaluliyetData } from './data/rop8020KarmaFerdiKazaMaluliyet';
import { rop8020KritikHastalikData } from './data/rop8020KritikHastalik';
import { rop6020BesYillikKarmaData } from './data/rop6020BesYillikKarma';
import { guvencemMehmedimData } from './data/guvencemMehmedim';
import { guvencemMehmedimKarmaData } from './data/guvencemMehmedimKarma';
import { yigitBorulerData } from './data/yigitBoruler';
import { yigitBorulerKarmaData } from './data/yigitBorulerKarma';
import { karmaBirikimData } from './data/karmaBirikim';
import { dovizEndeksliBirikimData } from './data/dovizEndeksliBirikim';
import { odulluEgitimData } from './data/odulluEgitim';
import { tekPrimOdulluData } from './data/tekPrimOdullu';
import { kuponluTekPrimOdulluData } from './data/kuponluTekPrimOdullu';
import { kuponluTekPrimData } from './data/kuponluTekPrim';
import { rop8040AzalanData } from './data/rop8040Azalan';
import { rop8050AzalanData } from './data/rop8050Azalan';
import { isverenRop8020KarmaFerdiKazaMaluliyetData } from './data/isverenRop8020KarmaFerdiKazaMaluliyet';

const productMap: Record<string, any> = {
  'turuncu-elma': turuncuElmaData,
  'rop-80-20': rop8020Data,
  'rop-80-20-ferdi-kaza': rop8020FerdiKazaData,
  'rop-80-20-karma': rop8020KarmaData,
  'rop-80-20-karma-ferdi-kaza': rop8020KarmaFerdiKazaData,
  'rop-80-20-ferdi-kaza-maluliyet': rop8020FerdiKazaMaluliyetData,
  'rop-80-20-karma-ferdi-kaza-maluliyet': rop8020KarmaFerdiKazaMaluliyetData,
  'rop-80-20-kritik-hastalik': rop8020KritikHastalikData,
  'rop-60-20-bes-yillik-karma': rop6020BesYillikKarmaData,
  'guvencem-mehmedim-standart': guvencemMehmedimData,
  'guvencem-mehmedim-karma': guvencemMehmedimKarmaData,
  'yigit-boruler-standart': yigitBorulerData,
  'yigit-boruler-karma': yigitBorulerKarmaData,
  'karma-dovize-endeksli-birikim': karmaBirikimData,
  'dovize-endeksli-birikim': dovizEndeksliBirikimData,
  'odullu-egitim': odulluEgitimData,
  'tek-prim-odullu': tekPrimOdulluData,
  'kuponlu-tek-prim-odullu': kuponluTekPrimOdulluData,
  'kuponlu-tek-prim': kuponluTekPrimData,
  'rop-80-40-azalan': rop8040AzalanData,
  'rop-80-50-azalan': rop8050AzalanData,
  'isveren-rop-80-20-karma-ferdi-kaza-maluliyet': isverenRop8020KarmaFerdiKazaMaluliyetData,
};

const App: React.FC = () => {
  const [currentProductId, setCurrentProductId] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getPageTitle = () => {
    if (currentProductId === 'home') return 'Ana Sayfa';
    const product = productMap[currentProductId];
    return product ? product.name : currentProductId.replace(/-/g, ' ');
  };

  const renderContent = () => {
    if (currentProductId === 'home') return <Home />;
    const product = productMap[currentProductId];
    if (product) return <ProductView product={product} />;

    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-slate-400">
        <div className="text-6xl mb-4 animate-bounce">🚧</div>
        <h2 className="text-2xl font-bold text-slate-700">Bu ürün yakında eklenecek!</h2>
        <p className="mt-2 text-slate-500">17 ürünlük arşivimiz geliştirilmeye devam ediyor.</p>
        <button
          onClick={() => setCurrentProductId('home')}
          className="mt-6 text-orange-600 font-bold hover:underline"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar
        currentProduct={currentProductId}
        onSelectProduct={setCurrentProductId}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className={`min-h-screen transition-all duration-300 ease-in-out ${sidebarOpen ? 'lg:pl-72' : 'lg:pl-72'}`}>
        {/* Navigation Bar */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 shadow-sm transition-all duration-300">
          <div className="flex items-center gap-3 overflow-hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center gap-2 text-sm overflow-hidden whitespace-nowrap">
              <span className="text-slate-400 hidden sm:inline shrink-0">Akademi</span>
              <span className="text-slate-300 hidden sm:inline shrink-0">/</span>
              <span className="text-slate-800 font-bold uppercase tracking-tight truncate">
                {getPageTitle()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-slate-900 leading-none">Finansal Danışman</p>
              <p className="text-[10px] text-slate-500 uppercase font-medium tracking-wide">Eğitim Modu</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-xs shadow-lg ring-2 ring-white">
              FD
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="animate-fadeIn p-4 lg:p-8 w-full max-w-[1800px] mx-auto">
          {renderContent()}
        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* DEFINITIVE SCROLLBAR HIDING */
        /* Forces all scrollbars to be hidden across the entire app */
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
          -webkit-appearance: none !important;
        }

        /* Ensure specific elements also obey */
        body, html, #root, .no-scrollbar {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
      `}</style>
    </div>
  );
};

export default App;
