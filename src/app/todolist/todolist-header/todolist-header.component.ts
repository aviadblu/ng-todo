import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todolist-header',
  templateUrl: './todolist-header.component.html'
})
export class TodolistHeaderComponent {

  @Input()
  public title: string;

  @Output()
  public itemAdded: EventEmitter<string> = new EventEmitter<string>();
}
