import React from "react";
import { DndProvider } from "react-dnd";
import { MultiBackend } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";
import { BottleGameStore, BottlesGameContext } from "./store";
import { Container, Playground, Rules, Shelves, Title } from "./style";
import { rules } from "./configBottles";

const BottlesGame: React.FC = () => {
  const [store] = React.useState(() => new BottleGameStore());

  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <BottlesGameContext.Provider value={store}>
        <Container>
          <Playground>
               <Title>Расставь бутылки на верхней полке в нужном порядке</Title>
               <Shelves />
               <Rules>
                    {rules.map((rule, i) => {
                         <li key={i}>{rule}</li>
                    })}
               </Rules>
          </Playground>
        </Container>
      </BottlesGameContext.Provider>
    </DndProvider>
  );
};

export default BottlesGame;