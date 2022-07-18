import { TodoListInterface } from "@/common/todoList/TodoListInterface";
import { TodoInterface } from "@/common/todoList/TodoInterface";

export default class TodoList implements TodoListInterface {
  public ownerName: string;
  public todos: TodoInterface[];

  constructor(ownerName: string, todos: TodoInterface[]) {
    this.ownerName = ownerName;
    this.todos = todos;
  }
}
