import { observer } from "mobx-react";
import React from "react";
import { useDrop } from "react-dnd";
import { BOTTLE_DND_TYPE } from "./config";
import { BottlesGameContext, useStore } from "./store";
import { BottleDropWrapper } from "./style";
import { PositionType } from "./types";


type BottleDropProps = {
  position: PositionType;
};

const BottleDrop: React.FC<BottleDropProps> = ({
  position,
}: BottleDropProps) => {
  const store = useStore(BottlesGameContext);

  const [
    ,
    drop,
  ] = useDrop({
    accept: BOTTLE_DND_TYPE, 
    drop: (item: any) => {
      store.onDrop(item.bottle.id, position);
    },
  });

  return <BottleDropWrapper position={position} ref={drop}/>
};

export default observer(BottleDrop);
