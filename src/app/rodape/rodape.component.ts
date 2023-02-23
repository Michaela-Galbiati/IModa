import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  showo: boolean = false;
  showi: boolean = false;
  showp: boolean = false;
  showv: boolean = false;





  constructor() { }

  ngOnInit(): void {
  }

  showMsgo(): void {
    this.showo = !this.showo;
  }
  showMsgv(): void {
    this.showv = !this.showv;
  }
  showMsgi(): void {
    this.showi = !this.showi;
  }
  showMsgp(): void {
    this.showp = !this.showp;
  }
}
