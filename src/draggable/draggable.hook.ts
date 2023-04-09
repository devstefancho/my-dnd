import { dragItemsInBoardsAtom } from "@/recoil/draggable.atom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const useDraggableList = () => {
  const [ready, setReady] = useState(false);
  const [dragItemsInBoards, setDragItemsInBoards] = useRecoilState(
    dragItemsInBoardsAtom
  );

  useEffect(() => {
    /**
     * nextjs 서버사이드 때문에 예외 처리가 필요함
     * @link https://github.com/atlassian/react-beautiful-dnd/issues/1756#issuecomment-735369084
     */
    setReady(true);
  }, []);

  return {
    ready,
    dragItemsInBoards,
    setDragItemsInBoards,
  };
};

export default useDraggableList;
