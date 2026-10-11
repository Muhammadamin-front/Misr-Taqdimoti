const IMG = (name) => `${import.meta.env.BASE_URL}images/${name}.jpg`;
const AUTHOR = {
  student: "Ism Familiya",
  group: "Guruh: ___",
  teacher: "Ilmiy rahbar: ___",
  subject: "Iqtisodiyot nazariyasi",
  year: "2026"
};
const EGYPT_FACTS = [
  { label: "Poytaxt", value: "Qohira", note: "Afrika va arab dunyosidagi eng yirik shaharlardan biri" },
  { label: "Maydoni", value: "1 001 450 km\xB2", note: "O\u02BBzbekistondan ~2,2 barobar katta" },
  { label: "Aholisi", value: "\u2248107 mln", note: "CAPMAS, 2024 \xB7 Afrikada 3-o\u02BBrin" },
  { label: "Valyuta", value: "Misr funti (EGP)", note: "1 $ \u2248 48\u201350 EGP (2025)" },
  { label: "Davlat tili", value: "Arab tili", note: "Prezidentlik respublikasi" },
  { label: "Nil daryosi", value: "\u224895% aholi", note: "Nil vodiysi va deltasida yashaydi" }
];
const EGYPT_KPI = [
  { label: "Nominal YaIM", value: "\u2248 $383 mlrd", note: "Afrikadagi eng yirik 3 iqtisodiyotdan biri" },
  { label: "YaIM aholi jon boshiga", value: "\u2248 $3 570", note: "PPP bo\u02BByicha \u2248 $20 800" },
  { label: "Real YaIM o\u02BBsishi", value: "2,4%", note: "2023/24 moliya yili" },
  { label: "Inflyatsiya (o\u02BBrtacha)", value: "33,3%", note: "Cho\u02BBqqi: 38% \u2014 sentabr 2023" },
  { label: "Ishsizlik", value: "\u2248 7%", note: "IMF bahosi, 2024" },
  { label: "Tashqi qarz", value: "\u2248 $155 mlrd", note: "2024 yil oxiri, CBE" }
];
const SECTORS = [
  { sector: "Qishloq xo\u02BBjaligi", egypt: 11, uzbekistan: 23 },
  { sector: "Sanoat va qurilish", egypt: 33, uzbekistan: 33 },
  { sector: "Xizmatlar", egypt: 56, uzbekistan: 44 }
];
const SUEZ_REVENUE = [
  { year: "2019", value: 5.8 },
  { year: "2020", value: 5.6 },
  { year: "2021", value: 6.3 },
  { year: "2022", value: 8 },
  { year: "2023", value: 10.25 },
  { year: "2024", value: 4 }
];
const GDP_GROWTH = [
  { year: "2019", egypt: 5.6, uzbekistan: 6 },
  { year: "2020", egypt: 3.6, uzbekistan: 2 },
  { year: "2021", egypt: 3.3, uzbekistan: 7.4 },
  { year: "2022", egypt: 6.6, uzbekistan: 5.7 },
  { year: "2023", egypt: 3.8, uzbekistan: 6.3 },
  { year: "2024", egypt: 2.4, uzbekistan: 6.5 }
];
const INFLATION = [
  { year: "2019", egypt: 13.9, uzbekistan: 15.2 },
  { year: "2020", egypt: 5.7, uzbekistan: 11.1 },
  { year: "2021", egypt: 4.5, uzbekistan: 10 },
  { year: "2022", egypt: 8.5, uzbekistan: 12.3 },
  { year: "2023", egypt: 24.4, uzbekistan: 8.8 },
  { year: "2024", egypt: 33.3, uzbekistan: 9.8 }
];
const COMPARISON = [
  { label: "Maydoni", egypt: "1 001 450 km\xB2", uzbekistan: "448 969 km\xB2", e: 1001450, u: 448969 },
  { label: "Aholisi", egypt: "\u2248107 mln", uzbekistan: "\u224837,5 mln", e: 107, u: 37.5 },
  { label: "Nominal YaIM", egypt: "\u2248 $383 mlrd", uzbekistan: "\u2248 $115 mlrd", e: 383, u: 115 },
  { label: "YaIM jon boshiga", egypt: "\u2248 $3 570", uzbekistan: "\u2248 $3 100", e: 3570, u: 3100 },
  { label: "Real YaIM o\u02BBsishi", egypt: "2,4%", uzbekistan: "6,5%", e: 2.4, u: 6.5 },
  { label: "Inflyatsiya", egypt: "33,3%", uzbekistan: "9,8%", e: 33.3, u: 9.8 },
  { label: "Pul o\u02BBtkazmalari", egypt: "\u2248 $29,5 mlrd", uzbekistan: "$14,8 mlrd", e: 29.5, u: 14.8 },
  { label: "Tashqi qarz", egypt: "\u2248 $155 mlrd", uzbekistan: "\u2248 $65 mlrd", e: 155, u: 65 }
];
const COMPARISON_TEXT = [
  { label: "Milliy valyuta", egypt: "Misr funti (EGP)", uzbekistan: "So\u02BBm (UZS)" },
  { label: "Asosiy eksport", egypt: "Gaz va neft mahsulotlari, o\u02BBg\u02BBitlar, sitrus mevalar, oltin", uzbekistan: "Oltin, to\u02BBqimachilik, mis, meva-sabzavot, gaz" },
  { label: "Asosiy valyuta manbai", egypt: "Pul o\u02BBtkazmalari, turizm, Suvaysh kanali", uzbekistan: "Pul o\u02BBtkazmalari, oltin eksporti" },
  { label: "Geografiya", egypt: "Ikki dengizga chiqish, Suvaysh kanali", uzbekistan: "Ikki marta dengizga chiqmagan davlat" }
];
const SOURCES = [
  { name: "IMF \u2014 World Economic Outlook ma\u02BClumotlar bazasi (Misr va O\u02BBzbekiston, 2024 bahosi)", url: "https://www.imf.org/en/Publications/WEO" },
  { name: "Misr Markaziy banki (CBE) \u2014 to\u02BBlov balansi, pul o\u02BBtkazmalari, tashqi qarz", url: "https://www.cbe.org.eg/en" },
  { name: "CAPMAS \u2014 Misr statistika agentligi (aholi soni)", url: "https://www.capmas.gov.eg/" },
  { name: "Suvaysh kanali boshqarmasi \u2014 daromad statistikasi", url: "https://www.suezcanal.gov.eg/" },
  { name: "O\u02BBzbekiston Statistika agentligi \u2014 YaIM 2024 ($114,9 mlrd, +6,5%)", url: "https://stat.uz/" },
  { name: "O\u02BBzbekiston Markaziy banki \u2014 pul o\u02BBtkazmalari ($14,8 mlrd), inflyatsiya", url: "https://cbu.uz/" },
  { name: "Kun.uz: \u201CUzbekistan\u2019s GDP reached $115 billion in 2024\u201D", url: "https://live.kun.uz/en/news/2025/02/10/uzbekistans-gdp-reached-115-billion-in-2024" },
  { name: "Ahram Online \u2014 Suvaysh kanali va to\u02BBlov balansi yangiliklari", url: "https://english.ahram.org.eg/" }
];
export {
  AUTHOR,
  COMPARISON,
  COMPARISON_TEXT,
  EGYPT_FACTS,
  EGYPT_KPI,
  GDP_GROWTH,
  IMG,
  INFLATION,
  SECTORS,
  SOURCES,
  SUEZ_REVENUE
};
