
import { ProductData } from '../types';

export const rop8050AzalanData: ProductData = {
  id: 'rop-80-50-azalan',
  name: 'ROP 80+50 Azalan Teminatlı Hayat Sigortası',
  slug: 'rop-80-50-azalan',
  tagline: '15 Yılın Sonunda Primlerinizin %130\'unu Geri Alın!',
  summary: '15 yıllık uzun vadeli koruma ve maksimum iade arayanlar için idealdir. Vefat teminatı her yıl 1/15 oranında azalırken, risk gerçekleşmezse süre sonunda ödenen toplam brüt primlerin %130\'u (Primlerin %80\'i + %50 Teşvik) iade edilir.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Azalan Teminatlı & Maksimum Bonus İadeli Sigorta',
  duration: 'Sadece 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (15) ≤ 75. (Maksimum Giriş Yaşı: 60)',
  coverages: [
    {
      title: 'Vefat Teminatı (Azalan)',
      description: 'Hastalık veya kaza sonucu vefat durumunda o yılki azalan bedel ödenir.',
      isMain: true,
      limits: 'Yıllık 1/15 Oranında Azalan',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    {
      title: 'Süre Sonu İade (%80)',
      description: 'Risk gerçekleşmezse hayatta kalma teminatı olarak ödenir.',
      isMain: false,
      limits: 'Brüt Primlerin %80\'i',
      impactOnPolicy: 'Vade sonunda ödenir.'
    },
    {
      title: 'Maksimum Bonus (%50 Teşvik)',
      description: 'Tüm primlerin 15 yıl boyunca eksiksiz ödenmesiyle hak kazanılır.',
      isMain: false,
      limits: 'Brüt Primlerin %50\'si',
      impactOnPolicy: 'Toplam iade %130\'a ulaşır.'
    }
  ],
  waitingPeriods: [
    { title: 'Azalan Teminat', period: 'Her yıl 1/15 oranında azalır' },
    { title: 'Teşvik Şartı', period: '180 ay kesintisiz ödeme' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Uyuşturucu veya uyarıcı madde kullanımı',
    'Suç işleme veya suça teşebbüs',
    'Beyan edilmeyen kronik rahatsızlıklar'
  ],
  lifecycle: {
    tenzil: 'Prim ödemeyi durdurmak demektir. 12 ay sonra prim ödemeyi bırakıp devam edebilirsiniz. Tenzil durumunda vefat teminatı TTK 1502\'ye göre oranlanarak yeniden hesaplanır.',
    istirak: '12 ay sonra ayrılma hakkı. Erken ayrılmada %50 bonus tamamen yanar.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: 'DİKKAT: Ara verme süresince vefat teminatı güncel tutarın %75\'ine düşer! Toplam 30 ay ara verme limiti vardır.',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alma imkanı (12. aydan sonra).',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe sonlanır.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. 15 yıl sonunda iadeler vergi kesintisinden muaftır.',
  faqs: [
    {
      question: "Bu üründe neden %130 iade var?",
      answer: "Çünkü 15 yıl boyunca vefat teminatı azaldığı için şirketin risk maliyeti düşer. Bu tasarruf, müşteriye süre sonu bonusu olarak %50 şeklinde geri döner."
    },
    {
      question: "15 yıl dolmadan ayrılırsam ne olur?",
      answer: "İştirak (bozma) hakkınızı kullanabilirsiniz ancak ödediğiniz primden kesinti yapılır ve en önemlisi %50'lik dev bonusu kaybedersiniz."
    },
    {
      question: "Ara verme hakkım ne kadar?",
      answer: "15 yıllık poliçede toplam 30 ay ara verme hakkınız vardır. Ara verdiğinizde vefat teminatınız o süre boyunca %75'e çekilir."
    },
    {
      question: "Minimum prim ve teminat nedir?",
      answer: "Asgari yıllık prim 240 USD (Aylık 20 USD). Minimum başlangıç vefat teminatı 10.000 USD'dir."
    }
  ]
};
