import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "";
  @Input()
  cardDescription:string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, laboriosam.";
  @Input()
  cardTitle:string = "New angular update!";
  @Input()
  Id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
