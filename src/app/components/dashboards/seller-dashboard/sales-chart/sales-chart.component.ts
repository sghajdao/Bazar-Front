import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";
import { StoreResponse } from 'src/app/models/dtos/storeResponse';
import { Store } from 'src/app/models/entities/store';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.component.html',
  styleUrls: ['./sales-chart.component.css']
})
export class SalesChartComponent implements OnChanges {

  constructor() {}

  @Input() response?: StoreResponse
  @ViewChild("chart") chart?: ChartComponent;
  chartOptions?: Partial<ChartOptions>;

  incomes: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  ngOnChanges(changes: SimpleChanges): void {
    if (this.response) {
      if (this.response.store.sales)
        this.getData(this.response.store)
      this.setChart()
    }

  }

  getData(store: Store) {
    const year: number = new Date().getFullYear()
    for (let sale of store.sales!) {
      if (new Date(sale.sold?.soldAt!).getFullYear() === year) {
        switch (new Date(sale.sold?.soldAt!).getMonth()) {
          case 1:
            this.incomes[0] += sale.price
            break;
          case 2:
            this.incomes[1] += sale.price
            break;
          case 3:
            this.incomes[2] += sale.price
            break;
          case 4:
            this.incomes[3] += sale.price
            break;
          case 5:
            this.incomes[4] += sale.price
            break;
          case 6:
            this.incomes[5] += sale.price
            break;
          case 7:
            this.incomes[6] += sale.price
            break;
          case 8:
            this.incomes[7] += sale.price
            break;
          case 9:
            this.incomes[8] += sale.price
            break;
          case 10:
            this.incomes[9] += sale.price
            break;
          case 11:
            this.incomes[10] += sale.price
            break;
          case 12:
            this.incomes[11] += sale.price
            break;
          default:
            break;
        }
      }
    }
  }

  setChart() {
    this.chartOptions = {
      series: [
        {
          name: "Incomes",
          data: this.incomes
          // data: [200.3, 300.1, 400.0, 1000.1, 400.0, 300.6, 300.2, 200.3, 100.4, 100.8, 1000.5, 100.2]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "$";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          // stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "$";
          }
        }
      },
      title: {
        text: "Monthly Incomes",
        // floating: 0,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }
}
