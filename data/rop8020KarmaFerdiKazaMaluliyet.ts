
import { ProductData } from '../types';

export const rop8020KarmaFerdiKazaMaluliyetData: ProductData = {
  id: 'rop-80-20-karma-ferdi-kaza-maluliyet',
  name: 'ROP 80+20 Karma Ferdi Kazalı Maluliyetli Hayat Sigortası',
  slug: 'rop-80-20-karma-ferdi-kaza-maluliyet',
  tagline: 'Maksimum Koruma, Sabit Ödeme: Karma + 2X Kaza + Maluliyet!',
  summary: 'Viennalife’ın en gelişmiş ROP ürünüdür. Kur sabitleme (Karma) konforuyla TL öderken, kaza durumunda 2 kat tazminat ve iş göremezlik (maluliyet) güvencesi alırsınız. Vade sonunda ise ödediğiniz primlerin %100\'ü USD bazında iade edilir.',
  currency: 'ABD Doları (TL Sabitlemeli)',
  type: 'Karma & Çift Korumalı Maluliyetli Prim İadeli Sigorta',
  duration: '12 veya 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 75. (Maksimum Giriş: 63 yaş)',
  coverages: [
    { 
      title: 'Hastalık Sonucu Vefat', 
      description: 'Hastalık sonucu yaşam kaybında güncel USD bedeli ödenir.', 
      isMain: true, 
      limits: 'Min 10.000 USD',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kaza Sonucu Vefat (2X)', 
      description: 'Kaza durumunda o ayki vefat teminatının tam 2 KATI ödenir.', 
      isMain: true, 
      limits: 'Vefat Teminatının 2 Katı',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Tam ve Daimi Maluliyet', 
      description: 'Kaza veya hastalık sonucu 3/6 kuralına göre iş göremezlik durumu.', 
      isMain: true, 
      limits: 'Poliçe Bedeli (Tamamı)',
      impactOnPolicy: 'Ödeme yapıldığında poliçe sonlanır.'
    }
  ],
  disabilityCriteria: [
    'Yıkanma (Banyoda yardım almaksızın)',
    'Giyinme (Giysileri takma/çıkarma)',
    'Kontinens (Boşaltım kontrolü)',
    'Mobilite (Odalar arası geçiş)',
    'Kişisel Hijyen (Tuvalet kullanımı)',
    'Beslenme (Kendi kendini besleme)'
  ],
  waitingPeriods: [
    { title: 'Kur Sabitleme', period: '12 Ay Boyunca Sabit TL' },
    { title: 'Endeksleme', period: 'Yıllık TÜFE %80 Artış' },
    { title: 'Maluliyet Bekleme', period: '6 Ay Kesinleşme Süresi' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Aşikar sarhoşluk veya uyuşturucu etkisindeki kazalar',
    'Tehlikeli spor faaliyetleri',
    'Beyan edilmeyen kronik rahatsızlıklar'
  ],
  lifecycle: {
    tenzil: '12 ay sonra ödemeyi dondurma hakkı. İndirgenmiş teminatlarla vade sonu %80 iade korunur.',
    istirak: '12 ay sonra nakit iade alarak ayrılma. Matematiksel karşılık üzerinden kesintili ödeme yapılır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 aylık bloklarla ara verme. Karma özelliği sayesinde enflasyon artışı kayması yaşanmaz.',
    ikraz: 'Nakit iade değerinin %50\'si kadar düşük faizli borç alma imkanı.',
    sonlanma: 'Vefat veya Maluliyet tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. Kaza tazminatı Veraset Vergisinden muaftır.',
  faqs: [
    {
      question: "Karma özelliği ödemelerimi nasıl kolaylaştırır?",
      answer: "Dolar kuru yıl içinde ne kadar artarsa artsın, sizin 1 yıl boyunca ödeyeceğiniz TL taksitiniz sabit kalır. Bütçe planlaması için mükemmeldir."
    },
    {
      question: "Karma üründe ara verme yaparsam ne olur?",
      answer: "Poliçe vadesi ara verilen süre kadar uzar ancak 'Karma' avantajı sayesinde enflasyon endekslemeniz kaymaz, bütçeniz korunur."
    },
    {
      question: "Maluliyet ödemesi kaza sonucu mu olmalı?",
      answer: "Hayır, hem kaza hem de hastalık sonucu oluşan iş göremezlik durumlarını (GYF kriterlerine göre) kapsar."
    },
    {
      question: "Minimum ödeme limiti nedir?",
      answer: "Bu Karma üründe asgari yıllık prim 180 USD'dir (Aylık 15 USD). Bu, kur korumalı en erişilebilir ürünümüzdür."
    }
  ]
};
