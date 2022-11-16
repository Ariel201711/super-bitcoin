import { BitcoinService } from 'src/app/services/bitcoin.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  bitcoinPrices!: any // change that any! define bitcoinPrices model 

  ngOnInit(): void {
    this.getMarketPriceHistory()
  }

  async getMarketPriceHistory() {
    const { values } = await this.bitcoinService.getMarketPriceHistory()
    this.bitcoinPrices = values
    console.log('this.bitcoinPrices:', this.bitcoinPrices)
  }
  getPriceData() {
    return this.bitcoinPrices.map((value: any) => value.y) // change that any! define bitcoinPrices model
  }
  
  getPriceLabels() {
    return this.bitcoinPrices.map((value: any) => { // change that any! define bitcoinPrices model
      const newDate = new Date(value.x * 1000)
      const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
      return dateToDisplay
    })
  }


}
