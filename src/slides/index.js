import { CoverSlide, OverviewSlide, PlanSlide } from "./Intro";
import { HeritageSlide, MummiesSlide } from "./Heritage";
import { KpiSlide, PillarsSlide, ReformsSlide, SuezSlide } from "./Economy";
import { ComparisonSlide, LessonsSlide, SectorsSlide, TrendsSlide } from "./Compare";
import { ConclusionSlide, CreditsSlide, ThanksSlide } from "./Outro";
const SLIDES = [
  { title: "Muqova", Component: CoverSlide },
  { title: "Reja", Component: PlanSlide },
  { title: "Umumiy ma\u02BClumot", Component: OverviewSlide },
  { title: "Tarixiy meros", Component: HeritageSlide },
  { title: "Mumiyolar va haykallar", Component: MummiesSlide },
  { title: "Asosiy ko\u02BBrsatkichlar", Component: KpiSlide },
  { title: "Daromad ustunlari", Component: PillarsSlide },
  { title: "Suvaysh kanali", Component: SuezSlide },
  { title: "Inqirozlar va islohotlar", Component: ReformsSlide },
  { title: "Misr va O\u02BBzbekiston", Component: ComparisonSlide },
  { title: "O\u02BBsish va inflyatsiya", Component: TrendsSlide },
  { title: "O\u02BBxshash va farqli", Component: SectorsSlide },
  { title: "O\u02BBzbekiston uchun saboqlar", Component: LessonsSlide },
  { title: "Xulosa", Component: ConclusionSlide },
  { title: "Rahmat", Component: ThanksSlide },
  { title: "Rasm mualliflari", Component: CreditsSlide }
];
export {
  SLIDES
};
