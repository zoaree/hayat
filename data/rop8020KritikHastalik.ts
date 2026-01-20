
import { ProductData } from '../types';

export const rop8020KritikHastalikData: ProductData = {
  id: 'rop-80-20-kritik-hastalik',
  name: 'ROP 80+20 Kritik Hastalıklı Hayat Sigortası',
  slug: 'rop-80-20-kritik-hastalik',
  tagline: 'Sevdikleriniz 2 Kat Güvende, Primleriniz Cebinizde!',
  summary: 'Bu ürün, vefat korumasının yanı sıra 17 kritik hastalığa karşı vefat teminatının tam 2 KATI kadar finansal güvence sağlar. Risk gerçekleşmezse süre sonunda primlerin %100\'ünü iade eder.',
  currency: 'ABD Doları (Ödemeler TL)',
  type: 'Kritik Hastalık Korumalı & Prim İadeli Sigorta',
  duration: '12 veya 15 Yıl',
  renewal: 'Sabit Süreli (Yenilemesiz)',
  maxAgeFormula: 'Giriş Yaşı + Süre ≤ 75. (12 yıl için max giriş 63, 15 yıl için 60 yaş)',
  coverages: [
    { 
      title: 'Vefat Teminatı', 
      description: 'Hastalık veya kaza sonucu vefat durumunda lehtarlara ödenir.', 
      isMain: true, 
      limits: 'Min 10.000 USD',
      impactOnPolicy: 'Sözleşme sonlanır.'
    },
    { 
      title: 'Kritik Hastalıklar (2X)', 
      description: '17 kritik hastalıktan birinin teşhisinde vefat teminatının tam 2 KATI ödenir.', 
      isMain: true, 
      limits: 'Vefat Teminatının 2 Katı',
      impactOnPolicy: 'Ödeme yapıldığında poliçe sonlanır.'
    },
    { 
      title: 'Süre Sonu İade (%100)', 
      description: 'Risk gerçekleşmezse primlerin %80\'i + %20 teşvik ödülüyle tamamı iade edilir.', 
      isMain: false, 
      limits: 'Ödenen brüt primlerin %100\'ü',
      impactOnPolicy: 'Vade sonunda ödenir.'
    }
  ],
  detailedIllnesses: [
    {
      name: '1. Kanser',
      description: 'Kötü huylu hücrelerin kontrol edilemeyen büyümesi ve doku istilası. Tanı uzman onayı ve histolojik kanıt gerektirir. Lösemi ve lenfoma dahildir.',
      exclusions: 'Cilt kanserlerinin çoğu (bazal/skuamöz), Evre 1 prostat kanseri, In-situ (başlangıç seviyesi) kanserler, HIV eşlik eden tümörler kapsam dışıdır.'
    },
    {
      name: '2. Kalp Krizi (M. İnfarktüsü)',
      description: 'Kalp kasının bir kısmının kanlanamaması sonucu ölmesi. Tipik göğüs ağrısı, yeni EKG değişiklikleri ve enzim (Troponin) yükselmesi kriterlerinin tamamı aranır.',
      exclusions: 'Sessiz kalp krizleri ve Troponin yükselip EKG değişikliği olmayan (NSTEMI) durumlar kapsam dışıdır.'
    },
    {
      name: '3. İnme (Felç)',
      description: 'Beyin damarlarındaki tıkanıklık veya kanama sonucu oluşan, en az 3 ay devam eden kalıcı nörolojik fonksiyon bozukluğu.',
      exclusions: 'Geçici iskemik ataklar (TIA), travmaya bağlı hasarlar ve migren bulguları kapsam dışıdır.'
    },
    {
      name: '4. Koroner Arter (Bypass)',
      description: 'Daralmış koroner arterlerin açık göğüs ameliyatıyla düzeltilmesi işlemi.',
      exclusions: 'Anjiyoplasti (Balon/Stent) veya kapalı cerrahi (key-hole) girişimleri kapsam dışıdır.'
    },
    {
      name: '5. Böbrek Yetmezliği',
      description: 'Her iki böbreğin geri dönüşü olmayan kaybı sonucu düzenli diyaliz veya böbrek nakli gereksinimi.',
      exclusions: 'Tek böbrek kaybı kapsam dışıdır.'
    },
    {
      name: '6. Büyük Organ Nakli',
      description: 'Kalp, akciğer, karaciğer, pankreas, ince bağırsak, böbrek veya kemik iliği nakli ameliyatı geçirilmesi.',
      exclusions: 'Sadece alıcı (nakil yapılan kişi) teminattan yararlanabilir.'
    },
    {
      name: '7. Felç (Paralizi)',
      description: 'Kaza veya hastalık sonucu omurilik hasarına bağlı, en az 3 ay süren iki veya daha fazla uzvun kalıcı kaybı.',
      exclusions: 'Geçici felç durumları veya psikolojik kaynaklı kayıplar kapsam dışıdır.'
    },
    {
      name: '8. Kalp Kapak Cerrahisi',
      description: 'Kalp kapaklarının açık kalp ameliyatı ile değiştirilmesi veya düzeltilmesi.',
      exclusions: 'Sadece açık kalp ameliyatı şartı aranır.'
    },
    {
      name: '9. Aort Damarı Cerrahisi',
      description: 'Göğüs veya karın aortasının hastalıklı kısmının suni damarla (greft) değiştirilmesi.',
      exclusions: 'Aortun yan dalları (baş/kol damarları gibi) kapsam dışıdır.'
    },
    {
      name: '10. Multiple Skleroz (MS)',
      description: 'Demiyelinizasyona bağlı tipik klinik ataklar ve MR bulguları. Teşhis için 6 ay sürekli bozukluk veya 2 ayrı atak şarttır.',
      exclusions: 'Kesinleşmemiş şüphe durumları kapsam dışıdır.'
    },
    {
      name: '11. Alzheimer / Bunama',
      description: 'Günlük yaşam faaliyetlerinden en az 3\'ünde kalıcı yetersizlik yapan ve 3 ay dokümante edilen kesin alzheimer tanısı.',
      exclusions: 'Normal yaşlılık unutkanlıkları kapsam dışıdır.'
    },
    {
      name: '12. İyi Huylu Beyin Tümörü',
      description: 'Genel anestezi ile çıkarılması gereken veya kalıcı nörolojik hasar yapan kanser dışı kitleler.',
      exclusions: 'Kistler, hematomlar ve hipofiz bezi tümörleri özellikle kapsam dışıdır.'
    },
    {
      name: '13. Koma',
      description: 'En az 96 saat yaşam desteğine bağlı, 3 ay süren kalıcı nörolojik hasar bırakan şuur kaybı.',
      exclusions: 'Alkol veya ilaç kötü kullanımına bağlı koma kapsam dışıdır.'
    },
    {
      name: '14. Büyük Yanıklar',
      description: 'Vücudun en az %20\'sini kapsayan üçüncü derece yanıklar.',
      exclusions: '1. ve 2. derece yanıklar ne kadar geniş olursa olsun kapsam dışıdır.'
    },
    {
      name: '15. Motor Nöron (ALS)',
      description: 'Sinir hücrelerinin ölümüyle seyreden, kalıcı 3/6 GYF kaybı yapan teşhis.',
      exclusions: 'Tanı kesinleşmeden ödeme yapılmaz.'
    },
    {
      name: '16. Parkinson',
      description: 'Nedeni belirsiz (idyopatik) parkinson hastalığı. Kalıcı 3/6 GYF kaybı veya yatağa bağımlılık şarttır.',
      exclusions: 'Parkinson benzeri diğer sendromlar kapsam dışıdır.'
    },
    {
      name: '17. Tam ve Daimi Maluliyet',
      description: 'Hastalık veya kaza sonucu 3/6 kuralına (6 günlük yaşam faaliyetinden 3\'ünü yapamama) göre iş göremezlik.',
      exclusions: 'Kısmi maluliyetler (parmak kaybı vb.) ödeme kapsamı dışıdır.'
    }
  ],
  disabilityCriteria: [
    'Yıkanma (Banyoda yardım almaksızın)',
    'Giyinme (Giysileri takma/çıkarma)',
    'Kontinens (Boşaltım kontrolü)',
    'Mobilite (Odalar arası geçiş)',
    'Kişisel Hijyen (Tuvalet kullanımı)',
    'Beslenme (Kendi kendini besleme)'
  ],
  waitingPeriods: [
    { title: 'Muafiyet (Genel)', period: '3 Ay (Hastalık başlangıcı bu süreden sonra olmalı)' },
    { title: 'Muafiyet (MS)', period: '6 Ay' },
    { title: 'Hayatta Kalma', period: 'Teşhis/Ameliyat sonrası 30 Gün yaşam şartı' },
    { title: 'Maluliyet Bekleme', period: 'Kesinleşme için 6 Ay' }
  ],
  exclusions: [
    'İntihar (İlk 3 yıl)',
    'Önceden var olan hastalıklar (Beyan edilmeyen)',
    'Alkol veya uyuşturucu kullanımına bağlı koma',
    'AIDS ile ilişkili hastalıklar veya nükleer rizikolar'
  ],
  lifecycle: {
    tenzil: '12 ay sonra dondurma hakkı. Tenzil durumunda vefat teminatı ödenmiş prim oranına göre indirgenir.',
    istirak: '12 ay sonra nakit iade alarak ayrılma hakkı. Erken ayrılmada kesinti oranları uygulanır.',
    istirakTable: [
      { label: '0-12. Ay', rate: '%100 Kesinti' },
      { label: '13-24. Ay', rate: '%50 Kesinti' },
      { label: '25-36. Ay', rate: '%40 Kesinti' },
      { label: '37-48. Ay', rate: '%30 Kesinti' },
      { label: '49+ Ay', rate: '%20 Kesinti' }
    ],
    araVerme: '3 aylık dönemlerle ara verilebilir. 12 yıllıkta toplam 24, 15 yıllıkta 30 ay limit vardır.',
    ikraz: 'İştirak bedelinin %50\'si kadar düşük faizli borç alma imkanı.',
    sonlanma: 'Vefat veya Kritik Hastalık tazminatı ödendiğinde poliçe biter.'
  },
  taxAdvantage: 'Brüt gelirin %15\'ine kadar vergi indirimi. %40\'a varan toplam maliyet avantajı.',
  faqs: [
    {
      question: "Kritik hastalık tazminatı için şartlar nedir?",
      answer: "Hastalığın muafiyet süresinden (3-6 ay) sonra ilk kez teşhis edilmesi ve teşhis tarihinden itibaren sigortalının 30 gün hayatta kalması gerekir."
    },
    {
      question: "2 Kat ödeme her hastalıkta geçerli mi?",
      answer: "Evet, poliçe kapsamında belirtilen 17 kritik hastalıktan herhangi biri gerçekleştiğinde ana vefat teminatının 2 katı ödenir."
    },
    {
      question: "Maluliyet bu kapsama dahil mi?",
      answer: "Evet, Tam ve Daimi Maluliyet listenin 17. maddesidir ve kritik hastalık tazminatı (2X) kapsamında değerlendirilir."
    },
    {
      question: "Tenzil (Dondurma) yaparsam muafiyetler ne olur?",
      answer: "Poliçe yeniden yürürlüğe alındığında kritik hastalıklar için muafiyet süreleri (3-6 ay) baştan başlar."
    }
  ]
};
