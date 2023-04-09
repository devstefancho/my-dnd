import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { DraggableItem } from "./draggable-list.hook";
import DraggableCard from "./draggable-card";

const Board = ({ items }: { items: DraggableItem[] }) => {
  return (
    <Droppable droppableId="droppable-0">
      {(provided) => (
        <StyledContainer {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((item, index) => (
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
  height: 100%;
  background-color: #f5f5f5;
  padding: 20px;
`;

export default Board;
