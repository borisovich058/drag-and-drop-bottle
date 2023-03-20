import styled from "styled-components";
import { BottlesEnum, ShelvesEnum } from "./configBottles";

type PositionType = [ShelvesEnum, BottlesEnum];

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 120rem;
  height: 50rem;
  text-align: center;
  background: black;
`;

const Playground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: 2.5rem;
  color: white;
  text-align: center;
  z-index: 1;
  font-family: monospace;
`;

const Shelves = styled.div`
  width: 76.8rem;
  height: 29.83rem;
  position: absolute;
  background: url(${require(`./img/shelves.png`)}) no-repeat center / contain;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Rules = styled.ul`
  color: white;
  text-align: left;
`;

const getShelfItemPositionStyle = ([top, left]: PositionType) => `
  top: ${top * DROP_HEIGHT}rem;
  left: ${left * DROP_WIDTH + SHELF_START_H}rem;
`;

const DNDItem = styled.div<{
  position: PositionType;
}>`
  ${({ position }) => getShelfItemPositionStyle(position)}
  position: absolute;
`;

const SHELF_START_H = 2.7; // горизонтальный отступ между началом полки и первой ячейкой
const DROP_WIDTH = 14.8; // ширина ячейки на полке
const DROP_HEIGHT = 15; // высота ячейки на полке
const DRAG_SIZE = 12.1; // ширина/высота draggable бутылки

export { Container, Playground, Title, Shelves, Rules, getShelfItemPositionStyle, DNDItem };
