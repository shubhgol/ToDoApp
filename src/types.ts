export interface IToDo {
  title: string;
  status: ToDOStatus;
  id: number;
}

export enum ToDoAction {
  ADD = "add",
  DELETE = "delete",
  UPDATE = "update"
}

export enum ToDOStatus {
  OPEN = "Open",
  INPROGRESS = "InProgress",
  COMPLETED = "Completed"
}
