
import { ProductData } from '../types';

export const guvencemMehmedimKarmaData: ProductData = {
  id: 'guvencem-mehmedim-karma',
  name: 'Güvencem Mehmedim Karma Hayat Sigortası',
  slug: 'guvencem-mehmedim-karma',
  tagline: 'TSK Mensuplarına Özel: Sabit TL Ödeyin, %102 Dolar İadesi Alın!',
  summary: 'TSK mensupları ve yakınları için "Karma" (Sabit Kur) konforunu %102 iade garantisiyle birleştiren ViennaLife\'a özel bir üründür. Primler 12 ay boyunca sabit TL olarak ödenir, kur artışlarından etkilenmez, ancak birikim ve teminatlar Dolar bazında değerlenir.',
  currency: 'ABD Doları (Karma - Sabit TL Ödemeli)',
  type: 'TSK Özel Kur Sabitli Prim İadeli Sigorta',
  duration: 'Sadece 12 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre (12) ≤ 75. (Maksimum Giriş Yaşı: 63)',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtarlara ödenir. Teminat, ödenen primlerin o günkü kur karşılığına göre güncellenir.', 
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
      title: 'Teşvik + Ek Ödül (%20 + %2)', 
      description: 'Tüm primlerin eksiksiz ödenmesiyle gelen Viennalife ve Mehmedim özel bonusları.', 
      isMain: false, 
      limits: 'Toplam %22 Ek İade',
      impactOnPolicy: 'Toplam iade %102\'ye ulaşır.'
    }
  ],
  waitingPeriods: [
    { title: 'Sabit Kur Dönemi', period: '12 Ay Boyunca Sabit TL Taksit' },
    { title: 'Ödeme Periyotları', period: 'Aylık, 3 Aylık, 6 Aylık veya Yıllık' },
    { title: 'Endeksleme', period: 'Yıllık TÜFE %80 oranında artış' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Nükleer rizikolar veya AIDS sonucu vefat',
    'Beyan edilmeyen kronik hastalıklar',
    'Yasa dışı eylemler ve tehlikeli sporlar'
  ],
  lifecycle: {
    tenzil: '12 ay sonra dondurma hakkı. Karma özelliğinden dolayı tenzil sonrası vade sonu iadesi Dolar bazında korunur.',
    istirak: '12 ay sonra iştirak (bozma) hakkı. İlk yıl iade sıfırdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 aylık dönemlerle ara verilebilir. 12 yıllık poliçede toplam 24 ay limit vardır.',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alma hakkı. (Poliçe Özel Şartlarında yazmasa da talep edilebilir).',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. %40\'a varan maliyet avantajı sağlar.',
  faqs: [
    {
      question: "Bu ürünün 'Standart' Mehmedim'den farkı nedir?",
      answer: "Standart üründe primler her ay güncel kurla TL'ye çevrilirken, Karma üründe kur 1 yıl boyunca sabitlenir. Bu, kur şoklarına karşı bütçenizi korur."
    },
    {
      question: "Mesleki sürprimler fiyata dahil mi?",
      answer: "Evet! 18-24 yaş (%1500), 25-35 yaş (%150) ve 36+ yaş (%50) sürprimleri otomatik olarak prime yansıtılmıştır. Ekstra yükleme yapılmaz."
    },
    {
      question: "%102 iade garanti mi?",
      answer: "Poliçe süresi (144 ay) boyunca tüm primler zamanında ve eksiksiz ödenirse, vade sonunda yatırılan Dolar toplamının %102'si kesin olarak iade edilir."
    },
    {
      question: "Ara verme yaparsam %102 iadeyi alır mıyım?",
      answer: "Hayır. %20 Teşvik ve %2 Ek Ödülü almak için primlerin kesintisiz ödenmiş olması şarttır. Ara verme durumunda sadece %80 ana iadeyi alırsınız."
    }
  ]
};
