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

    async getExchangeRates<T>() {
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


}
/*
    TODO: Implement this code in TS and use storage module:
    import { storageService } from './storage.service'

    export const bitcoinService = {
        getMarketPriceHistory,
        getAvgBlockSize,
        getExchangeRates,
        getCurrencyOptions
    }

    async function getMarketPriceHistory() {
        let marketPriceHistory = storageService.load('MARKET_PRICE_DATA')
        if (!marketPriceHistory) {
            marketPriceHistory = await axios.get('https://api.blockchain.info/charts/market-price?cors=true')
            marketPriceHistory = marketPriceHistory.data
            storageService.save('MARKET_PRICE_DATA', marketPriceHistory)
        }
        return marketPriceHistory
    }

   async getAvgBlockSize() {
        const str = `https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`
        const avgBlockSize = await axios.get(str)
    }

*/
