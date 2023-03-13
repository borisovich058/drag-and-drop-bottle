import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

type ShelfItemType = BottlesEnum | null;
type ShelfItemsListType = ShelfItemType[];


class BottleGameStore {

    daraggetPositions: PositionType | null = null;
    positions: Record<ShelfItemType, ShelfItemsListType>;

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
        }
    };

    get isOneBottomCorrect(): boolean {
        return correctPosition.some(
            (bottleId, columnIndex) =>
        bottleId === this.positions[ShelvesEnum.bottom][columnIndex])
    };

    onDrag(position: PositionType): void {
        this.daraggetPositions = position;
    }

    onDrop(bottleId: number, positions: PositionType): void {
        const itemAtDrop = this.getItem(positions);
        if(itemAtDrop || !this.daraggetPositions || this.isCorrect) {
            return;
        }

        this.setItem(this.daraggetPositions, null);
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
            JSON.stringify(correctPositions) ===
            JSON.stringify(this.positions[ShelvesEnum.top]) // элегантный способ 🤨
        );
    }
  
    get isUncorrect(): boolean {
          return (
              !this.isCorrect &&
              this.positions[ShelvesEnum.top].every((position) => position !== null)
          );
      }
};

