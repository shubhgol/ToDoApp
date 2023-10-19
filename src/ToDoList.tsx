import React from "react";
import { IToDo, ToDoAction } from "./types";
import ToDoItem from "./ToDoItem";

const ToDoList: React.FC<IProps> = ({ toDoItems, toDoHandler }) => {
  if (!toDoItems?.length) return null;

  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      {toDoItems.map((item: IToDo) => {
        return (
          <tr key={item.id}>
            <ToDoItem item={item} toDoHandler={toDoHandler} />
          </tr>
        );
      })}
    </table>
  );
};

export default ToDoList;

interface IProps {
  toDoItems: IToDo[];
  toDoHandler: (data: any, action: ToDoAction) => void;
}
