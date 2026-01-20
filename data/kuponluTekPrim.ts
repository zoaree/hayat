
import { ProductData } from '../types';

export const kuponluTekPrimData: ProductData = {
  id: 'kuponlu-tek-prim',
  name: 'Kuponlu Tek Prim Ödemeli Hayat Sigortası',
  slug: 'kuponlu-tek-prim',
  tagline: 'Süre Boyunca Kazandıran, Düzenli Dolar Gelirli Güvence!',
  summary: 'Tek seferde ödenen primle 10 yıl boyunca her 6 ayda bir nakit kupon ödemesi alabileceğiniz, süre sonunda ise ana paranızı tam olarak geri aldığınız yatırım odaklı hayat sigortasıdır. Hem ailenizi korur hem de birikiminize düzenli getiri sağlar.',
  currency: 'ABD Doları (Tek Prim - Peşin)',
  type: 'Kuponlu Birikim Sigortası',
  duration: '10 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (10) ≤ 80. (Maksimum Giriş Yaşı: 70)',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda poliçe süresi boyunca sabit kalan vefat bedeli lehtarlara ödenir.', 
      isMain: true, 
      limits: 'Yaşa ve prime göre belirlenen sabit tutar',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Ara Dönem Kupon Ödemeleri', 
      description: 'Poliçenin 6. ayından itibaren her 6 ayda bir (toplam 20 adet) yapılan net nakit ödemelerdir.', 
      isMain: false, 
      limits: 'Tek Primin %1.75\'i (Net)',
      impactOnPolicy: 'Hayatta kalma şartına bağlıdır.'
    },
    { 
      title: 'Süre Sonu Hayatta Kalma', 
      description: '10 yıl sonunda risk gerçekleşmezse ana paranın %100\'ü iade edilir.', 
      isMain: false, 
      limits: 'Tek Primin %100\'ü (USD)',
      impactOnPolicy: 'Vade sonunda ödenir.'
    }
  ],
  waitingPeriods: [
    { title: 'İlk Kupon', period: 'Poliçe başlangıcından 6 ay sonra' },
    { title: 'Kupon Periyodu', period: 'Her 6 ayda bir (Toplam 20 ödeme)' },
    { title: 'Cayma Süresi', period: '30 Gün' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Uyuşturucu veya uyarıcı madde kullanımı',
    'Suç işleme veya suça teşebbüs',
    'Nükleer rizikolar veya AIDS'
  ],
  lifecycle: {
    tenzil: 'Tek primli ürünlerde prim borcu oluşmadığı için dondurma (tenzil) hakkı uygulanmaz.',
    istirak: 'Cayma süresinden sonra ayrılma istenebilir. Standart kesinti %50 olsa da Eurobond faizine göre iade bedeli müşteri lehine değişebilir.',
    araVerme: 'Peşin ödemeli bir ürün olduğu için ödemelere ara verme uygulaması yoktur.',
    ikraz: '12 ay sonra tek prim tutarının %25\'ine kadar borç alma imkanı. Borç süresince kuponlar borç oranında indirilir.',
    sonlanma: 'Vefat ödemesi yapıldığında veya 10 yıllık vade sonunda poliçe biter.'
  },
  taxAdvantage: 'Ödenen tek primin tamamı brüt gelirin %15\'i sınırıyla vergi matrahından düşülerek önemli maliyet avantajı sağlar.',
  faqs: [
    {
      question: "Kupon ödemeleri net mi?",
      answer: "Evet! Belirtilen %1.75'lik kupon oranı nettir ve stopaj kesintisine tabi değildir."
    },
    {
      question: "Vade sonunda ne kadar alırım?",
      answer: "10 yıl boyunca aldığınız toplam 20 adet kuponun üzerine, vade sonunda yatırdığınız ana paranın %100'ünü geri alırsınız."
    },
    {
      question: "Vefat durumunda kuponlar ödenir mi?",
      answer: "Hayır. Vefat gerçekleşirse sadece vefat teminatı ödenir. Kuponlar hayatta kalma şartına bağlıdır."
    },
    {
      question: "Asgari giriş limiti nedir?",
      answer: "En az 2.000 USD peşin prim ile poliçe başlatılabilir. Taksitli ödeme seçeneği yoktur."
    }
  ]
};
