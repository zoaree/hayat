
import { ProductData } from '../types';

export const rop8020KarmaFerdiKazaData: ProductData = {
  id: 'rop-80-20-karma-ferdi-kaza',
  name: 'ROP 80+20 Karma Ferdi Kazalı Hayat Sigortası',
  slug: 'rop-80-20-karma-ferdi-kaza',
  tagline: 'Hem Kur Koruması Hem 2 Kat Güvence Bir Arada!',
  summary: 'Viennalife’ın en kapsamlı ROP ürünüdür. "Karma" özelliği ile primlerinizi 1 yıl boyunca sabit TL ödersiniz. "Ferdi Kaza" özelliği ile kaza sonucu vefatta lehtarlarınıza tam 2 KATI ödeme yapılır. Süre sonunda ise tüm primlerinizi %100 geri alırsınız.',
  currency: 'ABD Doları (TL Sabitlemeli)',
  type: 'Karma & Çift Korumalı Prim İadeli Sigorta',
  duration: '12 veya 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 75. (Örn: 15 yıllık poliçe için max giriş 60)',
  coverages: [
    {
      title: 'Hastalık Sonucu Vefat',
      description: 'Herhangi bir hastalık sonucu yaşam kaybında poliçe bedeli ödenir.',
      isMain: true,
      limits: 'Aylık primin 125-2.850 katı arası',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    {
      title: 'Kaza Sonucu Vefat (2X)',
      description: 'Kaza sonucu yaşam kaybında vefat teminatının tam 2 KATI ödenir.',
      isMain: true,
      limits: 'Vefat Teminatının 2 Katı',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    {
      title: 'Süre Sonu İade (%80 + %20)',
      description: 'Risk gerçekleşmezse Dolar bazındaki primlerin %100\'ü iade edilir.',
      isMain: false,
      limits: 'Ödenen toplam brüt primlerin %100\'ü',
      impactOnPolicy: 'Vade sonunda ödenir.'
    }
  ],
  waitingPeriods: [],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Aşikar sarhoşluk veya uyuşturucu kullanımı altındaki kazalar',
    'Tehlikeli spor faaliyetleri (Havacılık, dövüş sporları vb.)',
    'Beyan edilmeyen kronik rahatsızlıklar'
  ],
  lifecycle: {
    tenzil: 'Poliçeyi "Dondurma". 12 ay ödemeden sonra ödemeyi bırakıp, haklarınızı (indirgenmiş olarak) vade sonuna kadar koruyabilirsiniz.',
    istirak: 'Poliçeyi "Bozma". 12 aydan önce ayrılmak isterseniz %100 kesinti (iade yok) uygulanır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3\'er aylık dönemlerle ara verilebilir. Karma özelliği sayesinde ara verme dönemlerinde enflasyon endekslemesi kaymaz.',
    ikraz: 'İştirak bedelinin %50\'si kadar borç alınabilir. Acil nakit ihtiyacını poliçeyi bozmadan karşılar.',
    sonlanma: 'Vefat tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. Kaza sonucu vefat tazminatı Veraset ve İntikal Vergisinden muaftır.',
  faqs: [
    {
      question: "Karma özelliği ödemelerimi nasıl kolaylaştırır?",
      answer: "Dolar kuru yıl içinde ne kadar artarsa artsın, sizin 1 yıl boyunca ödeyeceğiniz TL taksitiniz sabit kalır. Bütçe planlaması için mükemmeldir."
    },
    {
      question: "Vefat teminatım neden her ay değişiyor?",
      answer: "Çünkü sabit TL ödüyorsunuz ama Dolar kuru değişiyor. Priminizin o günkü Dolar karşılığı neyse, vefat teminatınız da o oranda (Teminat Prim Oranı üzerinden) güncellenir."
    },
    {
      question: "Kaza durumunda tam olarak ne kadar ödenir?",
      answer: "O anki güncel vefat teminatınızın tam 2 katı ödenir. Örneğin o ayki teminatınız 50.000 USD ise kaza durumunda 100.000 USD ödenir."
    },
    {
      question: "Süre sonunda ne kadar alırım?",
      answer: "TL olarak ödediğiniz her kuruş o günkü kurdan Dolara çevrilip kasanıza atılır. 15 yılın sonunda bu Dolar birikiminin %100'ünü geri alırsınız."
    }
  ]
};
