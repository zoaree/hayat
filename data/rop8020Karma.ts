
import { ProductData } from '../types';

export const rop8020KarmaData: ProductData = {
  id: 'rop-80-20-karma',
  name: 'ROP 80+20 Karma Hayat Sigortası',
  slug: 'rop-80-20-karma',
  tagline: 'Kur Dalgalanmalarına Karşı Sabit TL Ödeme Konforu!',
  summary: 'Viennalife’a özel "KARMA" özelliği ile primlerinizi 1 yıl boyunca sabit TL olarak ödersiniz. Kur artışlarından etkilenmezsiniz, ancak teminatlarınız ve süre sonu iadeniz ABD Doları bazında hesaplanmaya devam eder.',
  currency: 'ABD Doları (TL Sabitlemeli)',
  type: 'Kur Sabitli Prim İadeli Hayat Sigortası',
  duration: '12 veya 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 75. (Asgari giriş yaşı 18\'dir)',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtarlara ödenir.', 
      isMain: true, 
      limits: 'Aylık primin 133-3.500 katı arası (Min 10.000 USD)',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Karma Özellikli İade', 
      description: 'Risk gerçekleşmezse ödenen primlerin %80\'i + %20 teşvik ödülü iade edilir.', 
      isMain: false, 
      limits: 'Ödenen toplam primlerin %100\'ü (Dolar bazında)',
      impactOnPolicy: 'Vade sonunda iade edilir.'
    }
  ],
  waitingPeriods: [],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Nükleer rizikolar veya AIDS sonucu vefat',
    'Beyan edilmeyen kronik hastalıklar',
    'Yasa dışı eylemler ve tehlikeli sporlar'
  ],
  lifecycle: {
    tenzil: 'Poliçeyi "Dondurma" hakkıdır. 12 ay ödemeden sonra prim ödemeyi bırakıp vadeyi bekleyebilirsiniz.',
    istirak: 'Poliçeyi "Bozma" hakkıdır. İlk 12 ay iade sıfırdır. Sonrasında matematiksel karşılık üzerinden tabloya göre iade yapılır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 ayda bir ödemelere ara verilebilir. Ara verilen süre poliçe sonuna eklenir. Karma ürünlerde endeksleme kayması olmaz.',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alınabilir. Sözleşme hakları kaybolmaz.',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Ödenen primlerin tamamı vergi matrahından düşülebilir. %40\'a varan maliyet avantajı sağlar.',
  faqs: [
    {
      question: "Karma özelliği tam olarak ne işe yarar?",
      answer: "Dolar kuru bugün artsa bile sizin TL taksitiniz 1 yıl boyunca hiç değişmez. Her yıl dönümünde ise TÜFE'nin %80'i kadar (enflasyon oranında) küçük bir artışla yeni yılın sabit kuru belirlenir."
    },
    {
      question: "Dolar bazında iadem azalır mı?",
      answer: "Sabit kur uygulaması nedeniyle Dolar bazındaki primleriniz kur değişimine göre ufak farklılıklar gösterebilir, ancak süre sonunda o ana kadar biriken Dolar tutarının tamamını (%100) alırsınız."
    },
    {
      question: "Asgari prim limiti nedir?",
      answer: "Bu üründe asgari yıllık prim 180 USD'dir (Aylık 15 USD). Bu, diğer ROP ürünlerine göre daha erişilebilir bir başlangıç limitidir."
    }
  ]
};
