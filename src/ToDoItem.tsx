import React, { useRef, useState, useEffect } from "react";
import { IToDo, ToDoAction } from "./types";

const ToDoItem: React.FC<IProps> = ({ item, toDoHandler }) => {
  const [editValue, setEditValue] = useState(item?.title);
  const [hasEdit, setHasEdit] = useState(false);
  const { title, status, id } = item;

  return (
    <>
      <td>
        {hasEdit ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
          />
        ) : (
          title
        )}
      </td>
      <td>{status}</td>
      <td>
        {hasEdit ? (
          <button
            onClick={() => {
              setHasEdit(false);
              toDoHandler(
                {
                  id,
                  title: editValue
                },
                ToDoAction.UPDATE
              );
            }}
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => {
              setHasEdit(true);
            }}
          >
            Edit
          </button>
        )}
        <button>Delete</button>
      </td>
    </>
  );
};

export default ToDoItem;

interface IProps {
  item: IToDo;
  toDoHandler: (data: any, action: ToDoAction) => void;
}
