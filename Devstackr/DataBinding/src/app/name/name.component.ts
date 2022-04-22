import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  // Event binding custom components

  @Output() nameSubmit: EventEmitter<string> = new EventEmitter<string>();

  onClick(name: string) {
    this.nameSubmit.emit(name)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
