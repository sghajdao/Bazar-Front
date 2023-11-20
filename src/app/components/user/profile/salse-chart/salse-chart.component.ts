import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-salse-chart',
  templateUrl: './salse-chart.component.html',
  styleUrls: ['./salse-chart.component.css']
})
export class SalseChartComponent {
  constructor() {}

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  salesData = [100, 150, 200, 180, 220, 250, 210, 280, 300, 260, 220, 240];

  chart = new Chart( {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Sales by Month'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.months
    },
    yAxis: {
      title: {
        text: 'Sales'
      }
    },
    series: [{
      name: 'Monthly Sales',
      data: this.salesData,
      type: 'column'
    }]
  });
}
