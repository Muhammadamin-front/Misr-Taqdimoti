// Barcha raqamlar bir joyda — taqdimotdan oldin yangilash oson boʻlsin.
// Manbalar SOURCES roʻyxatida, har bir raqam yonida qisqa izoh bor.

export const IMG = (name: string) => `${import.meta.env.BASE_URL}images/${name}.jpg`;

/** Muqovadagi oʻqituvchi/talaba maʼlumotlari — oʻzingiznikiga almashtiring. */
export const AUTHOR = {
  student: "Ism Familiya",
  group: "Guruh: ___",
  teacher: "Ilmiy rahbar: ___",
  subject: "Iqtisodiyot nazariyasi",
  year: "2026",
};

export const EGYPT_FACTS = [
  { label: "Poytaxt", value: "Qohira", note: "Afrika va arab dunyosidagi eng yirik shaharlardan biri" },
  { label: "Maydoni", value: "1 001 450 km²", note: "Oʻzbekistondan ~2,2 barobar katta" },
  { label: "Aholisi", value: "≈107 mln", note: "CAPMAS, 2024 · Afrikada 3-oʻrin" },
  { label: "Valyuta", value: "Misr funti (EGP)", note: "1 $ ≈ 48–50 EGP (2025)" },
  { label: "Davlat tili", value: "Arab tili", note: "Prezidentlik respublikasi" },
  { label: "Nil daryosi", value: "≈95% aholi", note: "Nil vodiysi va deltasida yashaydi" },
];

/** Misr makroiqtisodiy koʻrsatkichlari, 2024 (IMF WEO bahosi / CBE). */
export const EGYPT_KPI = [
  { label: "Nominal YaIM", value: "≈ $383 mlrd", note: "Afrikadagi eng yirik 3 iqtisodiyotdan biri" },
  { label: "YaIM aholi jon boshiga", value: "≈ $3 570", note: "PPP boʻyicha ≈ $20 800" },
  { label: "Real YaIM oʻsishi", value: "2,4%", note: "2023/24 moliya yili" },
  { label: "Inflyatsiya (oʻrtacha)", value: "33,3%", note: "Choʻqqi: 38% — sentabr 2023" },
  { label: "Ishsizlik", value: "≈ 7%", note: "IMF bahosi, 2024" },
  { label: "Tashqi qarz", value: "≈ $155 mlrd", note: "2024 yil oxiri, CBE" },
];

/** Misr YaIM tarkibi (taxminiy ulush, %) va Oʻzbekiston bilan solishtirish. */
export const SECTORS = [
  { sector: "Qishloq xoʻjaligi", egypt: 11, uzbekistan: 23 },
  { sector: "Sanoat va qurilish", egypt: 33, uzbekistan: 33 },
  { sector: "Xizmatlar", egypt: 56, uzbekistan: 44 },
];

/** Suvaysh kanali daromadi, mlrd $ (kalendar yil, Suvaysh kanali boshqarmasi). */
export const SUEZ_REVENUE = [
  { year: "2019", value: 5.8 },
  { year: "2020", value: 5.6 },
  { year: "2021", value: 6.3 },
  { year: "2022", value: 8.0 },
  { year: "2023", value: 10.25 },
  { year: "2024", value: 4.0 },
];

/** Real YaIM oʻsishi, % (Misr — moliya yili, IMF; Oʻzbekiston — Statistika agentligi). */
export const GDP_GROWTH = [
  { year: "2019", egypt: 5.6, uzbekistan: 6.0 },
  { year: "2020", egypt: 3.6, uzbekistan: 2.0 },
  { year: "2021", egypt: 3.3, uzbekistan: 7.4 },
  { year: "2022", egypt: 6.6, uzbekistan: 5.7 },
  { year: "2023", egypt: 3.8, uzbekistan: 6.3 },
  { year: "2024", egypt: 2.4, uzbekistan: 6.5 },
];

/** Inflyatsiya, % (Misr — yillik oʻrtacha, IMF; Oʻzbekiston — yil oxiri, MB). */
export const INFLATION = [
  { year: "2019", egypt: 13.9, uzbekistan: 15.2 },
  { year: "2020", egypt: 5.7, uzbekistan: 11.1 },
  { year: "2021", egypt: 4.5, uzbekistan: 10.0 },
  { year: "2022", egypt: 8.5, uzbekistan: 12.3 },
  { year: "2023", egypt: 24.4, uzbekistan: 8.8 },
  { year: "2024", egypt: 33.3, uzbekistan: 9.8 },
];

/** Misr va Oʻzbekiston: asosiy koʻrsatkichlar, 2024. `e` / `u` — chiziq uzunligi uchun sonlar. */
export const COMPARISON = [
  { label: "Maydoni", egypt: "1 001 450 km²", uzbekistan: "448 969 km²", e: 1001450, u: 448969 },
  { label: "Aholisi", egypt: "≈107 mln", uzbekistan: "≈37,5 mln", e: 107, u: 37.5 },
  { label: "Nominal YaIM", egypt: "≈ $383 mlrd", uzbekistan: "≈ $115 mlrd", e: 383, u: 115 },
  { label: "YaIM jon boshiga", egypt: "≈ $3 570", uzbekistan: "≈ $3 100", e: 3570, u: 3100 },
  { label: "Real YaIM oʻsishi", egypt: "2,4%", uzbekistan: "6,5%", e: 2.4, u: 6.5 },
  { label: "Inflyatsiya", egypt: "33,3%", uzbekistan: "9,8%", e: 33.3, u: 9.8 },
  { label: "Pul oʻtkazmalari", egypt: "≈ $29,5 mlrd", uzbekistan: "$14,8 mlrd", e: 29.5, u: 14.8 },
  { label: "Tashqi qarz", egypt: "≈ $155 mlrd", uzbekistan: "≈ $65 mlrd", e: 155, u: 65 },
] as const;

export const COMPARISON_TEXT = [
  { label: "Milliy valyuta", egypt: "Misr funti (EGP)", uzbekistan: "Soʻm (UZS)" },
  { label: "Asosiy eksport", egypt: "Gaz va neft mahsulotlari, oʻgʻitlar, sitrus mevalar, oltin", uzbekistan: "Oltin, toʻqimachilik, mis, meva-sabzavot, gaz" },
  { label: "Asosiy valyuta manbai", egypt: "Pul oʻtkazmalari, turizm, Suvaysh kanali", uzbekistan: "Pul oʻtkazmalari, oltin eksporti" },
  { label: "Geografiya", egypt: "Ikki dengizga chiqish, Suvaysh kanali", uzbekistan: "Ikki marta dengizga chiqmagan davlat" },
];

export const SOURCES = [
  { name: "IMF — World Economic Outlook maʼlumotlar bazasi (Misr va Oʻzbekiston, 2024 bahosi)", url: "https://www.imf.org/en/Publications/WEO" },
  { name: "Misr Markaziy banki (CBE) — toʻlov balansi, pul oʻtkazmalari, tashqi qarz", url: "https://www.cbe.org.eg/en" },
  { name: "CAPMAS — Misr statistika agentligi (aholi soni)", url: "https://www.capmas.gov.eg/" },
  { name: "Suvaysh kanali boshqarmasi — daromad statistikasi", url: "https://www.suezcanal.gov.eg/" },
  { name: "Oʻzbekiston Statistika agentligi — YaIM 2024 ($114,9 mlrd, +6,5%)", url: "https://stat.uz/" },
  { name: "Oʻzbekiston Markaziy banki — pul oʻtkazmalari ($14,8 mlrd), inflyatsiya", url: "https://cbu.uz/" },
  { name: "Kun.uz: “Uzbekistan’s GDP reached $115 billion in 2024”", url: "https://live.kun.uz/en/news/2025/02/10/uzbekistans-gdp-reached-115-billion-in-2024" },
  { name: "Ahram Online — Suvaysh kanali va toʻlov balansi yangiliklari", url: "https://english.ahram.org.eg/" },
];
