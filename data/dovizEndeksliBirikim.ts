
import { ProductData } from '../types';

export const dovizEndeksliBirikimData: ProductData = {
  id: 'dovize-endeksli-birikim',
  name: 'Dövize Endeksli Ödüllü Birikim Hayat Sigortası',
  slug: 'dovize-endeksli-birikim',
  tagline: 'Birikim + Güvence + Ödül: Dolar Bazlı Birikimin En Saf Hali!',
  summary: '10-15 yıl vadeli, ABD Doları bazlı birikim odaklı bir hayat sigortasıdır. Yatırılan primlerin %95\'i (80+15) sizin için Dolar bazlı fonlarda değerlenir.',
  currency: 'ABD Doları (Güncel Kur ile TL Ödeme)',
  type: 'Birikimli Hayat Sigortası (Kâr Paylı)',
  duration: '10 - 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 80. (Maksimum Giriş Yaşı: 70)',
  premiumBreakdown: {
    investment: 80,
    award: 15,
    risk: 0.5,
    management: 4.5
  },
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Yaşam kaybı durumunda o tarihteki vefat tazminatı, kâr paylı birikim ve ödül tutarı toplamı lehtarlara ödenir.', 
      isMain: true, 
      limits: 'Risk primi kesintisine göre belirlenen tutar',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kâr Paylı Birikim (%80)', 
      description: 'Primlerin %80\'i yatırıma yönlendirilir ve yıllık %1 getiri garantisi ile Dolar bazlı fonlarda değerlenir.', 
      isMain: false, 
      limits: 'Yatırıma yönlendirilen tutar + Kâr Payı',
      impactOnPolicy: 'Vade sonunda ödenir.'
    },
    { 
      title: 'Kâr Paylı Ödül (%15)', 
      description: 'Primlerin %15\'i ödül fonunda nemalanır. 5. yıldan (60 ay) itibaren kademeli hak ediş (%75) başlar.', 
      isMain: false, 
      limits: 'Ödül fonu birikimi',
      impactOnPolicy: 'Vade sonunda veya 5. yıldan sonra iştirakle ödenir.'
    }
  ],
  waitingPeriods: [
    { title: 'Ödül Hak Edişi', period: '60 Ay (%75) / 120 Ay (%100)' },
    { title: 'Getiri Garantisi', period: '120 Ay (10 Yıl) Boyunca Ödeme Şartı' },
    { title: 'Tenzil/İştirak', period: '12 Ay Prim Ödemiş Olma' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Beyan edilmeyen önceden var olan hastalıklar',
    'Nükleer rizikolar veya AIDS',
    'Yasa dışı eylemler ve tehlikeli sporlar'
  ],
  lifecycle: {
    tenzil: '12 ay ödemeden sonra poliçe dondurulabilir. Prim ödeme yükümlülüğü biter, mevcut birikim kâr payı almaya devam eder.',
    istirak: '12 ay sonra iştirak hakkı başlar. 5. yıldan (60 ay) sonra ayrılmak isterseniz ödül birikiminizin %75\'ini de alabilirsiniz.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti (İade Yok)' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49-120. Ay', rate: '%20 Kesinti' },
      { label: '121+ Ay', rate: '%0 Kesinti (Vade Sonu)' }
    ],
    araVerme: '3 aylık dönemlerle ara verilebilir. Ara verilen süre vade sonuna eklenir.',
    ikraz: '12 ay sonra iştirak bedelinin %50\'si kadar borç alma hakkı. Kâr paylı birikimden birim satılarak sağlanır.',
    sonlanma: 'Vefat tazminatı ödenmesi veya vade gelimi ile poliçe biter.'
  },
  taxAdvantage: 'Ödenen primlerin %50\'si (Brüt gelirin %15\'ini aşmamak kaydıyla) vergi matrahından düşülerek maliyet avantajı sağlar.',
  faqs: [
    {
      question: "100 Dolar prim ödediğimde 20 Dolar nereye gidiyor?",
      answer: "Yatırılan 100 Doların 20 Doları kesinti gibi görünse de aslında 15 Doları sizin için 'Ödül Fonu'nda birikmeye devam eder. Geri kalan 5 Doların 0.50'si yaşam kaybı korumanız (sigorta maliyeti), 4.50'si ise şirket yönetim gideridir. Yani toplamda 95 Dolarınız sizin adınıza değerlenir."
    },
    {
      question: "Ödülümü (%15) ne zaman çekebilirim?",
      answer: "Poliçenin 5. yılını (60. ayını) doldurduğunuzda, içeride biriken ödül tutarının %75'ini iştirak (erken ayrılma) bedeline ek olarak alma hakkı kazanırsınız. 10. yılın sonunda ise tamamını (%100) alırsınız."
    }
  ]
};
