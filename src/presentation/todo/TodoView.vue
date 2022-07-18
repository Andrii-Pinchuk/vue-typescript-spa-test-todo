<template>
  <div class="todo-page">
    <div class="todo-page__background"></div>
    <img src="../../assets/images/logos/big_logo.svg"
         alt="Citi company logo" class="todo-page__logo">
    <section class="todo-list">
      <h1 class="todo-list__main-title">Thank you {{ authorizedUserName }}!</h1>
      <h2 class="todo-list__name">Todo list</h2>
      <div class="todo-list__add-todo">
        <input type="text" class="todo-list__add-todo-input" maxlength="40" v-model="newTodoName"
               :class="{'todo-list__add-todo-input_error': hasEmptyInput}"
               v-on:keyup.enter="addNewTodo" v-on:focus="endEditingSelectedTodo"
               v-on:keydown="clearInputError">
        <button v-on:click="addNewTodo" class="todo-list__add-todo-btn">
          <img src="../../assets/images/buttons_icons/add_new_todo.svg" alt="Add new todo">
        </button>
        <div class="todo-list__add-todo-error-information" v-show="hasEmptyInput">
          <img src="../../assets/images/errors/input_error.svg" alt="Input error">
          <span>Enter todo name</span>
        </div>
      </div>
      <div class="todo-list__todos">
        <div tabindex="0" class="todo-list__todo"
             v-for="todo in authorizedUserTodoList.todos" v-bind:key="todo.id"
             v-on:keyup.delete.self="deleteSelectedTodo(todo)">
          <div class="todo-list__todo-information">
            <button class="todo-list__change-todo-status"
              v-on:click="changeTodoStatus(todo)">
              <img src="../../assets/images/buttons_icons/todo_unfinished.svg" alt="Todo unfinished"
                   v-show="todo.status=== 'unfinished'">
              <img src="../../assets/images/buttons_icons/todo_finished.svg" alt="Todo finished"
                   v-show="todo.status=== 'finished'">
            </button>
            <p class="todo-list__todo-description"
                  v-if="selectedTodo === null || selectedTodo !== todo || !isEditingSelectedTodo"
                  v-on:dblclick="startEditingSelectedTodo(todo)">
            {{ todo.name }}
          </p>
            <input type="text" v-model="todo.name" ref="editInput" class="todo-list__edit-input"
                   maxlength="40" v-show="isEditingSelectedTodo && selectedTodo === todo"
                   v-on:focus="selectEditInputText" v-on:keyup.enter="endEditingSelectedTodo"
                   v-on:keyup.esc="endEditingSelectedTodo">
          </div>
          <div class="todo-list__todo-actions">
            <button class="todo-list__start-editing-todo"
              v-show="selectedTodo === null || selectedTodo !== todo || !isEditingSelectedTodo"
              v-on:click="startEditingSelectedTodo(todo)">
              <img src="../../assets/images/buttons_icons/start_editing_todo.svg"
                   alt="Start todo editing">
            </button>
            <button class="todo-list__finish-editing-todo"
                    v-show="isEditingSelectedTodo && selectedTodo === todo"
                    v-on:click="endEditingSelectedTodo">
              <img src="../../assets/images/buttons_icons/finish_editing_todo.svg"
                   alt="Finish todo editing">
            </button>
            <button class="todo-list__delete-todo" v-on:click="deleteSelectedTodo(todo)">
              <img src="../../assets/images/buttons_icons/delete_todo.svg" alt="Delete todo">
            </button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TodoListMock from "@/common/todoList/TodoListMock";
import { TodoListInterface } from "@/common/todoList/TodoListInterface";
import { TodoInterface } from "@/common/todoList/TodoInterface";
import Todo from "@/common/todoList/Todo";
import { Pages } from "@/router/Pages";

@Component
export default class TodoView extends Vue {
  private authorizedUserName = localStorage.getItem("userName");
  private allTodoLists = new TodoListMock();
  private authorizedUserTodoList: TodoListInterface | undefined;
  private newTodoName = "";
  private selectedTodo: TodoInterface | null = null;
  private isEditingSelectedTodo = false;
  private changingStatusTodo: TodoInterface | null = null;
  private hasEmptyInput = false;

  protected beforeMount() {
    this.checkAuthorization();
    this.findAuthorizedUserTodoList();
  }

  private checkAuthorization() {
    const isUserAuthorized = localStorage.getItem("isUserAuthorized");
    if (!isUserAuthorized) {
      this.$router.push({
        path: Pages.LOGIN
      });
    }
  }

  private findAuthorizedUserTodoList() {
    this.authorizedUserTodoList = this.allTodoLists.usersTodoLists.find(
      todoList => todoList.ownerName === this.authorizedUserName
    );
  }

  private addNewTodo() {
    if (this.newTodoName.length === 0) {
      this.hasEmptyInput = true;
    } else if (this.authorizedUserTodoList && this.newTodoName.length > 0) {
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

  private clearInputError() {
    this.hasEmptyInput = false;
  }

  private changeTodoStatus(todo: TodoInterface) {
    this.changingStatusTodo = todo;
    if (this.changingStatusTodo.status === "unfinished") {
      this.changingStatusTodo.status = "finished";
    } else {
      this.changingStatusTodo.status = "unfinished";
    }
  }
}
</script>
