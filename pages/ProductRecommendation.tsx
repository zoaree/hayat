
import React, { useState, useEffect } from 'react';
import { RecommendationCriteria, RecommendationResult, recommendProducts } from '../data/recommendationLogic';
import { ProductData } from '../types';

interface StepProps {
    onNext: () => void;
    onBack: () => void;
    canProceed: boolean;
    children: React.ReactNode;
    title: string;
}

const Step: React.FC<StepProps> = ({ onNext, onBack, canProceed, children, title }) => (
    <div className="animate-fadeIn">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">{title}</h2>
        <div className="mb-8">{children}</div>
        <div className="flex justify-between mt-auto pt-4 border-t border-slate-100">
            <button
                onClick={onBack}
                className="px-6 py-2 rounded-xl text-slate-500 hover:bg-slate-100 font-medium transition-colors"
            >
                Geri
            </button>
            <button
                onClick={onNext}
                disabled={!canProceed}
                className={`px-8 py-2 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 
          ${canProceed ? 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-orange-500/30' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
            >
                Devam Et
            </button>
        </div>
    </div>
);

interface ProductRecommendationProps {
    onNavigate: (productId: string) => void;
}

const ProductRecommendation: React.FC<ProductRecommendationProps> = ({ onNavigate }) => {
    const [step, setStep] = useState(1);
    const [criteria, setCriteria] = useState<RecommendationCriteria>({
        age: 30,
        occupation: 'civilian',
        policyType: 'individual',
        goal: 'protection',
        budgetPreference: 'usd',
        durationPreference: 'any',
        concerns: [],
        familyStatus: 'single'
    });
    const [results, setResults] = useState<RecommendationResult[]>([]);

    const updateCriteria = (key: keyof RecommendationCriteria, value: any) => {
        setCriteria(prev => ({ ...prev, [key]: value }));
    };

    const calculateResults = () => {
        const recs = recommendProducts(criteria);
        setResults(recs);
        setStep(6); // Go to results step (or final step number)
    };

    // Step 1: Policy Type (Individual / Corporate)
    const renderStep1 = () => (
        <Step
            title="Kim için sigorta bakıyorsunuz?"
            onNext={() => setStep(2)}
            onBack={() => setStep(1)} // Disabled or handle exit
            canProceed={true}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                    onClick={() => updateCriteria('policyType', 'individual')}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${criteria.policyType === 'individual' ? 'border-orange-500 bg-orange-50' : 'border-slate-200 hover:border-orange-200'}`}
                >
                    <div className="text-3xl mb-2">👤</div>
                    <div className="font-bold text-lg text-slate-800">Kendim / Ailem İçin</div>
                    <div className="text-sm text-slate-500">Bireysel emeklilik, koruma ve birikim.</div>
                </button>
                <button
                    onClick={() => updateCriteria('policyType', 'corporate')}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${criteria.policyType === 'corporate' ? 'border-orange-500 bg-orange-50' : 'border-slate-200 hover:border-orange-200'}`}
                >
                    <div className="text-3xl mb-2">🏢</div>
                    <div className="font-bold text-lg text-slate-800">Şirketim İçin</div>
                    <div className="text-sm text-slate-500">Personel yan hakları veya kilit personel koruması.</div>
                </button>
            </div>
        </Step>
    );

    // Step 2: Corporate Goal OR Individual Profile
    const renderStep2 = () => {
        if (criteria.policyType === 'corporate') {
            return (
                <Step
                    title="Şirketinizin önceliği nedir?"
                    onNext={() => calculateResults()}
                    onBack={() => setStep(1)}
                    canProceed={true}
                >
                    <div className="space-y-3">
                        <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${criteria.corporateGoal === 'employee_benefits' ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}>
                            <input
                                type="radio"
                                name="corpGoal"
                                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
                                checked={criteria.corporateGoal === 'employee_benefits'}
                                onChange={() => updateCriteria('corporateGoal', 'employee_benefits')}
                            />
                            <span className="ml-3 font-medium text-slate-700">Personel Yan Hakları (Vergi Avantajı Odaklı)</span>
                        </label>
                        <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${criteria.corporateGoal === 'key_person' ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}>
                            <input
                                type="radio"
                                name="corpGoal"
                                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
                                checked={criteria.corporateGoal === 'key_person'}
                                onChange={() => updateCriteria('corporateGoal', 'key_person')}
                            />
                            <span className="ml-3 font-medium text-slate-700">Kilit Personel / Ortak Koruması</span>
                        </label>
                    </div>
                </Step>
            );
        }

        return (
            <Step
                title="Sizi biraz tanıyalım"
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
                canProceed={criteria.age > 17 && criteria.age < 76}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Yaşınız</label>
                        <input
                            type="number"
                            min="18"
                            max="75"
                            value={criteria.age}
                            onChange={(e) => updateCriteria('age', parseInt(e.target.value) || 0)}
                            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        />
                        {criteria.age && (criteria.age < 18 || criteria.age > 75) && (
                            <p className="text-red-500 text-xs mt-1">Yaş 18-75 aralığında olmalıdır.</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Mesleğiniz</label>
                        <select
                            value={criteria.occupation}
                            onChange={(e) => updateCriteria('occupation', e.target.value as any)}
                            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        >
                            <option value="civilian">Sivil / Özel Sektör / Memur</option>
                            <option value="soldier">Türk Silahlı Kuvvetleri Mensubu</option>
                            <option value="police">Emniyet Mensubu (Polis/Bekçi)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Medeni Durum / Aile</label>
                        <select
                            value={criteria.familyStatus}
                            onChange={(e) => updateCriteria('familyStatus', e.target.value as any)}
                            className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                        >
                            <option value="single">Bekar</option>
                            <option value="married_kids">Evli / Çocuklu</option>
                        </select>
                    </div>
                </div>
            </Step>
        );
    };

    // Step 3: Goal & Preferences (Individual)
    const renderStep3 = () => (
        <Step
            title="Beklentiniz nedir?"
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
            canProceed={true}
        >
            <div className="space-y-4">
                <h3 className="font-bold text-slate-800">Ana Hedef</h3>
                <div className="grid grid-cols-1 gap-3">
                    <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${criteria.goal === 'protection' ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}>
                        <input type="radio" name="goal" className="w-5 h-5 text-orange-600" checked={criteria.goal === 'protection'} onChange={() => updateCriteria('goal', 'protection')} />
                        <div className="ml-3">
                            <span className="block font-bold text-slate-700">Maksimum Koruma</span>
                            <span className="text-sm text-slate-500">Prim iadesi önceliğim değil, sevdiklerim için en yüksek teminatı istiyorum.</span>
                        </div>
                    </label>
                    <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${criteria.goal === 'savings_refund' ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}>
                        <input type="radio" name="goal" className="w-5 h-5 text-orange-600" checked={criteria.goal === 'savings_refund'} onChange={() => updateCriteria('goal', 'savings_refund')} />
                        <div className="ml-3">
                            <span className="block font-bold text-slate-700">Prim İadeli Koruma (ROP)</span>
                            <span className="text-sm text-slate-500">Süre sonunda risk gerçekleşmezse ödediğim primleri (dolara endeksli) geri alayım.</span>
                        </div>
                    </label>
                </div>

                <h3 className="font-bold text-slate-800 mt-6">Bütçe Hassasiyeti</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${criteria.budgetPreference === 'fixed_tl' ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}>
                        <input type="radio" name="budget" className="w-5 h-5 text-orange-600" checked={criteria.budgetPreference === 'fixed_tl'} onChange={() => updateCriteria('budgetPreference', 'fixed_tl')} />
                        <div className="ml-3">
                            <span className="block font-bold text-slate-700">Sabit TL (Karma)</span>
                            <span className="text-sm text-slate-500">Kurlar artsa da taksitim değişmesin.</span>
                        </div>
                    </label>
                    <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${criteria.budgetPreference === 'usd' ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}>
                        <input type="radio" name="budget" className="w-5 h-5 text-orange-600" checked={criteria.budgetPreference === 'usd'} onChange={() => updateCriteria('budgetPreference', 'usd')} />
                        <div className="ml-3">
                            <span className="block font-bold text-slate-700">Dolar Endeksli</span>
                            <span className="text-sm text-slate-500">Ödemelerim ve teminatım dolarla artsın.</span>
                        </div>
                    </label>
                </div>
            </div>
        </Step>
    );

    // Step 4: Concerns
    const renderStep4 = () => {
        const toggleConcern = (concern: 'critical_illness' | 'accident' | 'disability') => {
            const newConcerns = criteria.concerns.includes(concern)
                ? criteria.concerns.filter(c => c !== concern)
                : [...criteria.concerns, concern];
            updateCriteria('concerns', newConcerns);
        };

        return (
            <Step
                title="Hangi riskler sizi endişelendiriyor?"
                onNext={() => calculateResults()}
                onBack={() => setStep(3)}
                canProceed={true}
            >
                <div className="grid grid-cols-1 gap-4">
                    <button
                        onClick={() => toggleConcern('critical_illness')}
                        className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${criteria.concerns.includes('critical_illness') ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}
                    >
                        <div className="text-left">
                            <span className="block font-bold text-slate-800">Kritik Hastalıklar</span>
                            <span className="text-sm text-slate-500">Kanser, kalp krizi vb. durumlarda tazminat.</span>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${criteria.concerns.includes('critical_illness') ? 'border-orange-500 bg-orange-500 text-white' : 'border-slate-300'}`}>
                            {criteria.concerns.includes('critical_illness') && '✓'}
                        </div>
                    </button>
                    <button
                        onClick={() => toggleConcern('accident')}
                        className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${criteria.concerns.includes('accident') ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}
                    >
                        <div className="text-left">
                            <span className="block font-bold text-slate-800">Kaza Riski</span>
                            <span className="text-sm text-slate-500">Kaza sonucu vefat/yaralanmada ek tazminat.</span>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${criteria.concerns.includes('accident') ? 'border-orange-500 bg-orange-500 text-white' : 'border-slate-300'}`}>
                            {criteria.concerns.includes('accident') && '✓'}
                        </div>
                    </button>
                    <button
                        onClick={() => toggleConcern('disability')}
                        className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${criteria.concerns.includes('disability') ? 'border-orange-500 bg-orange-50' : 'border-slate-200'}`}
                    >
                        <div className="text-left">
                            <span className="block font-bold text-slate-800">Maluliyet / Sakatlık</span>
                            <span className="text-sm text-slate-500">İş göremezlik durumunda tazminat.</span>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${criteria.concerns.includes('disability') ? 'border-orange-500 bg-orange-500 text-white' : 'border-slate-300'}`}>
                            {criteria.concerns.includes('disability') && '✓'}
                        </div>
                    </button>
                </div>
            </Step>
        );
    };

    const renderResults = () => {
        // Top 2 results
        const topResults = results.slice(0, 3);

        return (
            <div className="animate-fadeIn">
                <div className="text-center mb-10">
                    <div className="inline-block p-4 rounded-full bg-orange-100 text-4xl mb-4">🎉</div>
                    <h2 className="text-3xl font-bold text-slate-900">Size En Uygun Ürünler</h2>
                    <p className="text-slate-500 mt-2">Cevaplarınıza göre analiz ettik ve işte önerilerimiz.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {topResults.map((result, index) => (
                        <div key={result.product.id} className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${index === 0 ? 'border-orange-500 ring-4 ring-orange-100' : 'border-transparent'}`}>
                            {index === 0 && (
                                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                                    EN UYGUN
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 truncate" title={result.product.name}>{result.product.name}</h3>
                                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{result.product.summary}</p>

                                <div className="bg-orange-50 rounded-xl p-4 mb-4">
                                    <p className="text-xs font-bold text-orange-800 uppercase mb-2">NEDEN BU ÜRÜN?</p>
                                    <ul className="space-y-1">
                                        {result.reason.map((r, i) => (
                                            <li key={i} className="text-sm text-orange-700 flex items-start">
                                                <span className="mr-2">•</span>
                                                {r}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-100">
                                    <button
                                        onClick={() => onNavigate(result.product.id)}
                                        className="w-full py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors"
                                    >
                                        İncele
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button onClick={() => setStep(1)} className="text-slate-500 hover:text-orange-600 font-medium underline">
                        Baştan Başla
                    </button>
                </div>
            </div>
        )
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col">
                {step < 6 ? (
                    <>
                        {/* Progress Bar */}
                        <div className="w-full bg-slate-100 h-2 rounded-full mb-8">
                            <div
                                className="bg-orange-500 h-2 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${(step / 5) * 100}%` }}
                            ></div>
                        </div>
                        {step === 1 && renderStep1()}
                        {step === 2 && renderStep2()}
                        {step === 3 && renderStep3()}
                        {step === 4 && renderStep4()}
                    </>
                ) : (
                    renderResults()
                )}
            </div>
        </div>
    );
};

export default ProductRecommendation;
