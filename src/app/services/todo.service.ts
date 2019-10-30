import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [{
      id: 1,
      title: 'Feed Zeus',
      completed: false
    },
    {
      id: 2,
      title: 'Shovel Drive',
      completed: true
    },
    {
      id: 3,
      title: 'Feed myself',
      completed: false
    }]
  }
}
