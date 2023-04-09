import { atom } from "recoil";

export interface DragItem {
  id: string;
  content: string;
}

export interface DragItems {
  [key: string]: DragItem[];
}

export const dragItemsInBoardsAtom = atom<DragItems>({
  key: "dragItemsInBoardsAtom",
  default: {
    TO_DO: [
      { id: "draggable-1", content: "1 task" },
      { id: "draggable-2", content: "2 task" },
    ],
    IN_PROGRESS: [
      { id: "draggable-3", content: "3 task" },
      { id: "draggable-4", content: "4 task" },
      { id: "draggable-5", content: "5 task" },
    ],
    DONE: [
      { id: "draggable-6", content: "6 task" },
      { id: "draggable-7", content: "7 task" },
    ],
  },
});
