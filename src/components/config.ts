import { BottlesEnum, BottleType } from "./types";

import blue from './img/blue.png';
import brown from './img/brown.png';
import green from './img/green.png';
import red from './img/red.png';
import white from './img/white.png';

const img = {blue, brown, green, red, white};


export const bottles: Record<BottlesEnum, BottleType> = {
  [BottlesEnum.blue]: {
    id: BottlesEnum.blue,
    image: img.blue
  },
  [BottlesEnum.brown]: {
    id: BottlesEnum.brown,
    image: img.brown
  },
  [BottlesEnum.green]: {
    id: BottlesEnum.green,
    image: img.green
  },
  [BottlesEnum.red]: {
    id: BottlesEnum.red,
    image: img.red
  },
  [BottlesEnum.white]: {
    id: BottlesEnum.white,
    image: img.white
  }
};

export const BOTTLE_DND_TYPE = "BOTTLE_DND_TYPE";

export const correctPositions = [
  BottlesEnum.green,
  BottlesEnum.white,
  BottlesEnum.brown,
  BottlesEnum.red,
  BottlesEnum.blue
];

export const rules = [
  "По краям стоят круглые бутылки",
  "Голубая бутылка стоит рядом с красной",
  "В центре стоит бутылка без пробки",
  "Красная бутылка стоит правее зеленой и белой",
  "Зеленая бутылка не стоит рядом с бутылками без пробки"
];
