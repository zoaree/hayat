
import { ProductData } from '../types';

export const odulluEgitimData: ProductData = {
  id: 'odullu-egitim',
  name: 'Ödüllü Eğitim Hayat Sigortası',
  slug: 'odullu-egitim',
  tagline: 'Çocuklarınızın Geleceği Güvende, Eğitim Masrafları Planlı!',
  summary: 'Çocukların eğitim masraflarını zamana yayarak planlamayı sağlayan birikimli bir hayat sigortasıdır. 6. yıldan itibaren yıllık eğitim ödemeleri almaya başlayabilir, yüksek maliyetli okul taksitlerini birikimlerinizle kolayca karşılayabilirsiniz.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Eğitim Odaklı Birikim Sigortası',
  duration: '10 veya 15 Yıl',
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
      description: 'Yaşam kaybı durumunda vefat tazminatı, kâr paylı birikim ve teşvik ödülü toplamı lehtara ödenir.', 
      isMain: true, 
      limits: 'Max 7 Milyon USD',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kâr Paylı Birikim', 
      description: 'Yatırıma yönlendirilen primler Dolar bazlı fonlarda değerlenir. Yıllık %1 getiri garantisi sunulur.', 
      isMain: false, 
      limits: 'Yatırılan Tutar + Kâr Payı',
      impactOnPolicy: 'Eğitim ödemesi veya vade sonu ödemesi olarak yapılır.'
    },
    { 
      title: 'Yıllık Eğitim Ödemeleri', 
      description: '6. yılın sonundan itibaren okul taksitlerini karşılamak için yıllık nakit geri ödemeler başlar.', 
      isMain: false, 
      limits: 'Birikim tutarına göre yıllık ödeme',
      impactOnPolicy: 'Poliçe devam eder.'
    }
  ],
  waitingPeriods: [
    { title: 'Geri Ödeme Başlangıcı', period: 'Poliçe 6. yılını doldurduğunda (72 Ay)' },
    { title: 'Getiri Garantisi', period: '120 Ay (10 Yıl) Sistemde Kalma Şartı' },
    { title: 'Cayma Süresi', period: '30 Gün' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Uyuşturucu veya uyarıcı madde kullanımı',
    'Beyan edilmeyen kronik hastalıklar',
    'Hava taksi ve tarifesiz uçuşlarda görevli personel'
  ],
  lifecycle: {
    tenzil: '12 ay ödemeden sonra poliçe dondurulabilir. Eğitim ödemesi hakları indirgenmiş tutarlarla devam eder.',
    istirak: '12 ay sonra iştirak (bozma) hakkı başlar. Erken ayrılmada ödül hak edişi poliçe yaşına bağlıdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti (İade Yok)' },
      { label: '12-23. Ay', rate: '%90 Kesinti' },
      { label: '24-35. Ay', rate: '%80 Kesinti' },
      { label: '36-47. Ay', rate: '%70 Kesinti' },
      { label: '48-59. Ay', rate: '%60 Kesinti' },
      { label: '60+ Ay', rate: '%0 Kesinti (Kâr Payından)' }
    ],
    araVerme: '3 aylık dönemlerle ara verilebilir. Ara verilen süre eğitim ödemesi tarihlerini ve vadeyi aynı oranda erteler.',
    ikraz: 'İştirak bedelinin %50\'sine kadar borç alınabilir. Eğitim ödemeleri ikraz (borç) olarak verildiği için stopaj avantajı sağlar.',
    sonlanma: 'Vefat tazminatı ödenmesi veya 10/15 yıllık vade gelimi ile poliçe biter.'
  },
  taxAdvantage: 'Ödenen primlerin %50\'si (Brüt gelirin %15\'ini aşmamak kaydıyla) vergi matrahından düşülerek maliyet avantajı sağlar.',
  faqs: [
    {
      question: "100 Dolar yatırdığımda 20 Dolar nereye gidiyor?",
      answer: "İlk 6 yıl boyunca 100 Doların 80 Doları ana birikime, 15 Doları 'Ödül Fonu'na gider. Toplam 95 Dolarınız sizin için Dolar bazlı değerlenir. 7. yıldan itibaren ise kesinti %20'den %5'e düşer, yani 95 Dolarınız doğrudan ana birikime gider."
    },
    {
      question: "Eğitim ödemeleri ne zaman başlar?",
      answer: "Poliçenizin 6. yılı bittiğinde (72. ayda) ilk eğitim ödemenizi alabilirsiniz. Bu ödemeler yıllık olarak yapılır ve okul taksitlerinizi ödemek için planlanmıştır."
    },
    {
      question: "Erken ayrılırsam ödül birikimimi alabilir miyim?",
      answer: "Ödül birikimi 6. yıldan itibaren kademeli olarak hak edilir. 6. yılda %60, 7. yılda %70, 8. yılda %80, 9. yılda %90 ve 10. yılda %100'ünü alabilirsiniz."
    },
    {
      question: "Eğitim ödemeleri neden vergi avantajlı?",
      answer: "Eğitim ödemeleri teknik olarak 'İkraz' (borç) şeklinde verildiği için ödeme anında stopaj (gelir vergisi) kesilmez. Vergi yükü poliçe sonuna ertelenerek size nakit akış avantajı sağlar."
    }
  ]
};
