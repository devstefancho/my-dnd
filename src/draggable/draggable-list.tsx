import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import useDraggableList from "./draggable-list.hook";

const StyledItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  color: #000;
  width: 200px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
`;

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
        <Droppable droppableId="droppable-0">
          {(provided) => (
            <StyledContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => (
                <Draggable
                  // adding a key is important!
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided) => (
                    <StyledItem
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {item.content}
                    </StyledItem>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </StyledContainer>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default DraggableList;
