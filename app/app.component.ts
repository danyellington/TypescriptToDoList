import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To Do List for {{month}}-{{day}}-{{year}}</h1>
    <h2>{{currentFocus}}</h2>
    <ul>
      <li *ngFor="let currentTask of tasks">{{currentTask.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Already doing my Angular weekend homework on Thursday like a boss!';
  now = new Date();
  month: number = this.now.getMonth() + 1;
  day: number = this.now.getDate();
  year: number = this.now.getFullYear();
  luckyNumber: number = Math.floor(this.now.getTime() * Math.random() / 420);
  tasks: Task[] = [new Task("Go to ReactNative meeting", "Meet new people, learn more about ReactNative", 3), new Task("Poop my pants", "It's fun", 4), new Task("I am Tosk", "I am Tosk", 9)];
}

export class Task {
  public done: boolean = false;
  constructor(public name: string, public description: string, public priority: number) { }
}
