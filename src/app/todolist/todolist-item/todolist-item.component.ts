import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Item} from "../item";

@Component({
  selector: 'app-todolist-item',
  templateUrl: './todolist-item.component.html'
})
export class TodolistItemComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }

}
