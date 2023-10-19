import React, { useRef } from "react";
import { ToDoAction } from "./types";
const ToDoInput = ({ toDoHandler }: IProps) => {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          toDoHandler(inputRef?.current?.value, ToDoAction.ADD);
          inputRef.current.value = "";
        }}
      >
        Add ToDo
      </button>
    </div>
  );
};

export default ToDoInput;

interface IProps {
  toDoHandler: (data: string | number, action: ToDoAction) => void;
}
