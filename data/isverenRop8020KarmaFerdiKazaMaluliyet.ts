
import { ProductData } from '../types';

export const isverenRop8020KarmaFerdiKazaMaluliyetData: ProductData = {
  id: 'isveren-rop-80-20-karma-ferdi-kaza-maluliyet',
  name: 'İşveren ROP 80+20 (Karma) Ferdi Kazalı Maluliyetli Hayat Sigortası',
  slug: 'isveren-rop-80-20-karma-ferdi-kaza-maluliyet',
  tagline: 'Çalışanlarınıza Değer, İşletmenize %25 Vergi Avantajı!',
  summary: 'İşverenler için tasarlanmış bu ürün, çalışanları kaza ve maluliyet riskine karşı devasa limitlerle korurken, ödenen primlerin tamamını gider göstererek vergi avantajı sağlar. Karma özelliği ile kur artışlarına karşı bütçenizi korur.',
  currency: 'ABD Doları (TL Sabitlemeli)',
  type: 'Kurumsal Karma & Çoklu Korumalı Prim İadeli Sigorta',
  duration: 'Sadece 12 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (12) ≤ 75. (Max Giriş Yaşı: 63)',
  coverages: [
    { 
      title: 'Hastalık Sonucu Vefat', 
      description: 'Herhangi bir hastalık sonucu yaşam kaybında poliçe bedeli ödenir.', 
      isMain: true, 
      limits: 'Min 10.000 USD',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kazaen Vefat (10X)', 
      description: 'Kaza sonucu vefat durumunda vefat tazminatı tam 10 KATINA çıkar!', 
      isMain: true, 
      limits: 'Vefat Teminatının 10 Katı',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Tam ve Daimi Maluliyet (5X)', 
      description: 'Kaza veya hastalık sonucu kalıcı iş göremezlikte poliçe bedelinin 5 KATI ödenir.', 
      isMain: true, 
      limits: 'Poliçe Bedelinin 5 Katı',
      impactOnPolicy: 'Ödeme sonrası poliçe sonlanır.'
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
    { title: 'Kur Sabitleme', period: '12 Ay Sabit TL Taksit' },
    { title: 'Muafiyet', period: 'Hastalık için 3 Ay / MS için 6 Ay' },
    { title: 'Maluliyet Bekleme', period: 'Kesinleşme için 6 Ay' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Suç işleme veya suça teşebbüs',
    'Tehlikeli sporlar (Pilot/Personel hariç tarifesiz uçuşlar)',
    'Nükleer rizikolar veya AIDS'
  ],
  lifecycle: {
    tenzil: '12 ay ödemeden sonra ödemeyi durdurma hakkı. İndirgenmiş bedellerle vade beklenir.',
    istirak: '12 ay ödemeden sonra poliçeyi bozma hakkı. İlk 12 ay iade sıfırdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 aylık dönemlerle ara verilebilir. Toplam 12 yıllık sürede 24 ay limit vardır.',
    ikraz: 'İştirak bedelinin %50\'si kadar düşük faizli kredi kullanma hakkı.',
    sonlanma: 'Risk gerçekleşirse (Vefat/Maluliyet) tazminat ödenir ve poliçe biter.'
  },
  taxAdvantage: 'Ödenen primlerin tamamı genel gider olarak yazılabilir. Kurumlar Vergisi Kanunu Madde 32 uyarınca %25 vergi avantajı sağlar.',
  faqs: [
    {
      question: "İşveren olarak neden bu ürünü almalıyım?",
      answer: "Hem çalışanınıza büyük bir kıymet vermiş olursunuz hem de ödediğiniz her kuruşu vergiden düşerek maliyetinizi %25-40 arası azaltırsınız."
    },
    {
      question: "10X Kaza teminatı ne anlama geliyor?",
      answer: "Bu ürünü özel kılan en büyük özelliktir. 10.000 USD vefat teminatı olan bir poliçede, kazaen vefat durumunda aileye 100.000 USD ödenir."
    },
    {
      question: "Prim ödemeleri nasıl sabitleniyor?",
      answer: "Karma özelliği sayesinde Dolar kuru artsa bile 12 ay boyunca aynı TL tutarını ödersiniz. Her yıl başında TÜFE %80 oranında güncellenir."
    },
    {
      question: "Minimum prim sınırı nedir?",
      answer: "İşveren ürününde asgari yıllık prim sadece 60 USD (aylık 5 USD) seviyesinden başlar, bu da KOBİ'ler için çok uygundur."
    }
  ]
};
