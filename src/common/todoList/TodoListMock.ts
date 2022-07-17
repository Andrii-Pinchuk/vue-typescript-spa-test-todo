import TodoList from "@/common/todoList/TodoList";
import Todo from "@/common/todoList/Todo";

export default class TodoListMock {
  public usersTodoLists: TodoList[] = [
    new TodoList(
      "Admin",
      [
        new Todo("admin1", "Pass the test"),
        new Todo("admin2", "Go shopping at the supermarket"),
        new Todo("admin3", "Find new offer"),
        new Todo("admin4", "Go to the gym 3 times a week")
      ]
    ),
    new TodoList(
      "Victoria",
      [
        new Todo("Victoria1", "Find new job"),
        new Todo("Victoria2", "Go shopping"),
        new Todo("Victoria3", "Go to the gym 2 times a week")
      ]
    )
  ];
}
