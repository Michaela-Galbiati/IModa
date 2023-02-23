import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-infantil',
  templateUrl: './infantil.component.html',
  styleUrls: ['./infantil.component.css']
})
export class InfantilComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  show: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  showMsg(): void {
    this.show = !this.show;
  }
}
