export enum BottlesEnum {
    blue,
    brown,
    green,
    red,
    white
  }
  
  export enum ShelvesEnum {
    top,
    bottom
  }
  
  export type BottleType = {
    id: BottlesEnum;
    image: string;
  };
  
  export type ShelfItemType = BottlesEnum | null;
  export type ShelfItemsListType = ShelfItemType[];
  
  export type PositionType = [ShelvesEnum, BottlesEnum];
  
  export type BottleGlyphType = {
    type: string;
    bottle: BottleType;
  };
  