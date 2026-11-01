import type { ComponentType } from "react";
import { CoverSlide, OverviewSlide, PlanSlide } from "./Intro";
import { TitleSlide } from "./Title";
import { HeritageSlide, MummiesSlide } from "./Heritage";
import { KpiSlide, PillarsSlide, ReformsSlide, SuezSlide } from "./Economy";
import { ComparisonSlide, LessonsSlide, SectorsSlide, TrendsSlide } from "./Compare";
import { ConclusionSlide, CreditsSlide, ThanksSlide } from "./Outro";

export const SLIDES: { title: string; Component: ComponentType }[] = [
  { title: "Titul varaq", Component: TitleSlide },
  { title: "Muqova", Component: CoverSlide },
  { title: "Reja", Component: PlanSlide },
  { title: "Umumiy maʼlumot", Component: OverviewSlide },
  { title: "Tarixiy meros", Component: HeritageSlide },
  { title: "Mumiyolar va haykallar", Component: MummiesSlide },
  { title: "Asosiy koʻrsatkichlar", Component: KpiSlide },
  { title: "Daromad ustunlari", Component: PillarsSlide },
  { title: "Suvaysh kanali", Component: SuezSlide },
  { title: "Inqirozlar va islohotlar", Component: ReformsSlide },
  { title: "Misr va Oʻzbekiston", Component: ComparisonSlide },
  { title: "Oʻsish va inflyatsiya", Component: TrendsSlide },
  { title: "Oʻxshash va farqli", Component: SectorsSlide },
  { title: "Oʻzbekiston uchun saboqlar", Component: LessonsSlide },
  { title: "Xulosa", Component: ConclusionSlide },
  { title: "Rahmat", Component: ThanksSlide },
  { title: "Rasm mualliflari", Component: CreditsSlide },
];
