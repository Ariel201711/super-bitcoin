import { Component, OnInit, ViewChild, Input } from '@angular/core'
import { Chart as ChartJS, ChartConfiguration, ChartEvent, ChartType } from 'chart.js'
import { BaseChartDirective } from 'ng2-charts'

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input()
  data!: any // change that any later!!!!

  @Input()
  labels!: any // change that any later!!!!

  lineChartData!: any // change that any later!!!! 

  constructor() {

  }

  ngOnInit(): void {
    console.log('this.data:', this.data)
    console.log('this.labels:', this.labels)
    this.lineChartData = this.getLineChartData()
  }

  public getLineChartData(): ChartConfiguration['data'] {
    return {
      datasets: [
        {
          data: this.data,
          label: '1 Bitcoin in USD',
          backgroundColor: 'rgba(148,159,177,0.2)',
          borderColor: 'rgba(148,159,177,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          fill: 'origin',
        },
      ],
      labels: this.labels
    }
  }

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
      {
        position: 'left',
      },
      'y-axis-1': {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red'
        }
      }
    },
  }

  public lineChartType: ChartType = 'line'

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective

}
