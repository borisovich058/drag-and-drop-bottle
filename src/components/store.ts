import React from "react";
import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { correctPosition, PositionType, ShelfItemsListType, ShelfItemType, ShelvesEnum } from "./configBottles";

export class BottleGameStore {
  draggetPositions: PositionType | null = null;
  positions: Record<ShelvesEnum, ShelfItemsListType>;

  constructor() {
    makeAutoObservable(this);
    this.shuffle();
  }

  shuffle(): void {
    this.positions = {
      [ShelvesEnum.top]: new Array(correctPosition.length).fill(null),
      [ShelvesEnum.bottom]: [...correctPosition].sort(
        () => Math.random() - 0.5
      ),
    };
  }

  get isOneBottomCorrect(): boolean {
    return correctPosition.some(
      (bottleId, columnIndex) =>
        bottleId === this.positions[ShelvesEnum.bottom][columnIndex]
    );
  }

  onDrag(position: PositionType): void {
    this.draggetPositions = position;
  }

  onDrop(bottleId: number, positions: PositionType): void {
    const itemAtDrop = this.getItem(positions);
    if (itemAtDrop || !this.draggetPositions || this.isCorrect) {
      return;
    }

    this.setItem(this.draggetPositions, null);
    this.setItem(positions, bottleId);
  }

  getItem(position: PositionType): ShelfItemType {
    const [shelfIndex, columnIndex] = position;
    return this.positions[shelfIndex][columnIndex];
  }

  setItem(position: PositionType, item: ShelfItemType): void {
    const [shelfIndex, columnIndex] = position;
    this.positions[shelfIndex][columnIndex] = item;
  }

  get isCorrect(): boolean {
    return (
      JSON.stringify(correctPosition) ===
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

export const BottlesGameContext = createContext<BottleGameStore | null>(null);

export const useStore = <T>(context: React.Context<T | null>): T => {
  const data = useContext(context);

  if (!data) {
    throw new Error("Using store outside of context");
  }
  return data;
};
