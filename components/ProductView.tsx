
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

      {/* Modern Tabs - Scrollable on mobile */}
      <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 mb-6 sm:mb-10 text-nowrap snap-x snap-mandatory no-scrollbar">
        <div className="flex gap-2 sm:gap-1 p-1.5 sm:p-1 bg-slate-200/50 rounded-2xl w-max mx-auto sm:w-fit sm:mx-0">
          {[
            { id: 'overview', label: 'Genel Bakış' },
            { id: 'coverage', label: 'Teminatlar' },
            { id: 'lifecycle', label: 'Teknik İşleyiş (Eğitim)' },
            { id: 'faq', label: 'Müşteri Soruları (SSS)' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab.id
                ? 'bg-white text-orange-600 shadow-md scale-105'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              {tab.label}
            </button>
          ))}
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
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.coverages.map((c, i) => (
                <div key={i} className={`group relative p-8 rounded-3xl border transition-all hover:shadow-xl ${c.isMain ? 'bg-white border-orange-500 ring-2 ring-orange-500/10' : 'bg-white border-slate-200'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h5 className={`font-black text-xl ${c.isMain ? 'text-orange-600' : 'text-slate-900'}`}>{c.title}</h5>
                    {c.isMain && <span className="bg-orange-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-black">ANA</span>}
                  </div>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed min-h-[60px]">{c.description}</p>

                  <div className="space-y-3 border-t border-slate-100 pt-6">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-bold uppercase tracking-widest">Limit</span>
                      <span className="text-slate-900 font-black">{c.limits}</span>
                    </div>
                    {c.impactOnPolicy && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-bold uppercase tracking-widest">Poliçe Sonucu</span>
                        <span className="text-red-600 font-black">{c.impactOnPolicy}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Wait Periods as timeline */}
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
              <h4 className="text-2xl font-black mb-8 flex items-center gap-2">
                <span className="p-2 bg-slate-900 text-white rounded-lg text-sm">📅</span>
                Önemli Süreler ve Beklemeler
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.waitingPeriods.map((wp, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <span className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-1">{wp.title}</span>
                    <span className="text-slate-900 font-black text-lg">{wp.period}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detaylı Kritik Hastalıklar Render */}
            {product.detailedIllnesses && (
              <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="flex flex-col mb-10 relative z-10">
                  <h4 className="text-3xl font-black flex items-center gap-3">
                    🧬 17 Kritik Hastalık Rehberi
                  </h4>
                  <p className="text-slate-400 mt-2 font-medium">
                    <span className="bg-orange-500 text-white px-2 py-0.5 rounded mr-2 uppercase text-[10px] font-black">Önemli:</span>
                    Detayları ve istisnaları öğrenmek için hastalığa tıklayın.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                  {product.detailedIllnesses.map((ill, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedIllness(ill)}
                      className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700 hover:border-orange-500 hover:bg-slate-800 transition-all text-left"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-700 text-slate-400 group-hover:bg-orange-500 font-bold text-xs shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm font-bold tracking-tight">{ill.name.replace(/^\d+\.\s*/, '')}</span>
                    </button>
                  ))}
                </div>

                {/* Illness Detail Modal/Panel - PORTAL UPDATE */}
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

            {/* Maluliyet Kriterleri Render */}
            {product.disabilityCriteria && (
              <div className="bg-blue-900 p-10 rounded-[3rem] text-white shadow-2xl">
                <div className="flex flex-col mb-10">
                  <h4 className="text-3xl font-black flex items-center gap-3">
                    ♿ İş Göremezlik (Maluliyet) Kriterleri
                  </h4>
                  <p className="text-blue-200 mt-2 font-medium">
                    <span className="bg-orange-500 text-white px-2 py-0.5 rounded mr-1">EĞİTİM NOTU:</span>
                    Tazminat için 6 Günlük Yaşam Faaliyetinden <strong>en az 3'ünün</strong> yapılamıyor olması gerekir.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {product.disabilityCriteria.map((crit, i) => (
                    <div key={i} className="group flex items-center gap-4 bg-blue-800/50 p-5 rounded-2xl border border-blue-700 hover:border-orange-500 transition-all cursor-default shadow-lg">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-700 text-blue-200 group-hover:bg-orange-500 group-hover:text-white font-black transition-all shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-bold tracking-tight leading-tight">{crit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'lifecycle' && (
          <div className="space-y-8">
            {/* Educational Header */}
            <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="font-black text-orange-900 mb-1">Eğitim Notu: Matematiksel Karşılık Nedir?</h4>
                <p className="text-orange-800 text-sm leading-relaxed">
                  İade tutarları (iştirak bedeli), müşterinin ödediği toplam primden değil; sigorta şirketinin yaptığı masraflar ve o ana kadarki risk maliyetleri düşüldükten sonra kalan <strong>"Matematiksel Karşılık"</strong> üzerinden hesaplanır.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tenzil Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">🛡️</div>
                    <h4 className="text-xl font-black text-slate-900">Tenzil</h4>
                  </div>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500">DONDURMA</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.lifecycle.tenzil}</p>
                <div className="space-y-2">
                  <div className="bg-blue-50 p-3 rounded-xl text-[11px] text-blue-700">
                    <span className="font-bold block mb-1">Basitçe:</span>
                    "Prim ödemeyi bırakıyorum ama korumam (indirgenerek) devam etsin."
                  </div>
                  <p className="text-[10px] text-slate-400 font-bold">* Hak kazanmak için en az 12 ay ödeme şart.</p>
                </div>
              </div>

              {/* Istirak Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl">💸</div>
                    <h4 className="text-xl font-black text-slate-900">İştirak</h4>
                  </div>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500">BOZMA</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.lifecycle.istirak}</p>

                {product.lifecycle.istirakTable && (
                  <div className="space-y-1.5 mb-4">
                    {product.lifecycle.istirakTable.map((row, i) => (
                      <div key={i} className={`flex justify-between p-2 rounded-lg text-xs ${i === 0 ? 'bg-red-50 text-red-700 font-bold' : 'bg-slate-50 text-slate-600'}`}>
                        <span>{row.label}</span>
                        <span>{row.rate}</span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-[10px] text-slate-400 italic leading-tight">
                  * İlk 12 ay iade sıfırdır. İştirak bedeli matematiksel karşılık x (1-kesinti oranı) şeklinde hesaplanır.
                </p>
                {product.premiumBreakdown && (
                  <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-100 text-[10px] text-green-700 font-bold uppercase tracking-tight">
                    🎁 60. Ay sonu ayrılırsa ÖDÜL'ün %75'i de ödenir!
                  </div>
                )}
              </div>

              {/* Ikraz Card */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-100 text-green-600 rounded-2xl">🏦</div>
                    <h4 className="text-xl font-black text-slate-900">İkraz</h4>
                  </div>
                  <span className="text-[10px] bg-slate-100 px-2 py-1 rounded font-bold text-slate-500">BORÇ ALMA</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {product.lifecycle.ikraz || "Bu ürün için borç alma özelliği belirtilmemiştir."}
                </p>
                {product.lifecycle.ikraz && (
                  <div className="bg-green-50 p-4 rounded-xl text-[11px] text-green-700">
                    <span className="font-bold block mb-1">Avantajı:</span>
                    Poliçeyi bozmadan, hayat sigortası haklarınızı kaybetmeden acil nakit ihtiyacını karşılar.
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                  <span className="p-2 bg-orange-500 rounded-lg text-sm">⏱️</span>
                  Ara Verme Hakkı
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{product.lifecycle.araVerme}</p>
                <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-orange-200">
                  <strong>Not:</strong> Ara verme süresi poliçe vadesine eklenerek bitiş tarihini öteler.
                </div>
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h4 className="text-xl font-black mb-4 text-red-900 flex items-center gap-2">
                  <span className="p-2 bg-red-500 text-white rounded-lg text-sm">🏁</span>
                  Sözleşme Ne Zaman Biter?
                </h4>
                <p className="text-red-700 text-sm leading-relaxed">{product.lifecycle.sonlanma}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.exclusions.slice(0, 2).map((exc, i) => (
                    <span key={i} className="text-[10px] bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold uppercase">
                      {exc.split(' ')[0]} RİSKİ ❌
                    </span>
                  ))}
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
          <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter">ViennaLife Teknik Rehber v2.6</span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
