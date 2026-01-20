
import React, { useState, useEffect } from 'react';

interface InfoItem {
  id: string;
  category: 'Hukuk' | 'Teknik' | 'Satış' | 'Güvence';
  title: string;
  short: string;
  details: string[];
  proTip: string;
  icon: string;
}

const ACADEMY_DATA: InfoItem[] = [
  // HUKUK KATEGORİSİ
  {
    id: 'h1',
    category: 'Hukuk',
    title: 'Edim, Alacaklı & Borçlu',
    short: 'Sözleşmenin 3 temel yasal ayağı.',
    icon: '⚖️',
    details: [
      "Edim: Borçlunun yerine getirmekle yükümlü olduğu davranış (Vermek, Yapmak veya Yapmamak).",
      "Alacaklı: Edimi isteme yetkisi olan taraf (Sigortalı/Lehtar).",
      "Borçlu: Edimi yerine getirmek zorunda olan taraf (Sigorta Şirketi).",
      "Sigortada Edim: Müşterinin edimi 'prim ödemek', şirketin edimi 'riziko anında tazminat ödemek'tir."
    ],
    proTip: "Müşteriye deki: 'Siz prim ediminizi yerine getirdiğiniz an, biz yasal borçlu haline geliriz ve devlet bu borcu garanti eder.'"
  },
  {
    id: 'h2',
    category: 'Hukuk',
    title: 'İrade Bozuklukları',
    short: 'Sözleşmeyi geçersiz kılan 3 kritik hal.',
    icon: '🧠',
    details: [
      "Yanılma (Hata): Bilmeyerek yanlış beyan vermek (Sözleşme iptal edilebilir).",
      "Aldatma (Hile): Kasden yanıltılma (Genellikle dolandırıcılık kapsamında değerlendirilir).",
      "Korkutma (İkrah): Tehdit veya baskı altında imza atma.",
      "Muvazaa: Tarafların üçüncü kişileri aldatmak için yaptıkları 'sözde' işlemler.",
      "Sonuç: Bu hallerde 1 yıl içinde sözleşme iptal davası açılabilir."
    ],
    proTip: "Dürüstlük ilkesi (Azami İyi Niyet) sigortanın temelidir, her şeyi doğru beyan etmeliyiz."
  },
  {
    id: 'h3',
    category: 'Hukuk',
    title: 'Beyan Yükümlülüğü',
    short: 'Poliçe onayının en kritik maddesi.',
    icon: '📝',
    details: [
      "Müşteri, teklif aşamasında bildiği tüm hastalıkları ve riskleri söylemek zorundadır.",
      "Eksik Beyan: Şirket tazminat ödemeyi reddedebilir veya cayma hakkını kullanabilir.",
      "Cayma Hakkı: Şirket eksik beyanı öğrendiği andan itibaren 1 ay içinde cayabilir.",
      "İyiniyet Karinesi: Aksi ispatlanana kadar müşterinin beyanı doğru kabul edilir."
    ],
    proTip: "Müşteriye deki: 'Sağlık beyanındaki tek bir eksik, 10 yıllık birikiminizi riske atabilir. Gelin her şeyi eksiksiz yazalım.'"
  },
  {
    id: 'h4',
    category: 'Hukuk',
    title: 'Lehtar ve Sigortalı Kavramı',
    short: 'Kimin hayatı, kime para ödenir?',
    icon: '👤',
    details: [
      "Sigorta Ettiren: Primi ödeyen (Tüzel veya Gerçek kişi).",
      "Sigortalı: Hayatı üzerine poliçe yapılan kişi.",
      "Lehtar: Vefat durumunda parayı alacak olan kişi (Varis olmak zorunda değildir).",
      "Değişiklik: Lehtar her zaman değiştirilebilir (Vefat anına kadar)."
    ],
    proTip: "Lehtarın varislerden biri olması şart değildir, müşteri istediği kişiyi (hatta bir vakfı) seçebilir."
  },

  // TEKNİK KATEGORİSİ
  {
    id: 't1',
    category: 'Teknik',
    title: 'Tenzil (Dondurma)',
    short: 'Ödemeye ara verince haklar nasıl korunur?',
    icon: '❄️',
    details: [
      "En az 12 ay ödemeden sonra kullanılabilir.",
      "Poliçe iptal olmaz, sadece teminatlar 'indirgenerek' dondurulur.",
      "Kâr Payı: Birikmiş para kâr payı almaya devam eder.",
      "İhya: Müşteri istediği zaman tekrar prim ödemeye başlayıp poliçeyi canlandırabilir."
    ],
    proTip: "Müşteriye 'Poliçeniz bitmiyor, sadece uyku moduna geçiyor ve değerlenmeye devam ediyor' deyin."
  },
  {
    id: 't2',
    category: 'Teknik',
    title: 'Riyazi İhtiyat (Matematik Rezerv)',
    short: 'Paranızın sigorta kalesi ve garantisi.',
    icon: '🏰',
    details: [
      "Şirketin size olan borcunu ödemek için ayırdığı yasal karşılıktır.",
      "Primlerden masraf ve risk payı çıktıktan sonra kalan 'tasarruf' kısmıdır.",
      "Hazine Blokajı: Bu tutarlar Hazine lehine bloke edilir, şirket batarsa bile dokunulamaz.",
      "Devlet Güvencesi: Banka mevduatından daha geniş bir yasal korumaya sahiptir."
    ],
    proTip: "Müşteriye bu paranın 'Hazine kontrolünde' olduğunu vurgulamak güveni perçinler."
  },
  {
    id: 't3',
    category: 'Teknik',
    title: 'Underwriting (Risk Seçimi)',
    short: 'Poliçe onay mutfağı nasıl çalışır?',
    icon: '🔬',
    details: [
      "UW Süreci: Şirketin risk kabul mühendisliğidir. Sağlık beyanlarınız burada incelenir.",
      "Sürprim: Standart dışı bir risk (kilo, tansiyon vb.) varsa, primde küçük bir artış yapılarak koruma sağlanır.",
      "30 Gün Kuralı: Şirket teklifi 30 gün içinde reddetmezse poliçe kabul edilmiş sayılır.",
      "Red Sebepleri: Ağır kronik hastalıklar veya kabul edilemez riskler poliçeyi engelleyebilir."
    ],
    proTip: "Sürprim gelen müşteriye: 'Şirket sizin riskinizi görüyor ama sizi korumak için elinden geleni yapıyor' deyin."
  },

  // SATIŞ KATEGORİSİ
  {
    id: 's1',
    category: 'Satış',
    title: 'FAB Tekniği (Özellik-Avantaj-Fayda)',
    short: 'Ürünü değil, hayatı satın.',
    icon: '🚀',
    details: [
      "Feature (Özellik): 'USD bazlı prim iadesi.'",
      "Advantage (Avantaj): 'Döviz artışından etkilenmez, paranız korunur.'",
      "Benefit (Fayda): '12 yıl sonra çocuğunuzun üniversite parası hazır olur.'",
      "Odak: Her zaman müşterinin 'Fayda'sına odaklanın."
    ],
    proTip: "Özellikler teknik kısımdır, faydalar ise duygusal. Satışı fayda yaptırır."
  },
  {
    id: 's2',
    category: 'Satış',
    title: 'Referans Alma Sanatı',
    short: 'En ucuz ve en sıcak aday bulma yöntemi.',
    icon: '📞',
    details: [
      "An: Satış kapandıktan veya güven oluştuktan hemen sonra isteyin.",
      "Yöntem: 'Sizin gibi bilinçli, ailesini düşünen 3 arkadaşınızın ismini alabilir miyim?'",
      "Kayıt: İsimleri VCoach sistemine hemen işleyin.",
      "Güç: Referansla gidilen randevuların satışa dönme oranı 3 kat daha yüksektir."
    ],
    proTip: "Müşteriden isim değil, 'yardım' isteyin. İnsanlar yardım etmeyi sever."
  },

  // GÜVENCE KATEGORİSİ
  {
    id: 'g1',
    category: 'Güvence',
    title: 'VIG: 200 Yıllık Dev Güç',
    short: 'Arkanızdaki Avrupa devini tanıyın.',
    icon: '🇪🇺',
    details: [
      "Vienna Insurance Group (VIG), 200 yıllık tecrübesiyle Orta ve Doğu Avrupa lideridir.",
      "Reasürans: ViennaLife riskleri, VIG RE ve dünya devleri tarafından desteklenir.",
      "Sermaye: Türkiye'deki hayat şirketleri arasında sermaye yeterliliği en yüksek şirketlerden biridir.",
      "Süreklilik: Savaşlar ve krizler görmüş, hepsinden başarıyla çıkmış bir yapı."
    ],
    proTip: "Müşteri 'şirket batarsa' dediğinde, 200 yıldır batmayan bu dev yapıyı anlatın."
  },
  {
    id: 'g2',
    category: 'Güvence',
    title: 'Sigorta Tahkim Sistemi',
    short: 'Uyuşmazlıklarda devlet güvencesi.',
    icon: '🛡️',
    details: [
      "Müşteri ile şirket arasında sorun çıkarsa, mahkemeye gitmeden Tahkim'e başvurulabilir.",
      "Hızlı Çözüm: 4-8 ay içinde kesin karar verilir.",
      "Bağımsızlık: Hakemler tarafsız hukukçulardır.",
      "Yasal Güç: Tahkim kararları ilamlı icra (mahkeme kararı) gücündedir."
    ],
    proTip: "Tahkim sistemi, sigortalının sigorta devine karşı en büyük yasal kalkanıdır."
  }
];

const GLOSSARY_TERMS = [
  { term: 'Muaccel', def: 'Ödeme zamanı gelmiş borç.' },
  { term: 'Müeccel', def: 'Vadesi henüz gelmemiş borç.' },
  { term: 'İnkıta', def: 'Poliçenin primsiz kalıp durması.' },
  { term: 'İhya', def: 'Duran poliçeyi canlandırma.' },
  { term: 'İkraz', def: 'Poliçeden borç alma.' },
  { term: 'Stopaj', def: 'Süre sonu getiriden alınan vergi.' }
];

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Hukuk' | 'Teknik' | 'Satış' | 'Güvence'>('Hukuk');
  const [selectedInfo, setSelectedInfo] = useState<InfoItem | null>(null);

  // Modal açıldığında sayfanın kaymasını engelle
  useEffect(() => {
    if (selectedInfo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedInfo]);

  const categories = [
    { id: 'Hukuk', label: 'Temel Hukuk', icon: '⚖️' },
    { id: 'Teknik', label: 'Ürün Tekniği', icon: '⚙️' },
    { id: 'Satış', label: 'Satış Sanatı', icon: '💰' },
    { id: 'Güvence', label: 'Yasal Haklar', icon: '🛡️' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-['Inter']">
      {/* Header Area */}
      <div className="bg-slate-900 pt-20 pb-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-orange-500/10 rounded-full blur-[80px] sm:blur-[100px]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 border border-orange-500/30">
                ViennaLife Akademi v4.0
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Danışman <br />
                <span className="text-orange-500">Bilgi Kütüphanesi</span>
              </h1>
            </div>

            {/* Scrollable Categories for Mobile */}
            <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              <div className="flex flex-nowrap lg:flex-wrap gap-2 p-1.5 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 w-max mx-auto lg:mx-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id as any)}
                    className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all whitespace-nowrap ${activeTab === cat.id
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    <span>{cat.icon}</span>
                    <span className="uppercase tracking-tighter">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 -mt-12 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACADEMY_DATA.filter(item => item.category === activeTab).map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedInfo(item)}
              className="group text-left bg-white p-8 rounded-[2.5rem] border-2 border-transparent hover:border-orange-500/20 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 group-hover:bg-orange-50 rounded-bl-[4rem] -mr-10 -mt-10 transition-colors"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm font-bold leading-relaxed mb-6">
                  {item.short}
                </p>
                <div className="flex items-center gap-2 text-orange-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  Detayları Gör
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Glossary Quick View */}
        <div className="mt-20">
          <h3 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest border-l-4 border-orange-500 pl-4">Hızlı Terimler Sözlüğü</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {GLOSSARY_TERMS.map((gt, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <span className="block text-orange-600 font-black text-xs uppercase mb-1">{gt.term}</span>
                <span className="text-slate-500 text-[10px] font-bold leading-tight">{gt.def}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Motivation Card */}
        <div className="mt-16 p-10 bg-slate-900 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-3xl shrink-0 animate-pulse">💡</div>
          <div className="relative z-10">
            <h4 className="text-xl font-black text-white mb-1 tracking-tight">Baba, Başarının Sırrı Şurada:</h4>
            <p className="text-slate-400 font-medium leading-relaxed">
              "Bilgi, güveni; güven ise satışı getirir. Bu sayfadaki her kart senin masadaki otoriteni artıracak bir silahtır.
              Müşteriye teknik terimleri değil, onların hayatındaki karşılığını anlat."
            </p>
          </div>
        </div>
      </div>

      {/* Detail Modal - Fixed Center Layout */}
      {selectedInfo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          {/* Backdrop Click-to-Close */}
          <div className="absolute inset-0" onClick={() => setSelectedInfo(null)}></div>

          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl relative overflow-hidden animate-cardIn z-10 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-slate-900 shrink-0 h-28 sm:h-24 flex items-center px-6 sm:px-12 relative">
              <button
                onClick={() => setSelectedInfo(null)}
                className="absolute top-4 right-6 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <div className="absolute -bottom-6 left-6 sm:left-12 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl flex items-center justify-center text-3xl sm:text-4xl border border-slate-100">
                {selectedInfo.icon}
              </div>
              <div className="ml-20 sm:ml-24 text-white">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 opacity-80">{selectedInfo.category} DOSYASI</span>
                <h2 className="text-lg sm:text-2xl font-black mt-1 tracking-tight leading-tight">{selectedInfo.title}</h2>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-12 pt-10 sm:pt-16 overflow-y-auto no-scrollbar flex-1">
              <div className="space-y-6 sm:space-y-8">
                {selectedInfo.details.map((detail, idx) => (
                  <div key={idx} className="flex gap-4 sm:gap-6 animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 font-black text-orange-500 text-xs shadow-inner">
                      {idx + 1}
                    </div>
                    <p className="text-slate-600 text-base sm:text-lg font-semibold leading-snug">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Special Advisor Note */}
              <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-start gap-4 sm:gap-6">
                <div className="text-3xl sm:text-4xl shrink-0">👨‍🏫</div>
                <div>
                  <h5 className="text-slate-400 font-black uppercase text-[10px] tracking-widest mb-1">Danışman Taktiği</h5>
                  <p className="text-slate-700 text-sm font-bold italic leading-relaxed">
                    "{selectedInfo.proTip}"
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedInfo(null)}
                className="w-full mt-8 py-4 sm:py-5 bg-slate-900 text-white font-black rounded-2xl sm:rounded-3xl hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] uppercase tracking-widest text-[10px] sm:text-xs"
              >
                Bilgiyi Cebime Koydum
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-cardIn {
          animation: cardIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Home;
