
import { ProductData } from '../types';

export const karmaBirikimData: ProductData = {
  id: 'karma-dovize-endeksli-birikim',
  name: 'Karma Dövize Endeksli Ödüllü Birikim Hayat Sigortası',
  slug: 'karma-dovize-endeksli-birikim',
  tagline: 'Birikim + Güvence + Ödül: Geleceğinizi Dolar ile Güçlendirin!',
  summary: '10-15 yıl vadeli, ABD Doları bazlı birikim odaklı bir hayat sigortasıdır. "Karma" özelliği sayesinde primleriniz 1 yıl boyunca sabit TL olarak kalır. Ödenen primlerin %95\'i sizin için yatırıma yönlendirilir.',
  currency: 'ABD Doları (Karma - Sabit TL Ödemeli)',
  type: 'Birikimli Hayat Sigortası (Kâr Paylı)',
  duration: '10 - 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 80. (Maksimum Giriş Yaşı: 70)',
  premiumBreakdown: {
    investment: 80,
    award: 15,
    risk: 0.5,
    management: 4.5
  },
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Yaşam kaybı durumunda o tarihteki vefat tazminatı, kâr paylı birikim ve ödül tutarı toplamı ödenir.', 
      isMain: true, 
      limits: 'Risk primi kesintisine göre belirlenen tutar',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kâr Paylı Birikim (%80)', 
      description: 'Primlerin %80\'i yatırıma yönlendirilir ve yıllık %1 getiri garantisi ile Dolar bazlı fonlarda değerlenir.', 
      isMain: false, 
      limits: 'Yatırıma yönlendirilen tutar + Kâr Payı',
      impactOnPolicy: 'Vade sonunda ödenir.'
    },
    { 
      title: 'Kâr Paylı Ödül (%15)', 
      description: 'Primlerin %15\'i ödül fonunda nemalanır. 5. yıldan (60 ay) itibaren %75\'i, 10. yılda %100\'ü hak kazanılır.', 
      isMain: false, 
      limits: 'Ödül fonu birikimi',
      impactOnPolicy: 'Vade sonunda veya 5. yıldan sonra iştirakle ödenir.'
    }
  ],
  waitingPeriods: [
    { title: 'Kur Sabitleme', period: '12 Ay Boyunca Sabit TL Taksit' },
    { title: 'Erken Ödül Hak Edişi', period: '60 Ay Sonunda Ödül Birikiminin %75\'i' },
    { title: 'Ödül Tam Hak Ediş', period: '120 Ay Sonunda Ödül Birikiminin %100\'ü' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Beyan edilmeyen önceden var olan hastalıklar',
    'Nükleer rizikolar veya AIDS',
    'Yasa dışı eylemler'
  ],
  lifecycle: {
    tenzil: '12 ay ödemeden sonra poliçe dondurulabilir. Prim ödeme yükümlülüğü biter, mevcut birikim kâr payı almaya devam eder.',
    istirak: '12 ay sonra iştirak hakkı başlar. Erken ayrılmada (iştirak) durumunda, eğer 60 ay (5 yıl) dolmuşsa ödül birikiminin %75\'i de iadeye eklenir.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti (İade Yok)' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49-120. Ay', rate: '%20 Kesinti' },
      { label: '121+ Ay', rate: '%0 Kesinti (Vade Sonu)' }
    ],
    araVerme: '3 aylık dönemlerle ara verilebilir. Ara verilen süre vadeye eklenir.',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alma hakkı. Kâr paylı birikimden "birim" satılarak sağlanır.',
    sonlanma: 'Vade gelimi veya vefat tazminatı ödenmesiyle poliçe biter.'
  },
  taxAdvantage: 'Ödenen primlerin %50\'si (Brüt gelirin %15\'ini aşmamak kaydıyla) vergi matrahından düşülebilir.',
  faqs: [
    {
      question: "100 Dolar yatırdığımda paramın ne kadarı yatırıma gidiyor?",
      answer: "Yatırılan her 100 Doların 80 Doları ana birikim fonuna, 15 Doları ise ödül fonuna gider. Toplamda 95 Dolarınız sizin için değerlenir. Kalan 5 Doların 0.50'si hayat sigortası korumanıza, 4.50'si ise şirket işletim giderlerine gider."
    },
    {
      question: "5 yıl dolmadan ayrılırsam ödül birikimimi alabilir miyim?",
      answer: "Ödül birikiminin (yani %15'lik kısmın) %75'ini alabilmek için en az 60 ay (5 yıl) sistemde kalmış ve prim ödemiş olmanız gerekir. 5 yıldan önce ayrılırsanız sadece %80'lik ana birikim fonundaki tutarı (kesintili olarak) alabilirsiniz."
    },
    {
      question: "Karma özelliği bana ne kazandırır?",
      answer: "Dolar kuru yıl içinde ne kadar yükselirse yükselsin, 1 yıl boyunca ödeyeceğiniz TL taksit tutarı hiç değişmez. Bütçenizi korurken birikiminiz Dolar bazlı büyür."
    }
  ]
};
