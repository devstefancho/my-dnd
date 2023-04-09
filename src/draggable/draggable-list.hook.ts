import { useEffect, useState } from "react";

const defaultItems = [
  { id: "draggable-1", content: "1 task" },
  { id: "draggable-2", content: "2 task" },
  { id: "draggable-3", content: "3 task" },
  { id: "draggable-4", content: "4 task" },
  { id: "draggable-5", content: "5 task" },
];

export type DraggableItem = {
  id: string;
  content: string;
};

const useDraggableList = () => {
  const [ready, setReady] = useState(false);
  const [items, setItems] = useState(defaultItems);

  useEffect(() => {
    /**
     * nextjs 서버사이드 때문에 예외 처리가 필요함
     * @link https://github.com/atlassian/react-beautiful-dnd/issues/1756#issuecomment-735369084
     */
    setReady(true);
  }, []);

  return {
    ready,
    items,
    setItems,
  };
};

export default useDraggableList;
