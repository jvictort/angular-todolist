import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos: Todo[] = [
    // {
    //   content: 'aaaaaaaaaaaaaaaaaaaa',
    //   isCompleted: false,
    // },
    // {
    //   content: 'aaaaaaaaaaaaaaaaaaaa',
    //   isCompleted: true,
    // },
    // {
    //   content: 'aaaaaaaaaaaaaaaaaaaa',
    //   isCompleted: false,
    // },
    // {
    //   content: 'aaaaaaaaaaaaaaaaaaaa',
    //   isCompleted: false,
    // },
    // {
    //   content: 'aaaaaaaaaaaaaaaaaaaa',
    //   isCompleted: false,
    // },
    // {
    //   content: 'aaaaaaaaaaaaaaaaaaaa',
    //   isCompleted: true,
    // }
  ];

  todoInput!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  onSubmit() {
    if(this.todoInput.length >= 1 && this.todoInput.length <= 20) {
      this.todos.push({
        content: this.todoInput,
        isCompleted: false
      });
      this.todoInput = '';
    } else {
      this.todoInput = '';
      alert('Toda tarefa precisa de uma descrição entre 1 e 20 caracteres');
    }
  }

}
