import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo
  constructor() { }

  ngOnInit() {
  }

  //Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes
  }

  //onToggle method
  onToggle(todo) {
    todo.completed = !todo.completed
  }

  onDelete(todo) {

  }
}
