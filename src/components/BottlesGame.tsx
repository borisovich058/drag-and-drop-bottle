import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BottleGameStore, BottlesGameContext } from "./store";
import { Container, Playground, Rules, Shelves, Title } from "./style";
import { bottles, rules, ShelvesEnum } from "./configBottles";
import BottlePreview from "./BottlePreview";
import BottleDrag from "./BottleDrag";
import BottleDrop from "./BottleDrop";

const BottlesGame: React.FC = () => {
  const [store] = React.useState(() => new BottleGameStore());
  
  return (
    <DndProvider backend={HTML5Backend}  options={HTML5Backend}>
      <BottlesGameContext.Provider value={store}>
        <Playground>
          {store.isCorrect ? (
            <Title>Все правильно!</Title>
          ) : store.isUncorrect ? (
            <Title>Эта расстановка неверная, попробуй еще раз</Title>
          ) : (
            <Title>Расставь бутылки на верхней полке в нужном порядке</Title>
          )}
          <Shelves>
            <BottlePreview />

            {store.positionKeys.map((shelfKey, shelfIndex) =>
              store.getShelf(shelfKey).map((bottleKey, bottleIndex) => {
                if (bottleKey === null) {
                  return null;
                }
                return (
                  <BottleDrag
                    bottle={bottles[bottleKey]}
                    position={[shelfIndex, bottleIndex]}
                    key={`bottle-${shelfKey}-${bottleKey}`}
                  />
                );
              })
            )}

            {Object.keys(bottles).map((columnIndex) => (
              <div key={`bottlePlaceholder-${columnIndex}`}>
                <BottleDrop position={[ShelvesEnum.Top, Number(columnIndex)]} />
                <BottleDrop
                  position={[ShelvesEnum.Bottom, Number(columnIndex)]}
                />
              </div>
            ))}
          </Shelves>
          {!store.isCorrect && (
            <Rules>
              {rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </Rules>
          )}
        </Playground>
      </BottlesGameContext.Provider>
    </DndProvider>
  );
};


export default BottlesGame;
