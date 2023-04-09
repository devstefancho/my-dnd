import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { DragItems } from "@/recoil/draggable.atom";
import DraggableCard from "./draggable-card";
import useDraggableList from "./draggable.hook";

const Board = ({ boardKey }: { boardKey: keyof DragItems }) => {
  const { dragItemsInBoards } = useDraggableList();

  return (
    <Droppable droppableId={String(boardKey)}>
      {(provided) => (
        <StyledContainer {...provided.droppableProps} ref={provided.innerRef}>
          {dragItemsInBoards[boardKey].map((item, index) => (
            <DraggableCard item={item} index={index} />
          ))}
          {provided.placeholder}
        </StyledContainer>
      )}
    </Droppable>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

export default Board;
