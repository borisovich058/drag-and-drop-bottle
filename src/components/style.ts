import styled from "styled-components";
import { BottlesEnum, ShelvesEnum } from "./types";

import shelves from './img/shelves.png';


type PositionType = [ShelvesEnum, BottlesEnum];

const SHELF_START_H = 2.7; // горизонтальный отступ между началом полки и первой ячейкой
const DROP_WIDTH = 14.8; // ширина ячейки на полке
const DROP_HEIGHT = 15; // высота ячейки на полке
const DRAG_SIZE = 12.1; // ширина/высота draggable бутылки

export const Playground = styled.div`
  background: black;
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  z-index: 1;
  position: relative;
  top: 2rem;
`;

export const Shelves = styled.div`
  width: 76.8rem;
  height: 29.83rem;
  position: absolute;
  background: url(${shelves}) no-repeat center / contain;
  top: 0;
  bottom: 0;
  margin: auto;
`;

export const Rules = styled.ul`
  color: white;
  text-align: left;
  display: flex;
  list-style: devanagari;
  position: relative;
  top: 4rem;

  li {
    margin-right: 2rem;
  }
`;

const getShelfItemPositionStyle = ([top, left]: PositionType) => `
	top: ${top * DROP_HEIGHT}rem;
	left: ${left * DROP_WIDTH + SHELF_START_H}rem;
`;

export const DNDItem = styled.div<{
  position: PositionType,
}>`
  ${({ position }) => getShelfItemPositionStyle(position)}
  position: absolute;
`;

export const BottleDragWrapper = styled(DNDItem)<{
  isDragging: boolean,
}>`
  z-index: 1;
  width: ${DRAG_SIZE}rem;
  height: ${DRAG_SIZE}rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  /* В момент перетаскиывания скрываем элемент */
  visibility: ${(props) => (props.isDragging ? "hidden" : "visible")};
`;

export const BottleDropWrapper = styled(DNDItem)`
  width: ${DROP_WIDTH}rem;
  height: ${DROP_HEIGHT}rem;
`;

export const BottlePreviewImg = styled.img`
  width: ${DRAG_SIZE}rem;
  height: ${DRAG_SIZE}rem;
`;
