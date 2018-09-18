import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  // xAxes: string []
  // yAxes: string []
 /// yAxes:[]
  newObject={xAxes:[],yAxes:[]}
  statusArea:string='default';
 
  constructor() { }

  ngOnInit() {
  }


  get1(){
     var xxx=['www','xxx','cccc'];
     var nnn=[1,2,3,4,5];
    
  //  for(var i=0;i<xxx.length;i++){
  //    this.xAxes[i]=xxx[i];
  //  }
  this.newObject.xAxes=xxx;
  this.newObject.yAxes=nnn;
     console.log(this.newObject.xAxes);
     console.log(this.newObject.yAxes);
     this.statusArea='first';
  }
  get2(){
    var xxx=['222','2222','222222'];
    var nnn=[1,2,3,4,5];
   
 //  for(var i=0;i<xxx.length;i++){
 //    this.xAxes[i]=xxx[i];
 //  }
 this.newObject.xAxes=xxx;
 this.newObject.yAxes=nnn;
    console.log(this.newObject.xAxes);
    console.log(this.newObject.yAxes);
    this.statusArea='second';
  }
  get3(){
    var xxx=['33','333','33333'];
    var nnn=[1,2,3,4,5];
   
 //  for(var i=0;i<xxx.length;i++){
 //    this.xAxes[i]=xxx[i];
 //  }
 this.newObject.xAxes=xxx;
 this.newObject.yAxes=nnn;
    console.log(this.newObject.xAxes);
    console.log(this.newObject.yAxes);
    this.statusArea='third';
  }

}
