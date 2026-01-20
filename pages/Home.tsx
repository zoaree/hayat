import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

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
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedInfo]);

  const categories = [
    { id: 'Hukuk', label: 'Temel Hukuk', icon: '⚖️' },
    { id: 'Teknik', label: 'Ürün Tekniği', icon: '⚙️' },
    { id: 'Satış', label: 'Satış Sanatı', icon: '💰' },
    { id: 'Güvence', label: 'Yasal Haklar', icon: '🛡️' }
  ];

  return (
    <div className="font-['Inter'] relative min-h-screen">
      {/* Dynamic Backgrounds */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-100 to-transparent -z-10"></div>

      {/* Header Section */}
      <div className="pt-12 sm:pt-20 pb-16 px-4 sm:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            {/* Title Area */}
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-orange-400/20 rounded-full blur-3xl opacity-50"></div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-xl shadow-slate-900/10">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                ViennaLife Akademi v4.0
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-[0.9] tracking-tight">
                Danışman <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                  Bilgi Kütüphanesi
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                Sahadaki gücünüzü artıracak teknik, hukuki ve satış stratejileri tek bir merkezde.
              </p>
            </div>

            {/* Category Filter */}
            <div className="w-full lg:w-auto mt-6 lg:mt-0">
              <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 sm:gap-3 bg-white p-2 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 w-full lg:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id as any)}
                    className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-[1.5rem] text-sm font-bold transition-all duration-300 relative overflow-hidden group ${activeTab === cat.id
                      ? 'bg-slate-900 text-white shadow-lg scale-100'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                  >
                    <span className={`text-xl sm:text-2xl transition-transform duration-300 ${activeTab === cat.id ? 'scale-110' : 'grayscale group-hover:grayscale-0'}`}>{cat.icon}</span>
                    <span className="uppercase tracking-wide text-[10px] sm:text-sm text-center sm:text-left">{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ACADEMY_DATA.filter(item => item.category === activeTab).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedInfo(item)}
              className="group cursor-pointer bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
            >
              {/* Card Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-50 to-orange-50/50 rounded-bl-[100px] transition-all group-hover:scale-110"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-orange-500/30">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  {item.short}
                </p>

                <div className="flex items-center gap-3 text-slate-900 font-bold text-xs uppercase tracking-widest group-hover:text-orange-600 transition-colors">
                  <span className="w-8 h-[2px] bg-slate-200 group-hover:w-16 group-hover:bg-orange-500 transition-all"></span>
                  İncele
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Quote & Glossary */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-16">

          {/* Motivation Quote */}
          <div className="xl:col-span-1 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-center min-h-[400px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] -ml-10 -mb-10"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl mb-8 border border-white/10">
                💡
              </div>
              <h4 className="text-lg font-bold text-orange-400 uppercase tracking-widest mb-4">Başarının Sırrı</h4>
              <p className="text-2xl font-medium leading-normal opacity-90 italic font-serif">
                "Bilgi, güveni; güven ise satışı getirir. Bu sayfadaki her kart senin masadaki otoriteni artıracak bir silahtır."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold shadow-lg shadow-orange-500/40">FD</div>
                <span className="text-sm font-bold text-slate-400">Finansal Danışman</span>
              </div>
            </div>
          </div>

          {/* Glossary */}
          <div className="xl:col-span-2 bg-gradient-to-br from-white to-slate-50 rounded-[3rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-slate-900 text-white rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-2xl font-black text-slate-900">Hızlı Terimler Sözlüğü</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GLOSSARY_TERMS.map((gt, i) => (
                <div key={i} className="group p-5 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300">
                  <span className="block text-orange-600 font-black text-sm uppercase tracking-wider mb-2 group-hover:translate-x-1 transition-transform">{gt.term}</span>
                  <span className="text-slate-500 text-xs font-bold leading-relaxed">{gt.def}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* PORTAL MODAL FIX */}
      {selectedInfo && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop with Blur */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-opacity animate-fadeIn"
            onClick={() => setSelectedInfo(null)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white w-full max-w-3xl rounded-[3rem] shadow-2xl relative overflow-hidden animate-cardIn z-10 flex flex-col max-h-[85vh] border border-white/20">

            {/* Modal Header */}
            <div className="bg-slate-900 shrink-0 h-32 flex items-center px-8 relative overflow-hidden">
              {/* Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[60px] -mr-16 -mt-32"></div>

              <div className="relative z-10 flex items-center w-full gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg ring-4 ring-white/10 shrink-0">
                  {selectedInfo.icon}
                </div>
                <div>
                  <span className="block text-orange-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-1 opacity-80">{selectedInfo.category} DOSYASI</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-none tracking-tight">{selectedInfo.title}</h2>
                </div>
              </div>

              <button
                onClick={() => setSelectedInfo(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all backdrop-blur-md z-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 sm:p-10 overflow-y-auto no-scrollbar flex-1 bg-white">
              <div className="space-y-6">
                {selectedInfo.details.map((detail, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <span className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 font-black text-xs shrink-0 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                      {idx + 1}
                    </span>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed pt-0.5">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pro Tip Box */}
              <div className="mt-10 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 flex gap-6 relative overflow-hidden group hover:border-orange-200 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-[40px] -mr-10 -mt-10 transition-colors group-hover:bg-orange-200/50"></div>
                <div className="text-4xl shrink-0 grayscale group-hover:grayscale-0 transition-all duration-500">👨‍🏫</div>
                <div className="relative z-10">
                  <h5 className="text-orange-600 font-black uppercase text-[10px] tracking-widest mb-2">Danışman Tavsiyesi</h5>
                  <p className="text-slate-800 text-lg font-bold italic leading-relaxed font-serif">
                    "{selectedInfo.proTip}"
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setSelectedInfo(null)}
                  className="px-12 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95"
                >
                  Tamam, Anlaşıldı 👍
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes cardIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-cardIn {
          animation: cardIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
