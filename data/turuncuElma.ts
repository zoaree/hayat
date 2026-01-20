
import { ProductData } from '../types';

export const turuncuElmaData: ProductData = {
  id: 'turuncu-elma',
  name: 'Turuncu Elma Hayat Sigortası',
  slug: 'turuncu-elma',
  tagline: 'Yaşamsal risklere karşı tam koruma ve finansal güvence.',
  summary: 'Turuncu Elma, özellikle tüzel kişilerin sigorta ettiren olabildiği, 20 yıl yenileme garantili, kritik hastalıkları da kapsayan geniş bir risk ürünüdür.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Risk (Birikimsiz)',
  duration: '1 Yıl (Yıllık Poliçe)',
  renewal: '20 Yıl Otomatik Yenileme Garantisi',
  maxAgeFormula: 'Vefat için Giriş: 18-70 (Max 75 yaş). Diğerleri için Giriş: 18-60 (Max 65 yaş).',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtara ödeme.', 
      isMain: true, 
      limits: 'Min 1.000 USD',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kritik Hastalıklar', 
      description: '17 farklı tehlikeli hastalık tanısında toplu ödeme.', 
      isMain: false, 
      limits: 'Ana teminatın max 10 katı (Max 250k USD)',
      impactOnPolicy: 'Teminat ödenirse bu ek teminat sonlanır, ana poliçe devam eder.'
    },
    { 
      title: 'Tam ve Daimi Maluliyet', 
      description: 'Kaza veya hastalık sonucu iş göremezlik durumu.', 
      isMain: false, 
      limits: 'Max Ana Teminat kadar',
      impactOnPolicy: 'Ödeme yapılırsa ek teminat sonlanır.'
    },
    { 
      title: 'Kaza Tedavi Masrafları', 
      description: 'Kaza sonrası tıbbi harcamaların karşılanması.', 
      isMain: false, 
      limits: 'Ana teminatın max %10u',
      durationInfo: 'Kaza tarihinden itibaren 52 Hafta boyunca geçerlidir.'
    }
  ],
  criticalIllnesses: [
    'Kanser', 'Kalp Krizi', 'İnme', 'Koroner Arter (Bypass)',
    'Böbrek Yetmezliği', 'Büyük Organ Nakli', 'Felç', 'Kalp Kapak Cerrahisi',
    'Aort Damarı Cerrahisi', 'Multiple Skleroz (MS)', 'Alzheimer',
    'İyi Huylu Beyin Tümörleri', 'Koma', 'Büyük Yanıklar', 'Motor Nöron (ALS)',
    'Parkinson', 'Tam ve Daimi Maluliyet'
  ],
  waitingPeriods: [
    { title: 'MS Hastalığı', period: '6 Ay Muafiyet' },
    { title: 'Diğer Kritik Hastalıklar', period: '3 Ay Muafiyet' },
    { title: 'Hayatta Kalma Şartı', period: 'Teşhis sonrası 30 Gün' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl hariç)',
    'Beyan edilmeyen önceden var olan hastalıklar',
    'Amatör havacılık ve tehlikeli sporlar',
    'Uyuşturucu ve suç eylemleri'
  ],
  lifecycle: {
    tenzil: 'Risk ürünü olduğu için tenzil (primden muafiyet) hakkı bulunmamaktadır. Prim ödenmezse poliçe iptal olur.',
    istirak: 'Bu ürün birikimsizdir. İştirak (erken ayrılma/nakit iade) değeri yoktur.',
    araVerme: 'Prim ödemelerine ara verilemez. Ara verilmesi durumunda teminatlar durdurulur.',
    sonlanma: 'Ana vefat teminatı ödendiğinde poliçe biter. Ek teminat ödemeleri genellikle sadece ilgili ek teminatı bitirir.'
  },
  taxAdvantage: 'Kurumlar vergisi mükellefi şirketler için %25 vergi avantajı. Ödenen primler gider gösterilebilir.',
  faqs: [
    {
      question: "Poliçe sahibi şahıs olabilir mi?",
      answer: "Turuncu Elma'da sigorta ettiren mutlaka tüzel kişi (Şirket) olmalıdır. Sigortalı ise şirket çalışanı veya ortağı olabilir."
    },
    {
      question: "Kritik hastalık tazminatı aldım, poliçem biter mi?",
      answer: "Hayır. Kritik hastalık ek teminatı ödenince sadece o teminat sonlanır. Vefat teminatınız ve diğer ek teminatlarınız devam eder."
    },
    {
      question: "Dolar artarsa primlerim nasıl etkilenir?",
      answer: "Primler USD endekslidir ancak ödemeler o günkü TCMB Döviz Satış Kuru üzerinden TL olarak yapılır."
    },
    {
      question: "Tenzil ve İştirak neden yok?",
      answer: "Çünkü bu bir 'Risk' ürünüdür, 'Birikim' ürünü değildir. Ödenen primler sadece o yılki riskinizi satın alır, kumbarada para biriktirmez."
    }
  ]
};
