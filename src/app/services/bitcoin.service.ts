import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, throwError, map, of, lastValueFrom } from 'rxjs'
import { catchError, retry } from 'rxjs/operators'
import { storageService } from './storage.service'
import { BitcoinRate } from '../models/bitcoin-rate.model'

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    constructor(private http: HttpClient) { }

    async getRate(currency: string = 'USD'):Promise<BitcoinRate> {
        const exchangeRates = await this.getExchangeRates()
        return exchangeRates[currency]
    }

    async getExchangeRates() {
        let exchangeRates = storageService.loadFromStorage('EXCHANGE_RATES')
        if (!exchangeRates) {
            exchangeRates = await lastValueFrom(this.http.get('https://blockchain.info/ticker'))
            storageService.saveToStorage('EXCHANGE_RATES', exchangeRates)
        }
        return exchangeRates
    }

    async getCurrencyOptions():Promise<string[]> {
        const exchangeRates = await this.getExchangeRates()
        const options = []
        for (let currency in exchangeRates) {
            options.push(currency)
        }
        return options
    }

    async getMarketPriceHistory() {
        let marketPriceHistory = storageService.loadFromStorage('MARKET_PRICE_DATA')
        if (!marketPriceHistory) {
            marketPriceHistory = lastValueFrom(this.http.get('https://api.blockchain.info/charts/market-price?cors=true'))
            // marketPriceHistory = marketPriceHistory.data
            storageService.saveToStorage('MARKET_PRICE_DATA', marketPriceHistory)
        }
        return marketPriceHistory
    }

    async getAvgBlockSize() {
        let avgBlockSize = storageService.loadFromStorage('AVG_BLOCK_SIZE')
        if (!avgBlockSize) {
            avgBlockSize = await lastValueFrom(this.http.get(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`))
            storageService.saveToStorage('AVG_BLOCK_SIZE', avgBlockSize)
        }
        return avgBlockSize
    }
    
    // async getConfirmedTransactions() {
    //     let confirmedTransactions = storageService.loadFromStorage('CONFIRMED_TRANSACTIONS')
    //     if (!confirmedTransactions) {
    //         const res = await lastValueFrom(this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`))

    //         console.log('res', res) // check this res!!!
    //         // confirmedTransactions = res.map((value: { x: number; y: any }) => {
    //         //     const newDate = new Date(value.x * 1000)
    //         //     const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate)
    //         //     return [dateToDisplay, value.y]
    //         // })

    //         storageService.saveToStorage('CONFIRMED_TRANSACTIONS', confirmedTransactions)
    //     }
    //     return confirmedTransactions
    // }
}
