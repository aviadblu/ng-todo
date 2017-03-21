import {Component, Input} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-todolist-list',
  templateUrl: './todolist-list.component.html'
})
export class TodolistListComponent {
  @Input() items: Item[];
}
