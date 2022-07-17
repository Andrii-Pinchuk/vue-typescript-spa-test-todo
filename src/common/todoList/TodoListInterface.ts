import { TodoInterface } from "@/common/todoList/TodoInterface";

export interface TodoListInterface {
  ownerName: string;
  todos: TodoInterface[]
}
