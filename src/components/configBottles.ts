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

export type BottleDropProps = {
  position: PositionType;
}

export type BottleGlyphType = {
  type: string;
  bottle: BottlesType;
};


export type PositionType = [ShelvesEnum, BottlesEnum];
export type ShelfItemType = BottlesEnum | null;
export type ShelfItemsListType = ShelfItemType[];

export const bottles: Record<BottlesEnum, BottlesType> = {
  [BottlesEnum.Blue]: {
    id: BottlesEnum.Blue,
    image: require("./img/blue.png"),
  },
  [BottlesEnum.Brown]: {
    id: BottlesEnum.Brown,
    image: require("./img/brown.png"),
  },
  [BottlesEnum.Green]: {
    id: BottlesEnum.Green,
    image: require("./img/green.png"),
  },
  [BottlesEnum.Red]: {
    id: BottlesEnum.Red,
    image: require("./img/red.png"),
  },
  [BottlesEnum.White]: {
    id: BottlesEnum.White,
    image: require("./img/white.png"),
  },
};

/** Выигрышная комбинация */
export const correctPosition = [
  BottlesEnum.Green,
  BottlesEnum.White,
  BottlesEnum.Brown,
  BottlesEnum.Red,
  BottlesEnum.Blue,
];

/**Правила */
export const rules = [
  "По краям стоят круглые бутылки",
  "Голубая бутылка стоит рядом с красной",
  "В центре стоит бутылка без пробки",
  "Красная бутылка стоит правее зеленой и белой",
  "Зеленая бутылка не стоит рядом с бутылками без пробки",
];
