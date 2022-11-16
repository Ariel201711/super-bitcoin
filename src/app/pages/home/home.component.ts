import { Component, OnInit } from '@angular/core'
import { BitcoinRate } from 'src/app/models/bitcoin-rate.model'
import { BitcoinService } from 'src/app/services/bitcoin.service'


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  bitcoinRate!: BitcoinRate
  currency: string = 'USD'
  currencyOptions: string[] = []

  ngOnInit(): void {
    this.getCurrExchangeRate()
    this.getCurrencyOptions()
  }

  async getCurrExchangeRate() {
    this.bitcoinRate = await this.bitcoinService.getRate(this.currency)
  }

  async getCurrencyOptions() {
    this.currencyOptions = await this.bitcoinService.getCurrencyOptions()
}

  getCurrRate() {
    return `BTC/${this.bitcoinRate.symbol} ${this.bitcoinRate.last}`
  }
}
