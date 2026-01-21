
import { ProductData } from '../types';

export const rop8020Data: ProductData = {
  id: 'rop-80-20',
  name: 'ROP 80+20 Hayat Sigortası',
  slug: 'rop-80-20',
  tagline: 'Sevdikleriniz Güvende, Primleriniz Cebinizde Kalsın!',
  summary: 'Bir yandan sevdiklerinizi koruyan, diğer yandan risk gerçekleşmediği takdirde ödediğiniz primlerin tamamını (%80 iade + %20 teşvik ödülü) geri almanızı sağlayan prim iadeli hayat sigortasıdır.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Prim İadeli Risk Sigortası',
  duration: '12 veya 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 75. (Örn: 15 yıllık poliçe için max giriş 60)',
  coverages: [
    {
      title: 'Vefat Teminatı',
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtarlara ödenir.',
      isMain: true,
      limits: 'Aylık primin 133-3.500 katı arası (Min 10.000 USD)',
      impactOnPolicy: 'Ödeme yapıldığında poliçe sonlanır.'
    },
    {
      title: 'Süre Sonu Hayatta Kalma',
      description: 'Poliçe sonunda risk gerçekleşmezse primlerin %80\'i iade edilir.',
      isMain: false,
      limits: 'Brüt Primlerin %80\'i',
      impactOnPolicy: 'Süre sonunda ödenir.'
    },
    {
      title: 'Prim Ödeme Teşvik Ödülü',
      description: 'Tüm primlerin eksiksiz ödenmesi durumunda verilen ekstra ödüldür.',
      isMain: false,
      limits: 'Brüt Primlerin %20\'si',
      impactOnPolicy: 'Süre sonu iadesine eklenir (%80+%20=%100 iade).'
    }
  ],
  waitingPeriods: [],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Nükleer rizikolar veya AIDS sonucu vefat',
    'Beyan edilmeyen hastalıklar sonucu vefat',
    'Tarifesiz uçaklarda/helikopterlerde görevli personel/pilot vefatı'
  ],
  lifecycle: {
    tenzil: 'Prim ödemeyi durdurmak demektir. 12 ay prim ödedikten sonra ödemeyi bırakıp, poliçeyi daha düşük (tenzil edilmiş) teminatlarla vade sonuna kadar devam ettirebilirsiniz.',
    istirak: 'Poliçeyi "Bozmak/Kapatmak" demektir. İçerideki birikmiş parayı (Matematiksel Karşılık) alıp ayrılma hakkıdır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti (İade Yok)' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: 'Ödemelere 3\'er aylık bloklar halinde ara verebilirsiniz. Bu süre poliçe sonuna eklenir (vade uzar).',
    ikraz: 'Poliçeyi bozmadan, içerideki paranın %50\'si kadar düşük faizli borç alma hakkıdır.',
    sonlanma: 'Vefat durumunda ana teminat ödenir ve poliçe biter. Ek teminat ödemeleri (örn: hastalık) ana poliçeyi bitirmez.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. %40\'a varan maliyet avantajı sağlar.',
  faqs: [
    {
      question: "Primlerin tamamını nasıl geri alabilirim?",
      answer: "Poliçe süresi (12 veya 15 yıl) sonunda hayatta kalmanız ve tüm primleri eksiksiz ödemeniz durumunda %80 iade + %20 teşvik ile %100 iade alırsınız."
    },
    {
      question: "İlk 1 yıl içinde ayrılırsam ne olur?",
      answer: "Poliçe birikimsiz bir risk ürünü olduğu için ilk 12 ay içinde yapılan ayrılmalarda herhangi bir nakit iadesi (iştirak bedeli) ödenmez."
    },
    {
      question: "Tenzil (Dondurma) yaparsam iade alır mıyım?",
      answer: "Evet, poliçeyi tenzil edip (dondurup) vade sonuna kadar beklerseniz, ödediğiniz primlerin %80'ini vade sonunda yine geri alırsınız."
    }
  ]
};
