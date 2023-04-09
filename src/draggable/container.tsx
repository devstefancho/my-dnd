import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./board";
import useDraggableList from "./draggable.hook";

const DraggableList = () => {
  const { ready, dragItemsInBoards, setDragItemsInBoards } = useDraggableList();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <DragDropContext
        onDragEnd={(result) => {
          console.log(result);
          // setItems((prev) => {
          //   const newItems = [...prev];
          //   const [reorderedItem] = newItems.splice(result.source.index, 1);
          //   newItems.splice(result?.destination?.index!, 0, reorderedItem);
          //   return newItems;
          // });
        }}
      >
        {Object.keys(dragItemsInBoards).map((boardKey) => (
          <Board key={boardKey} boardKey={boardKey} />
        ))}
      </DragDropContext>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

export default DraggableList;
