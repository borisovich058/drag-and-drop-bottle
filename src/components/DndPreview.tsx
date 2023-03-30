import React, { memo, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type DndPreviewProps = { children: React.ReactNode; display: boolean };

const createDndElement = () => {
  const el = document.createElement("div");
  el.className = "dnd-item";
  return el;
};

const DndPreview: React.FC<DndPreviewProps> = ({
  children,
  display
}: DndPreviewProps) => {
  const el = useRef(createDndElement()).current;

  useEffect(() => {
    display ? document.body.appendChild(el) : document.body.removeChild(el);
  }, [display, el]);

  useEffect(() => {
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  if (!display) {
    return null;
  }

  return createPortal(children, el);
};

export default memo(DndPreview);
