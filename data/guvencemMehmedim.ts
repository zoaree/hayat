
import { ProductData } from '../types';

export const guvencemMehmedimData: ProductData = {
  id: 'guvencem-mehmedim-standart',
  name: 'Güvencem Mehmedim Standart Hayat Sigortası',
  slug: 'guvencem-mehmedim-standart',
  tagline: 'TSK Mensuplarına Özel: Güvenliğiniz Bize Emanet!',
  summary: 'Türk Silahlı Kuvvetleri mensupları ve yakınları için özel olarak tasarlanmıştır. 12 yıllık süre sonunda risk gerçekleşmezse ve tüm primler ödenirse, ödenen toplam primlerin %102\'si (Dünyada nadir bir oran) geri iade edilir.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'TSK Özel Prim İadeli Hayat Sigortası',
  duration: 'Sadece 12 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (12) ≤ 75. (Maksimum Giriş Yaşı: 63)',
  coverages: [
    {
      title: 'Vefat Teminatı',
      description: 'Hastalık veya kaza sonucu yaşam kaybında lehtarlara ödenir.',
      isMain: true,
      limits: 'Aylık primin katı cinsinden (Min 10.000 USD)',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    {
      title: 'Süre Sonu İade (%80)',
      description: '12 yıl sonunda hayatta kalma durumunda ödenen brüt primlerin %80\'i iade edilir.',
      isMain: false,
      limits: 'Brüt Primlerin %80\'i',
      impactOnPolicy: 'Vade sonunda ödenir.'
    },
    {
      title: 'Teşvik + Ek Ödül (%20 + %2)',
      description: 'Eksiksiz ödeme durumunda %20 Teşvik Ödülü ve Güvencem Mehmedim\'e özel %2 Ek Ödül verilir.',
      isMain: false,
      limits: 'Toplam %22 Ek İade',
      impactOnPolicy: 'Toplam iade %102\'ye ulaşır.'
    }
  ],
  waitingPeriods: [
    { title: 'Tenzil Şartı', period: '12 Ay Prim Ödeme' },
    { title: 'Cayma Süresi', period: '30 Gün' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Nükleer rizikolar veya AIDS sonucu vefat',
    'Beyan edilmeyen kronik hastalıklar',
    'Yasa dışı eylemler'
  ],
  lifecycle: {
    tenzil: 'Prim ödemeyi durdurmak demektir. 12 ay sonra prim ödemeyi bırakıp devam edebilirsiniz. Tenzil durumunda iade %80 üzerinden oranlanarak yapılır.',
    istirak: '12 ay sonra nakit iade alarak ayrılma hakkı. İlk yıl iade sıfırdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 aylık dönemlerle ara verilebilir. 12 yıllık poliçede toplam 24 ay limit vardır.',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alma hakkı (Poliçeyi bozmadan nakit desteği).',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. %40\'a varan toplam maliyet avantajı.',
  faqs: [
    {
      question: "%102 iade nasıl hesaplanıyor?",
      answer: "Primlerin %80'i Hayatta Kalma Teminatı, %20'si Teşvik Ödülü ve %2'si Güvencem Mehmedim Ek Ödülü'dür. Toplamda yatırdığınızın fazlasını alırsınız."
    },
    {
      question: "Mesleki sürprim oranları nelerdir?",
      answer: "Yaşa göre fiyata dahil sürprimler: 18-24 yaş: %1500, 25-35 yaş: %150, 36+ yaş: %50 otomatik olarak prime eklenmiştir."
    },
    {
      question: "Sadece askerler mi alabilir?",
      answer: "Türk Silahlı Kuvvetleri mensupları ve onların yakınları (eş, çocuk vb.) bu özel üründen yararlanabilir."
    },
    {
      question: "Borç alma (İkraz) faizi var mı?",
      answer: "Evet, Dolar bazlı borç verildiği için piyasa koşullarına göre düşük bir faiz işletilir, ancak poliçe haklarınız aynen devam eder."
    }
  ]
};
