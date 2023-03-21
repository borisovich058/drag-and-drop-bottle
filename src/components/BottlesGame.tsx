import React from "react";
import { DndProvider } from "react-dnd";
import { getDndBackend, getDndOptions } from "./DndBackend";
import { BottleGameStore, BottlesGameContext } from "./store";
import { Container, Playground, Rules, Shelves, Title } from "./style";
import { rules } from "./configBottles";

const BottlesGame: React.FC = () => {
  const [store] = React.useState(() => new BottleGameStore());

  return (
    <DndProvider backend={getDndBackend()} options={getDndOptions()}>
      <BottlesGameContext.Provider value={store}>
        <Container>
          <Playground>
            <Title>Расставь бутылки на верхней полке в нужном порядке</Title>
            <Shelves />
            <Rules rules={rules} />
          </Playground>
        </Container>
      </BottlesGameContext.Provider>
    </DndProvider>
  );
};

export default BottlesGame;
