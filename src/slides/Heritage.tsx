import { motion } from "motion/react";
import { CoverFlowCarousel, type CarouselItem } from "@/components/ui/3-d-coverflow-carousel";
import OrbitFlipSlider from "@/components/ui/orbit-flip-slider";
import { TextRoll } from "@/components/ui/text-roll";
import { IMG } from "@/data";

const COMMONS = "https://commons.wikimedia.org/wiki/File:";

const MONUMENTS: CarouselItem[] = [
  {
    tag: "#YUNESKO",
    titleLine1: "Giza piramidalari",
    titleLine2: "– miloddan avvalgi 2560-y.",
    desc: "Qadimgi dunyoning 7 moʻjizasidan saqlanib qolgan yagona yodgorlik. Misr turizmining asosiy brendi.",
    img: IMG("pyramids"),
    ctaUrl: `${COMMONS}All_Gizah_Pyramids.jpg`,
  },
  {
    tag: "#Giza",
    titleLine1: "Buyuk Sfinks",
    titleLine2: "– 73 metrlik sher-odam",
    desc: "Yaxlit qoyadan yoʻnilgan dunyodagi eng katta monolit haykallardan biri.",
    img: IMG("sphinx"),
    ctaUrl: `${COMMONS}Great_Sphinx_of_Giza_(أبو_الهول).jpg`,
  },
  {
    tag: "#Oltin",
    titleLine1: "Tutanxamon niqobi",
    titleLine2: "– 10 kg sof oltin",
    desc: "1922-yilda topilgan. Bugun Katta Misr muzeyining (GEM, 2025) bosh eksponati.",
    img: IMG("tut-mask"),
    ctaUrl: `${COMMONS}CairoEgMuseumTaaMaskMostlyPhotographed.jpg`,
  },
  {
    tag: "#Nubiya",
    titleLine1: "Abu-Simbel",
    titleLine2: "– Ramzes II ibodatxonasi",
    desc: "1960-yillarda Asvon toʻgʻoni qurilishida YUNESKO yordamida butunlay koʻchirilgan.",
    img: IMG("abu-simbel"),
    ctaUrl: `${COMMONS}Templo_de_Ramsés_II,_Abu_Simbel,_Egipto,_2022-04-02,_DD_03.jpg`,
  },
  {
    tag: "#Luksor",
    titleLine1: "Karnak",
    titleLine2: "– ibodatxonalar majmuasi",
    desc: "Dunyodagi eng katta qadimiy diniy majmua. Luksor — “ochiq osmon ostidagi muzey”.",
    img: IMG("karnak"),
    ctaUrl: `${COMMONS}Karnak_temple_complex_12.jpg`,
  },
  {
    tag: "#Muzey",
    titleLine1: "Katta Misr muzeyi",
    titleLine2: "– GEM, Giza",
    desc: "Dunyodagi bitta sivilizatsiyaga bagʻishlangan eng katta muzey. 2025-yil noyabrda toʻliq ochildi.",
    img: IMG("gem"),
    ctaUrl: `${COMMONS}Grand_Egyptian_Museum_2025.jpg`,
  },
  {
    tag: "#Berlin",
    titleLine1: "Nefertiti byusti",
    titleLine2: "– miloddan avvalgi 1345-y.",
    desc: "Qadimgi Misr sanʼatining ramzi. Hozir Berlindagi Neues Museumda saqlanadi.",
    img: IMG("nefertiti"),
    ctaUrl: `${COMMONS}Nofretete_Neues_Museum.jpg`,
  },
];

export function HeritageSlide() {
  return (
    <div className="relative h-full w-full">
      <CoverFlowCarousel
        items={MONUMENTS}
        sectionLabel="Tarixiy meros — turizm kapitali"
        autoplayDelay={4500}
        enableKeyboard={false}
        onCtaClick={(item) => item.ctaUrl && window.open(item.ctaUrl, "_blank", "noopener")}
        className="h-full min-h-0 py-6"
      />
      <div className="pointer-events-none absolute left-1/2 top-4 z-20 hidden -translate-x-1/2 gap-6 text-sm text-zinc-300 md:flex">
        <span>
          <b className="text-sand-300">15,7 mln</b> sayyoh — 2024
        </span>
        <span className="text-zinc-600">|</span>
        <span>
          <b className="text-sand-300">≈19 mln</b> — 2025 (rekord, +21%)
        </span>
      </div>
    </div>
  );
}

const GALLERY = [
  { image: IMG("mummy-ramesses"), alt: "Ramzes II mumiyosi" },
  { image: IMG("tut-mask"), alt: "Tutanxamon niqobi" },
  { image: IMG("mummy-thebes"), alt: "Fivalik ayol mumiyosi" },
  { image: IMG("anubis"), alt: "Anubis haykali" },
  { image: IMG("nefertiti"), alt: "Nefertiti byusti" },
  { image: IMG("mummy-cat"), alt: "Mushuk mumiyosi" },
  { image: IMG("scribe"), alt: "Oʻtirgan kotib haykali" },
  { image: IMG("memnon"), alt: "Memnon kolosslari" },
  { image: IMG("mummies-berlin"), alt: "Berlin muzeyidagi mumiyolar" },
  { image: IMG("sphinx"), alt: "Buyuk Sfinks" },
  { image: IMG("luxor-statues"), alt: "Luksor ibodatxonasi haykallari" },
  { image: IMG("sarcophagus"), alt: "Merneptah sarkofagi" },
  { image: IMG("abu-simbel"), alt: "Abu-Simbel kolosslari" },
  { image: IMG("hatshepsut"), alt: "Xatshepsut ibodatxonasi" },
].map((item, id) => ({ id, ...item }));

export function MummiesSlide() {
  return (
    <div className="relative h-full w-full">
      <OrbitFlipSlider
        items={GALLERY}
        backgroundColor="#14100c"
        imageWidth={104}
        imageHeight={150}
        rounded="rounded-lg"
        rotateSpeed={5}
        flatRadiusX={1.9}
        flatRadiusY={1.15}
        ringRadiusX={1.5}
        ringRadiusY={1.2}
        ringScale={1}
        tiltRadiusX={1.9}
        tiltRadiusY={1.5}
        tiltScale={1.2}
        tiltMoveY={300}
        galleryRotateX={0}
        galleryRadiusX={1.3}
        galleryRadiusY={1.5}
        galleryScale={1.2}
      />
      <div className="pointer-events-none absolute inset-0 z-[1500] flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sand-300">
            2 · Mumiyolar va haykallar
          </div>
          <h2 className="gold-text font-display text-4xl font-black uppercase md:text-6xl">
            <TextRoll duration={0.45}>Abadiyat</TextRoll>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-balance text-zinc-300"
          >
            Mumiyolash — qadimgi Misrning kimyo, tibbiyot va hunarmandchilik “texnologiyasi”. Bugun bu meros
            muzeylar, kino va turizm orqali yiliga milliardlab dollar daromad keltiradi.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
