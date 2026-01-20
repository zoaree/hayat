
import { ProductData } from '../types';

export const tekPrimOdulluData: ProductData = {
  id: 'tek-prim-odullu',
  name: 'Tek Prim Ödemeli Ödüllü Hayat Sigortası',
  slug: 'tek-prim-odullu',
  tagline: 'Parayı Saklamayan, Katlayan Hayat Sigortası!',
  summary: 'Bir defada ödenen tek primle hem yüksek vefat koruması sağlar hem de 5 veya 10 yıl sonunda garanti edilmiş bir ödül (Kazanç) ile paranızı Dolar bazında katlar. Eurobond altyapılı güvenli bir yatırım ürünüdür.',
  currency: 'ABD Doları (Tek Prim - Banka Transferi)',
  type: 'Tek Primli Birikimli Hayat Sigortası',
  duration: '5 veya 10 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 80. (10 yıl için max 70, 5 yıl için max 75 yaş)',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda poliçe süresi boyunca sabit olan teminat tutarı lehtarlara ödenir.', 
      isMain: true, 
      limits: 'Yaşa ve prime göre değişen sabit tutar',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Süre Sonu Hayatta Kalma (Ödüllü İade)', 
      description: 'Süre sonunda risk gerçekleşmezse ana paranın üzerine garanti edilmiş ödül eklenerek iade edilir.', 
      isMain: false, 
      limits: '10 Yıl: +%47.5 Ödül / 5 Yıl: +%17.5 Ödül',
      impactOnPolicy: 'Vade sonunda ödenir.'
    }
  ],
  waitingPeriods: [
    { title: 'Cayma Süresi', period: '30 Gün' },
    { title: 'İştira (Bozma)', period: '1 Ay sonra başlar' },
    { title: 'İkraz (Borç)', period: '12 Ay sonra başlar' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Uyuşturucu veya uyarıcı madde kullanımı',
    'Suç işleme veya suça teşebbüs',
    'Nükleer rizikolar veya AIDS'
  ],
  lifecycle: {
    tenzil: 'Tek prim ödemeli olduğu için tenzil (primden muafiyet) hakkı bulunmamaktadır.',
    istirak: 'Cayma süresinden sonra istenebilir. İştira kesinti oranı %50\'dir (Ancak Eurobond getiri oranına göre iade tutarı değişebilir).',
    araVerme: 'Tek primli ürünlerde ödemeler peşin olduğu için ara verme uygulaması yoktur.',
    ikraz: '12 ay sonra tek prim tutarının %25\'ine kadar borç alma imkanı sunar.',
    sonlanma: 'Vefat veya vade sonu hayatta kalma ödemesiyle poliçe biter.'
  },
  taxAdvantage: 'Ödenen tek primin tamamı brüt gelirin %15\'i sınırıyla vergi matrahından düşülebilir.',
  faqs: [
    {
      question: "Ödül oranları garanti mi?",
      answer: "Evet! 10 yıl için yatırdığınızın %47.5'i, 5 yıl için %17.5'i kadar NET ödül garanti edilir. Kar payı değil, kesin ödüldür."
    },
    {
      question: "Dolar bazında mı iade alırım?",
      answer: "Poliçe USD bazlıdır. İade günü geldiğinde TCMB efektif döviz satış kuru üzerinden TL olarak hesabınıza yatar."
    },
    {
      question: "Devlet Eurobond ödemelerini durdurursa ne olur?",
      answer: "Mücbir sebep kapsamında Hazine'nin yapılandırma yapması durumunda 'Düzeltme Faktörü' ile teminatlar yeniden hesaplanabilir."
    },
    {
      question: "Asgari giriş limiti nedir?",
      answer: "En az 2.000 USD tek prim ile poliçe başlatılabilir. Taksitlendirme yapılamaz, peşin ödenir."
    }
  ]
};
