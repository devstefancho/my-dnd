import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import useDraggableList, { DraggableItem } from "./draggable-list.hook";
import Board from "./board";

const DraggableList = () => {
  const { ready, items, setItems } = useDraggableList();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DragDropContext
        onDragEnd={(result) => {
          setItems((prev) => {
            const newItems = [...prev];
            const [reorderedItem] = newItems.splice(result.source.index, 1);
            newItems.splice(result?.destination?.index!, 0, reorderedItem);
            return newItems;
          });
        }}
      >
        <Board items={items} />
      </DragDropContext>
    </div>
  );
};

export default DraggableList;
