
import { ProductData } from '../types';

export const rop8040AzalanData: ProductData = {
  id: 'rop-80-40-azalan',
  name: 'ROP 80+40 Azalan Teminatlı Hayat Sigortası',
  slug: 'rop-80-40-azalan',
  tagline: '12 Yıl Sonunda Primlerinizin %120\'sini Geri Alın!',
  summary: 'Bu ürün, "Azalan Teminat" mantığıyla çalışır. Başlangıçta yüksek olan vefat koruması her yıl bir miktar azalır. Bunun karşılığında, risk gerçekleşmezse süre sonunda ödediğiniz her kuruşun %120\'sini (Primlerin %80\'i + %40 Teşvik) geri alırsınız.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Azalan Teminatlı & Bonus İadeli Sigorta',
  duration: 'Sadece 12 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (12) ≤ 75. (Maksimum Giriş Yaşı: 63)',
  coverages: [
    { 
      title: 'Vefat Teminatı (Azalan)', 
      description: 'Hastalık veya kaza sonucu vefat durumunda o yılki güncel (azalmış) bedel ödenir.', 
      isMain: true, 
      limits: 'Yıllık Azalan (Süre sonunda sıfırlanır)',
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
      title: 'Dev Bonus (%40 Teşvik)', 
      description: 'Tüm primlerin eksiksiz ödenmesi şartıyla verilen ekstra ödüldür.', 
      isMain: false, 
      limits: 'Brüt Primlerin %40\'ı',
      impactOnPolicy: 'Toplam iade %120\'ye ulaşır.'
    }
  ],
  waitingPeriods: [
    { title: 'Azalan Teminat', period: 'Her yıl 1/12 oranında azalır' },
    { title: 'Teşvik Şartı', period: '144 ay kesintisiz ödeme' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Suç işleme veya suça teşebbüs',
    'Uyuşturucu kullanımı altındaki kazalar',
    'Beyan edilmeyen kronik rahatsızlıklar'
  ],
  lifecycle: {
    tenzil: '12 ay sonra dondurma hakkı. Tenzil durumunda vefat teminatı TTK 1502\'ye göre yeniden hesaplanır.',
    istirak: '12 ay sonra ayrılma hakkı. Erken ayrılmada %40 bonus yanar.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: 'DİKKAT: Ara verme süresince vefat teminatı güncel tutarın %75\'ine indirilir! Ara bitince eski haline döner.',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alma imkanı.',
    sonlanma: 'Vefat durumunda o anki azalan teminat ödenir ve poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. %40\'a varan toplam maliyet avantajı.',
  faqs: [
    {
      question: "Azalan Teminat tam olarak nedir?",
      answer: "Örneğin 120.000 USD ile başladınız. Her yıl 10.000 USD azalır. 5. yılda vefat ederseniz 80.000 USD ödenir. Bu azalma sayesinde süre sonunda %120 iade alabilirsiniz."
    },
    {
      question: "Primlerim de azalıyor mu?",
      answer: "Hayır, primleriniz 12 yıl boyunca Dolar bazında sabittir. Azalan şey sadece vefat teminatıdır."
    },
    {
      question: "Ara verme yaparsam %120 iadeyi alır mıyım?",
      answer: "Hayır. %40 bonusu (Teşvik Ödülü) almak için primlerin KESİNTİSİZ ve EKSİKSİZ ödenmiş olması gerekir."
    },
    {
      question: "Minimum ödeme limiti nedir?",
      answer: "Bu üründe asgari yıllık prim 240 USD (Aylık 20 USD). Minimum başlangıç teminatı ise 10.000 USD'dir."
    }
  ]
};
