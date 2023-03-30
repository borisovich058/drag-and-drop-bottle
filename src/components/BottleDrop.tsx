import React from "react";
import { useDrop } from "react-dnd";
import { BottleDropProps } from "./configBottles";
import { BottlesGameContext, useStore } from "./store";
import { BottleDropWrapper } from "./style";

const BOTTLE_DND_TYPE = "BOTTLE_DND_TYPE";

const BottleDrop: React.FC<BottleDropProps> = ({
  position,
}: BottleDropProps) => {
  const store = useStore(BottlesGameContext);

  const [
    ,
    drop, // ref drop-элемента
  ] = useDrop({
    accept: BOTTLE_DND_TYPE, // в этот drop-элемент можно перетащить только drag-элемент с данным типом*
    drop: (item: any) => {
      store.onDrop(item.bottle.id, position);
    },
  });

  return <BottleDropWrapper position={position} ref={drop}/>
};

export default BottleDrop;
