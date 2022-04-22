import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // INPUTS
  @Input('title') title!: string;
  @Input('body') body!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
