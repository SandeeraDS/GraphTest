import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {
@Input() dataObject;
  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log(this.dataObject["xAxes"]);
  }
  

}
