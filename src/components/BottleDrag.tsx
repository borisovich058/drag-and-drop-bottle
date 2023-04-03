import { observer } from 'mobx-react';
import React from 'react';
import { useDrag } from "react-dnd";
import { BOTTLE_DND_TYPE } from './config';
import { BottlesGameContext, useStore } from "./store";
import { BottleDragWrapper } from "./style";
import { BottleType, PositionType } from './types';

type BottleDragProps = {
  bottle: BottleType;
  position: PositionType;
};

const BottleDrag: React.FC<BottleDragProps | any> = ({
  bottle,
  position,
}: BottleDragProps | any) => {
  const store = useStore(BottlesGameContext);

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: BOTTLE_DND_TYPE,
      bottle,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    begin: () => store.onDrag(position),
  });

  return (
    <BottleDragWrapper
      ref={drag}
      position={position}
      isDragging={isDragging}
      style={{
				backgroundImage: `url(${bottle.image})`,
			}}
    />
  );
};

export default observer(BottleDrag);
