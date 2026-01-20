
import { ProductData } from '../types';

export const yigitBorulerKarmaData: ProductData = {
  id: 'yigit-boruler-karma',
  name: 'Yiğit Börüler Karma Hayat Sigortası',
  slug: 'yigit-boruler-karma',
  tagline: 'Polis Teşkilatına Özel: Kur Korumalı Ödeme, %102 Dolar İadesi!',
  summary: 'Emniyet Teşkilatı mensupları ve yakınları için tasarlanmış "Karma" (Sabit Kur) özellikli prim iadeli hayat sigortasıdır. Taksitleriniz 1 yıl boyunca TL olarak sabitlenirken, birikiminiz Dolar bazında değer kazanır ve tüm primlerin ödenmesi durumunda %102 iade garantisi sunar.',
  currency: 'ABD Doları (Karma - Sabit TL Ödemeli)',
  type: 'Emniyet Özel Kur Sabitli Prim İadeli Sigorta',
  duration: 'Sadece 12 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (12) ≤ 75. (Maksimum Giriş Yaşı: 63)',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtarlara ödenir. Sabit kur nedeniyle teminat her ay güncellenir.', 
      isMain: true, 
      limits: 'Aylık primin katı cinsinden (USD)',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Süre Sonu İade (%80)', 
      description: '12 yıl sonunda hayatta kalma durumunda ödenen brüt primlerin %80\'i iade edilir.', 
      isMain: false, 
      limits: 'Dolar bazında Brüt Primlerin %80\'i',
      impactOnPolicy: 'Vade sonunda ödenir.'
    },
    { 
      title: 'Teşvik + Yiğit Börüler Ek Ödül (%20 + %2)', 
      description: '144 ay boyunca kesintisiz ödeme yapılması durumunda verilen Viennalife özel bonusları.', 
      isMain: false, 
      limits: 'Toplam %22 Ek Bonus',
      impactOnPolicy: 'Toplam iade %102\'ye ulaşır.'
    }
  ],
  waitingPeriods: [
    { title: 'Karma Dönemi', period: '12 Ay Boyunca Sabit TL Taksit' },
    { title: 'Ödeme Periyotları', period: 'Aylık, 3 Aylık, 6 Aylık veya Yıllık' },
    { title: 'Yıllık Artış', period: 'TÜFE\'nin %80\'i oranında endeksleme' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Nükleer rizikolar veya AIDS sonucu vefat',
    'Beyan edilmeyen kronik rahatsızlıklar',
    'Yasa dışı eylemler ve tehlikeli sporlar'
  ],
  lifecycle: {
    tenzil: '12 ay sonra dondurma hakkı. Karma özelliğinden dolayı tenzil sonrası iade tutarı Dolar bazında sabitlenerek korunur.',
    istirak: '12 ay sonra iştirak (bozma) hakkı. İlk yıl iade sıfırdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 aylık dönemlerle toplam 24 aya kadar ara verilebilir. Ara verme süresi vade sonuna eklenir.',
    ikraz: 'İştirak bedelinin %50\'sine kadar düşük faizli borç alma imkanı (Poliçeyi bozmadan nakit desteği).',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. %40\'a varan toplam maliyet avantajı.',
  faqs: [
    {
      question: "Karma (Sabit Kur) Polis Teşkilatı için ne avantaj sağlar?",
      answer: "Dolar kurundaki ani dalgalanmalardan etkilenmeden, 1 yıl boyunca aynı TL tutarını ödeyerek bütçenizi korursunuz. Birikiminiz ise Dolar bazında büyür."
    },
    {
      question: "Polislik mesleği için ek prim (sürprim) var mı?",
      answer: "Evet, ancak bu üründe mesleki sürprimler fiyatın içindedir: 18-24 yaş (%1500), 25-35 yaş (%150) ve 36+ yaş (%50) otomatik olarak yansıtılmıştır."
    },
    {
      question: "%102 iade garantisi nasıl çalışıyor?",
      answer: "Süre sonuna kadar hayatta kalınması ve 144 aylık primin hiç ara verilmeden ödenmesi durumunda yatırılan toplam Dolar tutarının %102'si kesin iade edilir."
    },
    {
      question: "Neden asgari prim 30 USD?",
      answer: "Karma özelliği ve %102'lik yüksek iade oranı nedeniyle, bu üründe asgari yıllık prim 360 USD (aylık 30 USD) olarak belirlenmiştir."
    }
  ]
};
