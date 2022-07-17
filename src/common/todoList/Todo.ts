import { TodoInterface } from "@/common/todoList/TodoInterface";
import { TodoStatus } from "@/common/todoList/TodoStatus";

export default class Todo implements TodoInterface {
  public id: string;
  public name: string;
  public status: TodoStatus;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.status = "unfinished";
  }
}
