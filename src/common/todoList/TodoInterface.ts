import { TodoStatus } from "@/common/todoList/TodoStatus";

export interface TodoInterface {
  id: string;
  name: string;
  status: TodoStatus;
}
