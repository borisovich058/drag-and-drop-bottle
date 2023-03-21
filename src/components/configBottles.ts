export enum BottlesEnum {
  Blue,
  Brown,
  Green,
  Red,
  White,
}

/*Позиция*/
export enum ShelvesEnum {
  Top,
  Bottom,
}

export type BottlesType = {
  id: BottlesEnum;
  image: string;
};

export type BottleDragProps = {
  bottle: BottlesType;
  position: PositionType;
};

export type PositionType = [ShelvesEnum, BottlesEnum];
export type ShelfItemType = BottlesEnum | null;
export type ShelfItemsListType = ShelfItemType[];

export const bottles: Record<BottlesEnum, BottlesType> = {
  [BottlesEnum.blue]: {
    id: BottlesEnum.blue,
    image: require("./img/blue.png"),
  },
  [BottlesEnum.brown]: {
    id: BottlesEnum.brown,
    image: require("./img/brown.png"),
  },
  [BottlesEnum.green]: {
    id: BottlesEnum.green,
    image: require("./img/green.png"),
  },
  [BottlesEnum.red]: {
    id: BottlesEnum.red,
    image: require("./img/red.png"),
  },
  [BottlesEnum.white]: {
    id: BottlesEnum.white,
    image: require("./img/white.png"),
  },
};

/** Выигрышная комбинация */
export const correctPosition = [
  BottlesEnum.green,
  BottlesEnum.white,
  BottlesEnum.brown,
  BottlesEnum.red,
  BottlesEnum.blue,
];

/**Правила */
export const rules = [
  "По краям стоят круглые бутылки",
  "Голубая бутылка стоит рядом с красной",
  "В центре стоит бутылка без пробки",
  "Красная бутылка стоит правее зеленой и белой",
  "Зеленая бутылка не стоит рядом с бутылками без пробки",
];
