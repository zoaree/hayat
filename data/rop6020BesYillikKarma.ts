
import { ProductData } from '../types';

export const rop6020BesYillikKarmaData: ProductData = {
  id: 'rop-60-20-bes-yillik-karma',
  name: 'ROP 60+20 Beş Yıllık Karma Hayat Sigortası',
  slug: 'rop-60-20-bes-yillik-karma',
  tagline: '5 Yıllık Kısa Vadede Hem Dolar Biriktirin Hem Korunun!',
  summary: 'Bu ürün, primlerini kur dalgalanmalarından etkilenmeden sabit TL olarak ödemek isteyen ama birikiminin Dolar bazında değerlenmesini isteyen müşteriler içindir. Sadece 5 yıllık kısa süresi ve 70 yaşa kadar giriş imkanıyla çok geniş bir kitleye hitap eder.',
  currency: 'ABD Doları (Karma - Sabit TL Ödemeli)',
  type: 'Kısa Vadeli & Kur Sabitli Prim İadeli Sigorta',
  duration: 'Sadece 5 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (5) ≤ 75. (Maksimum Giriş Yaşı: 70)',
  coverages: [
    {
      title: 'Vefat Teminatı',
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtarlara ödenir. Teminat her ay ödenen primin kur karşılığına göre güncellenir.',
      isMain: true,
      limits: 'Aylık primin 57-1.400 katı arası',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    {
      title: 'Süre Sonu İade (%60)',
      description: '5 yılın sonunda risk gerçekleşmezse Dolar bazındaki primlerin %60\'ı iade edilir.',
      isMain: false,
      limits: 'Ödenen Brüt Primlerin %60\'ı',
      impactOnPolicy: 'Vade sonunda ödenir.'
    },
    {
      title: 'Teşvik Ödülü (%20 Bonus)',
      description: 'Tüm primlerin 5 yıl (60 ay) boyunca eksiksiz ödenmesiyle hak kazanılır.',
      isMain: false,
      limits: 'Brüt Primlerin %20\'si',
      impactOnPolicy: 'Toplam iade %80\'e ulaşır.'
    }
  ],
  waitingPeriods: [
    { title: 'Karma Dönemi', period: '12 Ay Boyunca Sabit TL Taksit' },
    { title: 'Endeksleme', period: 'Her yıl TÜFE\'nin %80\'i oranında artış' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Nükleer rizikolar veya AIDS sonucu vefat',
    'Beyan edilmeyen kronik rahatsızlıklar',
    'Yasa dışı eylemler'
  ],
  lifecycle: {
    tenzil: '12 ay sonra dondurma hakkı. Tenzil durumunda vade sonu iadesi ödenmiş prim oranına göre yapılır.',
    istirak: '12 ay sonra iştirak (bozma) hakkı başlar. İlk yıl iade sıfırdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: 'DİKKAT: Bu üründe "Prime Ara Verme" hakkı bulunmamaktadır!',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alınabilir (Özel şartlarda yazmasa da talep edilebilir).',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. 5 yıl sonunda iadeler vergi kesintisinden muaftır.',
  faqs: [
    {
      question: "Karma (Sabit Kur) özelliği nedir?",
      answer: "Poliçe başlangıcındaki Dolar kuru 1 yıl boyunca sabitlenir. Örneğin taksitiniz 1.000 TL ise, Dolar çıksa bile 12 ay boyunca 1.000 TL ödersiniz."
    },
    {
      question: "Neden ara verme hakkı yok?",
      answer: "Ürün zaten 5 yıl gibi çok kısa bir süreye sahip olduğu ve karma yapısıyla ödeme kolaylığı sağladığı için teknik olarak ara verme tanımlanmamıştır."
    },
    {
      question: "Enflasyon artışı (TÜFE %80) nasıl çalışır?",
      answer: "Her yıl dönümünde taksitiniz Türkiye'deki enflasyonun (TÜFE) %80'i kadar artar. Böylece birikiminizin Dolar karşılığı korunmuş olur."
    },
    {
      question: "Giriş yaş sınırı neden 70?",
      answer: "Bu ürün 5 yıllık olduğu için 70 yaşında giren biri 75 yaşında (limit yaş) poliçesini başarıyla tamamlayabilir."
    }
  ]
};
