
import { ProductData } from '../types';

export const rop8020FerdiKazaData: ProductData = {
  id: 'rop-80-20-ferdi-kaza',
  name: 'ROP 80+20 Ferdi Kazalı Hayat Sigortası',
  slug: 'rop-80-20-ferdi-kaza',
  tagline: 'Sevdikleriniz 2 Kat Güvende, Primleriniz Cebinizde!',
  summary: 'Standart ROP ürününün tüm avantajlarına ek olarak; eğer vefat kaza sonucu gerçekleşirse lehtarlara teminatın tam 2 KATI ödeme yapılır. Süre sonunda risk yoksa primlerin %100\'ü iade edilir.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Prim İadeli & Çift Korumalı Risk Sigortası',
  duration: '12 veya 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 75. (Örn: 61 yaşındaki biri en fazla 12 yıllık alabilir)',
  coverages: [
    {
      title: 'Hastalık Sonucu Vefat',
      description: 'Hastalık sonucu yaşam kaybında poliçe bedeli ödenir.',
      isMain: true,
      limits: 'Aylık primin 125-2.850 katı arası (Min 10.000 USD)',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    {
      title: 'Kaza Sonucu Vefat (2X)',
      description: 'Kaza sonucu yaşam kaybında vefat teminatının TAM İKİ KATI ödenir.',
      isMain: true,
      limits: 'Vefat Teminatının 2 Katı',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    {
      title: 'Süre Sonu İade (%80 + %20)',
      description: 'Risk gerçekleşmezse primlerin %80\'i + teşvik ödülüyle %100\'ü iade edilir.',
      isMain: false,
      limits: 'Ödenen brüt primlerin %100\'ü',
      impactOnPolicy: 'Vade sonunda ödenir.'
    }
  ],
  waitingPeriods: [],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Aşikar sarhoşluk veya uyuşturucu kullanımı altındaki kazalar',
    'Motosiklet yarışları, tehlikeli sporlar (dağcılık, paraşüt vb.)',
    'Deprem dışındaki doğal afetler (Sel, heyelan vb. Ferdi Kaza Şartlarına tabidir)'
  ],
  lifecycle: {
    tenzil: 'Prim ödemeyi durdurmak demektir. 12 ay ödedikten sonra ödemeyi bırakıp, poliçeyi (azalmış teminatlarla) vade sonuna kadar devam ettirebilirsiniz.',
    istirak: 'Poliçeyi "Bozmak/Kapatmak" demektir. İçerideki birikmiş nakit değeri alıp ayrılma hakkıdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti (İade Yok)' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3\'er aylık dönemlerle ara verilebilir. 12 yıllık poliçede toplam 24 ay, 15 yıllıkta 30 ay limit vardır.',
    ikraz: 'Poliçeyi bozmadan, nakit değerin %50\'sine kadar düşük faizli borç alabilirsiniz.',
    sonlanma: 'Vefat (Hastalık veya Kaza) durumunda ödeme yapılır ve poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. Kaza sonucu vefat tazminatı Veraset ve İntikal Vergisinden MUAFTIR.',
  faqs: [
    {
      question: "Ferdi Kazalı ürünün normal ROP'tan farkı nedir?",
      answer: "Normal ROP her durumda aynı teminatı öderken, bu ürün kaza durumunda 2 KAT ödeme yapar. Kaza riski yüksek müşteriler için idealdir."
    },
    {
      question: "Deprem kapsam dahilinde mi?",
      answer: "Evet, bu üründe deprem sonucu vefatlar Ferdi Kaza kapsamında 'Kaza Sonucu Vefat' (2X) olarak değerlendirilir."
    },
    {
      question: "İlk yıl ayrılırsam neden para alamıyorum?",
      answer: "İlk 12 ay boyunca ödenen primler şirketin operasyonel maliyetlerini ve risk masraflarını karşılar. 'Matematiksel Karşılık' oluşmadığı için iade yapılmaz."
    }
  ]
};
