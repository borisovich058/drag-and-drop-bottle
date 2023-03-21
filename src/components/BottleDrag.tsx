import React from 'react';
import { useDrag } from "react-dnd";
import { BottleDragProps } from "./configBottles";
import { BottlesGameContext, useStore } from "./store";
import { BottleDragWrapper } from "./style";

const BOTTLE_DND_TYPE = "BOTTLE_DND_TYPE";

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

export default BottleDrag;
