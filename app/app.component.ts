import { Component, EventEmitter } from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <task-list
       [taskList]="tasks"
       (onTaskSelect)="taskWasSelected($event)">
     </task-list>
    <div>
  `
})
export class AppComponent {
  public tasks: Task[];
  constructor() {
    this.tasks = [
      new Task("Create To-Do List app", 0, "med"),
      new Task("Learn Kung Fu", 1, "high"),
      new Task("Rewatch all of Harmony Korine's films", 2, "high"),
      new Task("Do the Laundry", 3, "low")
    ];
  }
  taskWasSelected(clickedTask: Task):void {
    console.log("parent", clickedTask);
  }
}
