
import { ProductData } from '../types';

export const kuponluTekPrimOdulluData: ProductData = {
  id: 'kuponlu-tek-prim-odullu',
  name: 'Kuponlu Tek Prim Ödemeli Ödüllü Hayat Sigortası',
  slug: 'kuponlu-tek-prim-odullu',
  tagline: 'Süre Boyunca Kazandıran, Hem Kupon Hem Ödül Veren Dev Güvence!',
  summary: 'Tek bir peşin ödemeyle 10 yıl boyunca her 6 ayda bir "Kupon" geliri elde etmenizi sağlayan, vade sonunda ise ana paranızı ödülle geri veren yatırım odaklı bir hayat sigortasıdır. Eurobond yatırımı ile Dolar bazlı düzenli gelir arayanlar için idealdir.',
  currency: 'ABD Doları (Tek Prim - Peşin)',
  type: 'Kuponlu & Ödüllü Birikim Sigortası',
  duration: '10 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (10) ≤ 80. (Maksimum Giriş Yaşı: 70)',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda poliçe süresi boyunca sabit olan vefat bedeli lehtarlara ödenir.', 
      isMain: true, 
      limits: 'Yaşa ve prime göre sabit tutar',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Ara Dönem Kupon Ödemeleri', 
      description: 'Poliçenin 6. ayından itibaren her 6 ayda bir (toplam 20 adet) yapılan nakit ödemelerdir.', 
      isMain: false, 
      limits: 'Tek Primin %1.25\'i (Net)',
      impactOnPolicy: 'Hayatta kalma şartına bağlıdır.'
    },
    { 
      title: 'Süre Sonu Hayatta Kalma', 
      description: '10 yıl sonunda risk gerçekleşmezse ana paranın üzerine %10 ödül eklenerek iade edilir.', 
      isMain: false, 
      limits: 'Tek Primin %110\'u (Net)',
      impactOnPolicy: 'Vade sonunda ödenir.'
    }
  ],
  waitingPeriods: [
    { title: 'İlk Kupon', period: 'Poliçe başlangıcından 6 ay sonra' },
    { title: 'Kupon Sıklığı', period: 'Her 6 ayda bir (Toplam 20 kupon)' },
    { title: 'Cayma Süresi', period: '30 Gün' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Uyuşturucu veya uyarıcı madde kullanımı',
    'Suç işleme veya suça teşebbüs',
    'Nükleer rizikolar veya AIDS'
  ],
  lifecycle: {
    tenzil: 'Tek primli ürünlerde prim borcu oluşmadığı için tenzil hakkı bulunmamaktadır.',
    istirak: 'Cayma süresinden sonra iştirak istenebilir. Kesinti oranı %50\'dir (Ancak Eurobond getiri oranına göre iade bedeli lehine değişebilir).',
    araVerme: 'Peşin ödemeli bir ürün olduğu için ödemeye ara verme durumu yoktur.',
    ikraz: '12 ay sonra tek prim tutarının %25\'ine kadar borç alma hakkı. Kupon ödemeleri borç oranında indirgenir.',
    sonlanma: 'Vefat tazminatı ödendiğinde veya vade sonunda poliçe biter.'
  },
  taxAdvantage: 'Ödenen tek primin tamamı brüt gelirin %15\'i sınırıyla vergi matrahından düşülerek maliyet avantajı sağlar.',
  faqs: [
    {
      question: "Kupon ödemeleri garanti mi?",
      answer: "Evet! Sigortalı hayatta olduğu sürece her 6 ayda bir yatırılan primin net %1.25'i kadar kupon ödemesi hesabınıza Dolar bazlı (TL karşılığı) yatar."
    },
    {
      question: "Vade sonunda ne kadar alırım?",
      answer: "10 yıl boyunca aldığınız 20 adet kuponun üzerine, vade sonunda yatırdığınız paranın %110'unu (Ana para + %10 Ödül) geri alırsınız."
    },
    {
      question: "Vefat durumunda kuponlar ne olur?",
      answer: "Vefat gerçekleşirse sadece o tarihteki vefat teminatı ödenir. Kupon ödemeleri hayatta kalma şartına bağlı olduğu için vefattan sonra durur."
    },
    {
      question: "İkraz (Borç) alırsam kuponlarım kesilir mi?",
      answer: "Kuponlar kesilmez ama aldığınız borcun tek prime oranı kadar indirilir. Borcu geri ödediğinizde kuponlar tekrar eski seviyesine döner."
    }
  ]
};
