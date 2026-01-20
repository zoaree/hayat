
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ProductData, DetailedIllness } from '../types';

interface ProductViewProps {
  product: ProductData;
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'coverage' | 'lifecycle' | 'faq'>('overview');
  const [selectedIllness, setSelectedIllness] = useState<DetailedIllness | null>(null);

  const isAzalan = product.id.includes('azalan');
  const iadeBadge = product.id === 'rop-80-40-azalan' ? '%120' : product.id === 'rop-80-50-azalan' ? '%130' : null;

  return (
    <div className="w-full mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8 pb-32">
      {/* Header Section */}
      <div className="mb-8 sm:mb-10 product-gradient p-6 sm:p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative z-10 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-4">
            <span className="bg-white/20 text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-white/20 uppercase tracking-tighter">
              KOD: {product.slug.toUpperCase()}
            </span>
            <span className="bg-orange-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-tighter">
              {product.type}
            </span>
            {iadeBadge && (
              <span className="bg-yellow-400 text-orange-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-tighter animate-pulse">
                {iadeBadge} İADE GARANTİSİ
              </span>
            )}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 leading-tight">{product.name}</h2>
          <p className="text-orange-50/90 text-lg sm:text-xl font-medium max-w-2xl mx-auto sm:mx-0">{product.tagline}</p>
        </div>
      </div>

      {/* Premium Breakdown Visualization (If available) */}
      {product.premiumBreakdown && (
        <div className="mb-10 bg-white p-6 sm:p-10 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 animate-fadeIn">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="flex-1 w-full">
              <h4 className="text-slate-900 text-xl sm:text-2xl font-black mb-2 flex items-center gap-2">
                <span className="text-green-500">💰</span> Yatırılan her 100$ nereye gidiyor?
              </h4>
              <p className="text-slate-500 text-sm mb-6 font-medium">Önemli: Paranızın %{product.premiumBreakdown.investment + product.premiumBreakdown.award}'ı sizin adınıza değerlenir.</p>

              <div className="space-y-4">
                {/* Investment */}
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span className="text-slate-600 tracking-tighter">Fon Birikimi (Investment)</span>
                    <span className="text-green-600">{product.premiumBreakdown.investment}$</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: `${product.premiumBreakdown.investment}%` }}></div>
                  </div>
                </div>

                {/* Award */}
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span className="text-slate-600 tracking-tighter">Ödül Birikimi (Award Fund)</span>
                    <span className="text-orange-500">{product.premiumBreakdown.award}$</span>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500" style={{ width: `${product.premiumBreakdown.award}%` }}></div>
                  </div>
                </div>

                {/* Risk and Management */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                      <span className="text-slate-400 tracking-tighter">Risk Maliyeti</span>
                      <span className="text-red-400">{product.premiumBreakdown.risk}$</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400" style={{ width: `${product.premiumBreakdown.risk * 10}%` }}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                      <span className="text-slate-400 tracking-tighter">Şirket Gideri</span>
                      <span className="text-slate-400">{product.premiumBreakdown.management}$</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-400" style={{ width: `${product.premiumBreakdown.management * 10}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-2xl w-full lg:w-64 text-center shrink-0">
              <span className="text-green-600 font-black text-xs uppercase block mb-1">Müşteriye Söyle:</span>
              <p className="text-green-800 text-lg font-black leading-tight">
                "Paranızın %{product.premiumBreakdown.investment + product.premiumBreakdown.award}'ı sizin için çalışıyor!"
              </p>
              <div className="mt-4 text-[10px] text-green-700 font-medium">
                Ödül fonundaki %15, 10 yılın sonunda size geri döner.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Tabs - Grid for Mobile (Full Visibility) */}
      <div className="sticky top-16 z-20 -mx-4 sm:mx-0 mb-6 sm:mb-10 bg-slate-50/95 backdrop-blur-sm sm:bg-transparent py-3 sm:py-0 border-b sm:border-0 border-slate-200/50 transition-all shadow-sm sm:shadow-none">
        <div className="px-4 sm:px-0">
          <div className="bg-slate-200/50 p-1.5 rounded-2xl mx-auto sm:w-fit">
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2">
              {[
                { id: 'overview', label: 'Genel Bakış' },
                { id: 'coverage', label: 'Teminatlar' },
                { id: 'lifecycle', label: 'Teknik İşleyiş' },
                { id: 'faq', label: 'S.S.S.' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-2 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all sm:whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-white text-orange-600 shadow-md scale-[1.02] sm:scale-105 ring-1 ring-black/5'
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Render */}
      <div className="space-y-8 animate-fadeIn">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-colors group">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Para Birimi</span>
              <p className="text-slate-900 font-bold text-lg mt-1">{product.currency}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Poliçe Süresi</span>
              <p className="text-slate-900 font-bold text-lg mt-1">{product.duration}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Yaş Sınırı</span>
              <p className="text-slate-900 font-bold text-xs mt-1 leading-tight">{product.maxAgeFormula}</p>
            </div>
            <div className="bg-orange-500 p-6 rounded-2xl shadow-lg flex flex-col justify-between text-white">
              <span className="text-orange-100 text-[10px] font-black uppercase tracking-widest">Vergi Avantajı</span>
              <p className="font-black text-2xl mt-1">{product.taxAdvantage.includes('yarısı') ? '%15 - %20' : '%15 - %40'}</p>
            </div>

            {isAzalan && (
              <div className="md:col-span-4 bg-yellow-50 border-2 border-yellow-200 p-6 rounded-3xl flex items-center gap-6">
                <div className="text-4xl">📉</div>
                <div>
                  <h4 className="font-black text-yellow-900">Eğitim Notu: Azalan Teminat Mantığı</h4>
                  <p className="text-yellow-800 text-sm">
                    Bu üründe vefat teminatı sabit değildir. {product.duration.includes('15') ? '15 yıl boyunca her yıl 1/15' : '12 yıl boyunca her yıl 1/12'} oranında azalır.
                    <strong>Amaç:</strong> Vefat risk maliyetini düşürüp süre sonu iadesini maksimuma ({iadeBadge}) çıkarmaktır.
                  </p>
                </div>
              </div>
            )}

            <div className="md:col-span-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-slate-900 text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
                Ürün Hakkında Kritik Notlar
              </h4>
              <p className="text-slate-600 leading-relaxed text-lg">{product.summary}</p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <h5 className="font-bold text-blue-900 text-sm mb-1">Döviz Koruması</h5>
                  <p className="text-blue-700 text-xs">Primler USD bazında ödenir, birikimler enflasyona karşı korunur.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <h5 className="font-bold text-green-900 text-sm mb-1">Maliyet Avantajı</h5>
                  <p className="text-green-700 text-xs">Vergi indirimleri sayesinde poliçe maliyeti önemli oranda düşer.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'coverage' && (
          <div className="space-y-12">
            {/* Main Coverages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.coverages.map((c, i) => (
                <div key={i} className={`group relative p-8 rounded-[2rem] transition-all duration-300 ${c.isMain ? 'bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/20 transform hover:-translate-y-1' : 'bg-white border border-slate-100 hover:border-orange-200 shadow-sm hover:shadow-lg'}`}>
                  <div className="flex justify-between items-start mb-6">
                    <h5 className={`font-black text-2xl leading-none tracking-tight ${c.isMain ? 'text-white' : 'text-slate-900'}`}>{c.title}</h5>
                    {c.isMain && <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full uppercase font-black tracking-widest">ANA TEMİNAT</span>}
                  </div>
                  <p className={`text-sm mb-8 leading-relaxed font-medium ${c.isMain ? 'text-orange-50' : 'text-slate-500'}`}>{c.description}</p>

                  <div className={`space-y-4 pt-6 mt-auto ${c.isMain ? 'border-t border-white/20' : 'border-t border-slate-50'}`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-bold uppercase tracking-widest ${c.isMain ? 'text-orange-100' : 'text-slate-400'}`}>Limit</span>
                      <span className={`font-black text-lg ${c.isMain ? 'text-white' : 'text-slate-900'}`}>{c.limits}</span>
                    </div>
                    {c.impactOnPolicy && (
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-bold uppercase tracking-widest ${c.isMain ? 'text-orange-100' : 'text-slate-400'}`}>Sonuç</span>
                        <span className={`font-black uppercase ${c.isMain ? 'text-white' : 'text-red-500'}`}>{c.impactOnPolicy}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Waiting Periods - Clean Grid Layout */}
            <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">⏳</span>
                <div>
                  <h4 className="text-xl font-black text-slate-900">Önemli Süreler ve Beklemeler</h4>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Poliçenin Geçerlilik Şartları</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.waitingPeriods.map((wp, i) => (
                  <div key={i} className="flex flex-col justify-between p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all group">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-2 h-2 rounded-full ${wp.title.includes('MS') ? 'bg-purple-500' : wp.title.includes('Hayatta') ? 'bg-red-500' : wp.title.includes('Maluliyet') ? 'bg-blue-500' : 'bg-orange-500'}`}></div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors">{wp.title}</span>
                      </div>
                      <h5 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">{wp.period}</h5>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                      <p className="text-xs font-medium text-slate-500 leading-relaxed">
                        {wp.title.includes('Muafiyet') ? 'Hastalık başlangıcı bu süreden sonra olmalı.' :
                          wp.title.includes('Hayatta') ? 'Teşhis veya ameliyat sonrası yaşam şartı.' :
                            wp.title.includes('Maluliyet') ? 'Durumun kalıcı olduğunun kesinleşmesi.' :
                              'Poliçe başlangıcından itibaren geçen süre.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Illnesses Grid - Dark Theme (Slate Match) */}
            {product.detailedIllnesses && (
              <div className="bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                {/* Background Decor - Blue/Slate Mix */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>

                <div className="relative z-10 space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30">🧬</div>
                      <div>
                        <h4 className="text-3xl font-black text-white">17 Kritik Hastalık Rehberi</h4>
                        <p className="text-slate-400 text-sm font-medium mt-1">Detayları görmek için kartlara tıklayın.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {product.detailedIllnesses.map((ill, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedIllness(ill)}
                        className="group relative h-32 text-left p-6 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 hover:shadow-xl transition-all duration-300 overflow-hidden backdrop-blur-sm"
                      >
                        {/* Watermark Number */}
                        <span className="absolute -bottom-4 -right-2 text-[6rem] font-black text-white/5 group-hover:text-white/10 transition-colors select-none z-0 tracking-tighter leading-none">
                          {(i + 1).toString().padStart(2, '0')}
                        </span>

                        {/* Context */}
                        <div className="relative z-10 h-full flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-slate-200 text-sm leading-tight max-w-[85%] group-hover:text-white transition-colors">
                              {ill.name.replace(/^\d+\.\s*/, '')}
                            </span>
                            <span className="w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner border border-blue-500/10">
                              <svg className="w-3.5 h-3.5 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-amber-400 transition-colors opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                            İNCELE
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Illness Detail Modal/Panel - PORTAL */}
                {selectedIllness && createPortal(
                  <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <div
                      className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-opacity animate-fadeIn"
                      onClick={() => setSelectedIllness(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-cardIn z-10 flex flex-col max-h-[90vh] border border-white/20">

                      {/* Header */}
                      <div className="bg-slate-900 shrink-0 h-28 flex items-center px-8 relative overflow-hidden">
                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-[50px] -mr-10 -mt-20"></div>

                        <div className="relative z-10 flex items-center gap-6 w-full pr-12">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg ring-4 ring-white/10 shrink-0">
                            🩺
                          </div>
                          <div>
                            <span className="block text-orange-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-1 opacity-80">TIBBİ TANIM & EĞİTİM KARTI</span>
                            <h4 className="text-2xl sm:text-3xl font-black text-white leading-none tracking-tight">{selectedIllness.name}</h4>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedIllness(null)}
                          className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-md z-50"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-8 sm:p-10 overflow-y-auto no-scrollbar flex-1 bg-white space-y-8">

                        {/* Definition */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-[2rem] border border-slate-100 group hover:border-orange-200 transition-colors">
                          <h5 className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                            Nedir? (Tıbbi Tanım)
                          </h5>
                          <p className="text-slate-700 leading-relaxed font-bold text-lg">{selectedIllness.description}</p>
                        </div>

                        {/* Exclusions */}
                        {selectedIllness.exclusions && (
                          <div className="bg-red-50 p-6 sm:p-8 rounded-[2rem] border border-red-100">
                            <h5 className="font-black text-[10px] text-red-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                              Kapsam Dışı Haller (Ödeme Yapılmaz)
                            </h5>
                            <p className="text-red-900 leading-relaxed text-sm font-medium italic">
                              "{selectedIllness.exclusions}"
                            </p>
                          </div>
                        )}

                        {/* Info Grid */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className="flex-1 bg-orange-50 p-5 rounded-3xl border border-orange-100">
                            <span className="block text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">Tazminat Tutarı</span>
                            <span className="text-orange-900 font-black text-xl">Vefat Bedelinin 2 Katı</span>
                          </div>
                          <div className="flex-1 bg-blue-50 p-5 rounded-3xl border border-blue-100">
                            <span className="block text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Bekleme Şartı</span>
                            <span className="text-blue-900 font-black text-xl">30 Gün Yaşam</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedIllness(null)}
                          className="w-full py-5 bg-slate-900 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98] uppercase tracking-widest text-xs"
                        >
                          BİLGİYİ CEBE ATTIM 👍
                        </button>
                      </div>
                    </div>
                  </div>,
                  document.body
                )}
              </div>
            )}

            {/* Disability Criteria */}
            {product.disabilityCriteria && (
              <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="p-2 bg-blue-600 rounded-lg">♿</span>
                        <h4 className="text-2xl font-black">İş Göremezlik (Maluliyet)</h4>
                      </div>
                      <p className="text-slate-400 text-sm max-w-lg">Tazminat hakkı kazanmak için aşağıdaki aktivitelerden en az 3 tanesinin <strong className="text-white">yapılamıyor</strong> olması gerekir.</p>
                    </div>
                    <div className="text-right">
                      <span className="block text-4xl font-black text-blue-400">3/6</span>
                      <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Kriter Şartı</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.disabilityCriteria.map((crit, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs shrink-0">{i + 1}</div>
                        <span className="font-bold text-sm text-slate-200">{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'lifecycle' && (
          <div className="space-y-10">
            {/* Educational Alert */}
            <div className="bg-gradient-to-r from-orange-50 to-white border border-orange-100 p-8 rounded-[2rem] flex flex-col md:flex-row items-start gap-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">💡</div>
              <div>
                <h4 className="font-black text-slate-900 border-b border-orange-200 pb-2 mb-2 inline-block">Matematiksel Karşılık Nedir?</h4>
                <p className="text-slate-600 font-medium leading-relaxed">
                  İade tutarları, ödenen toplam primden değil; sigorta şirketinin risk ve işletme masrafları düşüldükten sonra kalan <strong className="text-orange-600">"Matematiksel Karşılık"</strong> üzerinden hesaplanır.
                </p>
              </div>
            </div>

            {/* Lifecycle Stages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tenzil */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">🛡️</div>
                <h4 className="text-xl font-black text-slate-900 mb-2">Tenzil (Dondurma)</h4>
                <p className="text-sm text-slate-500 font-medium mb-6 min-h-[40px]">{product.lifecycle.tenzil}</p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <span className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Özetle</span>
                  <p className="text-xs font-bold text-slate-700">"Primi durdur, düşük teminatla devam et."</p>
                </div>
              </div>

              {/* İstirak */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center text-2xl mb-6">💸</div>
                <h4 className="text-xl font-black text-slate-900 mb-2">İştirak (Bozma)</h4>
                <p className="text-sm text-slate-500 font-medium mb-6 min-h-[40px]">{product.lifecycle.istirak}</p>

                {product.lifecycle.istirakTable && (
                  <div className="space-y-1 mb-4">
                    {product.lifecycle.istirakTable.map((row, i) => (
                      <div key={i} className="flex justify-between text-[10px] font-bold p-1 border-b border-slate-50 last:border-0">
                        <span className="text-slate-500">{row.label}</span>
                        <span className="text-slate-900">{row.rate}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="bg-orange-50 rounded-xl p-4">
                  <span className="block text-[10px] uppercase font-black text-orange-400 tracking-widest mb-1">Dikkat</span>
                  <p className="text-xs font-bold text-orange-800">Erken çıkışlarda kesinti uygulanır.</p>
                </div>
              </div>

              {/* İkraz */}
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-6">🏦</div>
                <h4 className="text-xl font-black text-slate-900 mb-2">İkraz (Borç)</h4>
                <p className="text-sm text-slate-500 font-medium mb-6 min-h-[40px]">{product.lifecycle.ikraz || "Bu ürün için tanımlı değildir."}</p>
                <div className="bg-slate-50 rounded-xl p-4">
                  <span className="block text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Avantaj</span>
                  <p className="text-xs font-bold text-slate-700">Poliçeyi bozmadan nakit kullan.</p>
                </div>
              </div>
            </div>

            {/* Bottom Rules Section - Redesigned */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Ara Verme Hakkı */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-2.5 bg-slate-900 text-white rounded-xl shadow-lg shadow-slate-900/20">⏱️</span>
                    <h4 className="text-lg font-black text-slate-900">Ara Verme Hakkı</h4>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">{product.lifecycle.araVerme}</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 bg-orange-50 p-3 rounded-xl w-fit">
                    <span>⚠️</span>
                    <span>Süre sonuna eklenir, vadeyi öteler.</span>
                  </div>
                </div>
              </div>

              {/* Sözleşme Bitişi */}
              <div className="bg-white p-8 rounded-[2.5rem] border-2 border-red-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-2.5 bg-red-500 text-white rounded-xl shadow-lg shadow-red-500/20">🏁</span>
                    <h4 className="text-lg font-black text-slate-900">Sözleşme Bitişi</h4>
                  </div>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">{product.lifecycle.sonlanma}</p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-lg text-[10px] font-black uppercase tracking-wide">
                      Vefat
                    </span>
                    <span className="px-3 py-1.5 bg-green-50 text-green-600 border border-green-100 rounded-lg text-[10px] font-black uppercase tracking-wide">
                      Süre Sonu (Vade)
                    </span>
                    <span className="px-3 py-1.5 bg-orange-50 text-orange-600 border border-orange-100 rounded-lg text-[10px] font-black uppercase tracking-wide">
                      İştira (Ayrılma)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="max-w-4xl mx-auto space-y-4">
            <h4 className="text-2xl font-black mb-8 text-center text-slate-900">Müşteriye Nasıl Anlatmalıyım?</h4>
            {product.faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-orange-300">
                <div className="p-6">
                  <h5 className="font-black text-slate-900 text-lg mb-3 flex items-start gap-3">
                    <span className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black">S</span>
                    {faq.question}
                  </h5>
                  <div className="flex items-start gap-3 text-slate-600 leading-relaxed ml-11 border-l-2 border-slate-100 pl-6 py-2 italic bg-slate-50/50 rounded-r-xl">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Support Info */}
      <div className="mt-16 text-center border-t pt-10 border-slate-200">
        <p className="text-slate-400 text-sm">Bu bilgiler eğitim amaçlıdır. Poliçe düzenlenirken Genel Şartlar ve Özel Şartlar esastır.</p>
        <div className="mt-4 flex justify-center gap-6">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">ViennaLife Teknik Rehber v2.6.2</span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
