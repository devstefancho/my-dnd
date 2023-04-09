import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { DragItems } from "@/recoil/draggable.atom";
import DraggableCard from "./draggable-card";
import useDraggableList from "./draggable.hook";

const Board = ({ boardKey }: { boardKey: keyof DragItems }) => {
  const { dragItemsInBoards } = useDraggableList();

  return (
    <BoardContainer>
      <h1>{boardKey}</h1>
      <Droppable droppableId={String(boardKey)}>
        {(provided) => (
          <CardContainer {...provided.droppableProps} ref={provided.innerRef}>
            {dragItemsInBoards[boardKey].map((item, index) => (
              <DraggableCard item={item} index={index} />
            ))}
            {provided.placeholder}
          </CardContainer>
        )}
      </Droppable>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  background-color: #ccc;
  padding: 10px;
  border-radius: 5px;

  h1 {
    background-color: #ccc;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    padding: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding: 20px;
  min-height: 300px;
  min-width: 250px;
`;

export default Board;
