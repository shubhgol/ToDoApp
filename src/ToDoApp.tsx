import React, { useState } from "react";
import { IToDo, ToDoAction, ToDOStatus } from "./types";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState<IToDo[]>([]);

  const toDoHandler = (data: any, action: ToDoAction) => {
    switch (action) {
      case ToDoAction.ADD:
        setTodoList((prev) => {
          const newToDoList = [...prev];
          const newToDoObj: IToDo = {
            title: data,
            status: ToDOStatus.OPEN,
            id: Math.floor(Math.random() * 100)
          };

          newToDoList.push(newToDoObj);

          return newToDoList;
        });
      case ToDoAction.UPDATE:
        setTodoList((prev) => {
          const newTodoList = [];
          for (let item of prev) {
            if (item.id === data.id) {
              newTodoList.push(Object.assign({}, item, data));
            } else {
              newTodoList.push(item);
            }
          }
          return newTodoList;
        });
      case ToDoAction.DELETE:
    }
  };

  return (
    <div className="todoApp">
      <h2>ToDo Application!</h2>
      <ToDoInput toDoHandler={toDoHandler} />
      <ToDoList toDoItems={todoList} toDoHandler={toDoHandler} />
    </div>
  );
};

export default ToDoApp;
