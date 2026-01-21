
import { ProductData } from '../types';

export const yigitBorulerData: ProductData = {
  id: 'yigit-boruler-standart',
  name: 'Yiğit Börüler Standart Hayat Sigortası',
  slug: 'yigit-boruler-standart',
  tagline: 'Emniyet Teşkilatı’na Özel: Güvenliğiniz Yiğit Börüler’e Emanet!',
  summary: 'Emniyet Teşkilatı mensupları ve yakınları için özel olarak hazırlanmıştır. 12 yıllık poliçe süresi sonunda hayatta kalmanız ve tüm primleri ödemeniz durumunda, yatırdığınız paranın tamamını ve üzerine %2 bonusu (%102 iade) geri alırsınız.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Emniyet Özel Prim İadeli Hayat Sigortası',
  duration: 'Sadece 12 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (12) ≤ 75. (Maksimum Giriş Yaşı: 63)',
  coverages: [
    {
      title: 'Vefat Teminatı',
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtarlara ödenir.',
      isMain: true,
      limits: 'Min 10.000 USD',
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
      title: 'Teşvik + Yiğit Börüler Ek Ödül (%20 + %2)',
      description: 'Tüm primlerin eksiksiz ödenmesi şartıyla %22 ek bonus verilir.',
      isMain: false,
      limits: 'Toplam %22 Ek İade',
      impactOnPolicy: 'Toplam iade %102\'ye ulaşır.'
    }
  ],
  waitingPeriods: [
    { title: 'Tenzil Şartı', period: '12 Ay Prim Ödeme' },
    { title: 'Ara Verme', period: '3 Ayda bir (Toplam 24 Ay limit)' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Nükleer rizikolar veya AIDS sonucu vefat',
    'Beyan edilmeyen kronik rahatsızlıklar',
    'Yasa dışı eylemler'
  ],
  lifecycle: {
    tenzil: 'Prim ödemeyi durdurmak demektir. 12 ay sonra prim ödemeyi bırakıp devam edebilirsiniz. Tenzil durumunda vade sonu iadesi sadece ana iade (%80) üzerinden yapılır.',
    istirak: '12 ay sonra nakit iade alarak ayrılma hakkı. İlk yıl iade sıfırdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 aylık bloklarla toplam 24 aya kadar ara verilebilir. Ara verme süresi vadeye eklenir.',
    ikraz: 'İştirak bedelinin %50\'si kadar düşük faizli borç alma hakkı.',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. %40\'a varan maliyet avantajı.',
  faqs: [
    {
      question: "Neden %102 iade alıyorum?",
      answer: "ViennaLife, Emniyet Teşkilatı'na duyduğu vefayı göstermek için ana %100 iadeye ek olarak %2 'Yiğit Börüler Ek Ödülü' vermektedir."
    },
    {
      question: "Mesleki riskler (Polislik) için ek ücret var mı?",
      answer: "Hayır. Mesleki sürprimler fiyatın içine otomatik yansıtılmıştır. Yaşınıza göre %50 ile %1500 arası sürprimler poliçe primine dahildir."
    },
    {
      question: "Ara verme yaparsam %102'yi alabilir miyim?",
      answer: "Hayır. %20+2'lik bonusu almak için primlerin 144 ay boyunca hiç ara verilmeden ve eksiksiz ödenmesi gerekir. Ara verirseniz sadece %80 iadeyi alırsınız."
    },
    {
      question: "Poliçe süresini uzatabilir miyim?",
      answer: "Başlangıçta belirlenen 12 yıllık süre değişmez. Sadece 'Prime Ara Verme' hakkı kullanıldıysa, ara verilen süre kadar vade sonu ileri atılır."
    }
  ]
};
