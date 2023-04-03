import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { correctPositions } from "./config";
import { PositionType, ShelvesEnum, ShelfItemsListType, ShelfItemType } from "./types";


export class BottlesStore {
  draggedPosition: PositionType | null = null;
  positions: Record<ShelvesEnum, ShelfItemsListType>;

  constructor() {
    this.shuffle();
    makeAutoObservable(this);
  }

  get isOneAtBottomCorrect(): boolean {
    return correctPositions.some(
      (bottleId, columnIndex) =>
        bottleId === this.positions[ShelvesEnum.bottom][columnIndex]
    );
  }

  shuffle(): void {
    this.positions = {
      [ShelvesEnum.top]: new Array(correctPositions.length).fill(null),
      [ShelvesEnum.bottom]: [...correctPositions].sort(
        () => Math.random() - 0.5
      )
    };

    // this.isOneAtBottomCorrect && this.shuffle();
  }

  getItem(position: PositionType): ShelfItemType {
    const [shelfIndex, columnIndex] = position;
    return this.positions[shelfIndex][columnIndex];
  }

  setItem(position: PositionType, item: ShelfItemType): void {
    const [shelfIndex, columnIndex] = position;
    this.positions[shelfIndex][columnIndex] = item;
  }

  onDrop(bottleId: number, position: PositionType): void {
    const itemAtDrop = this.getItem(position);
    if (itemAtDrop || !this.draggedPosition || this.isCorrect) {
      return;
    }
    this.setItem(this.draggedPosition, null);
    this.setItem(position, bottleId);
  }

  onDrag(position: PositionType): void {
    this.draggedPosition = position;
  }

  get positionKeys(): string[] {
    return Object.keys(this.positions);
  }

  getShelf(shelf: string): ShelfItemsListType {
    return this.positions[shelf];
  }

  get isCorrect(): boolean {
    return (
      JSON.stringify(correctPositions) ===
      JSON.stringify(this.positions[ShelvesEnum.top])
    );
  }

  get isUncorrect(): boolean {
    return (
      !this.isCorrect &&
      this.positions[ShelvesEnum.top].every((position) => position !== null)
    );
  }
}

export const BottlesGameContext = createContext<BottlesStore | null>(null);

export const useStore = <T>(context: React.Context<T | null>): T => {
  const data = useContext(context);

  if (!data) {
    throw new Error("Using store outside of context");
  }

  return data;
};
