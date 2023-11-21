import { StaticImageData } from "next/image";
import Exceptional1Img from "../../public/exceptional-1.png";
import Exceptional2Img from "../../public/exceptional-2.png";
import Exceptional3Img from "../../public/exceptional-3.png";
import Exceptional4Img from "../../public/exceptional-4.png";
import Exceptional5Img from "../../public/exceptional-5.png";
import Exceptional6Img from "../../public/exceptional-6.png";
import Stone1 from "../../public/stone-1.jpg";
import Stone10 from "../../public/stone-10.jpg";
import Stone11 from "../../public/stone-11.jpg";
import Stone12 from "../../public/stone-12.jpg";
import Stone2 from "../../public/stone-2.jpg";
import Stone3 from "../../public/stone-3.jpg";
import Stone4 from "../../public/stone-4.jpg";
import Stone5 from "../../public/stone-5.jpg";
import Stone6 from "../../public/stone-6.jpg";
import Stone7 from "../../public/stone-7.jpg";
import Stone8 from "../../public/stone-8.jpg";
import Stone9 from "../../public/stone-9.jpg";

export type Exceptional = {
  title: string;
  img: StaticImageData;
};

export const exceptionals: Exceptional[] = [
  {
    title: "Large Open Sapphire and Diamond Ring",
    img: Exceptional1Img,
  },
  { title: "Emerald and Diamond Necklace", img: Exceptional2Img },
  { title: "Yellow and White Diamond Ring", img: Exceptional3Img },
  { title: "Round Sapphire and Diamond Ring", img: Exceptional4Img },
  { title: "Emerald and Diamond Ring", img: Exceptional5Img },
  { title: "Tri-Color Gold and Diamond Ring", img: Exceptional6Img },
];

export type Birthstone = {
  title: string;
  img: StaticImageData;
};

export const birthstones: Birthstone[] = [
  { title: "Garnet", img: Stone1 },
  { title: "Amethyst", img: Stone2 },
  { title: "Aquamarine", img: Stone3 },
  { title: "Diamond", img: Stone4 },
  { title: "Emerald", img: Stone5 },
  { title: "Pearl/Alexandrite", img: Stone6 },
  { title: "Ruby", img: Stone7 },
  { title: "Peridot", img: Stone8 },
  { title: "Sapphire", img: Stone9 },
  { title: "Opal/Tourmaline", img: Stone10 },
  { title: "Citrine", img: Stone11 },
  { title: "Blue Zirconia", img: Stone12 },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
