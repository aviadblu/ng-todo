import {Component, OnInit} from '@angular/core';
import {TodolistService} from "./todolist.service";
import {Item} from "./item";

@Component({
  selector: 'app-todolist',
  template: `
      <section class="todoapp">
        <app-todolist-header [title]="title" (itemAdded)="listSvc.addItem($event)"></app-todolist-header>
        <app-todolist-main>
          <input class="toggle-all" type="checkbox">
          <app-todolist-list [items]="listSvc.items"></app-todolist-list>
        </app-todolist-main>
        <app-todolist-footer></app-todolist-footer>
      </section>
  `
})
export class TodolistComponent implements OnInit {
  public title: string;

  constructor(public listSvc: TodolistService) {
    this.title = 'todos';
  }

  ngOnInit() {
  }

}
