
import { ProductData } from '../types';

export const rop8020FerdiKazaMaluliyetData: ProductData = {
  id: 'rop-80-20-ferdi-kaza-maluliyet',
  name: 'ROP 80+20 Ferdi Kazalı Maluliyetli Hayat Sigortası',
  slug: 'rop-80-20-ferdi-kaza-maluliyet',
  tagline: 'Üçlü Güvence: Vefat, Kaza ve Maluliyet Koruması Bir Arada!',
  summary: 'Bu ürün sevdiklerinizi finansal güvence altına alırken, sizi de kaza veya hastalık sonucu oluşabilecek "Tam ve Daimi Maluliyet" riskine karşı korur. Risk gerçekleşmezse primlerin %100\'ünü geri alırsınız.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Maluliyet Korumalı Prim İadeli Sigorta',
  duration: '12 veya 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 75. (Maksimum giriş yaşı 63\'tür)',
  coverages: [
    { 
      title: 'Hastalık Sonucu Vefat', 
      description: 'Hastalık sonucu yaşam kaybında poliçe bedeli ödenir.', 
      isMain: true, 
      limits: 'Min 10.000 USD',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kaza Sonucu Vefat (2X)', 
      description: 'Kaza sonucu yaşam kaybında vefat tazminatı tam İKİ KATINA çıkar.', 
      isMain: true, 
      limits: 'Vefat Teminatının 2 Katı',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Tam ve Daimi Maluliyet', 
      description: 'Hastalık veya kaza sonucu 6 aylık bekleme süresi sonunda kesinleşen iş göremezlik durumu.', 
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
    { title: 'Hastalık Teşhisi', period: '3 Ay Muafiyet' },
    { title: 'Multiple Skleroz (MS)', period: '6 Ay Muafiyet' },
    { title: 'Maluliyet Kesinleşme', period: '6 Ay Bekleme Süresi' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Aşikar sarhoşluk veya uyuşturucu etkisi altındaki kazalar',
    'Tehlikeli sporlar (Paraşüt, dağcılık vb.)',
    'Beyan edilmeyen kronik hastalıklar'
  ],
  lifecycle: {
    tenzil: 'Poliçeyi "Dondurma". 12 ay ödedikten sonra ödemeyi bırakıp, indirgenmiş teminatlarla vadeyi bekleyebilirsiniz.',
    istirak: 'Poliçeyi "Bozma". İlk 12 ay iade yoktur. Sonrasında Matematiksel Karşılık üzerinden kademeli iade yapılır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 ayda bir ara verilebilir. Vadeyi ara verilen süre kadar öteler.',
    ikraz: 'İştirak bedelinin %50\'si kadar düşük faizli borç alma hakkı.',
    sonlanma: 'Vefat veya Maluliyet tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. Kaza sonucu vefat tazminatı Vergiden muaftır.',
  faqs: [
    {
      question: "Maluliyet ödemesi için kriter nedir?",
      answer: "Belirtilen 6 günlük yaşam faaliyetinden en az 3'ünü tek başına yapamadığınızın 6 aylık bekleme süresi sonunda kesinleşmesi gerekir."
    },
    {
      question: "Hem vefat hem maluliyet tazminatı alınabilir mi?",
      answer: "Hayır. Bir ödeme yapıldığında poliçe biter. Eğer maluliyet tazminatı ödenirse poliçe sonlandığı için ileride vefat tazminatı ödenmez."
    },
    {
      question: "Hangi hastalıklar maluliyet sayılır?",
      answer: "Hastalığın ismi değil, yarattığı 'iş göremezlik' sonucu önemlidir. Kriterimiz 3/6 kuralıdır (6 faaliyetten 3'ünü yapamama)."
    }
  ]
};
