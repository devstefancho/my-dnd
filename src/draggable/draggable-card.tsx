import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { DraggableItem } from "./draggable-list.hook";
import styled from "styled-components";

const DraggableCard = ({
  item,
  index,
}: {
  item: DraggableItem;
  index: number;
}) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
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
  );
};
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

export default React.memo(DraggableCard);
