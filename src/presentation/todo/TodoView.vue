<template>
  <div>
    <h3>Thank you {{ authorizedUserName }}!</h3>
    <p>Todo list</p>
    <input type="text" v-model="newTodoName" v-on:keyup.enter="addNewTodo"
           v-on:focus="endEditingSelectedTodo">
    <button v-on:click="addNewTodo">
      <img src="../../assets/images/add_new_todo.svg" alt="Add new todo">
    </button>
    <div class="todo-list">
      <div tabindex="0" class="todo-list__todo"
           v-for="todo in authorizedUserTodoList.todos" v-bind:key="todo.id"
           v-on:keyup.delete.self="deleteSelectedTodo(todo)">
        <div style="position: relative;">
          <button v-show="selectedTodo === null || selectedTodo !== todo || !isEditingSelectedTodo"
                  v-on:click="changeTodoStatus(todo)">
            <img src="../../assets/images/todo_unfinished.svg" alt="Todo unfinished"
                 v-show="todo.status=== 'unfinished'">
            <img src="../../assets/images/todo_finished.svg" alt="Todo finished"
                 v-show="todo.status=== 'finished'">
          </button>
          <span v-if="selectedTodo === null || selectedTodo !== todo || !isEditingSelectedTodo"
                v-on:dblclick="startEditingSelectedTodo(todo)">
          {{ todo.name }}
        </span>
          <input type="text" v-model="todo.name" ref="editInput"
                 v-show="isEditingSelectedTodo && selectedTodo === todo"
                 v-on:focus="selectEditInputText" v-on:keyup.enter="endEditingSelectedTodo"
                 v-on:keyup.esc="endEditingSelectedTodo">

          <button v-show="selectedTodo === null || selectedTodo !== todo || !isEditingSelectedTodo"
                  v-on:click="startEditingSelectedTodo(todo)">
            <img src="../../assets/images/start_editing_todo.svg" alt="Start todo editing">
          </button>
          <button v-show="isEditingSelectedTodo && selectedTodo === todo"
                  v-on:click="endEditingSelectedTodo">
            <img src="../../assets/images/finish_editing_todo.svg" alt="Finish todo editing">
          </button>
          <button v-on:click="deleteSelectedTodo(todo)">
            <img src="../../assets/images/delete_todo.svg" alt="Delete todo">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TodoListMock from "@/common/todoList/TodoListMock";
import { TodoListInterface } from "@/common/todoList/TodoListInterface";
import { TodoInterface } from "@/common/todoList/TodoInterface";
import Todo from "@/common/todoList/Todo";

@Component
export default class TodoView extends Vue {
  private authorizedUserName = localStorage.getItem("userName");
  private allTodoLists = new TodoListMock();
  private authorizedUserTodoList: TodoListInterface | undefined;
  private newTodoName = "";
  private selectedTodo: TodoInterface | null = null;
  private isEditingSelectedTodo = false;

  protected beforeMount() {
    this.findAuthorizedUserTodoList();
  }

  private findAuthorizedUserTodoList() {
    this.authorizedUserTodoList = this.allTodoLists.usersTodoLists.find(
      todoList => todoList.ownerName === this.authorizedUserName
    );
  }

  private addNewTodo() {
    if (this.authorizedUserTodoList && this.newTodoName.length > 0) {
      let newTodoId = `${this.authorizedUserName}${this.authorizedUserTodoList.todos.length + 1}`;
      if (this.authorizedUserTodoList.todos.find(todos => todos.id === newTodoId)) {
        newTodoId += 1;
      }

      const newTodo = new Todo(newTodoId, this.newTodoName);
      this.authorizedUserTodoList.todos.push(newTodo);
    }
  }

  private deleteSelectedTodo(todo: TodoInterface) {
    if (this.authorizedUserTodoList) {
      const indexOfSelectedTodo = this.authorizedUserTodoList.todos.indexOf(todo);
      if (indexOfSelectedTodo !== -1) {
        this.authorizedUserTodoList.todos.splice(indexOfSelectedTodo, 1);
      }
    }
  }

  private startEditingSelectedTodo(todo: TodoInterface) {
    this.selectedTodo = todo;
    this.isEditingSelectedTodo = true;
  }

  @Watch("selectedTodo")
  private selectEditInputText() {
    if (this.isEditingSelectedTodo) {
      const allEditInputs: HTMLInputElement[] = this.$refs.editInput as HTMLInputElement[];
      const selectedEditInput: HTMLInputElement | undefined = allEditInputs.find(
        input => this.selectedTodo && input.value === this.selectedTodo.name
      );
      if (selectedEditInput) {
        selectedEditInput.style.display = "initial";
        selectedEditInput.select();
      }
    }
  }

  private endEditingSelectedTodo() {
    this.selectedTodo = null;
    this.isEditingSelectedTodo = false;
  }

  private changeTodoStatus(todo: TodoInterface) {
    this.selectedTodo = todo;
    if (this.selectedTodo.status === "unfinished") {
      this.selectedTodo.status = "finished";
    } else {
      this.selectedTodo.status = "unfinished";
    }
  }
}
</script>
