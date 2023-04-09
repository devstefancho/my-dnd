import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import Board from "./board";
import useDraggableList from "./draggable.hook";

const DraggableList = () => {
  const { ready, dragItemsInBoards, setDragItemsInBoards } = useDraggableList();

  if (!ready) {
    return <div>Loading...</div>;
  }

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    // Board Id가 같은 경우
    if (destination.droppableId === source.droppableId) {
      const items = [...dragItemsInBoards[source.droppableId]];
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);
      setDragItemsInBoards((prev) => ({
        ...prev,
        [source.droppableId]: items,
      }));
    }

    // Board Id가 다른 경우
    if (destination.droppableId !== source.droppableId) {
      const items = [...dragItemsInBoards[source.droppableId]];
      const [reorderedItem] = items.splice(source.index, 1);
      const destinationItems = [...dragItemsInBoards[destination.droppableId]];
      destinationItems.splice(destination.index, 0, reorderedItem);
      setDragItemsInBoards((prev) => ({
        ...prev,
        [source.droppableId]: items,
        [destination.droppableId]: destinationItems,
      }));
    }
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
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
