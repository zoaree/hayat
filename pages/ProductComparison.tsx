import React, { useState } from 'react';
import { products } from '../data';
import { ProductData } from '../types';

const ProductComparison: React.FC = () => {
    const [product1Id, setProduct1Id] = useState<string>('');
    const [product2Id, setProduct2Id] = useState<string>('');

    const product1 = products.find(p => p.id === product1Id);
    const product2 = products.find(p => p.id === product2Id);

    return (
        <div className="min-h-screen bg-slate-50 font-['Inter'] pb-20 pt-20 md:pt-10">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8">

                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        Karşılaştırma Modülü
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                        Ürün <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Kıyaslama</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        İki farklı ürünü yan yana getirerek özelliklerini, avantajlarını ve teknik detaylarını karşılaştırın.
                    </p>
                </div>

                {/* Selection Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10">
                    {/* Product 1 Selector */}
                    <div className={`p-4 rounded-2xl border-2 transition-all ${product1 ? 'bg-white border-orange-500 shadow-xl shadow-orange-500/10' : 'bg-white border-dashed border-slate-300'}`}>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">1. Ürün Seçimi</label>
                        <select
                            value={product1Id}
                            onChange={(e) => setProduct1Id(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-3 font-bold cursor-pointer"
                        >
                            <option value="">Seçiniz...</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id} disabled={p.id === product2Id}>{p.name}</option>
                            ))}
                        </select>
                        {product1 && (
                            <div className="mt-4 animate-fadeIn">
                                <div className="text-orange-600 font-bold text-[10px] uppercase tracking-widest mb-1">Seçilen Ürün</div>
                                <div className="font-black text-xl text-slate-900 leading-tight">{product1.name}</div>
                            </div>
                        )}
                    </div>

                    {/* Product 2 Selector */}
                    <div className={`p-4 rounded-2xl border-2 transition-all ${product2 ? 'bg-white border-blue-500 shadow-xl shadow-blue-500/10' : 'bg-white border-dashed border-slate-300'}`}>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">2. Ürün Seçimi</label>
                        <select
                            value={product2Id}
                            onChange={(e) => setProduct2Id(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block p-3 font-bold cursor-pointer"
                        >
                            <option value="">Seçiniz...</option>
                            {products.map(p => (
                                <option key={p.id} value={p.id} disabled={p.id === product1Id}>{p.name}</option>
                            ))}
                        </select>
                        {product2 && (
                            <div className="mt-4 animate-fadeIn">
                                <div className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-1">Seçilen Ürün</div>
                                <div className="font-black text-xl text-slate-900 leading-tight">{product2.name}</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Comparison Content */}
                {product1 && product2 ? (
                    <div className="space-y-8 animate-fadeIn">

                        {/* 1. Genel Bakış */}
                        <Section title="Genel Bakış" icon="📋">
                            <Row label="Ürün Sloganı" p1={product1.tagline} p2={product2.tagline} highlight />
                            <Row label="Özet" p1={product1.summary} p2={product2.summary} />
                            <Row label="Para Birimi" p1={product1.currency} p2={product2.currency} />
                            <Row label="Sigorta Türü" p1={product1.type} p2={product2.type} />
                            <Row label="Süre" p1={product1.duration} p2={product2.duration} />
                            <Row label="Yenileme" p1={product1.renewal} p2={product2.renewal} />
                            <Row label="Max Giriş Yaşı" p1={product1.maxAgeFormula} p2={product2.maxAgeFormula} />
                        </Section>

                        {/* 2. Teminatlar */}
                        <Section title="Teminatlar" icon="🛡️">
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                {/* P1 Teminatlar */}
                                <div className="space-y-4">
                                    {product1.coverages.map((c, i) => (
                                        <div key={i} className={`p-4 rounded-xl border ${c.isMain ? 'bg-orange-50 border-orange-100' : 'bg-white border-slate-100'}`}>
                                            <div className="font-bold text-slate-900 mb-1">{c.title}</div>
                                            <p className="text-xs text-slate-500 mb-2">{c.description}</p>
                                            <div className="text-[10px] font-bold uppercase text-slate-400">Limit: <span className="text-slate-700">{c.limits}</span></div>
                                        </div>
                                    ))}
                                </div>
                                {/* P2 Teminatlar */}
                                <div className="space-y-4">
                                    {product2.coverages.map((c, i) => (
                                        <div key={i} className={`p-4 rounded-xl border ${c.isMain ? 'bg-blue-50 border-blue-100' : 'bg-white border-slate-100'}`}>
                                            <div className="font-bold text-slate-900 mb-1">{c.title}</div>
                                            <p className="text-xs text-slate-500 mb-2">{c.description}</p>
                                            <div className="text-[10px] font-bold uppercase text-slate-400">Limit: <span className="text-slate-700">{c.limits}</span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Section>

                        {/* 3. Yaşam Döngüsü */}
                        <Section title="Yaşam Döngüsü (Tenzil/İştira/İkraz)" icon="🔄">
                            <Row label="Tenzil (Dondurma)" p1={product1.lifecycle.tenzil} p2={product2.lifecycle.tenzil} />
                            <Row label="İştira (Ayrılma)" p1={product1.lifecycle.istirak} p2={product2.lifecycle.istirak} />
                            <Row label="İkraz (Borç Alma)" p1={product1.lifecycle.ikraz} p2={product2.lifecycle.ikraz} />
                        </Section>

                        {/* 4. Vergi Avantajı */}
                        <Section title="Vergi Avantajı" icon="💰">
                            <Row label="Vergi İndirimi" p1={product1.taxAdvantage} p2={product2.taxAdvantage} highlight />
                        </Section>

                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                        <div className="text-6xl mb-6 opacity-20">⚖️</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Karşılaştırma Bekleniyor</h3>
                        <p className="text-slate-500">Lütfen yukarıdaki alanlardan karşılaştırmak istediğiniz iki ürünü seçin.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

// Sub-components for cleaner code
const Section: React.FC<{ title: string; icon: string; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-lg shadow-slate-200/50 overflow-hidden">
        <div className="bg-slate-50/50 border-b border-slate-100 p-6 flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-xl font-black text-slate-900">{title}</h3>
        </div>
        <div className="p-6 md:p-8 space-y-6">
            {children}
        </div>
    </div>
);

const Row: React.FC<{ label: string; p1: string; p2: string; highlight?: boolean }> = ({ label, p1, p2, highlight }) => (
    <div className="relative group">
        {/* Mobile: Label on top */}
        <div className="md:hidden text-center mb-2">
            <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-sm">
                {label}
            </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative">
            {/* Desktop: Label in center absolute */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-3 z-10 justify-center w-full pointer-events-none">
                <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-sm">
                    {label}
                </span>
            </div>

            {/* P1 Content - Orange Border */}
            <div className={`p-5 rounded-2xl border-2 transition-all h-full flex flex-col justify-center ${highlight ? 'bg-orange-50 border-orange-200 shadow-lg shadow-orange-500/10' : 'bg-slate-50 border-orange-100 hover:border-orange-200'}`}>
                {/* Mobile Identity Label */}
                <div className="md:hidden text-[10px] font-black uppercase text-orange-500 mb-1 tracking-widest">1. Ürün</div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed text-center md:text-left">{p1}</p>
            </div>

            {/* P2 Content - Blue Border */}
            <div className={`p-5 rounded-2xl border-2 transition-all h-full flex flex-col justify-center ${highlight ? 'bg-blue-50 border-blue-200 shadow-lg shadow-blue-500/10' : 'bg-slate-50 border-blue-100 hover:border-blue-200'}`}>
                {/* Mobile Identity Label */}
                <div className="md:hidden text-[10px] font-black uppercase text-blue-500 mb-1 tracking-widest">2. Ürün</div>
                <p className="text-sm font-medium text-slate-700 leading-relaxed text-center md:text-left">{p2}</p>
            </div>
        </div>
    </div>
);

export default ProductComparison;
