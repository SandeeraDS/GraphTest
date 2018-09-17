import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  //
  public lineChartData: Array<any> = [
    { data: [50, 40, 30, 20, 10, 0], label: 'Ideal Line' },
    // {data: [3,6,9,12], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['Sep 11', 'Sep 12', 'Sep 13', 'Sep 14', 'Sep 15', 'Sep 16'];
  public lineChartOptions: any = {
    responsive: true,
    title: {
      display: true,
      text: 'Embla Burndown Chart'
    },
    legend: {
      display: true,
      position:'right',
      labels: {
        fontColor: 'black',
        fontSize: 14

      }
    },

    scales: {
      yAxes: [{

        scaleLabel: {
          display: true,
          labelString: 'Remaining Time',
          fontSize: 14
        }

      }],
      xAxes: [{

        scaleLabel: {
          display: true,
          labelString: 'Days',
          fontSize: 14
        }

      }]
    }



  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }//,
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // public randomize():void {
  //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }

  // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

}
